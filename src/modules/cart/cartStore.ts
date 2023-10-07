import { useShallow } from 'zustand/react/shallow';

import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { useCookieStore } from '../cookies/cookieStore';
import type { Product } from '../products/productTypes';

type CartStore = {
  products: Array<Product & { amount: number }>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  incAmount: (id: number) => void;
  decAmount: (id: number) => void;
  getProductsId: () => Map<number, number>;
  getTotalPrice: () => number;
};

export const useCartStore = () => {
  const { userName } = useCookieStore();

  const store = create<CartStore>()(
    persist(
      (set, get) => ({
        products: [],
        addProduct: (product) => {
          return set(
            produce<CartStore>((state) => {
              state.products.push({ ...product, amount: 1 });
            }),
          );
        },
        removeProduct: (id) => {
          return set(
            produce<CartStore>((state) => {
              const targetIndex = state.products.findIndex((p) => p.id === id);
              state.products.splice(targetIndex, 1);
            }),
          );
        },
        incAmount: (id) => {
          return set(
            produce<CartStore>((state) => {
              const targetProduct = state.products.find(
                (product) => product.id === id,
              );

              if (targetProduct) {
                targetProduct.amount += 1;
              }
            }),
          );
        },
        decAmount: (id) => {
          return set(
            produce<CartStore>((state) => {
              const targetProduct = state.products.find(
                (product) => product.id === id,
              );

              if (targetProduct) {
                targetProduct.amount -= 1;
              }
            }),
          );
        },
        getProductsId: () => {
          const { products } = get();
          const idMap = new Map();

          products.forEach((product) => {
            idMap.set(product.id, product.amount);
          });

          return idMap;
        },
        getTotalPrice: () => {
          const { products } = get();

          return +products
            .reduce((prev, current) => prev + current.price * current.amount, 0)
            .toFixed(2);
        },
      }),
      { name: `${userName}-cartStore` },
    ),
  );

  return store(useShallow((state) => state));
};
