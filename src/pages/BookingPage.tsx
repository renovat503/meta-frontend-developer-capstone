import * as React from "react";
import { BookingForm } from "components";
import { fetchAPI, submitAPI } from "api";

type Action = {
  type: string;
  payload: string;
};

type State = string[];

export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
};

export const updateTimes = (state: State, action: Action) => {
  const date = new Date(action.payload);

  if (action.type === "CHANGE_DATE") {
    return fetchAPI(date);
  }
  return [...state];
};

export const submitForm = (formData: any) => {
  return submitAPI(formData);
};

const BookingPage = () => {
  const [state, dispatch] = React.useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm
        availableTimes={state}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
