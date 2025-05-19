"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/storage";
import { useRouter } from "next/navigation";

export function ShoppingCart() {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");

  const { cartItems, updateQuantity, removeItem } = useCartStore();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <section className="py-15 md:pt-12 md:pb-20">
      <div className="containerr px-4">
        <nav className="flex items-center text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <span className="text-gray-700">Cart</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {cartItems.length > 0 ? (
                <div className="divide-y divide-gray-300">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 md:p-6 flex flex-col md:flex-row md:items-center"
                    >
                      <div className="flex items-center flex-1 mb-4 md:mb-0">
                        <div className="bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between md:block">
                            <h3 className="font-medium">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 md:hidden"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                          <p className="text-sm text-gray-500">
                            Color: {item.color}
                          </p>
                          <p className="font-bold mt-1 md:hidden">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:w-auto md:ml-auto">
                        <div className="hidden md:block font-bold mr-8">
                          ${item.price}
                        </div>
                        <div className="flex items-center border rounded-full mr-4 md:mr-8">
                          <button
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="hidden md:block text-red-500"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="mb-4">Your cart is empty</p>
                  <Button asChild>
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (-20%)</span>
                  <span className="font-medium text-red-500">-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="pl-10 pr-4 py-2 h-10 rounded-full"
                    />
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
                    Apply
                  </Button>
                </div>

                <Button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12"
                >
                  Go to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
