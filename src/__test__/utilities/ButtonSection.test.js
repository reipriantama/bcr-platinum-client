import React from "react";
import { describe, expect, test } from "@jest/globals";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import FifthSection from "../../components/Home/FifthSection";
import { renderWithProviders } from "../../mocks/redux";

describe("handleCloseDeleteModal", () => {
  test("should update state variables correctly", async () => {
    renderWithProviders(<FifthSection />);

    const buttonSewa = screen.getByTestId("button-sewa");
    fireEvent.click(buttonSewa);

    await waitFor(() => {
      expect(buttonSewa).toBeVisible();
    });
  });
});
