import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

const Temp: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const canvasWidth = 40000; // Replace with your desired width
    const canvasHeight = 30000;
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }
        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-image-name.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref, canvasWidth, canvasHeight]);

    return (
        <div>
            <div className="w-[300px]  max-h-[80vh] overflow-scroll">
                <div
                    ref={ref}
                    style={{
                        width: canvasWidth + 'px',
                        height: canvasHeight + 'px',
                        border: '1px solid #000', // Optional border
                        backgroundColor: 'white', // Optional background color
                    }}
                >
                    {/* DOM nodes you want to convert to PNG */}
                    <div className="w-4/5 flex justify-center items-center flex-col relative p-2 bg-slate-300 rounded shadow-md">
                        <p>
                            <strong>Hyperloop</strong>
                        </p>
                        <ol>
                            <li>Animejs</li>
                            <li>Reactjs</li>
                            <li>Chartjs</li>
                            <li>Nextjs</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="w-full p-2 bg-slate-300 text-center"
                    onClick={onButtonClick}
                >
                    Click me
                </button>
            </div>
        </div>
    );
};

export default Temp;
