"use client";

import { useState } from "react";
import { Star, MoreHorizontal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { reviews } from "@/lib/data";

export function ProductReviews() {
  const [visibleReviews, setVisibleReviews] = useState(6);

  const loadMoreReviews = () => {
    setVisibleReviews(visibleReviews + 6);
  };

  return (
    <section className="py-8 md:pt-12 pb-20">
      <div className="containerr px-4">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger  value="details">Product Details</TabsTrigger>
            <TabsTrigger  value="reviews">Rating & Reviews</TabsTrigger>
            <TabsTrigger  value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews">
            <div className="flex flex-col space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  All Reviews{" "}
                  <span className="text-gray-500 font-normal">(451)</span>
                </h2>
                <div className="flex items-center gap-4">
                  <Select defaultValue="latest">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full">
                    Write a Review
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.slice(0, visibleReviews).map((review, index) => (
                  <div
                    key={review.id}
                    className={`border border-gray-200 rounded-lg p-6 ${
                      index >= 3 ? "hidden md:block" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => {
                          const value = i + 1;
                          return (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                value <= Math.floor(review.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : value - 0.5 <= review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Report review</DropdownMenuItem>
                          <DropdownMenuItem>Share review</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{review.author}</h3>
                        {review.verified && (
                          <div className="bg-green-500 rounded-full p-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 mt-2">
                        &quot;{review.content}&quot;
                      </p>
                    </div>

                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                ))}
              </div>

              {visibleReviews < reviews.length && (
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    onClick={loadMoreReviews}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Load More Reviews
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-bold mb-4">Product Details</h3>
              <p className="text-gray-700">
                This premium graphic t-shirt is made from 100% organic cotton,
                providing exceptional comfort and durability. The unique design
                is screen-printed using eco-friendly inks that won't fade after
                washing.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>100% organic cotton</li>
                <li>Regular fit</li>
                <li>Screen-printed design</li>
                <li>Machine washable at 30°C</li>
                <li>Made in Portugal</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="faqs">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-bold mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">How does the sizing run?</h4>
                  <p className="text-gray-700 mt-1">
                    Our t-shirts are true to size with a regular fit. If you
                    prefer a looser fit, we recommend sizing up.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    What's the best way to wash this t-shirt?
                  </h4>
                  <p className="text-gray-700 mt-1">
                    For best results, machine wash cold with similar colors and
                    tumble dry low.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    Do you offer international shipping?
                  </h4>
                  <p className="text-gray-700 mt-1">
                    Yes, we ship worldwide. International orders typically take
                    7-14 business days to arrive.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
