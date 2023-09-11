const useOppositeRGB = (inputRGB: string): string => {
    // Extract the red, green, and blue values from the input
    const [r, g, b] = inputRGB.match(/\d+/g)!.map(Number);

    // Calculate the opposite values
    const oppositeR = 255 - r;
    const oppositeG = 255 - g;
    const oppositeB = 255 - b;

    // Format the opposite values with zero-padding
    const formattedOppositeR = String(oppositeR).padStart(3, '0');
    const formattedOppositeG = String(oppositeG).padStart(3, '0');
    const formattedOppositeB = String(oppositeB).padStart(3, '0');

    // Construct the opposite RGB string
    const oppositeRGB = `rgb(${formattedOppositeR},${formattedOppositeG},${formattedOppositeB})`;

    return oppositeRGB;
};

export default useOppositeRGB;
