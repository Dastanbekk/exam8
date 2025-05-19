"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductType } from "@/@types/types";



export function NewArrivals() {
  const [loading, setLoading] = useState(true);
  const [arrivals, setArrivals] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://6828fc576075e87073a57861.mockapi.io/exam-products"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch arrivals");
        }
        const data = await res.json();
        setArrivals(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="py-16">
        <div className="containerr">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            NEW ARRIVALS
          </h2>

          <div className="flex space-x-4 overflow-x-auto justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-[250px] bg-gray-300 h-[350px] rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 ">
      <div className="containerr">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arrivals?.map((product) =>
            Number(product.id) <= 4 ? (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="no-underline"
              >
                <Card className="rounded-xl overflow-hidden border-none  hover:shadow-md transition-shadow">
                  <div className="relative aspect-square w-full bg-white">
                    <Image
                      src={product.img || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded-xl p-6"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => {
                        if (i < Math.floor(product.rate)) {
                          return (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          );
                        } else if (
                          i === Math.floor(product.rate) &&
                          product.rate % 1 !== 0
                        ) {
                          return (
                            <StarHalf
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          );
                        } else {
                          return (
                            <Star key={i} className="w-4 h-4 text-gray-300" />
                          );
                        }
                      })}
                      <span className="text-sm text-gray-500 ml-1">
                        {product.rate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl">
                        ${product.currentPrice}
                      </span>
                      {product.price && (
                        <>
                          <span className="text-gray-400 line-through">
                            ${product.price}
                          </span>
                          <Badge
                            variant="destructive"
                            className="bg-red-100 text-red-600 hover:bg-red-100 rounded-sm px-2 py-0.5 text-xs font-medium"
                          >
                            -{product.discount}%
                          </Badge>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              ""
            )
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-black text-black hover:bg-black hover:text-white"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
