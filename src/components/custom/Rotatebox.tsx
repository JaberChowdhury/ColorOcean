import { useScreen, useOppositeHexa } from '../../hooks';

type propsType = {
    color_main: string;
};

const Rotatebox = ({ color_main }: propsType) => {
    const { width } = useScreen();
    const color_opposite = useOppositeHexa(color_main);
    return (
        <div
            style={{
                background: `
      linear-gradient(135deg, ${color_main} 25%, transparent 25%),
      linear-gradient(225deg, ${color_main} 25%, transparent 25%),
      linear-gradient(315deg, ${color_main} 25%, transparent 25%),
      linear-gradient(45deg, ${color_main} 25%, transparent 25%)
    `,
                backgroundSize: '30px 30px',
                backgroundColor: color_opposite,
                width: width / 1.05,
                height: width / 1.05,
                boxShadow: `inset 1px 1px 10px rgba(00,00,00,0.5),
                                inset -1px -1px 10px rgba(00,00,00,0.5)`,
            }}
            className="rounded-full mt-5 shadow-lg"
        ></div>
    );
};

export default Rotatebox;
