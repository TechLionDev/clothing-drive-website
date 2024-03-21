import { motion } from "framer-motion";
import Highlight from "@/components/Highlight";

const Volunteer = () => {
    return (
        <>
            <motion.section
                id='down'
                className='flex flex-col items-center justify-center gap-8 p-12 text-center bg-crust text-text pt-[112px]'
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
                    Solicitar Ser Voluntario
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex flex-col'
                >
                    <p>
                        Nos Gustaría que todos ayudaran a la colecta de ropa de Nueva Jersey. Queremos personas que sean <Highlight delay={1}>responsables</Highlight>, <Highlight delay={2}>dedicadas</Highlight>, y <Highlight delay={3}>agradables</Highlight>. Esperamos que sean voluntarios tanto como puedan. Nos gustaría que usted le diga a otros que también donen. Cuando seas voluntario, queremos que <Highlight delay={4}>distribuyas</Highlight> ropa, <Highlight delay={5}>recaudar</Highlight> fondos y <Highlight delay={6}>organices</Highlight> eventos. Puedes trabajar <Highlight delay={7}>medio tiempo</Highlight> o <Highlight delay={8}>tiempo completo</Highlight> dependiendo de tu horario.
                    </p>
                </motion.div>
            </motion.section>
        </>
    );
};

export default Volunteer;