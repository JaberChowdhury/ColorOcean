import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import { HeroSectionAnimation } from '../../components';

interface LottieOptions {
  loop: boolean;
  autoplay: boolean;
  animationData: any; // You might need to specify the type for animationData
  rendererSettings: {
    preserveAspectRatio: string;
  };
}

const Pallette = () => {
  const { colorPath } = useParams();

  const defaultOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroSectionAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <div>Pallette</div>
      <div>{colorPath}</div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Pallette;
