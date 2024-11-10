import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const StripeForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                `${clientSecret}`,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: "John Doe",
                        },
                    },
                }
            );

            if (error) {
                console.error("Error confirming card payment:", error);
                // Handle error
            } else {
                console.log("Payment confirmed successfully:", paymentIntent);
                // Handle successful payment
            }
        } catch (error) {
            console.error("Error confirming card payment:", error);
            // Handle error
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button
                type="submit"
                disabled={!stripe || loading}
                className="text-black">
                Pay
            </button>
        </form>
    );
};

export default StripeForm;
