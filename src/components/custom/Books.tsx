import { useOppositeHexa } from '../../hooks';
import Canvas from './Canvas';
import { motion } from 'framer-motion';
type propsType = {
    color_main: string;
};
const Books = ({ color_main }: propsType) => {
    const color_opposite = useOppositeHexa(color_main);

    const background = [
        {
            bg: color_main,
            text: color_opposite,
        },
        {
            bg: color_opposite,
            text: color_main,
        },
    ];
    /*
        `-webkit-linear-gradient(45deg,${color_main},${color_opposite})`,
        `-webkit-linear-gradient(-45deg,${color_main},${color_opposite})`,
*/
    return (
        <Canvas>
            <div className="w-full p-2 grid grid-cols-2 gap-2 justify-center items-center relative">
                {background.map((color, id) => {
                    return (
                        <div
                            key={id}
                            style={{ background: color.bg, color: color.text }}
                            className="overflow-hidden p-2 flex relative justify-center flex-col"
                        >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="font-bold">Life of a programmer </p>
                            <motion.div
                                initial={{
                                    clipPath:
                                        'polygon(0% 0, 0% 0%, 0% 0%, 0 0%, 0 0%, 0% 0%)',
                                }}
                                animate={{
                                    clipPath:
                                        'polygon(100% 0, 100% 100%, 50% 66%, 0 100%, 0 48%, 0% 0%)',
                                }}
                                style={{ background: color.text }}
                                className="absolute p-3 py-8 top-0 left-2"
                            ></motion.div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="text-[10px]">jaberhc2002@gmail.com</p>
                        </div>
                    );
                })}
            </div>
        </Canvas>
    );
};

export default Books;
