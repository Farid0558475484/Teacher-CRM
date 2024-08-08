import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Col } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_mAu0YX27q4uYAhqiP6LXOFhj");

function StripeForm({ inputValue }) {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    fetch("http://localhost:8089/api/payments/purchase-credits", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: "658fa367742cd725b24b184a",
        amount: inputValue,
        payment_method: "pm_card_visa",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create payment intent");
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.payment.clientSecret);
        setPaymentId(data.payment._id);
      })

      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, [inputValue]);

  console.log("clientSecret", clientSecret);
  console.log("paymentId", paymentId);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <>
      <Col className="mt-4">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm paymentId={paymentId} />
          </Elements>
        )}
      </Col>
    </>
  );
}

export default StripeForm;
