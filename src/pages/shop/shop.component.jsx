import React, { Component } from "react";
import SHOP_DATA from "../../assets/data";
import "./shop.style.scss";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collection: SHOP_DATA,
		};
	}
	render() {
		const { collection } = this.state;
		return (
			<div className="shop-page">
				{collection.map(({ id, ...otherCollectionProps }) => {
					return <CollectionPreview key={id} {...otherCollectionProps} />;
				})}
			</div>
		);
	}
}

export default ShopPage;
