import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/collection-preview.component";
import "./collection-overview.style.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
