import { useCallback, useEffect, useState } from "react";
import {
    Elements,
    EmbeddedCheckout,
    EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";
import axios from "axios";

const stripePromise = loadStripe(
    `pk_test_51OuNLDCBkw70tV0ZLbB4TtUa8fZnawafD90rG8HgiwyoQIkkPnVNxLaIr8zsn0FLWlbcGFERnmR2ou9cVeOl4nT900h5v53mlR`
);

const StripeCheckOut = () => {
    const [clientSecret, setClientSecret] = useState(
        `${import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY}` || null
    );

    const [amount, setAmount] = useState(100); // Default amount in cents
    const amountInCents = amount * 100; // Convert to cents

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = { fetchClientSecret };

    return (
        <div className="bg-white">
            <div id="checkout">
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={options}>
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </div>
        </div>
    );
};

export default StripeCheckOut;
