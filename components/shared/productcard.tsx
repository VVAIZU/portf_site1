import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, description, className }) => {
    return (
        <Link href={`/product/${id}`} className={`${className} block rounded-lg bg-white shadow-md transition-transform transform hover:scale-105`}>
            <div className='flex justify-center p-6 bg-secondary rounded-t-lg h-[260px]'>
                <img className='w-full h-full object-contain' src={imageUrl} alt={name} />
            </div>

            <div className='p-4'>
                <h1 className="text-[30px] font-light">{name}</h1>
                <p className='text-sm text-gray-600'>
                    {description}
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-lg font-semibold'>
                        <b>{price} P</b>
                    </span>

                    <Button
                        className="w-fit rounded-xl bg-black text-white"
                        size={"sm"}
                        variant={"default"}
                    >
                        <Plus size={20} className="mr-2" />
                        Добавить
                    </Button>
                </div>
            </div>
        </Link>
    )
}