/**
 *
 * DetailsScreen
 *
 */

import React, { memo } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import makeSelectDetailsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

import Img from '../../components/Img';

export function DetailsScreen() {
  useInjectReducer({ key: 'detailsScreen', reducer });
  useInjectSaga({ key: 'detailsScreen', saga });

  return (
    <View>
      <Text>This is the DetailsScreen Container!</Text>
      <Img url="https://octodex.github.com/images/original.png" />
    </View>
  );
}

DetailsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailsScreen: makeSelectDetailsScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailsScreen);
