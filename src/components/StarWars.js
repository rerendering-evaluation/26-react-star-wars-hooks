import { memo } from "react";
import React from 'react';
import { starWarsInfo } from "../utils/constants";
import styles from '../css/farGalaxy.module.css';
const StarWars = memo(() => {
  return <div className={styles.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>;
});
export default StarWars;