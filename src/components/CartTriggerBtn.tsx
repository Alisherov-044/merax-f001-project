import { Icons } from "@/components";
import { openCart } from "@/redux/slices/stateSlice";
import { RootState } from "@/redux/store";
import { calculatePrice, formatCurrency } from "@/utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export function CartTriggerBtn() {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch();

  const total = cart.map(item => item.qty * calculatePrice(item.price, item.discount)).reduce((res, item) => res + item, 0)

  return (
    <div
      onClick={() => dispatch(openCart())}
      className="flex flex-col gap-y-3 fixed right-0 top-1/2 -translate-y-1/2 z-40 px-3 py-[14px] h-[90px] bg-primary rounded-md rounded-r-none cursor-pointer"
    >
      <div className="flex items-center justify-between gap-x-2">
        <Icons.basketSm className="fill-white" />
        <span className="text-sm text-white">{cart.length} item{cart.length > 1 ? "s" : ""}</span>
      </div>
      <div className="px-2 py-1 bg-white rounded-md">
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
