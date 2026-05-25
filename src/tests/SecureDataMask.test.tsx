import {
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";

import "@testing-library/jest-dom";

import SecureDataMask from "../components/SecureDataMask";

jest.useFakeTimers();

describe("SecureDataMask", () => {
  test("reveals and remasks data after 10 seconds", () => {
    render(
      <SecureDataMask
        sensitiveData="1234-5678-9012"
      />
    );

    // initially masked
    expect(
      screen.getByText("XXXX-XXXX-9012")
    ).toBeInTheDocument();

    // reveal data
    fireEvent.click(
      screen.getByRole("button")
    );

    // visible now
    expect(
      screen.getByText("1234-5678-9012")
    ).toBeInTheDocument();

    // fast-forward timer
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    // masked again
    expect(
      screen.getByText("XXXX-XXXX-9012")
    ).toBeInTheDocument();
  });
});