import { Booking } from "./apiFacade"; // Import the Booking type

export const submitBookingData = async (formData: Booking): Promise<void> => {
  try {
    const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit booking data");
    }
  } catch (error) {
    console.error("Error submitting booking data:", error);
    throw error;
  }
};
