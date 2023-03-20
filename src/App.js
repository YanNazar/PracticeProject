import './App.css';

import { Header } from './components/Header';
import { WhiteGround } from './components/WhiteGround';
import { OurExpertise } from './components/OurExpertise';
import { Approach } from './components/Approach';
import { WhoWeAre } from './components/WhoWeAre';
import Testimonials from './components/Testimonials/Testimonials';
import ProcessBody from './components/ProcessBody/ProcessBody';

function App() {
  return (
    <div className="App">
      <Header/>
      <WhoWeAre/>
      <OurExpertise/>
      <ProcessBody/>
      <div className="approachFlex">
        <Approach/>
      </div>
      <Testimonials/>
      <WhiteGround/>
    </div>
  );
}

export default App;