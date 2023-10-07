import { useCartStore } from '@/modules/cart/cartStore';

const CartPage = () => {
  const { products } = useCartStore();

  console.log({ products });

  return <h1>Cart Page</h1>;
};

export default CartPage;
