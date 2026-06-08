import Card from "./Card";
import Button from "./Button";

export default function ProductCard({
  image,
  title,
  category,
  price,
  description,
}) {
  return (
    <Card className="overflow-hidden p-0 hover:shadow-lg transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">
            {price}
          </p>

          <Button type="primary">
            Detail
          </Button>
        </div>

      </div>

    </Card>
  );
}