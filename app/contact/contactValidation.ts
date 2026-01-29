import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  cleaningType: Yup.string()
    .oneOf(["Home", "Office", "Bond"])
    .required("Required"),
  mobileNumber: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  suburb: Yup.string().required("Required"),
  areaSquareMeters: Yup.number().positive().required("Required"),
  numberOfRooms: Yup.number()
    .positive()
    .required("Required")
    .max(10, "Maximum 10 rooms allowed"),
  numberOfBathrooms: Yup.number()
    .positive()
    .required("Required")
    .max(5, "Maximum 5 bathrooms allowed"),
  otherMessage: Yup.string(),
});

export { validationSchema };
