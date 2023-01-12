import { useFormik } from "formik";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BookingFormValidation } from "validations";
import "./BookingForm.styles.css";

interface BookingFormProps {
  availableTimes: string[];
  dispatch: React.Dispatch<any>;
  submitForm: (formData: any) => boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  dispatch,
  submitForm,
}) => {
  const date = new Date();
  const today = date.toISOString().substring(0, 10);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: today,
      time: availableTimes[0],
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: BookingFormValidation,
    onSubmit: (values) => {
      if (submitForm(values) && !formik.errors) {
        navigate("/booking-confirmation");
      }
    },
  });

  const times = React.useMemo(
    () => availableTimes.map((time) => <option key={time}>{time}</option>),
    [availableTimes]
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (event.target.name === "date") {
      dispatch({
        type: "CHANGE_DATE",
        payload: event.target.value,
      });
    }
    formik.handleChange(event);
  };

  return (
    <>
      <h1 className="form-title">Book Now</h1>
      <form className="booking-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          name="date"
          value={formik.values.date}
          onChange={handleChange}
        />
        {formik.errors.date && formik.touched.date && (
          <p className="error">{formik.errors.date}</p>
        )}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={handleChange}
        >
          {times}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          name="guests"
          value={formik.values.guests}
          onChange={handleChange}
        />
        {formik.errors.guests && formik.touched.guests && (
          <p className="error">{formik.errors.guests}</p>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" className="submit-button">
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
