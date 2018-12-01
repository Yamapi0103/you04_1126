import React, { Component } from 'react';
import CelebrityItem from './celebrityItem';
// import  celebrity from './celebrity.json';
import './celebrity.scss';

class CelebrityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celebrities: [],
            // celebrity: this.initState,
        }

        // console.log("CelebrityList"+this.state.celebrity)
    }
    componentDidMount() {
        this.getMembers();
    }
    getMembers() {
        fetch("http://localhost:3000/info/icmembers")
            .then(res => res.json())
            .then(members =>{
                this.setState({ 
                    celebrities: members
                })
                console.log(this.state.celebrities)
            } )
            // .then(members => { return members })
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <h2 className="">網紅清單</h2>
                </section>
                <section className="celebrity_wrap">
                {this.state.celebrities.map((c,idx)=>
                    <CelebrityItem key={idx} celebrity={c} />
                    )}

                </section>
            </React.Fragment>
        )
    }
}

export default CelebrityList; 