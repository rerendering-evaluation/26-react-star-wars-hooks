import { memo } from "react";
import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
const Home = memo(() => {
  return <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>;
});
export default Home;