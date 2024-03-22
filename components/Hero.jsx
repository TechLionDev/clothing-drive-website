import { motion } from "framer-motion";
import Highlight from "./Highlight";

const Hero = () => {
  return (
    <>
      <motion.section
        className='flex flex-col items-center justify-center h-screen gap-8 px-12 py-16 text-center bg-crust text-text'
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
          className='text-3xl font-bold'
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
          Nuestro objetivo es que no haya <Highlight delay={3}>personas sin hogar</Highlight> sin ropa. Nosotros aceptamos todas las formas y tamaños. <Highlight delay={4}>Esperamos</Highlight> que nos ayudes a lograr este objetivo.
          </p>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex items-center justify-center gap-8'
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document.getElementById("down").scrollIntoView({ behavior: "smooth" });
            }}
            className='px-4 py-2 font-bold border-2 rounded border-blue hover:bg-blue hover:text-crust'
          >
            Leer mas
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='px-4 py-2 font-bold border-2 rounded bg-blue border-blue hover:bg-transparent text-crust hover:text-text'
            onClick={() => {
              document.getElementById("howdonate").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donar mi chaqueta!
          </motion.button>
        </motion.span>
      </motion.section>
    </>
  );
};

export default Hero;
