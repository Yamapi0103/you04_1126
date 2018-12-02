import React, { Component } from 'react';
import { BrowserRouter, Route,} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Page/home/Home';
import Login from './Page/login/Login';
import Register from './Page/register/Register';
import CompanyRegister from './Page/register/CompanyRegister';
import ICRegister from './Page/register/ICRegister';
import Plan_explain from './Page/plan/plan_explain';
import Plan_buy from './Page/plan/plan_buy/plan_buy'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ICMember from './Page/member/ICMember/ICMember';
import BSMember from './Page/member/BSMember/BSMember';
import List from './Page/list/List';
import Job from './Page/job/job';
import Publish from './Page/publish/publish';

import CelebrityInfo from './Page/celebrity/celebrityInfo';
import CelebrityList from './Page/celebrity/celebrityList'


class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <React.Fragment>

          <Navbar />
          <div className="container margin-top70">
          {/* Link Page */}

          <Route path="/login" component={Login} />
          <Route path="/plan" component={Plan_explain} />



          <Route path="/list/:ids/:bas/:keyword" component={List} />
          <Route path ="/plan_buy/:point/:text/:money" component={Plan_buy} />
          <Route path="/publish_content/:category" component={Job} />
          <Route path="/publish" component={Publish} />
          
          <Route path="/celebrity/:ic_media?" component={CelebrityList} /> 
          <Route path="/celebrityInfo/:icsid?" component={CelebrityInfo} />
          <Route exact path="/register" component={Register} />
          <Route path="/register/CompanyRegister" component={CompanyRegister}/>
          <Route path="/register/ICRegister" component={ICRegister} />

          </div>
            <Route exact path="/" component={Home}  />
            <Route exact path="/home" component={Home}  />
            <Route path="/BSMember" component={BSMember} />
          <Route path="/ICMember" component={ICMember} />



          <Footer />

        </React.Fragment>
      </BrowserRouter>

      
    );
  }
}

export default App;
