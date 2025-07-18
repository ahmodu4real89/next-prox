"use server";

import { addProduct, deleteProduct, updateProduct } from "@/app/prisma-db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export type Errors = {
  title?: string
  price?: string
  description?: string
}

export type FormState = {
  errors: Errors
}

export async function createProduct(prevState: FormState, formData: FormData) {

  const title = formData.get('title') as string
  const price = formData.get('price') as string
  const description = formData.get('description') as string
  const errors: Errors = {}
  if (!title) {
    errors.title = "Title is required"
  }

  if (!price) {
    errors.price = "Price is required"
  }

  if (!description) {
    errors.title = "Description is required"
  }
  if (Object.keys(errors).length > 0) {
    return { errors }
  }
  await addProduct(title, parseInt(price), description);
  redirect("/product-db")
}



export async function EditProduct(id: number, prevState: FormState, formData: FormData) {

  const title = formData.get('title') as string
  const price = formData.get('price') as string
  const description = formData.get('description') as string
  const errors: Errors = {}
  if (!title) {
    errors.title = "Title is required"
  }

  if (!price) {
    errors.price = "Price is required"
  }

  if (!description) {
    errors.title = "Description is required"
  }
  if (Object.keys(errors).length > 0) {
    return { errors }
  }
  await updateProduct(id, title, parseInt(price), description);
  redirect("/product-db")
} 



export async function removeProduct(id:number) {
 await deleteProduct(id)
  revalidatePath("/product-db")
   redirect("/product-db"); 
}
