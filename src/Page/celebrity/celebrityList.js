import React, { Component } from 'react';
import CelebrityItem from './celebrityItem';
import  celebrity from './celebrity.json';
import './celebrity.scss';

class CelebrityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebrity : celebrity
        }
        console.log("CelebrityList"+this.state.celebrity)
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <h2 className="">網紅清單</h2>
                </section>
                <section className="celebrity_wrap">
                {this.state.celebrity.map((c,idx)=>
                    <CelebrityItem key={idx} celebrity={c} />
                    )}

                </section>
            </React.Fragment>
        )
    }
}

export default CelebrityList; 