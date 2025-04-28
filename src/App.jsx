import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ScrollVelocity from './components/ScrollVelocity.jsx';
import TiltedCard from './components/TitledCard.jsx';
import manju from './assets/images/suma.jpeg';
import anki from './assets/images/Ankita.jpeg';
import manji from './assets/images/manja.webp';
import abhya from './assets/images/abhya.png';
import ashish from './assets/images/Ashish.png';
import tony from './assets/images/Tony.jpg';
import arya from './assets/images/Arya.jpeg'
import RollingGallery from './components/RollingGallery.jsx'
import gagan from './assets/images/Gagan.jpg'
import asiya from './assets/images/asiya.jpg'
import GradientText from './components/GradientText.jsx'
import FlyingPosters from './components/FlyingPosters.jsx'
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img1.jpg';
import img6 from './assets/images/img1.jpg';
import img7 from './assets/images/img1.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import img10 from './assets/images/img10.jpg';
function App() {
  const [count, setCount] = useState(0);
  const items = [
    img3,img4,img5,img6,img7,img8,img9,img10
  ];
  
  return (
    <>
      <ScrollVelocity
        texts={['The Kasukabe', 'The Kasukabe']}
        velocity={100}
        className="custom-scroll-text"
      />

      <div className="flex justify-center text-green-300 pt-6">
        <h1 className="font-bold text-5xl">MEMBERS</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-12 min-h-screen bg-black py-10">

        {/* Rani Card */}
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={manji}
            altText="Rani Image"
            captionText=""
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Rani</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={anki}
            altText="Anki Image"
            captionText=""
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Anki</h3>
        </div>

        {/* Suma Card */}
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={manju}
            altText="Suma Image"
            captionText=""
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Suma</h3>
        </div>

        {/* Abhya Card */}
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={abhya}
            altText="Abhya Image"
            captionText=""
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Globe Abhya</h3>
        </div>
         {/* Abhya Card */}
         <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={ashish}
            altText="Ashis Image"
            captionText=""
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Ashya</h3>
        </div>
        {/* Abhya Card */}
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={tony}
            altText="Tony Image"
            captionText=""
            containerHeight="250px"
            containerWidth="200px"
            imageHeight="220px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Tony</h3>
        </div>
        {/* Arya Card */}
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={arya}
            altText="Arya Image"
            captionText=""
            containerHeight="250px"
            containerWidth="200px"
            imageHeight="220px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Arya</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={gagan}
            altText="Arya Image"
            captionText=""
            containerHeight="250px"
            containerWidth="200px"
            imageHeight="220px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Gagan</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          <TiltedCard
            imageSrc={asiya}
            altText="Arya Image"
            captionText=""
            containerHeight="250px"
            containerWidth="200px"
            imageHeight="220px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <h3 className="text-white font-extrabold text-3xl font-serif">Asiya</h3>
        </div>
        <div className='mb-2'>
        <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
          showBorder={false}
        className="custom-class"
          >
              <h3 className='text-3xl'>Our Gallery</h3>
        </GradientText>
        </div>
        <RollingGallery autoplay={true} pauseOnHover={true} />


      </div>
      <div>
      <div style={{ height: '600px', position: 'relative' }}>
  <FlyingPosters items={items}/>
</div>
<div className='mt-5 justify-center font-semibold'>
  <h6>Built with love by Gagan</h6>
</div>
      </div>
    </>
  );
}

export default App;
