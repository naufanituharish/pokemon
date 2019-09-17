import React from 'react';
import { connect } from 'react-redux';
import { setToDeleteIndex } from '../store/actions';
import { Button } from '../components/atoms';

const RemoveContainer = (props) => <Button btnIcon='trash' {...props} />

const mapDispatchToProps = (dispatch, { pokeIdx }) => ({
    onClick: () => dispatch(setToDeleteIndex(pokeIdx)),
})

export default connect(undefined,mapDispatchToProps)(RemoveContainer);