import { motion } from "framer-motion";
import Highlight from "./Highlight";

const Hero = () => {
  return (
    <>
      <motion.section
        className='text-center justify-center items-center flex flex-col gap-8 bg-crust py-16 h-screen px-12 text-text'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/HeroBG.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='font-bold text-3xl'
        >
          La <Highlight delay={1}>colecta de ropa</Highlight> de Nueva Jersey!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col'
        >
          <p>
          NJ Clothing Drive es una organización que quiere donar ropa a <Highlight delay={2} >personas sin hogar</Highlight>.
          </p>
          <p>
          Nuestro objetivo es que no haya <Highlight delay={3}>personas sin hogar</Highlight> sin ropa. Nosotros aceptamos todas las formas y tamaños.
          </p>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex justify-center items-center gap-8'
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document.getElementById("down").scrollIntoView({ behavior: "smooth" });
            }}
            className='border-blue border-2 hover:bg-blue font-bold py-2 px-4 rounded hover:text-crust'
          >
            Leer mas
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-blue border-2 border-blue hover:bg-transparent font-bold py-2 px-4 rounded text-crust hover:text-text'
          >
            Donar mi chaqueta!
          </motion.button>
        </motion.span>
      </motion.section>
    </>
  );
};

export default Hero;
