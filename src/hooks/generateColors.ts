import { useHexadecimal, useScreen } from '../hooks';

const generateColors = (): string[] => {
    const { width } = useScreen();
    let final: string[] = [];
    const limit = width > 412 ? 300 : 102;
    for (let i = 0; i < limit; i++) {
        const hexacode = useHexadecimal();
        final.push(hexacode);
    }
    return final;
};

export default generateColors;
