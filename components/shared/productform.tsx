import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { SiteProduct } from "@/@types/prisma";

interface Props {
    id: number,
    name: string;
    className?: string;
    price: number;
    description: string;
}

const ProductForm: React.FC<Props> = ({id, name, className, price, description, }) => {
    const handleBuyClick = () => {
        // Здесь используем product.id вместо id, чтобы ссылка была динамичной
        window.location.href = `/checkout/${id}`;
    };

    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <Button onClick={handleBuyClick}>Купить</Button>
            </div>
        </Container>
    );
};

export default ProductForm;
