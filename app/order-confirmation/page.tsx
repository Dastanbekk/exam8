import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  return (
    <div className="container max-w-md mx-auto py-16 px-4 text-center">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>

      <p className="text-gray-600 mb-8">
        Thank you for your purchase. We've sent a confirmation email with your
        order details.
      </p>

      <Button
        asChild
        className="bg-black text-white hover:bg-gray-800 rounded-full"
      >
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
