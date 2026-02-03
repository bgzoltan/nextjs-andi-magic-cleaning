import axios from "axios";

import { InquiryI } from "../db/schema";

export async function addInquiry(inquiry: InquiryI) {
  try {
    const response = await axios.post("api/inquiries", inquiry);
    return response;
  } catch (err) {
    console.error("Error", err);
    // Rethrow the error to be handled by the caller
    throw err;
  }
}

export async function getInquiry(email: String) {
  try {
    const response = await axios.get(`api/inquiries/?email=${email}`);
    if (response.status !== 200) {
      throw new Error(`Error fetching inquiry: ${response.statusText}`);
    }
    return response;
  } catch (err) {
    console.error("Error", err);
    // Rethrow the error to be handled by the caller
    throw err;
  }
}
