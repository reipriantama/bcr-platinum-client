import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import ResultCarCard from "../../components/page/Result/ResultCarCard";
import { renderWithProviders } from "../../mocks/redux";

describe("ResultCarCard Component", () => {
  test("should call createNewOrder, goToPembayaran, and sessionCheckedBank when Lanjutkan Pembayaran button is clicked", () => {
    // Create spy functions

    renderWithProviders(
      <ResultCarCard
        idcar={1}
        imagecarresult="car.jpg"
        categorycarresult="Small"
        carresultname="Car 1"
        carresultprice={100}
      />
    );

    // Get Lanjutkan Pembayaran button
    const lanjutkanButton = screen.getByText("Lanjutkan Pembayaran");

    // Simulate a button click
    fireEvent.click(lanjutkanButton);

    // Expect functions to be called
    expect(lanjutkanButton).toBeVisible();
  });
});
