import React from 'react';
import * as R from 'ramda';
import { Target } from 'types/animation';
import { createRefMap } from './utils/ref';

type TransitionProps = {
  children: React.ReactNode;
  in: boolean;
  start: Animation;
  exit: Animation;
  onMounted?: () => void;
  onUnmounted?: () => void;
};

type TransitionState = {
  status: Status;
};

type Animation = (
  (node: Target) => Promise<void>
);

type Status = (
  'mounting' |
  'mounted' |
  'unmounting' |
  'unmounted'
);

class Transition extends React.Component<TransitionProps, TransitionState> {
  refMap = createRefMap();
  state = { status: (this.props.in ? 'mounting' : 'unmounted') as Status };

  // really?
  static getDerivedStateFromProps(props: TransitionProps, { status }: TransitionState) {
    return R.cond([
      [R.equals('mounting'), R.always({ status: props.in ? 'mounting' : 'unmounting' }) ],
      [R.equals('mounted'), R.always({ status: props.in ? 'mounted' : 'unmounting' }) ],
      [R.equals('unmounting'), R.always({ status: props.in ? 'mounting' : 'unmounting' }) ],
      [R.equals('unmounted'), R.always({ status: props.in ? 'mounting' : 'unmounted' }) ],
    ])(status);
  }

  componentDidMount() {
    this.onUpdateStatus();
  }

  componentDidUpdate(_: TransitionProps, prevState: TransitionState) {
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
    await this.animate(this.props.start);
    this.onMounted();
  }

  exit = async () => {
    await this.animate(this.props.exit);
    this.onUnmounted();
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
      this.state.status === 'unmounted'
        ? null
        : this.renderChildren()
    );
  }
}

export default Transition;
