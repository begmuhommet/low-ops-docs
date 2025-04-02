'use client';

import heroMobileImage from '@site/src/assets/hero-mobile.webp';
import heroImage from '@site/src/assets/hero.webp';
import { useMediaQuery } from '@site/src/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const HeroImage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-[1200px] mx-auto relative aspect-5/2"
    >
      <img
        src={isDesktop ? heroImage : heroMobileImage}
        alt="lowops-portal-screen"
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-contain object-top"
      />
    </motion.div>
  );
};

export default HeroImage;
