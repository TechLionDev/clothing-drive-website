import { motion } from "framer-motion";
import Highlight from "@/components/Highlight";

const HowToDonate = () => {
  return (
    <>
      <motion.section
        id='howdonate'
        className='flex flex-col items-center justify-center gap-8 p-12 text-center bg-mantle text-text'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl font-bold'
        >
          Como Donar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col'
        >
          <p>
          Puede donar yendo a nuestras numerosas ubicaciones y trayendo ropa. Puede encontrar nuestras ubicaciones en nuestro sitio web. Puedes donar cualquier tipo de ropa que quieras. <Highlight delay={1}>Continuaremos</Highlight> aceptando donaciones durante todo el año. Esperamos que dones a nuestra causa.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HowToDonate;
