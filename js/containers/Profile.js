import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { meRequest } from './../actions';
import Profile from './../components/Profile';

class Container extends React.Component {
  componentWillMount() {
    this.props.requestMe();
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

Container.propTypes = {
  requestMe: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.me.username,
  description: state.me.description,
  avatar_url: state.me.avatar_url,
});

const mapDispatchToProps = dispatch => ({
  requestMe: bindActionCreators(meRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
