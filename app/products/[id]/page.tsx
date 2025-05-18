import { ProductReviews } from "@/components/product-details/comments";
import { MightProducts } from "@/components/product-details/might-products";
import { ProductDetail } from "@/components/product-details/product";

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <ProductDetail studentId={id} />
      <ProductReviews />
      <MightProducts />
    </>
  );
}
