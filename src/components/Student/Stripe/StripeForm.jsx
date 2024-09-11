import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_mAu0YX27q4uYAhqiP6LXOFhj");

function StripeForm({ inputValue }) {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [id, setId] = useState("");

  const studentId = localStorage.getItem("studentId");
  useEffect(() => {
    localStorage.setItem("paymentId", paymentId);
    localStorage.setItem("clientSecret", clientSecret);
    localStorage.setItem("id", id);
  }, [clientSecret, paymentId, id]);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch(
          "http://localhost:8089/api/payments/purchase-credits",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              studentId: studentId,
              amount: inputValue,
              // payment_method: "pm_card_visa",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }

        const data = await response.json();
        setClientSecret(data.payment.clientSecret);
        setPaymentId(data.payment.paymentIntentId);
        setId(data.payment._id);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    if (inputValue) {
      createPaymentIntent();
    }
  }, [inputValue, studentId]);

  const appearance = {
    theme: "night",
    labels: "floating",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="mt-4 col-12">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm dpmCheckerLink={paymentId} />
        </Elements>
      )}
    </div>
  );
}

export default StripeForm;
