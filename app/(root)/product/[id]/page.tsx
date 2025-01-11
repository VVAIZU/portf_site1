import { Container } from "@/components/craft"
// import { ProductForm } from "@/components/shared/productform";
import { Button } from "@/components/ui/button";

import { prisma } from "@/prisma/prisma-client"
import toast from "react-hot-toast";


export default async function ProductPage({ params: { id } }: { params: { id: string } }) {

    const product = await prisma.projects.findFirst({
        where: { id: Number(id) }
    });


    if (!product) {
        return {
            notFound: true, // Возвращаем ошибку 404, если продукт не найден
        };
    }

    return (
        <>
            <p>{product.name}</p>
        </>
    )
}