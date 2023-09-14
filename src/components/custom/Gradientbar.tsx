type propsType = {
    color_main: string;
};

const Gradientbar = ({ color_main }: propsType) => {
    return (
        <div>
            <div>{color_main}</div>
            <div>Gradientbar</div>
        </div>
    );
};

export default Gradientbar;
