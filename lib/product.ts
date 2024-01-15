"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createProduct } from "@/prisma/product";
import { CreateProductProps } from "../prisma/product";
const schema = z.object({
  title: z.string({
    invalid_type_error: "Invalid title",
  }),
  price: z
    .number({
      invalid_type_error: "Invalid price",
    })
    .optional(),

  basicPrice: z
    .number({
      invalid_type_error: "Invalid basic price",
    })
    .optional(),
  author: z.string({
    invalid_type_error: "Invalid author",
  }),
  description: z.string({
    invalid_type_error: "Invalid description",
  }),
  mainImage: z.string({
    invalid_type_error: "Invalid main image url",
  }),
  // category: z.object({
  //   mainCategory: z.string({
  //     invalid_type_error: "Invalid category",
  //   }),
  //   subcategories: z.array(
  //     z.string({
  //       invalid_type_error: "Invalid subcategory",
  //     })
  //   ),
  // }),
  // colors: z.array(
  //   z.object({
  //     imgUrl: z.string({
  //       invalid_type_error: "Invalid image url",
  //     }),
  //     qty: z.number({
  //       invalid_type_error: "Invalid quantity",
  //     }),
  //     price: z
  //       .number({
  //         invalid_type_error: "Invalid price",
  //       })
  //       .optional(),
  //     size: z
  //       .string({
  //         invalid_type_error: "Invalid image url",
  //       })
  //       .optional(),
  //   })
  // ),
});
export default async function createNewProduct(
  prevState: any,
  formData: FormData
) {
  try {
    // console.log(rawData);
    const validatedFields = schema.safeParse({
      title: formData.get("title"),
      price: Number(formData.get("price")),
      basicPrice: Number(formData.get("basicPrice")),
      author: formData.get("author"),
      description: formData.get("description"),
      mainImage: formData.get("mainImage"),
    });

    // Return early if the form data is invalid
    if (!validatedFields.success) {
      console.log("first");
      return {
        errors: { message: validatedFields.error.flatten().fieldErrors },
      };
    }
    const rawData: CreateProductProps = {
      ...validatedFields.data,
      // title: formData.get("title"),
      // price: Number(formData.get("price")),
      // basicPrice: Number(formData.get("basicPrice")),
      // author: formData.get("author"),
      // description: formData.get("description"),
      // mainImage: formData.get("mainImage"),
      category: {
        mainCategory: "Clothes",
        subcategories: ["Shorts", "T-shirt"],
      },
      colors: [
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/S2c99684a4c90463d9d2d75c5c053e7fbY/-.jpg_640x640.jpg_.webp",
          qty: 3,
          price: 200,
          size: "S",
        },
      ],
    };
    console.log("success");
    revalidatePath("/(admin)/dashboard/products/[id]", "page");
    const newProduct = await createProduct(rawData);
    // redirect("/dashboard/products");
    return { message: `${newProduct}` };
  } catch (error) {
    return { message: `err: ${error}` };
  }

  // Mutate data
}
