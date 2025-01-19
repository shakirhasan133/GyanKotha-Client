import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";

// Add publisable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_API_KEY);
const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm id={id}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
