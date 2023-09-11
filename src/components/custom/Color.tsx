import { useScreen, makePath } from '../../hooks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type propsType = {
    color_main: string;
    color_opposite: string;
    id: number;
};

const Color = ({ color_main, id, color_opposite }: propsType) => {
    const { width } = useScreen();
    const path = makePath(color_main, color_opposite);
    return (
        <motion.div
            initial={{
                background: `-webkit-linear-gradient(-45deg, ${color_main} 100%, ${color_opposite} 0%)`,
                scale: 0.3,
            }}
            whileInView={{
                background: `-webkit-linear-gradient(-45deg, ${color_main} 50%, ${color_opposite} 50%)`,
                scale: 1,
            }}
            className="rounded"
        >
            <Link
                to={`/colors/${path}`}
                style={{
                    width: width / 3.5,
                    height: width / 2.5,
                    /*
                    boxShadow: `inset 1px 1px 10px rgba(00,00,00,0.5),
                                inset -1px -1px 10px rgba(00,00,00,0.5)`,
                    */
                }}
                className="flex justify-around items-center flex-col font-bold  rounded"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: id * 0.06 } }}
                    style={{ color: color_opposite }}
                >
                    {color_main}
                </motion.div>
                <br />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: id * 0.07 } }}
                    style={{ color: color_main }}
                >
                    {color_opposite}
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default Color;
