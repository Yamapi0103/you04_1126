import React, { Component } from "react";
import './BSMyFavor.scss';
import cookies from 'react-cookies'
import {Link} from 'react-router-dom'


class BSMyFavor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // bsfavorArray: [],
            // celebrities: [],
            saveCelebrity:[]
        };

        this.bsfavorArray=[];
        this.celebrities=[];
        
        this.BS_sid = cookies.load('userId')[0].BS_sid

    }

    FavorList = () => {
        // fetch('http://localhost:3000/api/BSAddFavor/' + this.BS_sid)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // this.setState({
        //             // bsfavorArray: data
        //         // })
        //         this.bsfavorArray= data
        //         console.log(this.bsfavorArray)
        //     })
    }

    getMembers=()=> {
        // fetch("http://localhost:3000/api2/icmembers")
        //     .then(res => res.json())
        //     .then(members =>{
        //         // this.setState({ 
        //         //     celebrities: members
        //         // })
        //         this.celebrities = members
        //         console.log(this.celebrities)
        //     } )
        
    }

    componentDidMount = () => {
        // this.getMembers();
        // this.FavorList();

        fetch("http://localhost:3000/api2/icmembers")
        .then(res => res.json())
        .then(members =>{
            // this.setState({ 
            //     celebrities: members
            // })
            this.celebrities = members
            console.log(this.celebrities)

            fetch('http://localhost:3000/api/BSAddFavor/' + this.BS_sid)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // this.setState({
                    // bsfavorArray: data
                // })
                this.bsfavorArray= data
                console.log(this.bsfavorArray)
                console.log(this.celebrities)


                let saveIC = this.celebrities.filter(v=>{
                    let a = this.bsfavorArray.some(vv=>
                              vv['IC_sid']==v['IC_sid']
                              )
                    if(a) return v          
                  })
                  console.log(saveIC)
                this.setState({
                    saveCelebrity:saveIC
                })
            })
        })
    }
    render() {
        console.log(this.state)
                // var imgSrc = "/images/" + (this.state.saved ? "heart-solid.png" : "heart-regular.png");

         return (
            this.state.saveCelebrity.map((k) => {
                return (
                    <div key={k.bs_sid} className="card radius-border card_shadow">
                    <header className="banner">
                        {/* <img src={"/images/" + k['IC_photo'] + ".jpg"} alt="" />  */}
                        <div className="middle">
                            <Link to={`/celebrityInfo/${k.IC_sid}`}>
                                <div className="text">查看詳細資料</div>
                            </Link>
                        </div>
                    </header>
                        <div className="card_body">
                            <div className="celebrity_name_box">
                                <h2 className="text_cut">
                                    {/* 姓名:{k.celebrity.name} */}
                                </h2>
                            </div>
                            <div className="text_align">
                                <p><span>IC_sid:</span>{k.IC_sid}</p>
                                <p><span>性別:</span>{k.IC_gender}</p>
                                <p><span>類型: </span>{k.IC_media}</p>
                                <p><span>最低接案金:</span>{k.IC_price}</p>
                                <p><span>經手業配數: </span>{k.IC_case}</p>
                            </div>
                        </div>

                    </div>
                )
            })
        )
    }
}

export default BSMyFavor;













// class BSMyFavor extends Component {
//     constructor(props) {
//         super(props);
//         this.initState = {
//             name: "",
//             gender: "",
//             media: "",
//             price: "",
//             case: "",
//             sid: ""
//         }

//     }
//     componentDidMount() {
//         this.getfavor();
//     }
//     getfavor() {
//         fetch("http://localhost:3000/api/BSMyFavor")
//             .then(res => res.json())
//             .then(members => {
//                 this.setState({
//                     celebrities: members
//                 })
//                 console.log(this.state.celebrities)
//             })
//         this.BS_case = {
//             BS_sid: cookies.load('userId')[0].BS_sid,
//             IC_sid: this.celebrity.IC_sid
//         }

//     }
//     render() {
//         var imgSrc = "/images/" + (this.state.saved ? "heart-solid.png" : "heart-regular.png");
//         return (
//             <React.Fragment>
//                 <div className="card radius-border card_shadow">
//                     <header className="banner">
//                         <img src={"/images/" + this.celebrity['IC_photo'] + ".jpg"} alt="" /> */}
//                          <div className="middle">
//                             <Link to={`/celebrityInfo/${this.celebrity.IC_sid}`}>
//                                 <div className="text">查看詳細資料</div>
//                             </Link>
//                         </div>
//                     </header>
//                     <div className="card_body">
//                         <div className="celebrity_name_box">
//                             <h2 className="text_cut" >
//                                 姓名:{this.celebrity.name}
//                             </h2>
//                         </div>
//                         <div className="text_align">
//                             <p><span>性別: </span>{this.celebrity.IC_gender}</p>
//                             <p><span>類型: </span>{this.celebrity.IC_media}</p>
//                             <p><span>最低接案金: </span>{this.celebrity.IC_price}</p>
//                             <p><span>經手業配數: </span>{this.celebrity.IC_case}</p>
//                              <button className="" onClick={this.Favorite}>{this.state.save}</button> 
//                         </div>
//                          {this.state.saved?<h5 id="saved">已收藏</h5>:null }
//               <a onClick={this.Favorite}><img id={this.celebrity['IC_photo']} className="heart" src={imgSrc} /></a> 
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }

//      componentDidUpdate = ()=>{

//      }
// }

// export default BSMyFavor;