import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm />);

    /*FAIL CONDITION*/
    // const button = getByText("Checkoute");

    /*PASS CONDITION*/
    const button = getByText("Checkout");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    /*FAIL CONDITION*/
    // const successMsg = getByText(/You haveeeee ordered some plants! Woo-hoo!/i);

    /*PASS CONDITION*/
    const successMsg = getByText(/You have ordered some plants! Woo-hoo!/i)

    expect(successMsg).toBeInTheDocument();
});
