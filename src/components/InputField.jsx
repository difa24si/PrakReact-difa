export default function InputField({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2"
      />
    </div>
  );
}