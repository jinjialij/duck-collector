import { ErrorMessage, useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-select ${meta.touched && meta.error && `is-invalid`}`}
        {...field}
        {...props}
        autoComplete="off"
      >
        <option value=""></option>
        <option value="g">G</option>
        <option value="kg">KG</option>
        <option value="ton">Ton</option>
      </select>
      <ErrorMessage className="error" component="div" name={field.name} />
    </div>
  );
};

export default SelectField;
