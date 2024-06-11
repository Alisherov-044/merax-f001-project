import { QtyControllerProps } from "@/types";
import clsx from "clsx";

export function QtyController({
  qty,
  increment,
  decrement,
  variant = "primary",
}: QtyControllerProps) {
  return (
    <div
      className={clsx(
        variant === "primary" &&
          "flex flex-col items-center justify-between w-8 rounded-3xl bg-gray-200",
        variant === "secondary" &&
          "flex items-center justify-between rounded-3xl bg-primary text-white"
      )}
    >
      <button
        onClick={increment}
        className={clsx(variant === "secondary" && "px-3 py-2")}
      >
        +
      </button>
      <span className={clsx(variant === "secondary" && "px-3")}>{qty}</span>
      <button
        onClick={decrement}
        className={clsx(variant === "secondary" && "px-3 py-2")}
      >
        -
      </button>
    </div>
  );
}
