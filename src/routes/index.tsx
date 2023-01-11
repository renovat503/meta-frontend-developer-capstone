import { Routes, Route } from "react-router-dom";
import { HomePage, BookingPage, ConfirmedBooking } from "pages";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default RootRoute;
