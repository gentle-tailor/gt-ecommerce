import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ScrollRecorder from 'components/Shared/Scroll/ScrollRecorder';

type ScrollRestorerProps = RouteComponentProps<any>;

class ScrollRestorer extends React.Component<ScrollRestorerProps> {
  static shouldResetScroll({ location: { state = {} } }: ScrollRestorerProps) {
    const { resetScroll = true } = state;

    return resetScroll;
  }

  static shouldRestoreScroll({ history }: ScrollRestorerProps) {
    return ScrollRecorder.isBackForwardAction(history.action);
  }

  componentDidMount() {
    this.resetScroll();
  }

  componentDidUpdate(prevProps: ScrollRestorerProps) {
    const { location: prevLocation } = prevProps;
    const { location: currLocation } = this.props;

    if (currLocation !== prevLocation) {
      this.onLocationChange();
    }
  }

  onLocationChange() {
    if (ScrollRestorer.shouldRestoreScroll(this.props)) {
      return this.restoreScroll();
    }
    if (ScrollRestorer.shouldResetScroll(this.props)) {
      return this.resetScroll();
    }
  }

  restoreScroll() {
    const pos = this.retrieveScroll();

    if (pos) {
      window.scrollTo(0, +pos);
    }
  }

  retrieveScroll() {
    const { location: { key } } = this.props;

    if (key) {
      return ScrollRecorder.retreiveScroll(key);
    }
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollRestorer);
