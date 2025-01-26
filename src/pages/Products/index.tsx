import React from 'react';
import { SvgIcon } from '../../common/SvgIcon';
import styles from './products.module.css';
import { MidTitle } from '../../components/ContentBlock/styles';

const Products = () => {
  return (
    <div className={styles.container}>
      <MidTitle>
        This page is getting a makeover.<br></br>Awesome products will be here
        soon!
      </MidTitle>
      <SvgIcon src="underconstruction.svg" width="350px" height="400px" />
    </div>
  );
};

export default Products;
