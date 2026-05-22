import { Link } from "react-router-dom";
import product from "../data/product.json";
export default function Product() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Product</h1>

      <div className="flex items-center text-gray-500 text-lg mb-6">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span>Order List</span>
      </div>

      <p className="text-xl">Ini Halaman Product</p>

      {/* TABLE PRODUCT */}
      <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-md">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Product List</h2>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            + Add Product
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100 text-left text-gray-700">
              <th className="py-3 px-4">ID</th>
              <th className="px-4">Product Name</th>
              <th className="px-4">Code</th>
              <th className="px-4">Category</th>
              <th className="px-4">Brand</th>
              <th className="px-4">Price</th>
              <th className="px-4">Stock</th>
              <th className="px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {product.map((item) => (
              <tr
                key={item.id}
                className="border-b transition hover:bg-gray-50"
              >
                <td className="py-4 px-4 font-medium text-gray-700">
                  {item.id}
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-400 hover:text-emerald-500"
                  >
                    {item.title}
                  </Link>
                </td>

                <td className="px-4 text-gray-600">{item.code}</td>

                <td className="px-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {item.category}
                  </span>
                </td>

                <td className="px-4 text-gray-700">{item.brand}</td>

                <td className="px-4 font-semibold text-green-600">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>

                <td className="px-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.stock > 10
                        ? "bg-green-100 text-green-700"
                        : item.stock > 5
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stock}
                  </span>
                </td>

                <td className="px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="rounded-lg bg-yellow-400 px-3 py-1 text-sm text-white hover:bg-yellow-500">
                      Edit
                    </button>

                    <button className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
