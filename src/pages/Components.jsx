import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextArea from "../components/TextArea";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";

export default function Components() {

  const [openModal, setOpenModal] = useState(false);

  const headers = [
    "No",
    "Nama Produk",
    "Kategori",
    "Harga",
  ];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

 return (
  <Container>
    <h1 className="text-3xl font-bold mb-8">
      Components
    </h1>

    {/* BUTTON */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">Button</h2>

      <div className="flex flex-wrap gap-3">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
      </div>
    </section>

    {/* BADGE */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">Badge</h2>

      <div className="flex flex-wrap gap-3">
        <Badge type="primary">User</Badge>
        <Badge type="success">Aktif</Badge>
        <Badge type="danger">Nonaktif</Badge>
        <Badge type="warning">Pending</Badge>
      </div>
    </section>

    {/* AVATAR */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">Avatar</h2>

      <div className="flex gap-3">
        <Avatar name="Budi" />
        <Avatar name="Siti" />
        <Avatar name="Andi" />
      </div>
    </section>

    {/* CONTAINER */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">Container</h2>

      <Card>
        <h2 className="text-2xl font-bold">
          Daftar Produk
        </h2>

        <p className="text-gray-500 mt-2">
          Berikut adalah daftar produk terbaru.
        </p>
      </Card>
    </section>

    {/* CARD */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">Card</h2>

      <Card>
        <h3 className="font-bold text-lg">
          Judul Card
        </h3>

        <p className="text-gray-600 mt-2">
          Ini adalah isi dari card.
        </p>
      </Card>
    </section>

    {/* PRODUCT CARD */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">
        ProductCard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          description="Smartphone dengan performa cepat."
        />
      </div>
    </section>

    {/* TABLE */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">
        Table
      </h2>

      <Card>
        <Table headers={headers}>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border px-4 py-3">
                {index + 1}
              </td>

              <td className="border px-4 py-3">
                {product.name}
              </td>

              <td className="border px-4 py-3">
                {product.category}
              </td>

              <td className="border px-4 py-3">
                {product.price}
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </section>

    {/* FORM */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">
        Form Component
      </h2>

      <Card>
        <InputField
          label="Nama Produk"
          placeholder="Masukkan nama produk"
        />

        <SelectField
          label="Kategori"
          options={[
            "Elektronik",
            "Fashion",
            "Aksesoris",
          ]}
        />

        <TextArea
          label="Deskripsi"
          placeholder="Masukkan deskripsi"
        />

        <Button type="success">
          Simpan
        </Button>
      </Card>
    </section>

    {/* FEEDBACK */}
    <section className="mb-8">
      <h2 className="font-semibold mb-3">
        Feedback
      </h2>

      <Card>
        <Alert
          type="success"
          message="Data berhasil disimpan"
        />

        <Alert
          type="warning"
          message="Periksa kembali data Anda"
        />

        <Alert
          type="danger"
          message="Data gagal disimpan"
        />

        <div className="my-4">
          <Spinner />
        </div>

        <Button
          type="primary"
          onClick={() => setOpenModal(true)}
        >
          Buka Modal
        </Button>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        >
          <h2 className="text-xl font-bold">
            Contoh Modal
          </h2>

          <p>
            Ini adalah isi modal.
          </p>
        </Modal>
      </Card>
    </section>

    <Footer />
  </Container>
);
}