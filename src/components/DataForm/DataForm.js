import FormField from "./FormField";
import SelectField from "./SelectField";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const DataForm = (props) => {
  const initialValue = {
    record_datetime: "",
    duck_num: "",
    food: "",
    food_volume: "",
    food_unit: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  };

  const schema = Yup.object().shape({
    record_datetime: Yup.string().required("Required"),
    duck_num: Yup.number()
      .required("Required")
      .integer("Must be an integer")
      .moreThan(0, "Should be positive"),
    food: Yup.string().required("Required").min(1).max(255),
    food_volume: Yup.number()
      .required("Required")
      .moreThan(0, "Should be positive")
      .test(
        "maxDigits",
        "volume field must at most have 3 digits or less",
        (number) => Number.isInteger(number * 10 ** 3)
      ),
    food_unit: Yup.string().required("Required"),
    address: Yup.string().required("Required").min(1).max(255),
    city: Yup.string().required("Required").min(1).max(45),
    state: Yup.string().required("Required").min(1).max(45),
    country: Yup.string().required("Required").min(1).max(45),
    postcode: Yup.string().required("Required").min(1).max(11),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={(values, formikBag) => {
        const datetime = values.record_datetime.replace("T", " ");
        values.record_datetime = datetime;
        props.onAddDuckData(values);
        formikBag.resetForm(true);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="mt-3 mb-3 text-center">Duck Data Form</h1>
          <Form>
            <FormField
              label="Date and time"
              name="record_datetime"
              type="datetime-local"
            />
            <FormField
              label="Number of Ducks You feed"
              name="duck_num"
              type="number"
            />
            <FormField label="Food" name="food" type="text" />
            <FormField label="Food Volume" name="food_volume" type="number" />
            <SelectField label="Food Unit" name="food_unit" />
            <FormField label="Address" name="address" type="text" />
            <FormField label="City" name="city" type="text" />
            <FormField label="State/Province" name="state" type="text" />
            <FormField label="Country" name="country" type="text" />
            <FormField label="Post/Zip code" name="postcode" type="text" />
            <div className="text-center">
              <button
                className="btn btn-primary mb-5 mt-2 justify"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default DataForm;
