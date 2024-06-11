import { Card } from "@/components";
import { ProductsSectionProps } from "@/types";
import { useLocation } from "react-router-dom";

export function ProductsSection({ products }: ProductsSectionProps) {
  const location = useLocation();

  let category = location.search.replace("?", "").split("=")[1];

  return (
    <ul className="flex-auto grid grid-cols-5 gap-3 w-fit p-8 bg-grayBg">
      {products
        .filter((product) =>
          category ? product.category_id === +category : true
        )
        .map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </ul>
  );
}
