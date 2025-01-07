'use client'

import { cn } from '@/lib/utils';
import React from 'react'
import { ProductCard } from './productcard';

import Placeholder from "../../public/buffer/productimage.png"
import { SiteProduct } from '@/@types/prisma';

interface Props {
    title: string;
    items: SiteProduct[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    className,
    listClassName,
    categoryId
}) => {
    // const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    // const intersectionRef = React.useRef(null);
    // const intersection = useIntersection(intersectionRef, {
    //     threshold: 0.4,
    // });
    return (
        <>
            <h1 className="text-[48px]">
                {title}
            </h1>

            <div className={cn(
                'grid gap-[20px] md:gap-[30px] lg:gap-[50px]',
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
                listClassName
            )}>
                {items.length > 0 ? (
                    items.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl= {"productimage"}
                            description={product.description}
                            price={product.price}
                        />
                    ))
                ): (
                    <p className="text-center text-gray-500">Нет доступных продуктов</p>
                )}
                {/* <ProductCard
                    key = {1}
                    id = {1}
                    name = {"PRODUCT 1"}
                    imageUrl = {"productimage"}
                    description={"Lorem Ipsum ibn zayat"}
                    price = {500}
                />
                <ProductCard
                    key = {1}
                    id = {1}
                    name = {"PRODUCT 2"}
                    imageUrl = {"productimage"}
                    description={"Lorem Ipsum ibn zayat"}
                    price = {500}
                />
                <ProductCard
                    key = {1}
                    id = {1}
                    name = {"PRODUCT 3"}
                    imageUrl = {"productimage"}
                    description={"Lorem Ipsum ibn zayat"}
                    price = {500}
                /> */}

            </div>
        </>
    )


}