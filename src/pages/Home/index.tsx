import { HeroSection } from "./sections/Hero";
import { ProductsSection } from "./sections/Products";
import { CartTriggerBtn, Drawer, Icons, MiniCard } from "@/components";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "@/redux/slices/stateSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "./sections/Categories";
import { RootState } from "@/redux/store";

export function HomePage() {
  const { isCartOpen } = useSelector((state: RootState) => state.state);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  async function getProducts() {
    // const products = await fetch("https://pickbazar-api-kjy8.onrender.com/api/products", {
    //     method: "GET"
    // }).then((res) => res.json())
    // setProducts(products)

    try {
      const products = await axios.get(
        "https://pickbazar-api-kjy8.onrender.com/api/products"
      );
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <HeroSection />
      <div className="flex">
        <Categories />
        <ProductsSection products={products} />
      </div>
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
