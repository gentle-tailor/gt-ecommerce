import React from 'react';
import * as R from 'ramda';
import { Target, TransitionStatus } from 'types/animation';
import { createRefMap } from 'utils/ref';

export type TransitionPseudoProps = {
  children: React.ReactNode;
  status: TransitionStatus;
  setup: Setup;
  start: Animation;
  exit: Animation;
  onMounted?: () => void;
  onUnmounted?: () => void;
};

type Animation = (
  (node: Target) => Promise<void>
);

type Setup = (
  (node: Target) => void
);

class TransitionPseudo extends React.Component<TransitionPseudoProps> {
  refMap = createRefMap();

  componentDidMount() {
    this.onUpdateStatus();
  }

  componentDidUpdate(prevProps: TransitionPseudoProps) {
    const { status: prevStatus } = prevProps;
    const { status: currStatus } = this.props;

    if (currStatus !== prevStatus) {
      this.onUpdateStatus();
    }
  }

  onUpdateStatus = async () => {
    if (this.props.status === 'mounting') {
      await this.start();
    }

    if (this.props.status === 'unmounting') {
      await this.exit();
    }

    if (this.props.status === 'unmounted') {
      this.setup();
    }
  }

  onMounted = () => {
    const { onMounted = R.always(null) } = this.props;

    onMounted();
  }

  onUnmounted = () => {
    const { onUnmounted = R.always(null) } = this.props;

    onUnmounted();
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
