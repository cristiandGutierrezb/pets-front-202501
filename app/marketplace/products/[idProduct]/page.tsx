
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/modules/marketplace/products/ProductDetail"

import { ProductDAO } from "@/interfaces/MarketplaceInterface";

interface ProductPageProps {
  params: Promise<{ idProduct: string }>;
}

export async function generateStaticParams() {
  const static151Pokemons = Array.from({ length: 30 }).map((_, i) => `${i + 1}`)

  return static151Pokemons.map(id => ({ id }));
  // return static151Pokemons.map(id => ({ params: { idProduct: id } }));

}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  try {
    const idProduct = (await params).idProduct
    const { id_product, title } = await getProduct(idProduct);

    return {
      title: `#${id_product} - ${title}`,
      description: `Página del producto ${title}`,
    };
  } catch {
    return {
      title: `#00 - No existente`,
      description: `Página del producto no existente`,
    };
  }
}

const getProduct = async (id: string): Promise<ProductDAO> => {
  try {
    const product = await fetch(``).then((resp) => resp.json());

    return product;
  } catch {
    notFound()
  }
};

export default async function ProductPage({ params }: ProductPageProps) {
  const idProduct = (await params).idProduct
  // Obtener 

  return <ProductDetail idProduct={idProduct ? +idProduct : 0}/>
}
