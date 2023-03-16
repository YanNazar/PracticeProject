import './App.css';

import { Header } from './components/Header';
import { WhiteGround } from './components/WhiteGround';
import { OurExpertise } from './components/OurExpertise';
import { Approach } from './components/Approach';
import { WhoWeAre } from './components/WhoWeAre';

function App() {
  return (
    <div className="App">
      <Header/>
      <WhoWeAre/>
      <OurExpertise/>
      <Approach/>
      <WhiteGround/>
    </div>
  );
}

export default App;