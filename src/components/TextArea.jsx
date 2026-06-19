export default function TextArea({
  label,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <textarea
        rows="4"
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2"
      />
    </div>
  );
}