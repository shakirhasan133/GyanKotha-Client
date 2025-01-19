import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className=" w-full mx-3 md:mx-0 md:w-2/4 bg-white border-2  h-[200px] p-5 rounded-lg space-y-5">
        <h1 className="text-primary text-2xl font-bold">Total Payment</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between "
        >
          <div>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-primary-dark py-1 my-3 text-white"
          >
            Pay
          </button>
        </form>
        <p className="text-error">{error}</p>
      </div>
    </div>
  );
};

export default CheckOutForm;
