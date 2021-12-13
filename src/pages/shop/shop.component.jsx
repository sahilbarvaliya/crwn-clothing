import React from "react";
import "./shop.style.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
const ShopPage = ({ collections }) => {
	// const { collections } = this.state;
	return (
		<div className="shop-page">
			<CollectionOverview />
		</div>
	);
};

export default ShopPage;
