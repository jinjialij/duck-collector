import { useField } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className="form-control shadow-none"
        {...field}
        {...props}
        autoComplete="off"
      />
    </div>
  );
};

export default FormField;
