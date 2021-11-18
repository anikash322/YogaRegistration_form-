import './App.css';
import Header from "./components/Header";

import RegisterForm  from './components/RegisterForm'; 
import Payment from './components/payment';

function App() {
  return (
    <div className="App">
        <Header/>
      
      <RegisterForm />
      <Payment/>
      
    </div>
      
  );
}
  
export default App;