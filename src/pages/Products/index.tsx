import React from 'react';
import { withTranslation } from 'react-i18next';
import ProductCard from '../../components/ProductCard';
import Container from '../../common/Container';
import styles from './products.module.css';

interface ProductsProps {
  t: any;
}

const Products: React.FC<ProductsProps> = ({ t }) => {
  const products = [
    {
      title: t("Corporate Gifts"),
      description: t("Premium corporate gift solutions for your business needs"),
      imageSrc: "/img/products/corporate-gifts.png",
      imageAlt: "Corporate Gifts"
    },
    {
      title: t("Wedding Return Gifts"),
      description: t("Beautiful and memorable return gifts for wedding celebrations"),
      imageSrc: "/img/products/wedding-gifts.png",
      imageAlt: "Wedding Return Gifts"
    },
    {
      title: t("Printed T-Shirts"),
      description: t("High-quality custom printed t-shirts with your designs"),
      imageSrc: "/img/products/tshirt.png",
      imageAlt: "Printed T-Shirts"
    },
    {
      title: t("Printed Hoodies"),
      description: t("Comfortable hoodies with custom printing options"),
      imageSrc: "/img/products/hoodie.png",
      imageAlt: "Printed Hoodies"
    },
    {
      title: t("Printed Polos"),
      description: t("Professional polo shirts with custom embroidery and printing"),
      imageSrc: "/img/products/polo.png",
      imageAlt: "Printed Polos"
    },
    {
      title: t("Printed Bomber Jackets"),
      description: t("Stylish bomber jackets with custom design printing"),
      imageSrc: "/img/products/bomber-jacket.png",
      imageAlt: "Printed Bomber Jackets"
    },
    {
      title: t("Engraved Luxury Pens"),
      description: t("Premium pens with custom engraving for corporate gifts"),
      imageSrc: "/img/products/luxury-pen.png",
      imageAlt: "Engraved Luxury Pens"
    },
    {
      title: t("Leather Key Chains"),
      description: t("Genuine leather keychains with custom branding"),
      imageSrc: "/img/products/keychain.png",
      imageAlt: "Leather Key Chains"
    },
    {
      title: t("Seed Pencils"),
      description: t("Eco-friendly plantable pencils that grow into plants"),
      imageSrc: "/img/products/seed-pencils.png",
      imageAlt: "Seed Pencils"
    },
    {
      title: t("Customized Laptop Stickers"),
      description: t("Durable vinyl stickers for laptops and devices"),
      imageSrc: "/img/products/laptop-stickers.png",
      imageAlt: "Customized Laptop Stickers"
    },
    {
      title: t("Printed Diaries"),
      description: t("Custom printed diaries for personal and corporate use"),
      imageSrc: "/img/products/diary.png",
      imageAlt: "Printed Diaries"
    },
    {
      title: t("Customized Notebooks"),
      description: t("Personalized notebooks with custom covers and branding"),
      imageSrc: "/img/products/notebook.png",
      imageAlt: "Customized Notebooks"
    },
    {
      title: t("Printed Jute Bags"),
      description: t("Eco-friendly jute bags with custom printing"),
      imageSrc: "/img/products/jute-bag.jpg",
      imageAlt: "Printed Jute Bags"
    },
    {
      title: t("Engraved Stainless Steel Water Bottles"),
      description: t("Premium steel bottles with custom engraving"),
      imageSrc: "/img/products/steel-bottle.png",
      imageAlt: "Engraved Stainless Steel Water Bottles"
    },
    {
      title: t("Customized Calendars"),
      description: t("Personalized calendars with your photos and branding"),
      imageSrc: "/img/products/calendar.png",
      imageAlt: "Customized Calendars"
    }
  ];

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("Our Products")}</h1>
          <p className={styles.subtitle}>
            {t("Discover our wide range of customizable products perfect for corporate gifts, personal use, and promotional items")}
          </p>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
        <div className={styles.moreText}>
          <p>{t("& much more...")}</p>
        </div>
      </Container>
    </div>
  );
};

export default withTranslation()(Products);
