import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select className="form-select" {...field} {...props} autoComplete="off">
        <option value=""></option>
        <option value="g">G</option>
        <option value="kg">KG</option>
        <option value="ton">Ton</option>
      </select>
    </div>
  );
};

export default SelectField;
