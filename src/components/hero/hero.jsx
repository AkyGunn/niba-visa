import React from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import './hero.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';


gsap.registerPlugin(TextPlugin);
const Hero = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  const textRef = useRef(null);

   useEffect(() => {
    gsap.to(textRef.current, {
      
      text: 'Almanya’da Mesleki Geleceğini Birlikte İnşa Edelim.',
      duration: 2,
      ease: 'none',
    });
  }, []);

  return (
    <div className="hero">
      <Particles
  init={particlesInit}
  options={{
    preset: 'links',
    fullScreen: { enable: false },
    background: { color: '#3e3c44' },
    particles: {
      links: {
        color: ['#ff5e5e', '#ffaa00', '#34c759', '#0a84ff', '#af52de'], // çizgi renkleri
        distance: 120,
      },
      color: {
        value: '#fff', // nokta renkleri
      },
    },
  }}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  }}
/>



      <div className="hero-text">
        <h3 ref={textRef}></h3>
      </div>
    </div>
  );
};

export default Hero;
