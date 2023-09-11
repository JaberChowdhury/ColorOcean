import { useParams } from 'react-router-dom';

const Pallette = () => {
    const { colorPath } = useParams();
    return (
        <div>
            <div>Pallette</div>
            <div>{colorPath}</div>
        </div>
    );
};

export default Pallette;
