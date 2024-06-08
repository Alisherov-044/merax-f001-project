import { DrawerProps } from "@/types";
import clsx from "clsx";

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <div
      onClick={onClose}
      className={clsx(
        "fixed top-0 right-0 w-full h-full transition-all duration-300",
        isOpen ? "bg-black/30 z-50" : "bg-transparent -z-10"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "fixed right-0 top-0 w-[450px] h-full bg-white transition-all duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {children}
      </div>
    </div>
  );
}
