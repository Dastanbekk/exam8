"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Minus, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColorOption, ProductType, SizeOption } from "@/@types/types";
import { useCartStore } from "@/store/storage";

export function ProductDetail({ studentId }: { studentId: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  /* ---------- HOOKS: avval hammasini shu yerda e'lon qilamiz ---------- */
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [mainImage, setMainImage] = useState<string>(
    "/placeholder.svg?height=600&width=600"
  );
  const [quantity, setQuantity] = useState(1);
  const [colorOptions, setColorOptions] = useState<ColorOption[]>([
    { id: "brown", name: "Brown", value: "#5B4D36", selected: true },
    { id: "green", name: "Green", value: "#1F4E4E", selected: false },
    { id: "navy", name: "Navy", value: "#1A2B4D", selected: false },
  ]);

  const [sizeOptions, setSizeOptions] = useState<SizeOption[]>([
    { id: "s", name: "Small", selected: false },
    { id: "m", name: "Medium", selected: false },
    { id: "l", name: "Large", selected: true },
    { id: "xl", name: "X-Large", selected: false },
  ]);

  /* ----------------------- MA'LUMOTNI OLIB KELISH ---------------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://6828fc576075e87073a57861.mockapi.io/exam-products/${studentId}`
        );
        const data = (await res.json()) as ProductType;
        setProduct(data);
        setMainImage(data.img); // birinchi renderda asosiy rasmni o‘rnatamiz
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [studentId]);

  /* -------------------------- LOADING HOLATI --------------------------- */
  if (loading || !product) {
    return <div className="py-12 text-center">Loading...</div>;
  }

  /* ----------------------- SELECTION HANDLERLARI ----------------------- */
  const selectColor = (id: string) =>
    setColorOptions((prev) =>
      prev.map((c) => ({ ...c, selected: c.id === id }))
    );

  const selectSize = (id: string) =>
    setSizeOptions((prev) =>
      prev.map((s) => ({ ...s, selected: s.id === id }))
    );

  const decreaseQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQuantity = () => setQuantity((q) => q + 1);

  // Get cart store functions

  /* ----------------------Button Like --------------------------------- */
  const toggleLike = () => {
    if (!product) return;

    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );

    if (newLikedStatus) {
      localStorage.setItem(
        "likedProducts",
        JSON.stringify([...likedProducts, product])
      );
    } else {
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(
          likedProducts.filter((p: ProductType) => p.id !== product.id)
        )
      );
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    const selectedColor = colorOptions.find((c) => c.selected);
    const selectedSize = sizeOptions.find((s) => s.selected);

    if (!selectedColor || !selectedSize) return;

    addToCart({
      productId: product.id,
      name: product.name,
      image: product.img,
      size: selectedSize.name,
      color: selectedColor.name,
      price: product.price!,
      quantity: quantity,
    });
  };

  /* -------------------------------------------------------------------- */
  return (
    <section className="py-8 md:py-12">
      <div className="containerr px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <Link href="/shop" className="hover:text-black">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <Link href="/shop/men" className="hover:text-black">
            Men
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <span className="text-gray-700">T-shirts</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ------------------------- RASMLAR BLOKI ------------------------ */}
          <div className="flex md:flex-row flex-col gap-4">
            {/* bitta thumbnail */}
            <div className="flex md:flex-col justify-between">
              <button
                className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300"
                onClick={() => setMainImage(product.img)}
              >
                <div className="relative aspect-square w-24 sm:w-32">
                  <Image
                    src={product.img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
              <button
                className="bg-gray-100 hidden sm:block  rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300"
                onClick={() => setMainImage(product.img)}
              >
                <div className="relative aspect-square w-24 sm:w-32">
                  <Image
                    src={product.img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
              <button
                className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300"
                onClick={() => setMainImage(product.img)}
              >
                <div className="relative aspect-square w-24 sm:w-32">
                  <Image
                    src={product.img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
              <button
                className="bg-gray-100 hidden sm:block rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300"
                onClick={() => setMainImage(product.img)}
              >
                <div className="relative aspect-square w-24 sm:w-32">
                  <Image
                    src={product.img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
            </div>

            {/* asosiy rasm */}
            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>

          {/* ----------------------- MA'LUMOT BLOKI ------------------------ */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">4.5/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="text-xl text-gray-400 line-through">
                ${Math.round(product.price! * 1.15)}
              </span>
              <Badge
                variant="destructive"
                className="bg-red-100 text-red-600 hover:bg-red-100 rounded-sm px-2 py-0.5 text-xs font-medium"
              >
                -15%
              </Badge>
            </div>

            {/* Description */}
            <p className="text-gray-600">{product.description}</p>

            {/* Colors */}
            <div>
              <h3 className="font-medium mb-3">Select Colors</h3>
              <div className="flex gap-3">
                {colorOptions.map((c) => (
                  <button
                    key={c.id}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      c.selected ? "ring-2 ring-offset-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: c.value }}
                    onClick={() => selectColor(c.id)}
                  >
                    {c.selected && <span className="text-white">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-3">Choose Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((s) => (
                  <button
                    key={s.id}
                    className={`px-4 py-2 rounded-full text-sm ${
                      s.selected
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => selectSize(s.id)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between border border-gray-300 rounded-full">
                <button
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black"
                  onClick={decreaseQuantity}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                variant="outline"
                className={`border ${
                  isLiked ? "text-red-500 fill-red-500" : ""
                }`}
                onClick={toggleLike}
              >
                <Heart />
              </Button>
              <Button
                className="flex-1 h-10 bg-black text-white hover:bg-gray-800 rounded-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
