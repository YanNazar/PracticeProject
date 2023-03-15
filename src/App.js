import './App.css';

import { Header } from './components/Header';
import { WhiteGround } from './components/WhiteGround';
import { OurExpertise } from './components/OurExpertise';

function App() {
  return (
    <div className="App">
      <Header/>
      <OurExpertise/>
      <WhiteGround/>
    </div>
  );
}

export default App;