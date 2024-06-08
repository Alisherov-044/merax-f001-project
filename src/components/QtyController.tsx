import { QtyControllerProps } from "@/types";

export function QtyController({
  qty,
  increment,
  decrement,
}: QtyControllerProps) {
  return (
    <div className="flex flex-col items-center justify-between w-8 rounded-3xl bg-gray-200">
      <button onClick={increment} className="p-2">
        +
      </button>
      <span>{qty}</span>
      <button onClick={decrement} className="p-2">
        -
      </button>
    </div>
  );
}
