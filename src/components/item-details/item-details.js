import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-details.scss';

const Record = ({ item, field, label }) => {
    return (
        <div className="item-details__info-item list-group-item">
            {field}: {item[label]}
        </div>
    );
};
export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        image: null
    }

    componentDidMount() {
        this.itemUpdate();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ loading: true });
            this.itemUpdate();
        }
    }

    itemUpdate = () => {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) return;

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const { item, loading } = this.state;

        if (!item) {
            return (
                <div>Item not selected</div>
            );
        }

        const itemView = !loading ? <ItemView item={item} image={this.state.image} children={this.props.children} /> : null;
        const spinner = loading ? <Spinner /> : null;

        return (
            <div className="item-details">
                {spinner}
                {itemView}
            </div>
        );
    }
}

const ItemView = ({ item, image, children }) => {
    return (
        <React.Fragment>
            <img className="item-details__image" src={image} alt="" />
            <div className="item-details__info">
                <div className="item-details__info-title">
                    {item.name}
                </div>
                <div className="item-details__info-list list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
