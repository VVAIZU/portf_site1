import * as React from "react";
import { ProductsGroupList } from "./shared/product-group-list";
import { prisma } from "@/prisma/prisma-client";
import { ProductCard } from "./shared/productcard";
import { cn } from "@/lib/utils";
import { Section } from "./craft";
import DynamicSlider from "./slider";

export default async function GameShop() {
    const products = await prisma.product.findMany();

    return (
        <Section className="mt-40">
            <h1>Game Shop</h1>

            <div className="grid gap-[20px] md:gap-[30px] lg:gap-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={"image"} // Используйте правильное поле для изображения
                            description={product.description}
                            price={product.price}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">Нет доступных продуктов</p>
                )}
            </div>
        </Section>

    );
}