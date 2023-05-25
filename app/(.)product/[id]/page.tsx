"use client";

import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// modal function
import React from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  // get id with useParams
  const id = useParams().id;
  // state for products
  const [product, setProduct] = useState<Product>();

  // fetch product client side
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();

      setProduct(product);
    }

    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* the backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* fullscreen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* dialog panel */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
            <div className="flex gap-x-8 h-96">
              {product?.image && (
                <div className="relative w-72 h-full hidden md:inline">
                  <ProductImage product={product} fill />
                </div>
              )}

              <div>
                <div>
                  <h4 className="font-semibold">{product?.title}</h4>
                  <p className="font-medium text-sm">{product?.price}</p>
                  <div>
                    <p>{product?.rating.rate}</p>
                    {product?.rating.rate && (
                      <div className="flex items-center ml-2 mr-6">
                        {/* display 5 stars but display the rate ones as StarIconOutline */}
                        {Array.from(
                          { length: Math.floor(product.rating.rate) },
                          (_, i) => (
                            <StarIcon
                              key={i}
                              className="h-4 w-4 text-yellow-500"
                            />
                          )
                        )}

                        {/* Display the rest of the stars as StarIconOutline  */}
                        {Array.from(
                          { length: 5 - Math.floor(product.rating.rate) },
                          (_, i) => (
                            <StarIconOutline
                              key={i}
                              className="h-4 w-4 text-yellow-500"
                            />
                          )
                        )}
                      </div>
                    )}
                    <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                      See all {product?.rating.count} reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
