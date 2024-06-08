import { Icons } from "@/components";
import { openCart } from "@/redux/slices/stateSlice";
import { formatCurrency } from "@/utils";
import { useDispatch } from "react-redux";

export function CartTriggerBtn() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(openCart())}
      className="flex flex-col gap-y-3 fixed right-0 top-1/2 -translate-y-1/2 z-40 px-3 py-[14px] w-[80px] h-[90px] bg-primary rounded-md rounded-r-none cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <Icons.basketSm className="fill-white" />
        <span className="text-sm text-white">1 item</span>
      </div>
      <div className="px-2 py-1 bg-white rounded-md">
        <span>{formatCurrency(4)}</span>
      </div>
    </div>
  );
}
