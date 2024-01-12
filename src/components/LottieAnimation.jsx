import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({animation}) => {
  return (
    <div>
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '25rem' }}
      />
    </div>
  );
};

export default LottieAnimation;
