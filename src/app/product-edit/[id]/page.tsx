import { notFound } from "next/navigation"
import ProductEditForm from "./product-edit"
import { getProduct } from "@/app/prisma-db"

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null
}

export default async function ProductEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product: Product | null = await getProduct(parseInt(id))
  console.log(product, "products")
  if (!product) {
    notFound()
  }
  

  return (
    <ProductEditForm product={product} />
  )
}
