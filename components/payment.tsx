import { useEffect, useState } from "react";
import CustomeButton from "./customeButton";
import { Alert } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";

export default function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);

  const fetchPaymentSheetParams = async () => {
    // const response = await fetch(`/(api)/(stripe)/create`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "fullName",
    //     email: "some@gmail.com",
    //     amount: 200,
    //     paymentMethodId: paymentMethod.id,
    //   }),
    // });
    // const { paymentIntent, ephemeralKey, customer } = await response.json();
    // return {
    //   paymentIntent,
    //   ephemeralKey,
    //   customer,
    // };
  };

  // merchantDisplayName: "Example, Inc.",
  // intentConfiguration: {
  //   mode: {
  //     amount: parseInt(amount) * 100,
  //     currencyCode: "usd",
  //   },
  //   confirmHandler: async (
  //     paymentMethod,
  //     shouldSavePaymentMethod,
  //     intentCreationCallback,
  //   ) =>

  const confirmHandler = async (
    paymentMethod,
    shouldSavePaymentMethod,
    intentCreationCallback
  ) => {};

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      intentConfiguration: {
        mode: {
          amount: 50,
          currencyCode: "usd",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    }
  };

  // const initializePaymentSheet = async () => {
  //   const { paymentIntent, ephemeralKey, customer } =
  //     await fetchPaymentSheetParams();

  //   const { error } = await initPaymentSheet({
  //     merchantDisplayName: "Example, Inc.",
  //     customerId: customer,
  //     customerEphemeralKeySecret: ephemeralKey,
  //     paymentIntentClientSecret: paymentIntent,
  //     // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
  //     //methods that complete payment after a delay, like SEPA Debit and Sofort.
  //     allowsDelayedPaymentMethods: true,
  //     defaultBillingDetails: {
  //       name: "Jane Doe",
  //     },
  //   });
  //   if (!error) {
  //     setLoading(true);
  //   }
  // };

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  return (
    <>
      <CustomeButton
        title="Select Ride"
        bgVariant="success"
        // onPress={() => }
        onPress={openPaymentSheet}
      />
    </>
  );
}
