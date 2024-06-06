import { HeroSection } from "./sections/Hero";
import { ProductsSection } from "./sections/Products";

export function HomePage() {
  const product = {
    id: 1,
    name: "Apples",
    description: "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, g..",
    price: 2,
    discount: 20,
    images: ["https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"],
    category: "Fruits & Vegetables"
  }

  return (
    <main>
      <HeroSection />
      <ProductsSection products={[product, product, product, product, product, product]} />
    </main>
  );
}
