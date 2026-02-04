const formLabels: { [key: string]: { label: string; type: string } } = {
  firstName: { label: "First name", type: "text" },
  lastName: { label: "Last name", type: "text" },
  mobileNumber: { label: "Mobile number", type: "text" },
  email: { label: "Email", type: "email" },
  suburb: { label: "Gold Coast suburb", type: "text" },
  empty1: { label: " ", type: "text" },
  serviceType: { label: "Service type", type: "select" },
  areaSquareMeters: { label: "Living space (sm²)", type: "number" },
  numberOfRooms: { label: "Num. of rooms", type: "number" },
  numberOfBathrooms: { label: "Num. of bathrooms", type: "number" },
  empty2: { label: " ", type: "text" },
  otherMessage: { label: "Other message", type: "textarea" },
};

const formValues = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  suburb: "",
  empty1: "",
  serviceType: "HOME",
  areaSquareMeters: "",
  numberOfRooms: "",
  numberOfBathrooms: "",
  empty2: "",
  otherMessage: "",
};

export { formLabels, formValues };
