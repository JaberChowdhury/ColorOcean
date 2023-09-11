import { useOppositeHexa } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { updateColors } from '../../features';
import { Color } from '../../components';

type stateType = {
    colorsReducer: {
        colors: string[];
    };
};

const selectColors = (state: stateType) => {
    return state.colorsReducer.colors;
};

const Colors = () => {
    const dispatch = useDispatch();
    const colors = useSelector(selectColors);

    const allcolors = colors.map((color, id) => {
        const color_main = color;
        const color_opposite = useOppositeHexa(color_main);
        return (
            <Color
                key={id}
                id={id}
                color_main={color_main}
                color_opposite={color_opposite}
            />
        );
    });

    return (
        <div className="pageParents relative bg-gradient-to-r from-blue-500 to-cyan-500">
            <div
                onClick={() => {
                    dispatch(updateColors());
                }}
            >
                Update colors
            </div>
            <div className="w-full flex justify-around flex-wrap relative p-2 gap-2">
                {allcolors}
            </div>
        </div>
    );
};

export default Colors;
