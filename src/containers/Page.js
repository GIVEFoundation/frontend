import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as myActions from '../actions';

class Page extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    let {actions} = this.props;
  }

  render() {
    let {actions}= this.props;

  return (
      <div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}
function  mapStateToProps(state) {
  return {
    samples: state.sample.samples,
  };
}

const page = connect( mapStateToProps, mapDispatchToProps)(Page);
export default withRouter(page);
