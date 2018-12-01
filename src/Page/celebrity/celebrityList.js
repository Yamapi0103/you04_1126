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
        // 沒給:ic_media(http://localhost:3001/celebrity/) =>預設為看到全部網紅
        this.ic_media = this.props.match.params.ic_media||"all"; 
        console.log(this.ic_media);

    }
    componentDidMount() {
        this.getMembers();
    }
    getMembers() {
        fetch("http://localhost:3000/info/icmedia/"+this.ic_media)
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