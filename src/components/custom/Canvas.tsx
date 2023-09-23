import React, { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { useScreen } from '../../hooks';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

type propsType = {
    children: React.ReactNode;
};

const Canvas = ({ children }: propsType) => {
    const { width } = useScreen();
    const [isLoading, setIsLoading] = useState(false);
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
                link.download = `${crypto.randomUUID()}.png`;
                link.href = dataUrl;
                link.click();
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref, canvasWidth, canvasHeight]);
    return (
        <div className="m-2 p-2">
            <div className="flex justify-center items-center">
                <div
                    ref={ref}
                    style={{ width: canvasWidth, height: canvasHeight }}
                    className="flex justify-center items-center flex-wrap relative"
                >
                    {children}
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

export default Canvas;

// children.props.children[1].props.style
