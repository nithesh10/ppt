import { AnimatePresence, motion } from 'framer-motion';
import useSlideNavigation from './utils/useSlideNavigation';
import ProgressBar from './components/ProgressBar';
import SlideIndicator from './components/SlideIndicator';
import SlideOverview from './components/SlideOverview';
import SlideContainer from './components/SlideContainer';

import Slide01_Opening from './slides/Slide01_Opening';
import Slide02_TrustTransition from './slides/Slide02_TrustTransition';
import Slide03_LicensedEntity from './slides/Slide03_LicensedEntity';
import Slide04_WhatItMeans from './slides/Slide04_WhatItMeans';
import Slide05_MoneyInIndia from './slides/Slide05_MoneyInIndia';
import Slide06_Comparison from './slides/Slide06_Comparison';
import Slide07_EstateTax from './slides/Slide07_EstateTax';
import Slide08_Verdict from './slides/Slide08_Verdict';
import Slide09_DigitalJourney from './slides/Slide09_DigitalJourney';
import Slide10_Checkmarks from './slides/Slide10_Checkmarks';
import Slide11_ThreePillars from './slides/Slide11_ThreePillars';
import Slide12_Closing from './slides/Slide12_Closing';

const slides = [
  Slide01_Opening,
  Slide02_TrustTransition,
  Slide03_LicensedEntity,
  Slide04_WhatItMeans,
  Slide05_MoneyInIndia,
  Slide06_Comparison,
  Slide07_EstateTax,
  Slide08_Verdict,
  Slide09_DigitalJourney,
  Slide10_Checkmarks,
  Slide11_ThreePillars,
  Slide12_Closing,
];

function App() {
  const nav = useSlideNavigation(slides.length);
  const CurrentSlide = slides[nav.current];
  const isLastSlide = nav.current === slides.length - 1;

  const handleClick = () => {
    if (!isLastSlide) nav.next();
  };

  return (
    <div
      className="w-screen h-screen bg-navy relative overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      <ProgressBar current={nav.current} total={nav.totalSlides} />

      <AnimatePresence mode="wait">
        <SlideContainer slideKey={nav.current}>
          <CurrentSlide />
        </SlideContainer>
      </AnimatePresence>

      <SlideIndicator current={nav.current} total={nav.totalSlides} />

      {/* Hint text */}
      <AnimatePresence>
        {!nav.hasInteracted && (
          <motion.div
            className="fixed bottom-6 left-6 text-text-muted text-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Press anywhere to continue
          </motion.div>
        )}
      </AnimatePresence>

      <SlideOverview
        show={nav.showOverview}
        current={nav.current}
        onSelect={(i) => { nav.goTo(i); nav.setShowOverview(false); }}
        onClose={() => nav.setShowOverview(false)}
      />
    </div>
  );
}

export default App;
