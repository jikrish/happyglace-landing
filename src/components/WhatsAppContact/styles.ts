import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const WhatsAppButtonContainer = styled("div")`
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const WhatsAppButton = styled("button")`
  background: #25d366;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

  &:hover {
    background: #128c7e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 414px) {
    padding: 14px 24px;
    font-size: 16px;
  }
`;