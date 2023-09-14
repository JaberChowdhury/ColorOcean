import { useScreen } from '../../hooks';
import { Link } from 'react-router-dom';
type propsType = {
    color_main: string;
    color_opposite: string;
};

const Color = ({ color_main, color_opposite }: propsType) => {
    const { width } = useScreen();
    const path = color_main.slice(1);
    return (
        <div className="flex justify-center items-center relative">
            <div
                style={{
                    background: `-webkit-linear-gradient(-45deg, ${color_main} 50%, ${color_opposite} 50%)`,
                    width: width / 3.5,
                    height: width / 2.5,
                    opacity: 1,
                }}
                className="rounded overflow-hidden"
            >
                <Link
                    to={`/colors/${path}`}
                    style={{
                        width: width / 3.5,
                        height: width / 2.5,
                        boxShadow: `inset 1px 1px 10px rgba(00,00,00,0.5),
                                inset -1px -1px 10px rgba(00,00,00,0.5)`,
                    }}
                    className="flex justify-around items-center flex-col font-bold  rounded"
                >
                    <div style={{ color: color_opposite }}>{color_main}</div>
                    <br />
                    <div style={{ color: color_main }}>{color_opposite}</div>
                </Link>
            </div>
        </div>
    );
};

export default Color;
