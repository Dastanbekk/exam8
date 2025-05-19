import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) => 
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => 
              cartItem.productId === item.productId && 
              cartItem.size === item.size && 
              cartItem.color === item.color
          );
          
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.id === existingItem.id
                  ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                  : cartItem
              ),
            };
          }
          
          return {
            cartItems: [
              ...state.cartItems,
              {
                ...item,
                id: Date.now().toString(),
              },
            ],
          };
        }),
      updateQuantity: (id, newQuantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
        })),
      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'cart-storage', // name for localStorage
    }
  )
);