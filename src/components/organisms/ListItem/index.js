import React from 'react';
import PropTypes from 'prop-types';

import { ListCard } from '../../molekules';
import { Loader, Button, Text } from '../../atoms';

import { ModalContainer } from '../../../containers'

import './listItem.css';

const ListItem = (props) => {
    const { list, from, isLoading, failed ,loadMore} = props
    return (
        <>
            <div className="list-container">
                {failed && <div className="list-container-error">
                    <Text headerMain>Something went wrong while fetching pokemon data. Please, try again later.</Text></div>}
                {list.length > 0 && list.map((pokemon, idx) => {
                    /* console.log(pokemon.id) */
                    return<ListCard key={idx} from={from} {...pokemon} />; 
                })}
                {!list.length  && !failed && <div className="list-container-error">No Data</div>}
            </div>
            {loadMore && <div className="load-more-list"><Button onClick={() => loadMore()}>Load More</Button></div>}
            <Loader show={isLoading} />
            <ModalContainer />
        </>
    )
}

ListItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool,
    failed: PropTypes.bool,
    loadMore: PropTypes.func,
    onRemove: PropTypes.func
}

export default ListItem;