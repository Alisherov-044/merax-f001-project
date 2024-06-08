import { MiniCardProps } from "@/types";
import { Icons, QtyController } from "@/components";
import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "@/redux/slices/cartSlice";
import { calculatePrice, formatCurrency } from "@/utils";

export function MiniCard({ product }: MiniCardProps) {
  const { id, name, images, price, discount, qty } = product;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b">
      <div className="flex items-center gap-x-4">
        <QtyController
          qty={qty}
          increment={() => dispatch(increment(id))}
          decrement={() =>
            dispatch(qty > 1 ? decrement(id) : removeFromCart(id))
          }
        />
        <img src={images[0]} alt={name} className="w-16 h-16" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <h5 className="text-sm font-bold text-primary">
            {formatCurrency(calculatePrice(price, discount))}
          </h5>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <h4 className="font-bold">
          {formatCurrency(calculatePrice(price, discount) * qty)}
        </h4>
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="group w-[28px] h-[28px] rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-300"
        >
          <Icons.close className="h-3 w-3 group-hover:fill-red-500 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
