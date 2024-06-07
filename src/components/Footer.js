import { memo } from "react";
import React from 'react';
import styles from '../css/footer.module.css';
const Footer = memo(() => {
  return <footer className="row align-items-center m-0">
            <div className="btn btn-danger col-2 offset-2">
                <p className="text-center m-0">Send me an <span className={`${styles.email} text-uppercase`}>email</span></p>
            </div>
        </footer>;
});
export default Footer;