const useHexadecimal = (): string => {
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let colorCode = '#';
        for (let i = 0; i < 6; i++) {
            colorCode += letters[Math.floor(Math.random() * 16)];
        }
        return colorCode;
    }
    const color = generateRandomColor();
    return color.toUpperCase();
};

export default useHexadecimal;
