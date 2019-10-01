import React from 'react';
import * as R from 'ramda';
import * as frames from './utils/frames';

type ProgressProps = {
  children: (value: ProgressRenderProps) => React.ReactNode;
  duration: number;
};

type ProgressRenderProps = (
  ProgressState &
  {
    start: () => void;
  }
);

type ProgressState = {
  progress: number;
};

class Progress extends React.Component<ProgressProps, ProgressState> {
  stamp: NodeJS.Timer;
  state = { progress: 0 };

  componentWillUnmount() {
    this.stop();
  }

  updateStateValue(next: number, cb?: () => void) {
    const { progress: curr } = this.state;
    if (curr < 100) {
      this.setState(
        () => ({ progress: R.clamp(0, 100, next) }),
        cb
      );
    }
  }

  start = () => {
    this.stamp = setInterval(
      R.compose(this.progress, frames.tick(frames.progressUncached)),
      this.props.duration / frames.progressUncached.length
    );
  }

  stop = () => {
    clearInterval(this.stamp);
  }

  progress = (progress: number) => {
    this.updateStateValue(
      progress,
      R.thunkify(R.when(R.lte(100), this.stop))(progress)
    );
  }

  render() {
    return (
      this.props.children({
        ...this.state,
        start: this.start,
      })
    );
  }
}

export default Progress;
