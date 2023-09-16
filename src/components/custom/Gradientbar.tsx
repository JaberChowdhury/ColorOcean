import { useOppositeHexa } from '../../hooks';
import { motion } from 'framer-motion';

type propsType = {
    color_main: string;
};

const Gradientbar = ({ color_main }: propsType) => {
    const color_opposite = useOppositeHexa(color_main);

    return (
        <motion.div
            initial={{
                background: `-webkit-linear-gradient(0deg,${color_main} ,${color_opposite})`,
            }}
            whileInView={{
                background: `-webkit-linear-gradient(45deg,${color_main} ,${color_opposite})`,
            }}
            className="w-full my-1 rounded shadow-md py-6 text-center"
        ></motion.div>
    );
};

export default Gradientbar;
