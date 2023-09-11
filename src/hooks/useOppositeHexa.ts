import useHexToRgb from './useHexToRgb';
import useOppositeRGB from './useOppositeRGB';
import useRgbToHex from './useRgbToHex';

const useOppositeHex = (hexadecimal: string) => {
    const rgb = useHexToRgb(hexadecimal);
    const opositeRgb = useOppositeRGB(rgb);
    const opositeHex = useRgbToHex(opositeRgb);
    return opositeHex;
};

export default useOppositeHex;
