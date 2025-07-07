/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient()

export async function getProducts(query?:string) {
    await new Promise((resolve)=>setTimeout(resolve, 1500))
    if(query){
      return prisma.product.findMany({
        where:{
          OR:[
            {title: {contains:query}},
            {description:{contains:query}}
          ],
        },
      })
    }
  return prisma.product.findMany()
}

export  async function getProduct(id:number) {
    await new Promise((resolve)=>setTimeout(resolve, 1500))
  return prisma.product.findUnique({
    where:{id}
  })
}

export  async function addProduct(title:string, price:number, description:string) {
    await new Promise((resolve)=>setTimeout(resolve, 1500))
  return prisma.product.create({
    data:{title, price, description}
  })
}


export  async function updateProduct(id:number, title:string, price:number, description:string) {
    await new Promise((resolve)=>setTimeout(resolve, 1500))
  return prisma.product.update({
    where:{id},
    data:{title, price, description}
  })
}


export async function deleteProduct(id:number) {
    await new Promise((resolve)=>setTimeout(resolve, 1500))
    return prisma.product.delete({
        where:{id},
    })
}


