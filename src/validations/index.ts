import * as yup from "yup";

export const BookingFormValidation = yup.object({
  date: yup.date().required().min(new Date(), "Please, choose a valid date."),
  time: yup.string(),
  guests: yup.number().min(1, "Should have at least 1 guest."),
  occasion: yup.string(),
});
