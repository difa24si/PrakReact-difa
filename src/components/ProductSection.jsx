import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">
        Produk Pilihan
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dan nyaman digunakan."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat dan kamera jernih."
        />
      </div>
    </section>
  );
}