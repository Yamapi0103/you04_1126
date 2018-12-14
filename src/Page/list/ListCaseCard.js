
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListCaseCard.scss';
import cookies from 'react-cookies';
import swal from 'sweetalert';
import ListCaseCardItem from './ListCaseCardItem'

class ListCaseCard extends Component {
    constructor(props) {
        super(props);

    }
<<<<<<< HEAD

    //網紅收藏專案
    addfavor = (evt) => {
        // alert(evt.target);
        let ICmember_sid = cookies.load('userId')[0]['IC_sid'];
        
        let addfavor = {
            BScase_sid: evt.target.dataset.save,
            ICmember_sid: ICmember_sid,
        };
        console.log(addfavor)
        //先確認之前有沒有收藏
        //之前沒收藏 => 可以收藏
        fetch('http://localhost:3000/api/ICAddFavor', {
            method: 'POST',
            body: JSON.stringify(addfavor),
            headers: new Headers({
                'content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                swal(data.message);
            })
    };


    Favorite = (evt) => {
        console.log(this.state.saved);
        console.log(evt.target.id);
        this.setState({
            saved: !(this.state.saved),
        })

        console.log(this.state);

        if (!this.state.saved)
            this.addHandler();
        else
            this.delHandler()
    }


    addHandler = (evt) => {
        fetch('http://localhost:3000/api/ICAddFavor', {
            method: 'POST',
            body: JSON.stringify(this.favor_case),
            headers: new Headers({
                'content-type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                swal(data.message, "已加入收藏");
            })
    }

    savedOrNot = () => {
        fetch("http://localhost:3000/api/ICGetFavor/" + this.favor_case.ic_sid + "/" + this.favor_case.bscase_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1)
                    this.setState({
                        saved: true
                    })
            })
    }


=======
>>>>>>> 7de687f9627e6070b5af4b40703c91cc256859db
    render() {
        return (
            <React.Fragment>
                {
                    this.props.cases.map(ct =>
                        <ListCaseCardItem cases={ct}/>
                    )
                }

            </React.Fragment>
        );
    }
}


export default ListCaseCard;