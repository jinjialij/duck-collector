import FormField from "./FormField";
import SelectField from "./SelectField";

import { Formik, Form } from "formik";

const DataForm = () => {
  const initialValue = {
    datetime: "",
    duckNum: "",
    food: "",
    foodVol: "",
    foodUnit: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  };

  return (
    <Formik initialValues={initialValue}>
      {(formik) => (
        // console.log(formik);
        <div>
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
            <button
              className="btn btn-primary mb-3 mt-2 text-center"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default DataForm;
