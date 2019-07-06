import React from 'react';
import PropTypes from 'prop-types';

import './item-list.scss';

const ItemList = (props) => {

    const { data, itemSelection, children: renderItem } = props;

    const items = data.map((item) => {
        const label = renderItem(item);

        return (
            <div className="item-list__item list-group-item list-group-item-action"
                key={item.id}
                onClick={() => itemSelection(item.id)}>
                {label}
            </div>
        );
    });

    return (
        <div className="item-list list-group">
            {items}
        </div>
    );
};

ItemList.defaultProps = {
    itemSelection: () => {}
};

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemSelection: PropTypes.func,
    children: PropTypes.func.isRequired
};

export default ItemList;
