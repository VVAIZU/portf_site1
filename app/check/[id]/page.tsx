import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { prisma } from "@/prisma/prisma-client";
import toast from "react-hot-toast";

export default function Checkout({ params: { id } }: { params: { id: string } }) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Проверка, залогинен ли пользователь
        const token = localStorage.getItem("token");
        if (!token) {
            // Если не залогинен, перенаправляем на страницу логина
            router.push("/login");
        } else {
            // Если залогинен, загружаем продукт из базы
            const fetchProduct = async () => {
                const product = await prisma.product.findFirst({
                    where: { id: Number(id) }
                });
                setProduct(product);
            };

            fetchProduct();
        }
    }, [id, router]);

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            // Инициализируем процесс оплаты через YooKassa или другое API
            const token = localStorage.getItem("token");
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ productId: product?.id }),
            });

            const data = await response.json();
            if (data.success) {
                // Если покупка успешна, уведомляем и перенаправляем на страницу товара
                toast.success("Оплата успешна, спасибо за покупку!");
                router.push(`/product/${id}`);
            } else {
                toast.error(data.message || "Произошла ошибка при оплате.");
            }
        } catch (error) {
            console.error("Error during payment:", error);
            toast.error("Произошла ошибка при оплате. Попробуйте снова.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!product) {
        return <p>Загрузка...</p>;
    }

    return (
        <div className="flex flex-col my-10">
            <h1>{product.name}</h1>
            <p>Цена: {product.price} ₽</p>
            <div>
                {product.imagesUrl.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-auto" />
                ))}
            </div>
            <button onClick={handlePayment} disabled={isLoading} className="mt-4">
                {isLoading ? "Обработка..." : "Оплатить"}
            </button>
        </div>
    );
}
