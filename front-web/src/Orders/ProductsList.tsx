import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";


type Props = {
    products: Product[];
    selectedproducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedproducts, onSelectProduct }: Props) {
return (
    <div className="orders-list-container">
        <div className="orders-list-items">
            {products.map(product =>(
                <ProductCard 
                key={product.id} 
                product={product} 
                onSelectProduct={onSelectProduct}
                isSelected={checkIsSelected(selectedproducts, product)}
                />
            ))}
        </div>
    </div>
)

}

export default ProductsList;