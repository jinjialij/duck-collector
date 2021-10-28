import FormField from "./FormField";
import SelectField from "./SelectField";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const DataForm = () => {
  const initialValue = {
    recordDatetime: "",
    duckNum: "",
    food: "",
    foodVol: "",
    foodUnit: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  };

  const schema = Yup.object().shape({
    recordDatetime: Yup.string().required("Required"),
    duckNum: Yup.number().required("Required"),
    food: Yup.string().required("Required"),
    foodVol: Yup.number().required("Required"),
    foodUnit: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    postcode: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1 className="mt-5 mb-3 text-center">Duck Data Form</h1>
          <Form>
            <FormField
              label="Date and time"
              name="recordDatetime"
              type="datetime-local"
            />
            <FormField
              label="Number of Ducks You feed"
              name="duckNum"
              type="number"
            />
            <FormField label="Food" name="food" type="text" />
            <FormField label="Food Volume" name="foodVol" type="number" />
            <SelectField label="Food Unit" name="foodUnit" />
            <FormField label="Address" name="address" type="text" />
            <FormField label="City" name="city" type="text" />
            <FormField label="State/Province" name="state" type="text" />
            <FormField label="Country" name="country" type="text" />
            <FormField label="Post/Zip code" name="postcode" type="text" />
            <div className="text-center">
              <button
                className="btn btn-primary mb-3 mt-2 justify"
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
