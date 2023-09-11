import { useState, useEffect } from 'react';

const useHexToRgb = (hexColor: string): string => {
    const [rgbColor, setRgbColor] = useState(hexToRgb(hexColor));

    // Function to convert a 6-digit hexadecimal color to RGB format
    function hexToRgb(hex: string): string {
        // Ensure the input is a valid 6-digit hexadecimal color code
        const validHex = /^#?([A-Fa-f\d]{6})$/;
        if (!validHex.test(hex)) {
            return 'rgb(000,000,000)'; // Return null for invalid input
        }

        // Extract the red, green, and blue components from the hex color
        const red = parseInt(hex.slice(1, 3), 16);
        const green = parseInt(hex.slice(3, 5), 16);
        const blue = parseInt(hex.slice(5, 7), 16);

        // Format the RGB string with three-digit values
        const formattedRgb = `rgb(${red.toString().padStart(3, '0')}, ${green
            .toString()
            .padStart(3, '0')}, ${blue.toString().padStart(3, '0')})`;

        return formattedRgb;
    }

    // Update the RGB color whenever the input hexColor changes
    useEffect(() => {
        const rgb = hexToRgb(hexColor);
        if (rgb !== null) {
            setRgbColor(rgb);
        }
    }, [hexColor]);

    return rgbColor;
};

export default useHexToRgb;
