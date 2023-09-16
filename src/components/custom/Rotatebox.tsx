import { useScreen, useOppositeHexa } from '../../hooks';
import { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

type propsType = {
    color_main: string;
};

const Rotatebox = ({ color_main }: propsType) => {
    const { width } = useScreen();
    const [isLoading, setIsLoading] = useState(false);
    const color_opposite = useOppositeHexa(color_main);

    const ref = useRef<HTMLDivElement>(null);
    const canvasWidth = width;
    const canvasHeight = width;
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }
        setIsLoading(true);
        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${color_main + color_opposite}.png`;
                link.href = dataUrl;
                link.click();
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref, canvasWidth, canvasHeight]);
    return (
        <div
            style={{
                background: `-webkit-linear-gradient(0deg,${color_main}48 ,${color_opposite}48)`,
            }}
            className="m-2 p-2 shadow-md"
        >
            <div className="flex justify-center items-center">
                <div
                    ref={ref}
                    style={{
                        width: canvasWidth,
                        height: canvasHeight,
                        background: `
      linear-gradient(135deg, ${color_main} 25%, transparent 25%) 50px 0,
      linear-gradient(225deg, ${color_main} 25%, transparent 25%),
      linear-gradient(315deg, ${color_main} 25%, transparent 25%) 50px 0,
      linear-gradient(45deg, ${color_main} 25%, transparent 25%)
    `,
                        backgroundSize: '30px 30px',
                        backgroundColor: color_opposite,
                        boxShadow: `inset 1px 1px 10px rgba(00,00,00,0.5),
                                inset -1px -1px 10px rgba(00,00,00,0.5)`,
                    }}
                    className="rounded-full relative shadow-lg"
                >
                    <div
                        style={{
                            width: width * 0.5,
                            height: width * 0.5,
                        }}
                        className="bg-white/70 backdrop-blur-md m-2 flex justify-center flex-col rounded absolute bottom-0 left-0"
                    >
                        <p>
                            <strong>Color_main: </strong> {color_main}
                        </p>
                        <p>
                            <strong>Color_opposite: </strong> {color_opposite}
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <Button
                className="p-2 mx-10 flex justify-center items-center rounded text-center"
                onClick={onButtonClick}
            >
                {isLoading ? (
                    <div className="p-2 rounded-full border-2 animate-spin border-t-slate-900 border-slate-100"></div>
                ) : (
                    <div className="flex justify-center items-center">
                        <span className="mx-2">Download</span> <DownloadIcon />
                    </div>
                )}
            </Button>
        </div>
    );
};

export default Rotatebox;
