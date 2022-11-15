import './App.css';
import Footer from './Components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main_stacking from './Components/Main_stacking/Main_stacking';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main_home from './Components/Main_home/Main_home';
import { toast, ToastContainer } from 'react-toastify';
import Latest_Deposit from './Components/Latest_Deposit/Latest_Deposit';
import Reward_info from './Components/Reward_info/Reward_info';
import My_team from './Components/My_team/My_team';
import Deposit_details from './Components/Deposit_details/Deposit_details';

import { useEffect, useState } from 'react';
import { loadWeb3 } from './apis/api';
import Stacking_top from './Components/Stacking_top/Stacking_top';

function App() {
  let [account, setAccount] = useState('')

  const getaccount = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
    }
    else if (acc == "Wrong Network") {
      // toast.error('Wrong Network')
    } else {
      setAccount(acc)

    }
  }
  useEffect(() => {
    // getaccount();

  });

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Main_home />} />
          <Route exact path='/Dashboard' element={<Stacking_top />} >
          <Route exact path='/Dashboard/Home' element={<Main_stacking/>} />
            <Route exact path='/Dashboard/Latest_Deposit' element={<Latest_Deposit />} />
            <Route exact path='/Dashboard/Reward_info' element={<Reward_info />} />
            <Route exact path='/Dashboard/My_team' element={<My_team />} />
            <Route exact path='/Dashboard/Deposit_details' element={<Deposit_details />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
