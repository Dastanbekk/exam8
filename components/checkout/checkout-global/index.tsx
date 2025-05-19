"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useCartStore } from "@/store/storage";
import { ContactInfo } from "@/@types/types";



export function CheckoutGlobal() {
  const { cartItems, removeItem, clearCart } = useCartStore();

  const router = useRouter();
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 135; 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !contactInfo.firstName ||
      !contactInfo.lastName ||
      !contactInfo.phone ||
      !contactInfo.email
    ) {
      toast("Please fill in all contact information");
      return;
    }

    if (cartItems.length === 0) {
      toast("Your cart is empty");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();

      setIsSubmitting(false);

      toast("Order Placed Successfully");

      router.push("/order-confirmation");
    }, 1500);
  };

  return (
    <section className="py-15 md:pr-12 md:pb-20">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="md:hidden mb-4">
          <Link
            href="/cart"
            className="flex items-center text-sm text-gray-600 hover:text-black"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            back
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Check Out
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="border rounded-lg p-6">
            <h2 className="font-medium mb-4">Contact Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-xs uppercase text-gray-500"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={contactInfo.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="text-xs uppercase text-gray-500"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={contactInfo.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="phone"
                  className="text-xs uppercase text-gray-500"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={contactInfo.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="email"
                  className="text-xs uppercase text-gray-500"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={contactInfo.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-6">
            <h2 className="font-medium mb-4">Order summary</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{item.name} (x{item.quantity})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-red-500 cursor-pointer text-sm hover:underline"
                    >
                      [O'chirish]
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between py-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-2 font-bold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || cartItems.length === 0}
            className="w-[100%] sm:w-[50%] bg-black text-white hover:bg-gray-800 h-12 rounded-md"
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </Button>
        </div>
      </div>
    </section>
  );
}