"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import style from "./contactDetails.module.css";
import { validationSchema } from "./contactValidation";

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
    console.log("Form submitted:", values);
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
          <Form>
            <div className={style.gridContainer}>
              {Object.keys(formValues).map((field) => (
                <div key={field} className={style.inputArea}>
                  <div className={style.fieldContainer}>
                    <>
                      <label className={style.fieldLabel}>
                        {formLabels[field].label}
                      </label>

                      {field === "cleaningType" && (
                        <Field name={field} as="select" className={style.field}>
                          <option value="Home" defaultChecked>
                            Home
                          </option>
                          <option value="Office">Office</option>
                          <option value="Bond">Bond</option>
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
                        "cleaningType",
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
                    </>
                  </div>
                  {errors && touched && (
                    <ErrorMessage
                      name={field}
                      component="div"
                      className={style.errorMessage}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="primaryButton">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
