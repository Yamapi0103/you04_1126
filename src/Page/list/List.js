import React, {Component} from 'react';
import './List.scss';
import {Link} from 'react-router-dom';
import SearchBar from '../home/SearchBar';
import ListCaseCard from './ListCaseCard';
// import Listjson from './casejson.json';
import $ from 'jquery';
import FilterRight from '../../Component/FilterRight'


class List extends Component{
    constructor(props){
        super(props);
        this.state= {
            cases:[]
        }
        // console.log(Listjson);
    }
    
    componentDidMount() {
        
        let ids = this.props.match.params.ids,
            bas = this.props.match.params.bas;
        this.getCase(ids, bas)
    }

    


    getCase(ids, bas){
        fetch("http://localhost:3000/api/search/"+ ids +'/' +bas)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                cases:data
            })
        })
        
    }

    render(){
      

        return(
            <React.Fragment>
                <div className="list_section1">
                    <div className="list_section1_searchbar_container">
                        <SearchBar />
                    </div>
                </div>
                <div className="list_section2">
                    <div className="list_section2_case_container">
                        <div className="list_section2_case_container_case">
                            <ListCaseCard cases={this.state.cases}/>
                        </div>
                        <div className="list_section2_case_container_btn">
                            <ul className="pagination justify-content-center mt-3">
                            </ul>
                        </div>
                    </div>
                    <div className="list_section2_option_container">
                        <FilterRight />
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default List;

