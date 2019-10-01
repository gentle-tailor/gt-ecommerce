import React from 'react';
import { always } from 'ramda';

export type LoadedProviderProps = {
  children: React.ReactNode;
  value: Pick<LoadedRenderProps, 'loaded'>;
};

export type LoadedRenderProps = {
  loaded: boolean;
  onLoad: () => void;
};

const Context = React.createContext<LoadedRenderProps>({
  loaded: false,
  onLoad: always(null),
});

class Provider extends React.Component<LoadedProviderProps, LoadedRenderProps> {
  constructor(props: LoadedProviderProps) {
    super(props);
    this.setup(props);
  }

  setup(props: LoadedProviderProps) {
    this.state = {
      ...props.value,
      onLoad: this.onLoad,
    };
  }

  onLoad = () => {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default {
  ...Context,
  Provider,
};
