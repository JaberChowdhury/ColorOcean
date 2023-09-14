import { useOppositeHexa } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { updateColors } from '../../features';
import { Color } from '../../components';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
                color_main={color_main}
                color_opposite={color_opposite}
            />
        );
    });

    return (
        <div
            style={{
                background: `linear-gradient(135deg, #eceddc 25%, transparent 25%) 50px 0,
linear-gradient(225deg, #eceddc 25%, transparent 25%) 50px 0,
linear-gradient(315deg, #eceddc 25%, transparent 25%),
linear-gradient(45deg, #eceddc 25%, transparent 25%)`,
                backgroundSize: '20px 20px',
                backgroundColor: '#c9b4de',
            }}
            className="pageParents relative"
        >
            <Button
                type="button"
                onClick={() => {
                    dispatch(updateColors());
                }}
                className="sticky z-30 top-[90%] left-[60%]"
            >
                Update colors
            </Button>

            <Card className="w-4/5 py-4 text-center font-bold mb-2 text-2xl">
                Colors
            </Card>

            <div className="w-full flex justify-around flex-wrap relative p-2 gap-2">
                {allcolors}
            </div>
        </div>
    );
};

export default Colors;
