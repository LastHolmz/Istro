"use server";
import { Category, PrismaClient, Project } from "@prisma/client";
const prisma = new PrismaClient();

/* 
export interface CreateProductProps {
  price?: number;
  basicPrice?: number;
  author: string;
  description: string;
  category: {
    // create: {
    mainCategory: string;
    subcategories: string[];
    // };
  };
  colors: {
    // create: {
    imgUrl: string;
    qty: number;
    price?: number;
    size?: string;
    // }[];
  }[];
}
*/

export interface CreateProductProps {
  price?: number;
  title: string;
  basicPrice?: number;
  author: string;
  description: string;
  mainImage: string;
  category: {
    // create: {
    mainCategory: string;
    subcategories: string[];
    // };
  };
  colors: {
    // create: {
    imgUrl: string;
    qty: number;
    price?: number;
    size?: string;
    // }[];
  }[];
}

export async function createProduct(props: CreateProductProps) {
  const newProduct = await prisma.product.create({
    data: {
      title: props.title,
      price: props.price,
      basicPrice: props.basicPrice,
      author: props.author,
      description: props.description,
      mainImage: props.mainImage,
      category: {
        create: {
          ...props.category,
        },
      },
      colors: {
        create: props.colors,
      },
    },
    include: {
      category: true,
      colors: true,
    },
  });

  return newProduct;
}

export async function getAllProducts() {
  const products = await prisma.product.findMany({});
  return products;
}

// export async function createProject({
//   email,
//   name,
// }: {
//   email: string;
//   name: string;
// }): Promise<Project> {
//   const project = await prisma.project.create({
//     data: {
//       email: email || "helo@gjklfds.com",
//       name: name || "name",
//     },
//   });
//   return project;
// }

// // Update an existing product
// export async function updateProduct(
//   id: string,
//   auther?: string,
//   description?: string,
//   categoryId?: string
// ): Promise<Product> {
//   const updatedProduct = await prisma.product.update({
//     where: { id },
//     data: {
//       auther,
//       description,
//       categories: categoryId
//         ? {
//             set: { id: categoryId },
//           }
//         : undefined,
//     },
//     include: {
//       categories: true,
//     },
//   });

//   return updatedProduct;
// }

// // Get a single product by ID
// export async function getProductById(id: string): Promise<Product | null> {
//   const product = await prisma.product.findUnique({
//     where: { id },
//     include: {
//       categories: true,
//     },
//   });

//   return product;
// }

// // Get all products
// export async function getAllProducts(): Promise<Product[]> {
//   const products = await prisma.product.findMany({
//     include: {
//       categories: true,
//     },
//   });

//   return products;
// }

// // Filter products by category
// export async function filterProductsByCategory(
//   categoryId: string
// ): Promise<Product[]> {
//   const products = await prisma.product.findMany({
//     where: {
//       categories: {
//         some: { id: categoryId },
//       },
//     },
//     include: {
//       categories: true,
//     },
//   });

//   return products;
// }

// // Filter products by author
// export async function filterProductsByAuthor(
//   auther: string
// ): Promise<Product[]> {
//   const products = await prisma.product.findMany({
//     where: {
//       auther,
//     },
//     include: {
//       categories: true,
//     },
//   });

//   return products;
// }

// // Delete a product by ID
// export async function deleteProduct(id: string): Promise<Product> {
//   const deletedProduct = await prisma.product.delete({
//     where: { id },
//     include: {
//       categories: true,
//     },
//   });

//   return deletedProduct;
// }
