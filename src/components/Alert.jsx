export default function Alert({
  message,
  type = "success",
}) {
  const styles = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      className={`${styles[type]} p-4 rounded-lg mb-3`}
    >
      {message}
    </div>
  );
}