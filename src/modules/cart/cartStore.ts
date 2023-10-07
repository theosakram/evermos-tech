import { useShallow } from 'zustand/react/shallow';

import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { useCookieStore } from '../cookies/cookieStore';
import type { Product } from '../products/productTypes';

type CartStore = {
  products: Array<Product>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};

export const useCartStore = () => {
  const { userName } = useCookieStore();

  const store = create<CartStore>()(
    persist(
      (set) => ({
        products: [],
        addProduct: (product) => {
          return set(
            produce<CartStore>((state) => {
              state.products.push(product);
            }),
          );
        },
        removeProduct: (id) => {
          return set(
            produce<CartStore>((state) => {
              state.products.filter((val) => val.id !== id);
            }),
          );
        },
      }),
      { name: `${userName}-cartStore` },
    ),
  );

  return store(useShallow((state) => state));
};
