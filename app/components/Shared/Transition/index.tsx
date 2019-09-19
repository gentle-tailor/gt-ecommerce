import React from 'react';

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
  (node: any) => Promise<null>
);

type Status = (
  'mounting' | 'mounted' | 'unmounting' | 'unmounted'
);

class Transition extends React.Component<TransitionProps, TransitionState> {
  ref = React.createRef<any>();
  state = {
    status: (
      this.props.in
        ? 'mounting'
        : 'unmounted'
    ) as Status,
  };

  static getDerivedStateFromProps(props: TransitionProps) {
    return {
      status: (
        props.in
          ? 'mounting'
          : 'unmounting'
      ) as Status,
    };
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
      this.ref.current
        ? animation(this.ref.current.node)
        : Promise.resolve(null)
    );
  }

  renderChild() {
    return React.cloneElement(
      React.Children.only(
        this.props.children
      ) as any,
      { ref: this.ref }
    );
  }

  render() {
    return (
      this.state.status === 'unmounted'
        ? null
        : this.renderChild()
    );
  }
}

export default Transition;
