
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MoveProps from './pages/Move_props';
import MyProps from './pages/My_props';
import Navigation from './components/Navigation';
import moveProps from './utils/style.config';
import ClockProps from './pages/Clock_props';
import PetsProps from './pages/Pets_props';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <BrowserRouter>
       <Navigation/>
       <div>
        <Routes>
          <Route path='move-props' element={<MoveProps MoveProps={moveProps}/>}/>
          <Route path='my-props' element={<MyProps MyProps={moveProps}/>}/>
          <Route path='clock-props' element={<ClockProps ClockProps={moveProps}/>}/>
          <Route path='pets-props' element={<PetsProps PetsProps={moveProps}/>}/>
        </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
