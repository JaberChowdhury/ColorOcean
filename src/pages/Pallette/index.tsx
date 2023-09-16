import { useParams } from 'react-router-dom';
import { Rotatebox, Gradientbar } from '../../components';
import { useOppositeHexa, useScreen } from '../../hooks';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Pallette = () => {
    const { colorPath } = useParams();
    const { width } = useScreen();
    const color_main = '#' + colorPath;
    const color_opposite = useOppositeHexa(color_main);
    console.log(width);
    return (
        <div className="w-full pt-6 min-h-screen flex items-center flex-col relative p-2">
            <div className="w-full text-left font-bold">
                <motion.div
                    animate={{
                        clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%)',
                    }}
                    whileInView={{
                        clipPath:
                            'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
                    }}
                    style={{
                        background: color_main,
                        color: color_opposite,
                    }}
                    className="p-2 px-4 pl-[50px] inline"
                >
                    Pallette
                </motion.div>
            </div>
            <Card className="rounded w-full overflow-hidden font-bold text-center mt-2 flex justify-around items-center">
                <motion.div
                    animate={{ width: '0' }}
                    whileInView={{ width: '50%' }}
                    style={{ color: color_opposite, background: color_main }}
                    className="py-24"
                >
                    {color_main}
                </motion.div>
                <motion.div
                    animate={{ width: '0' }}
                    whileInView={{ width: '50%' }}
                    style={{ color: color_main, background: color_opposite }}
                    className="py-24"
                >
                    {color_opposite}
                </motion.div>
            </Card>
            <Gradientbar color_main={color_main} />
            <Gradientbar color_main={color_opposite} />
            <div className="w-full flex flex-wrap justify-center items-center relative">
                <Rotatebox color_main={color_main} />
                <Rotatebox color_main={color_opposite} />
            </div>
        </div>
    );
};

export default Pallette;
