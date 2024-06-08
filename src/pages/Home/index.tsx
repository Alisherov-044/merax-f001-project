import { products } from "@/data";
import { HeroSection } from "./sections/Hero";
import { ProductsSection } from "./sections/Products";
import { CartTriggerBtn, Drawer, Icons, MiniCard } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "@/redux/slices/stateSlice";

export function HomePage() {
  const { isCartOpen } = useSelector((state) => state.state);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <main>
      <HeroSection />
      <ProductsSection products={products} />
      <CartTriggerBtn />
      <Drawer isOpen={isCartOpen} onClose={() => dispatch(closeCart())}>
        <div className="flex items-center justify-between py-4 px-6 border-b">
          <div className="flex items-center gap-x-2">
            <Icons.basket className="fill-primary" />
            <span className="text-primary">1 item</span>
          </div>
          <button
            onClick={() => dispatch(closeCart())}
            className="group w-[28px] h-[28px] rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-primary"
          >
            <Icons.close className="h-3 w-3 group-hover:fill-white transition-all duration-300" />
          </button>
        </div>
        <ul>
          {cart.map((item) => (
            <MiniCard product={item} />
          ))}
        </ul>
      </Drawer>
    </main>
  );
}
