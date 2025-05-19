import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import visa from "@/public/project-svg/visa.svg";
import mastercard from "@/public/project-svg/mastercard.svg";
import paypal from "@/public/project-svg/paypal.svg";
import pay from "@/public/project-svg/pay.svg";
import google from "@/public/project-svg/google.svg";

export function Footer() {
  return (
    <footer className="bg-gray-100 pb-12 pt-30 mt-auto">
      <div className="containerr px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-bold">SHOP.CO</h2>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              We have clothes that suits your style and which you're proud to
              wear. From women to men
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="bg-black rounded-full p-2 text-white hover:bg-gray-800"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 rounded-full p-2 text-black hover:bg-gray-300"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 rounded-full p-2 text-black hover:bg-gray-300"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 rounded-full p-2 text-black hover:bg-gray-300"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
              HELP
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
              FAQ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black"
                >
                  YouTube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Shopco © 2000-2023. All Rights Reserved.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 space-x-1">
            <Image
              src={paypal}
              alt="Visa"
            />
            <Image
              src={mastercard}
              alt="Mastercard"
            />
            <Image
              src={paypal}
              alt="PayPal"
            />
            <Image
              src={pay}
              alt="Apple Pay"
            />
            <Image
              src={google}
              alt="Google Pay"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
