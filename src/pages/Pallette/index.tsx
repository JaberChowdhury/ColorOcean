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
        <div
            style={{
                background: `linear-gradient(135deg, #eceddc 25%, transparent 25%) 50px 0,
linear-gradient(225deg, #eceddc 25%, transparent 25%) 50px 0,
linear-gradient(315deg, #eceddc 25%, transparent 25%),
linear-gradient(45deg, #eceddc 25%, transparent 25%)`,
                backgroundSize: '20px 20px',
                backgroundColor: '#c9b4de',
            }}
            className="w-full pt-6 min-h-screen flex items-center flex-col relative p-2"
        >
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
            <Rotatebox color_main={color_main} />
            <Gradientbar color_main={color_main} />
        </div>
    );
};

export default Pallette;
