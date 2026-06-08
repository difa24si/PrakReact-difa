export default function FeatureSection() {
  const features = [
    "Reusable Component",
    "Responsive Design",
    "React Router",
    "Tailwind CSS",
  ];

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Features
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}