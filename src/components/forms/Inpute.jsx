function Inpute(props) {
  // Instead of using internal state, we rely on the parent to pass the value and onChange handler
  const { placeholder, type, value, onChange, name } = props;

  return (
    <input
      className={`mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
        value ? "" : "invalid"
      }`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name} // Ensure the name prop is passed
      value={value} // Now the value comes from the parent component (MyForm)
      required
    />
  );
}

export default Inpute;
