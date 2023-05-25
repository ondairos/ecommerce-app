import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params: { id } }: Props) {
  try {
    // fetch single product
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await response.json();
    return (
      <div className="max-w-5xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-8 px-4 mt-30 pb-6">
        <ProductImage product={product} />

        <div>
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
              {product.price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
