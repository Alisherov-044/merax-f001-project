import { Card } from "@/components";
import { ProductsSectionProps } from "@/types";

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <ul className="grid grid-cols-4 gap-3 w-fit p-8">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
}
