import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, submitForm } from "pages/BookingPage"

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={initializeTimes()} submitForm={submitForm} dispatch={() => { }} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
