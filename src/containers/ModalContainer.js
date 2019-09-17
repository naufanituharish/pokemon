import React from 'react';
import { connect } from 'react-redux';
import { deletePokemon, resetToDeleteIndex } from '../store/actions'
import { DeleteModal } from '../components/organisms';

const ModalContainer = (props) => <DeleteModal {...props} />

const mapStateToProps = (state)=>({
    showModal: state.pokemon.toDelete ? true: false,
    toDelete: state.pokemon.toDelete,
})  

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => dispatch(deletePokemon()),
    onClose: () => dispatch(resetToDeleteIndex())
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);