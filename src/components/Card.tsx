import { CardProps } from "@/types";
import { Icons, QtyController } from "@/components";
import { calculatePrice, formatCurrency } from "@/utils";
import {
  addToCart,
  decrement,
  increment,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function Card({ product }: CardProps) {
  let { id, name, description, price, images, category, discount } = product;
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const isExistInCart = cart.some((item) => item.id === id);
  const productInCart = cart.find((item) => item.id === id);

  return (
    <div className="h-[410px] relative border rounded-md bg-white">
      {discount ? (
        <div className="absolute top-3 right-3 z-10 bg-orange-300 text-white text-sm px-2 rounded-xl">
          {discount}%
        </div>
      ) : null}
      <div className="h-[256px]">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[164px] flex flex-col justify-end px-5 py-6">
        <h4 className="pb-8">{name}</h4>
        <div className="h-10 flex items-end justify-between">
          <div className="flex flex-col">
            {discount ? (
              <h5 className="italic line-through text-gray-400 text-sm">
                {formatCurrency(price)}
              </h5>
            ) : null}
            <h5 className="text-primary font-bold">
              {formatCurrency(calculatePrice(price, discount))}
            </h5>
          </div>
          {isExistInCart && productInCart ? (
            <QtyController
              variant="secondary"
              qty={productInCart?.qty}
              increment={() => dispatch(increment(id))}
              decrement={() =>
                productInCart.qty > 1
                  ? dispatch(decrement(id))
                  : dispatch(removeFromCart(id))
              }
            />
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="group flex items-center gap-x-2 px-5 py-2 border border-gray-200 rounded-3xl hover:border-primary hover:bg-primary transition-all"
            >
              <Icons.cart className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5 fill-primary group-hover:fill-white transition-all" />
              <span className="text-primary group-hover:text-white transition-all">
                Cart
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
