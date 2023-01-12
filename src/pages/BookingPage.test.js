import { initializeTimes, updateTimes } from "pages/BookingPage";

test("Initializes times", () => {
    const times = initializeTimes()
    expect(times.length).toBeGreaterThan(0)
});


test("Update times", () => {
    const date = new Date();
    const today = date.toISOString().substring(0, 10);
    const state = initializeTimes()
    const action = {
        type: "CHANGE_DATE",
        payload: today
    }
    const updatedTimes = updateTimes(state, action)
    expect(updatedTimes.length).toBe(state.length)
});