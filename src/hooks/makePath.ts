const makePath = (color_main: string, color_opposite: string): string => {
    const path = color_main.slice(1) + '_' + color_opposite.slice(1);
    return path;
};

export default makePath;
