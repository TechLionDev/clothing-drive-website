import { motion } from "framer-motion";
import Highlight from "@/components/Highlight";

const Problem = () => {
    return (
        <>
            <motion.section
                className='text-center justify-center items-center flex flex-col gap-8 bg-crust p-12 text-text pt-[112px]'
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
                    El Problemo
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex flex-col'
                >
                    <p>
                    La cantidad de personas sin hogar en Nueva Jersey es un problema. Más de 10.000 personas se encuentran sin hogar en Nueva Jersey. Muchas de estas personas no tienen buena ropa. En Nueva Jersey el invierno es frío y la gente sin ropa se congela. Es <Highlight delay={1}>injusto</Highlight> que muchas personas tengan ropa de repuesto mientras que otras no tienen suficiente para abrigarse. 
                    </p>
                </motion.div>
            </motion.section>
        </>
    );
}

export default Problem;