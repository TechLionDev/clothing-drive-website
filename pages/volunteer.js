import { motion } from "framer-motion";
import Highlight from "@/components/Highlight";
import CHead from "@/components/CHead";
import Text from "@/components/form/Text";

const Volunteer = () => {
    async function emailConfirmation(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form[0].value,
            email: form[1].value,
            amount: parseFloat(form[2].value)
        };
        if (data.amount < 20){
            alert(`¡PERSONA POBRE! ¿QUÉ VAS A HACER CON ${data.amount}? ¡DANOS AL MENOS UN 20!`);
            return;
        }
        const res = await fetch(`/api/email`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        form[0].value = '';
        form[1].value = '';
        form[2].value = '';
        if (res.ok) {
            alert('Gracias por tu donación!');
        }
    }
    return (
        <>
            <CHead title='Volunteer' />
            <motion.section
                id='down'
                className='flex flex-col items-center justify-center gap-8 p-12 text-center text-text pt-[112px] bg-surface0'
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
                <div className="flex gap-4">
                    <motion.img
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex flex-col w-[25%] h-[25%] rounded-lg bg-surface2 p-6'
                        src="https://content.schoolinsites.com/api/documents/7b5b17ac081248c7a86162f78319a6c8.png"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='flex flex-col'
                    >
                        <p>
                            Nos Gustaría que todos ayudaran a la colecta de ropa de Nueva Jersey. Queremos personas que sean <Highlight delay={1}>responsables</Highlight>, <Highlight delay={2}>dedicadas</Highlight>, y <Highlight delay={3}>agradables</Highlight>. Esperamos que sean voluntarios tanto como puedan. Nos gustaría que usted le diga a otros que también donen. Cuando seas voluntario, queremos que <Highlight delay={4}>distribuyas</Highlight> ropa, <Highlight delay={5}>recaudar</Highlight> fondos y <Highlight delay={6}>organices</Highlight> eventos. Puedes trabajar <Highlight delay={7}>medio tiempo</Highlight> o <Highlight delay={8}>tiempo completo</Highlight> dependiendo de tu horario.
                        </p>
                        <div className="flex justify-center p-12">
                            <form onSubmit={emailConfirmation} className="flex flex-col gap-4 w-3/4 mx-auto">
                                <h1 className="font-bold text-2xl">Donar Dinero Aqui:</h1>
                                <Text label='Nombre' placeholder='John Doe' type='text' required={true} />
                                <Text label='Correo Electrónico' placeholder='me@mail.com' type='email' required={true} />
                                <Text label='Cantidad' placeholder='0.00' type='number' required={true} />
                                <button type="submit" className="bg-blue text-crust p-2 rounded-lg font-bold">Donar!</button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Volunteer;