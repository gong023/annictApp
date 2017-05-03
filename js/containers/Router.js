import { Actions, Scene, Router, Reducer } from 'react-native-router-flux';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import LoginWeb from './LoginWeb';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="loginWeb" component={LoginWeb} />
  </Scene>,
);

class Routes extends React.Component {
  reducerCreate(params) {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  }

  render() {
    return (
      <Router
        createReducer={this.reducerCreate.bind(this)}
        scenes={scenes}
      />
    );
  }
}

Routes.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(Routes);
