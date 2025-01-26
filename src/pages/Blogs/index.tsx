import React from 'react';
import { SvgIcon } from '../../common/SvgIcon';
import styles from './blogs.module.css';
import { MidTitle } from '../../components/ContentBlock/styles';

const Products = () => {
  return (
    <div className={styles.container}>
      <MidTitle>
        This Blog is Getting a Glow-Up!”<br></br>
        Stay tuned—awesome content, reviews, and insights are on the way. You
        won’t want to miss it!
      </MidTitle>
      <SvgIcon src="underconstruction.svg" width="350px" height="400px" />
    </div>
  );
};

export default Products;
