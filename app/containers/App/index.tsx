import React from 'react';
import Routes from 'containers/Routes';
import Loaded from 'containers/Misc/Contexts/Loaded';
import Loading from 'components/Loading';

const App = () => (
  <Loaded.Provider value={{ loaded: false }}>
    <Loaded.Consumer>
      {loadControl => (
        loadControl.loaded
          ? <Routes />
          : <Loading onLoad={loadControl.onLoad} />
      )}
    </Loaded.Consumer>
  </Loaded.Provider>
);

export default App;
