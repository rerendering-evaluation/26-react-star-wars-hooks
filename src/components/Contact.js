import { memo } from "react";
import React, { useEffect, useState } from 'react';
import "../css/contact.css";
import { base_url, period_month } from "../utils/constants";
const Contact = memo(() => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         planets: ['wait...']
  //     };
  // }

  const [planets, setPlanets] = useState(['wait...']);
  useEffect(() => {
    const fillPlanets = async url => {
      const response = await fetch(url);
      const json = await response.json();
      const planets1 = json.map(item => item.name);
      setPlanets(planets1);
      // this.setState({planets1});
      const info = {
        payload: planets1,
        time: Date.now()
      };
      localStorage.setItem('planets', JSON.stringify(info));
    };
    const planets2 = JSON.parse(localStorage.getItem('planets'));
    if (planets2 && Date.now() - planets2.time < period_month) {
      setPlanets(planets2.payload);
      // this.setState({ planets: planets.payload });
    } else {
      fillPlanets(`${base_url}/v1/planets`);
    }
    return console.log('Contact unmounted');
  }, []);
  return <div>
            <form onSubmit={e => {
      e.preventDefault();
    }}>
                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.." />
                </label>
                <label>Planet
                    <select name="planet">{planets.map((item, index) => <option value={item} key={index}>{item}</option>)}
                    </select>
                </label>
                <label>Subject
                    <textarea name="subject" placeholder="Write something.." />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>;
});
export default Contact;