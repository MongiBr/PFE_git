import React from "react";
import { CartContext } from "contexts/cart/cart.context";
import { FormattedMessage } from "react-intl";
import Image from "components/Image/Image";
import Button from "../Button/Button";
import InputIncDec from "../InputIncDec/InputIncDec";
import { CartIcon } from "../AllSvgIcon";
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  SaleTag,
  DiscountPercent,
} from "./ProductCard.style";
import { getProductQuantity, findProductIndex } from "../helpers/utility";

type ProductCardProps = {
  title: string;
  image: any;

  deliveryFees: string;
  description: string;

  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};

const MagasinCard: React.FC<ProductCardProps> = ({
  title,
  image,

  cartProducts,

  value,

  onChange,

  deliveryFees,
  description,

  deviceType,
  onClick,
  ...props
}) => {
  const { add, update, products } = React.useContext(CartContext);

  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: "relative" }}
          alt={title}
        />
      </ProductImageWrapper>
      <ProductInfo>
        <h3 className="product-title">{title}</h3>
        <h2> {description}</h2>
        <div className="product-meta">
          <div className="productPriceWrapper">
            <span>{deliveryFees}</span>
          </div>

          <Button
            title="view"
            intlButtonId="ViewMagasin"
            iconPosition="left"
            colors="primary"
            size="small"
            variant="outlined"
            className="cart-button"
          />
        </div>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default MagasinCard;
