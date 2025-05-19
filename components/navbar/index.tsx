"use client";

import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/project-svg/logo.svg";
import { ProductType } from "@/@types/types";

export function Navbar() {
  const [likedProducts, setLikedProducts] = useState<ProductType[]>([]);
  const [isPromoVisible, setIsPromoVisible] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("cart-storage");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      setCartCount(parsed.state?.cartItems?.length || 0);
    } catch {
      setCartCount(0);
    }
    const rawLikes = localStorage.getItem("likedProducts");
    if (rawLikes) {
      try {
        setLikedProducts(JSON.parse(rawLikes));
      } catch {
        setLikedProducts([]);
      }
    }
  }, []);

  return (
    <header className="w-full">
      {isPromoVisible && (
        <div className="relative w-full bg-black text-white py-2 px-4 text-center text-sm">
          <p>
            Sign up and get 20% off to your first order.
            <Button
              variant="link"
              className="text-white p-0 h-auto text-sm font-bold ml-1"
            >
              Sign Up Now
            </Button>
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-white hover:bg-gray-800 p-0"
            onClick={() => setIsPromoVisible(false)}
          >
            ×
          </Button>
        </div>
      )}

      <div className="border-b">
        <div className="containerr ">
          <div className="flex h-16 w-full items-center justify-between py-4">
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="font-bold text-2xl">
                <Image
                  src={logo}
                  alt="Fashion models wearing stylish clothing"
                  className="w-full max-w-[150px] "
                  priority
                />
              </Link>

              <NavigationMenu className="hidden  md:flex">
                <NavigationMenuList className="flex gap-5">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white z-10">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li className="row-span-3">
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              New Collection
                            </div>
                            {/* <p className="text-sm leading-tight text-muted-foreground">
                              Check out our latest arrivals for the upcoming season
                            </p> */}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Men</Link>
                        </li>
                        <li>
                          <Link href="#">Women</Link>
                        </li>
                        <li>
                          <Link href="#">Accessories</Link>
                        </li>
                        <li>
                          <Link href="#">Shoes</Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#">On Sale</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#">New Arrivals</Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#">Brands</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex w-[55%] justify-end items-center gap-4">
              <div className="relative w-full  hidden md:flex items-center">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full pl-8 rounded-full bg-muted bg-[#f2f0f1] border-none"
                />
              </div>

              <Link href="/like" className="relative">
                <div className="absolute top-[-5] flex items-center justify-center rounded-full text-white right-[-5] w-4 h-4 bg-red-500 ">
                  {likedProducts?.length}
                </div>
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="relative">
                <div className="absolute top-[-5] flex items-center justify-center rounded-full text-white right-[-5] w-4 h-4 bg-red-500 ">
                  {cartCount}
                </div>
                <ShoppingCart className="h-5 w-5" />
              </Link>

              <Link href="#">
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
