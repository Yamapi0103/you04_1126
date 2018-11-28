import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.scss';
import ISearchBarOption from './ISearchBarOption';
import ATSearchBarOption from './ATSearchBarOption';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={
            industry_option:[],
            active_option:[],
            ids:'',
            bas:''
        }
    
    }
    getSearchIndustry(){
        fetch("http://localhost:3000/api/searchIndustry/")
            .then(res =>res.json())
            .then(data=>{  
                let Data = data[0]
                this.setState({
                industry_option:data,
                ids:Data['id']
            })
        })      
    }
    getSearchActive(){
        fetch("http://localhost:3000/api/searchActive/")
            .then(res =>res.json())
            .then(data=>{ 
                let Data=data[0]
                this.setState({
                active_option:data,
                bas:Data['id']
            })
        })      
    }

    handleChange = (evt) => {
        let key = evt.target.name;
        let value = evt.target.value;
        this.setState({
            [key]:value
        })
    }

    search=(evt)=>{
            let key = evt.target.name;
            let value = evt.target.value;
            this.setState({
                [key]:value
            })
        this.getSearch()
    }


    componentDidMount(){
        this.getSearchIndustry()
        this.getSearchActive()
    }

    render(){
        return(
            <React.Fragment>
                
                <div className="searchbar">    
                        <select className="searchbar_btn_dropdown_toggle" name="ids" onChange={this.handleChange}>
                            <ISearchBarOption industry_option={this.state.industry_option} />
                        </select>

                        <select onChange={this.handleChange} name="bas">
                            <ATSearchBarOption active_option={this.state.active_option} />
                        </select>
                    
                    <input className=" searchbar_btn searchbar_btn3" placeholder="關鍵字搜尋：產品名稱等" />
                </div>
                <Link to={`/list/${this.state.ids}/${this.state.bas}`} className="startsearch_btn" onClick={this.search}>
                <i className="fas fa-search"></i><span>開始搜尋</span>
                </Link>
            </React.Fragment>
        )
    }
}

export default SearchBar;