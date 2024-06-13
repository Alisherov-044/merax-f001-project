import { Card } from "@/components";
import { ProductsSectionProps } from "@/types";
import { useLocation } from "react-router-dom";

export function ProductsSection({ products }: ProductsSectionProps) {
  const location = useLocation();

  const query = location.search.replace("?", "");

  const category =
    query.split("&")?.[0]?.split("=")[0] === "category"
      ? query.split("&")[0].split("=")[1]
      : undefined;

  const search =
    query.split("&")?.[1]?.split("=")[0] === "search"
      ? query.split("&")[1].split("=")[1]
      : undefined;

  return (
    <ul className="flex-auto grid grid-cols-5 gap-3 w-fit p-8 bg-grayBg">
      {products
        .filter((product) =>
          category ? product.category_id === +category : true
        )
        .filter((product) =>
          search
            ? product.name.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((product) => (
          <Card key={product.id} product={product} />
        ))}
    </ul>
  );
}
