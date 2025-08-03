import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;
`;

export const ProductInfo = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2e2e2e;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
`;