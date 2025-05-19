"use client";

import { ProductType } from "@/@types/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LikeGlobal() {
  const [likedProducts, setLikedProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("likedProducts");
    if (!raw) return;
    try {
      setLikedProducts(JSON.parse(raw));
    } catch {
      setLikedProducts([]);
    }
  }, []);
  const removeProduct = (id: string) => {
    const updated = likedProducts.filter((p) => p.id !== id);
    setLikedProducts(updated);
    localStorage.setItem("likedProducts", JSON.stringify(updated));
  };

  return (
    <section className="py-10">
      <div className="containerr">
        <h1 className="text-xl font-bold mb-6">Liked products</h1>

        {likedProducts.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Siz hali hech qanday mahsulotga ❤ bosmadingiz.
            </p>
            <Link
              href="/shop"
              className="inline-block rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {likedProducts.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between gap-4 rounded-xl border p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={p.img || "/placeholder.svg"}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="font-medium">{p.name}</h2>
                    {p.price && (
                      <span className="text-sm font-semibold text-green-600">
                        ${p.price}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => removeProduct(p.id)}
                  aria-label="Remove from liked"
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
