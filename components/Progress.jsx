import { motion } from "framer-motion";
import Highlight from "./Highlight";

const Progress = () => {
  return (
    <>
      <motion.section
        id='down'
        className='text-center justify-center items-center flex flex-col gap-8 bg-crust p-12 text-text'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='font-bold text-3xl'
        >
          Lo Que Hemos Hecho!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col'
        >
          <p>
          La <Highlight delay={1}>campaña</Highlight> ha organizado una <Highlight delay={2}>marcha</Highlight> sobre los problemas de las personas sin hogar. Nosotros hemos donado 10,000 kilos de ropa a supervivientes a las huracanes.
          </p>
          <p>
          Nuestra comunidad ha salvado a miles de familias con ropa donada. Nosotros <Highlight delay={3}>garantizamos</Highlight> que toda la ropa va a una buena causa.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Progress;
