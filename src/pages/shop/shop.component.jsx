import React from "react";
import "./shop.style.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
const ShopPage = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} element={CollectionOverview} />
		</div>
	);
};

export default ShopPage;
