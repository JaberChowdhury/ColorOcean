import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/card';
// import { BackgroundSvg } from '../../components';

const Home = () => {
    const pages = [
        {
            path: '/colors',
            title: 'colors',
        },
        {
            path: '/colors',
            title: 'colors',
        },
        {
            path: '/colors',
            title: 'colors',
        },
        {
            path: '/colors',
            title: 'colors',
        },
        {
            path: '/colors',
            title: 'colors',
        },
    ];

    const block = pages.map((page, id) => {
        return (
            <Link className="w-4/5 my-3 relative" to={page.path} key={id}>
                <Card className="w-full py-4 text-3xl text-center h-full rounded">
                    {page.title}
                </Card>
            </Link>
        );
    });

    return (
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center flex-col relative">
            <div className="w-full flex flex-wrap relative justify-around items-center">
                {block}
            </div>
        </div>
    );
};

export default Home;
