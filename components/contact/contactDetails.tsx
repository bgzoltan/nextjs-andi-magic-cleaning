"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import style from "./contactDetails.module.css";
import { validationSchema } from "./contactValidation";
import { addInquiry, getInquiry } from "../../lib/inquiries";
import axios from "axios";
import { ServiceType } from "../../app/(server)/db/schema";

interface ContactDetailsI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

import { Formik, Form, Field, ErrorMessage } from "formik";

import { formValues, formLabels } from "./contactInitData";

// 1. Need to create a form to accept the user data
// 2. Need to store the submitted data in the database
// 3. Need to send an email to the owner email address with the submitted data

export default function ContactDetails({
  rubikGlitchFont,
  rudaFont,
}: ContactDetailsI) {
  const handleSubmit = async (values: any) => {
    // Send the form data to the backend API

    try {
      //  Check if an inquiry with the same email already exists
      await getInquiry(values.email);
      alert(
        "You have a pending inquiry already. We will get back to you soon.",
      );
    } catch (error: unknown) {
      // Handle error appropriately
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 404) {
          // If inquiry not found, proceed to add a new inquiry
          try {
            await addInquiry(values);
            alert("Your inquiry has been submitted successfully!");
          } catch (addError) {
            console.error("Error adding inquiry:", addError);
            alert(
              "There was an error submitting your inquiry. Please try again.",
            );
          }
        } else {
          console.error("Error fetching inquiry:", error.response?.data);
          alert("Something went wrong. Please try again.");
        }
      } else {
        console.error("Unexpected error:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section
      id="contactUs"
      className={`${style.container} ${rudaFont.className}`}
    >
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className={style.formContainer}>
            <div className={style.gridContainer}>
              {Object.keys(formValues).map((field) => (
                <div key={field} className={style.inputArea}>
                  <div className={style.fieldContainer}>
                    <>
                      <label className={style.fieldLabel}>
                        {formLabels[field].label}
                      </label>
                      {/* To fix height of the field in order not to shift the label up or down when error is displayed  */}
                      <div
                        className={
                          field === "otherMessage"
                            ? style.inputFieldContainerOtherMessage
                            : style.inputFieldContainer
                        }
                      >
                        {field === "serviceType" && (
                          <Field
                            name={field}
                            as="select"
                            className={style.field}
                          >
                            <option value={ServiceType.HOME} defaultChecked>
                              Home
                            </option>
                            <option value={ServiceType.OFFICE}>Office</option>
                            <option value={ServiceType.BOND}>Bond</option>
                          </Field>
                        )}
                        {field === "otherMessage" && (
                          <Field
                            name={field}
                            as="textarea"
                            className={style.field}
                          />
                        )}
                        {["empty1", "empty2"].includes(field) && <div />}
                        {[
                          "serviceType",
                          "otherMessage",
                          "empty1",
                          "empty2",
                        ].includes(field) === false && (
                          <Field
                            name={field}
                            type={formLabels[field].type}
                            as="input"
                            className={style.field}
                          />
                        )}
                        {/* Display error message below the input field */}
                        {errors && touched && (
                          <ErrorMessage
                            name={field}
                            component="div"
                            className={style.errorMessage}
                          />
                        )}
                      </div>
                    </>
                  </div>
                </div>
              ))}
            </div>
            <button type="submit" className="primaryButton">
              Send the form
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
