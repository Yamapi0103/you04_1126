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
            bas = this.props.match.params.bas,
            keyword = this.props.match.params.keyword;
        this.getCase(ids, bas, keyword)
        this.getPeopleFilter()
        this.getFansFilter()
        this.getPayFilter()
    }   


    getCase(ids, bas, keyword){
        fetch("http://localhost:3000/api/search/"+ ids +'/' +bas + '/'+ keyword + '/')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            let Data = data[0]
            this.setState({
                cases:data
            })
        })
    }

    getIndustry = () =>{
        fetch("http://localhost:3000/api/pairIndustry/" + this.state.industry_name,{
          method:'GET',
          headers:{
            'content-type': 'application/json',
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          let Data = data[0]
          console.log(Data);
          this.setState({
            industry: Data['industry_name']
          })
        })
      }

      getActive = () =>{
        fetch("http://localhost:3000/api/pairActive/" + this.state.BScase_active,{
          method:'GET',
          headers:{
            'content-type': 'application/json',
          }
        })
        .then(res=>res.json())
        .then(data=>{
          let Data = data[0]
          this.setState({
            active: Data['active_name']
          })
        })
      }
    

    //標籤篩選器
    getPeopleFilter(){
        $(document).ready(function(){
            $(".people-filter").on("click", function(){
                $(".list_case_card_container").hide();
                if($(this).data("dropdownValue") == 'all'){
                $(".people-filter").show();
            }else{
                $("div[people-value='"+$(this).data("dropdownValue")+"']").show();
            }            
            })
          });
    }

    getFansFilter(){
        $(document).ready(function(){
            $(".fans-filter").on("click", function(){
                $(".list_case_card_container").hide();
                if($(this).data("dropdownValue") == 'all'){
                $(".fans-filter").show();
            }else{
                $("div[fans-value='"+$(this).data("dropdownValue")+"']").show();
            }            
            })
          });
    }

    getPayFilter(){
        $(document).ready(function(){
            $(".pay-filter").on("click", function(){
                $(".list_case_card_container").hide();
                if($(this).data("dropdownValue") == 'all'){
                $(".pay-filter").show();
            }else{
                $("div[pay-value='"+$(this).data("dropdownValue")+"']").show();
            }            
            })
          });
    }
    render(){
        const keyword = this.props.match.params.keyword;

        return(
            <React.Fragment>
                <div className="list_section1">
                    <div className="list_section1_searchbar_container">
                        <SearchBar />
                        <div>
                </div>
                    </div>
                </div>
                <div className="list_section2">
                    <div className="list_section2_case_container">
                        <h3>以下是您的搜尋結果{this.state.industry} , {this.state.active}</h3>
                        <div className="list_section2_case_container_case">
                            <ListCaseCard cases={this.state.cases} industry={this.state.industry} active={this.state.active} />
                        </div>
                        <div className="list_section2_case_container_btn">
                            <ul className="pagination justify-content-center mt-3">
                            </ul>
                        </div>
                    </div>
                    <div className="list_section2_option_container">
                    <div class="filter">
                        <h2>網紅需求數</h2>
                        <ul>
                            <li>
                                <input type="radio" id="people-1" name="selector" className="people-filter" data-dropdown-value="1" />
                                <label for="people-1">需求人數：1</label>
                                <div class="check"></div>
                            </li>
                            <li>
                                <input type="radio" id="people-2" name="selector" className="people-filter" data-dropdown-value="2" />
                                <label for="people-2">需求人數：2</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                            <li>
                                <input type="radio" id="people-3" name="selector" className="people-filter" data-dropdown-value="3" />
                                <label for="people-3">需求人數：3</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                            <li>
                                <input type="radio" id="people-4" name="selector" className="people-filter" data-dropdown-value="3人以上" />
                                <label for="people-4">需求人數：3人以上</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                        </ul>
                        
                        <h2 className="mt-3">網紅粉絲需求數</h2>
                        <ul>
                            <li>
                                <input type="radio" id="fans-1" name="selector" className="fans-filter" data-dropdown-value="100~500" />
                                <label for="fans-1">微量粉絲數</label>
                                <div class="check"></div>
                            </li>
                            <li>
                                <input type="radio" id="fans-2" name="selector" className="fans-filter" data-dropdown-value="500~1000" />
                                <label for="fans-2">輕量粉絲數</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                            <li>
                                <input type="radio" id="fans-3" name="selector" className="fans-filter" data-dropdown-value="1000~2000" />
                                <label for="fans-3">中量級粉絲數</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                            <li>
                                <input type="radio" id="fans-4" name="selector" className="fans-filter" data-dropdown-value="2000~5000" />
                                <label for="fans-4">重量級粉絲數</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                        </ul>
                        
                        <h2 className="mt-3">案子薪水需求</h2>
                        <ul>
                            <li>
                                <input type="radio" id="pay-1" name="selector" className="pay-filter" data-dropdown-value="1,000-3,000元" />
                                <label for="pay-1">要求低薪</label>
                                <div class="check"></div>
                            </li>
                            <li>
                                <input type="radio" id="pay-2" name="selector" className="pay-filter" data-dropdown-value="3,000-5,000元" />
                                <label for="pay-2">剛好就好</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                            <li>
                                <input type="radio" id="pay-3" name="selector" className="pay-filter" data-dropdown-value="10,000-50,000元" />
                                <label for="pay-3">我要高薪</label>
                                <div class="check"><div class="inside"></div></div>
                            </li>
                        </ul>
                    </div>
                        {/* <div>
                            <ul>
                                <li className="people-filter" data-dropdown-value="1">需求人數:1</li>
                                <li className="people-filter" data-dropdown-value="2">需求人數:2</li>
                                <li className="people-filter" data-dropdown-value="3">需求人數:3</li>
                                <li className="people-filter" data-dropdown-value="3人以上">需求人數:3人以上</li>
                            </ul>
                            
                            <ul>
                                <li className="fans-filter" data-dropdown-value="100~500">微量粉絲數</li>
                                <li className="fans-filter" data-dropdown-value="500~1000">輕量粉絲數</li>
                                <li className="fans-filter" data-dropdown-value="1000~2000">中量級粉絲數</li>
                                <li className="fans-filter" data-dropdown-value="2000~5000">重量級粉絲數</li>
                            </ul>
                            <ul>
                                <li className="pay-filter" data-dropdown-value="1,000-3,000元">要求低薪</li>
                                <li className="pay-filter" data-dropdown-value="3,000-5,000元">剛好就好</li>
                                <li className="pay-filter" data-dropdown-value="10,000-50,000元">我要高薪</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default List;

