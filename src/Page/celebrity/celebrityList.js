import React, { Component } from 'react';
import CelebrityItem from './celebrityItem';
// import  celebrity from './celebrity.json';
import './celebrity.scss';
import { Link } from 'react-router-dom';

class CelebrityList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celebrities: [],
            // celebrity: this.initState,
        }
        // 沒給:ic_media(http://localhost:3001/celebrity/) =>預設為看到全部網紅
        this.ic_media = this.props.match.params.ic_media || "all";
        console.log(this.ic_media);

    }
    componentDidMount() {
        console.log(this.props.match)
        this.getMembers(this.ic_media);
    }
    getMembers(ic_media) {
        fetch("http://localhost:3000/info/icmedia/" + ic_media)
            .then(res => res.json())
            .then(members => {
                this.setState({
                    celebrities: members
                })
                console.log(this.state.celebrities)
            })
        // .then(members => { return members })
    }
    changeMedia = (evt) => {
        console.log(evt.target.dataset.type)
        this.ic_media = evt.target.dataset.type
        this.getMembers(this.ic_media)
        window.location.reload()
        // console.log(this.ic_media)

    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <nav className="media-nav">
                        <Link to="/celebrity/youtube" data-type="youtube" onClick={this.changeMedia} className="btn btn-yt">YouTube</Link>
                        <Link to="/celebrity/facebook" data-type="facebook" onClick={this.changeMedia} className="btn btn-fb">Facebook</Link>
                        <Link to="/celebrity/instgram" data-type="instgram" onClick={this.changeMedia} className="btn btn-ig">Instagram</Link>
                        <Link to="/celebrity/blog" data-type="blog" onClick={this.changeMedia} className="btn btn-blog">Blog</Link>
                        <Link to="/celebrity/all" data-type="all" onClick={this.changeMedia} className="btn btn-all">所有</Link>
                    </nav>

                </section>
                <section className="celebrity_wrap">
                    {this.state.celebrities.map((c, idx) =>
                        <CelebrityItem key={idx} celebrity={c} />
                    )}

                </section>
            </React.Fragment>
        )
    }
}

export default CelebrityList; 