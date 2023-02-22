import React, {Component, useEffect, useState} from 'react';
import {base_url} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';

const FarGalaxy = props => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         opening_crawl: 'Loading...'
    //     }
    // }
    const [opening_crawl, setOpening_crawl] = useState('Loading...');

    useEffect(() => {
        const opening_crawl1 = sessionStorage.getItem('opening_crawl');
        if (opening_crawl1) {
            setOpening_crawl(opening_crawl1)
            // this.setState({opening_crawl})
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpening_crawl(data.opening_crawl)
                    // this.setState({opening_crawl: data.opening_crawl});
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, [])


        return (
            <p className={styles.farGalaxy}>{opening_crawl}</p>
        );

}

export default FarGalaxy;