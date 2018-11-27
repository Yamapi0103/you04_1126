import React, { Component } from 'react';
import { BrowserRouter, Route,} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Page/home/Home';
import Login from './Page/login/Login';
import Register from './Page/register/Register';
import Plan_explain from './Page/plan/plan_explain';
import Plan_buy from './Page/plan/plan_buy/plan_buy'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ICMember from './Page/member/ICMember/ICMember';
import BSMember from './Page/member/BSMember/BSMember';
import List from './Page/list/List';
import Job from './Page/job/job';
import Publish from './Page/publish/publish';
import CelebrityList from './Page/celebrity/celebrityList';
import CelebrityInfo from './Page/celebrity/celebrityInfo';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <React.Fragment>

          <Navbar />
          <div className="container margin-top70">
          {/* Link Page */}
          <Route exact path="/" component={Home}  />
          <Route exact path="/home" component={Home}  />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/plan" component={Plan_explain} />
          <Route path="/BSMember" component={BSMember} />
          <Route path="/ICMember" component={ICMember} />

          <Route path="/list" component={List} />
          <Route path ="/plan_buy/:point/:text/:money" component={Plan_buy} />
          <Route path="/celebrity" component={CelebrityList} />
          <Route path="/job" component={Job} />
          <Route path="/publish" component={Publish} />
          <Route path="/celebrity" component={CelebrityList} />
          <Route path="/celebrityInfo/:icsid" component={CelebrityInfo} />

          </div>
          <Footer />

        </React.Fragment>
      </BrowserRouter>

      
    );
  }
}

export default App;
