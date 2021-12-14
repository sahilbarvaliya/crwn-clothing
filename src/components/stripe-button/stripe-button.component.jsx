import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51Jzhx1SDf6KsrSp2UJifSja6uIvGM8KPLZuGXjc71H7gQS0CUBQeuCbt2PqnPrRBK9qjeGjpYLc6wSIn35N5uBIg00psoPLO71";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			currency="INR"
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
