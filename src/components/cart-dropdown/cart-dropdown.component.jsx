import React from "react";
import "./cart-dropdown.style.scss";
// import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
// import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { withRouter } from "../../assets/withRouter";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>

			<Link to="/checkout" className="cus-button">
				GO TO CHECKOUT
			</Link>

			{/* <CustomButton onClick={() => history.push("/checkout")}>
				GO TO CHECKOUT
			</CustomButton> */}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
