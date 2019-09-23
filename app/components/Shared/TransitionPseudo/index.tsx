import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import { createRefMap } from 'utils/ref';

type TransitionPseudoProps = {
  children: React.ReactNode;
  in: boolean;
  setup: Setup;
  start: Animation;
  exit: Animation;
  onMounted?: () => void;
  onUnmounted?: () => void;
};

type TransitionPseudoState = {
  status: Status;
};

type Animation = (
  (node: Target) => Promise<void>
);

type Setup = (
  (node: Target) => void
);

type Status = (
  'mounting' |
  'mounted' |
  'unmounting' |
  'unmounted'
);

class TransitionPseudo extends React.Component<TransitionPseudoProps, TransitionPseudoState> {
  refMap = createRefMap();
  state = { status: (this.props.in ? 'mounting' : 'unmounted') as Status };

  // really?
  static getDerivedStateFromProps(props: TransitionPseudoProps, { status }: TransitionPseudoState) {
    return R.cond([
      [R.equals('mounting'), R.always({ status: props.in ? 'mounting' : 'unmounting' }) ],
      [R.equals('mounted'), R.always({ status: props.in ? 'mounted' : 'unmounting' }) ],
      [R.equals('unmounting'), R.always({ status: props.in ? 'mounting' : 'unmounting' }) ],
      [R.equals('unmounted'), R.always({ status: props.in ? 'mounting' : 'unmounted' }) ],
    ])(status);
  }

  componentDidMount() {
    if (this.props.in) {
      this.onUpdateStatus();
    } else {
      this.setup();
    }
  }

  componentDidUpdate(_: TransitionPseudoProps, prevState: TransitionPseudoState) {
    const { status: prevStatus } = prevState;
    const { status: currStatus } = this.state;

    if (currStatus !== prevStatus) {
      this.onUpdateStatus();
    }
  }

  updateState(status: Status, cb?: () => void) {
    if (status !== this.state.status) {
      this.setState(
        () => ({ status }),
        cb
      );
    }
  }

  onUpdateStatus = async () => {
    if (this.state.status === 'mounting') {
      await this.start();
    }

    if (this.state.status === 'unmounting') {
      await this.exit();
    }
  }

  onMounted = () => {
    this.updateState(
      'mounted',
      this.props.onMounted
    );
  }

  onUnmounted = () => {
    this.updateState(
      'unmounted',
      this.props.onUnmounted
    );
  }

  start = async () => {
    this.setup();
    await this.animate(this.props.start);
    this.onMounted();
  }

  exit = async () => {
    await this.animate(this.props.exit);
    this.onUnmounted();
  }

  setup() {
    return (
      this.refMap.length()
        ? this.props.setup(this.refMap.flatten())
        : undefined
    );
  }

  animate(animation: Animation) {
    return (
      this.refMap.length()
        ? animation(this.refMap.flatten())
        : Promise.resolve(null)
    );
  }

  renderChildren() {
    return React.Children.map(
      this.props.children,
      (child, id) => (
        React.isValidElement(child)
          ? React.cloneElement(child, { ref: this.refMap.get(id) })
          : child
      )
    );
  }

  render() {
    return (
      this.renderChildren()
    );
  }
}

export default TransitionPseudo;
