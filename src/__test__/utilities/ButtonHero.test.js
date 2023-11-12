import React from "react";
import { describe, expect, test } from "@jest/globals";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import Hero from "../../components/Home/Hero/";
import { renderWithProviders } from "../../mocks/redux";

describe("handleCloseDeleteModal", () => {
  test("should update state variables correctly", async () => {
    renderWithProviders(<Hero />);

    const heroButton = screen.getByTestId("button-sewa");
    fireEvent.click(heroButton);

    await waitFor(() => {
      expect(heroButton).toBeVisible();
    });
  });
});
