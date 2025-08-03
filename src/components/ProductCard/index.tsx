import React from 'react';
import { ProductCardContainer, ProductImage, ProductInfo, ProductTitle, ProductDescription } from './styles';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={imageSrc} alt={imageAlt} />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;