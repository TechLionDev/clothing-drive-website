import { motion } from "framer-motion";
import Links from "./Links";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  let links = [
    {
      name: "Casa",
      url: "/",
      active: currentRoute === "/"
    },
    {
      name: "Voluntario",
      url: "/volunteer",
      active: currentRoute === "/volunteer"
    }
  ];
  return (
    <>
      <nav className='p-6 flex w-full justify-between drop-shadow-2xl z-50 fixed mb-4 bg-gradient-to-b from-base to-transparent from-60%'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center justify-start font-bold cursor-pointer'
          onClick={() => router.push('/')}
        >
          <motion.img
            src='/Logo.png'
            alt='logo'
            className='h-16'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="hidden pb-2 text-2xl sm:inline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Colecta De Ropa
          </motion.p>
        </motion.div>
        <div className='flex items-center justify-end'>
          <Links links={links} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;