import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Konfirmasi from "../../components/page/Client/Pembayaran/SelesaikanPembayaran/Konfirmasi";
import { useDispatch, useSelector } from "react-redux";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Konfirmasi Component", () => {
  test("should call setKonfirmasi and setTime when Konfirmasi Pembayaran button is clicked", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) =>
      selector({
        storePembayaran: {
          konfirmasi: true,
        },
      })
    );

    render(<Konfirmasi />);

    const konfirmasiButton = screen.getByTestId("button-konfirmasi");
    fireEvent.click(konfirmasiButton);

    expect(dispatch).toHaveBeenCalledWith({
      type: "storePembayaran/updateKonfirmasi",
      payload: false,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "storePembayaran/updateTimerNow",
      payload: expect.any(Date),
    });
  });
});
