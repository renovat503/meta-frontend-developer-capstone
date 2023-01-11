import * as React from "react";
import { useNavigate } from "react-router-dom";
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
  const [values, setValues] = React.useState({
    date: today,
    time: availableTimes[0],
    guests: 1,
    occasion: "Birthday",
  });
  const navigate = useNavigate();

  const times = React.useMemo(
    () => availableTimes.map((time) => <option key={time}>{time}</option>),
    [availableTimes]
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    if (event.target.name === "date") {
      dispatch({ type: "CHANGE_DATE", payload: event.target.value });
    }
  };

  return (
    <>
      <h1>Book Now</h1>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={values.time}
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
          value={values.guests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          onClick={(values) => {
            if (submitForm(values)) {
              navigate("/booking-confirmation");
            }
          }}
        />
      </form>
    </>
  );
};

export default BookingForm;
