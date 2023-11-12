import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FindCarComponent from "../../components/FindCarComponent";

describe("FindCarComponent", () => {
  it("should set the category when handleSetCategory is called", () => {
    render(<FindCarComponent />);

    const categorySelect = screen.getByTestId("button-kategori");

    fireEvent.change(categorySelect, { target: { value: "small" } });

    const { category } = screen.getByTestId("category");
    expect(category).toBe("small");
  });
});
