import { motion } from "framer-motion";
import Highlight from "@/components/Highlight";
import CHead from "@/components/CHead";

const Project = () => {
    return (
        <>
        <CHead title='Project' />
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
                    El Proyecto
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex flex-col'
                >
                    <p>
                        La Colecta de ropa de Nueva Jersey se <Highlight delay={1}>dedica</Highlight> a que todas las personas sin hogar tengan buena ropa.
                        Queremos <Highlight delay={2}>distribuir</Highlight> ropa a todas las personas en Nueva Jersey. Nos <Highlight delay={3}>encantaría</Highlight> que todas las personas en Nueva Jersey tuvieran buena ropa para usar. Estamos tratando de mejorar nuestra <Highlight delay={4}>sociedad</Highlight> entregando ropa a personas necesitadas.
                        <Highlight delay={5}>Esperamos</Highlight> que puedas ayudar a nuestra colecta de ropa donando.
                    </p>
                </motion.div>
            </motion.section>
        </>
    );
}

export default Project;