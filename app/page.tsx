import Product from "@/components/Product";

export default async function Home() {
  // get products from fake store api
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <main className="mx-2">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">Deals of the Day</h1>

        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
}
