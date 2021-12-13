import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
