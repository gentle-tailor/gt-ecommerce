import * as React from 'react';
import { History, Location, Action, UnregisterCallback } from 'history';
import { readScroll, writeScroll } from 'browser/scroll';

type ScrollRecorderProps = {
  history: History;
  children: React.ReactNode;
};

// should be mounted before Router;
class ScrollRecorder extends React.Component<ScrollRecorderProps> {
  static retreiveScroll = readScroll;
  private static recordScroll = writeScroll;

  unsubscribe?: UnregisterCallback;

  constructor(props: ScrollRecorderProps) {
    super(props);

    this.unsubscribe = props.history.listen(this.listen);
  }

  static isBackForwardAction(action: Action) {
    return action === 'POP';
  }

  componentWillUnmount() {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
    }
  }

  listen = ({ key }: Location, action: Action) => {
    if (ScrollRecorder.isBackForwardAction(action) && key) {
      ScrollRecorder.recordScroll(key, window.scrollY);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollRecorder;
