const useRgbToHex = (rgb: string): string => {
    const matches = rgb.match(/\d+/g);

    if (!matches || matches.length !== 3) {
        return '#000000'; // Return a default color code if the input is invalid.
    }

    const [r, g, b] = matches.map((value) =>
        parseInt(value, 10).toString(16).padStart(2, '0')
    );

    return `#${r}${g}${b}`.toUpperCase();
};

export default useRgbToHex;
