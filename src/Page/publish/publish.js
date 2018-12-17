import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import './publish.scss';
import ISearchBarOption from '../home/ISearchBarOption';
import ATSearchBarOption from '../home/ATSearchBarOption';
import cookies from 'react-cookies';
import swal from 'sweetalert'
class Publish extends Component {
    constructor(props) {
        super(props);
        var a = new Date();
        var dateTimeNow = a.getFullYear()+'-' +(a.getMonth()+1)+'-'+a.getDate()+" "+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
        var dateNow = a.getFullYear()+'-' +(a.getMonth()+1)+'-'+a.getDay();
        this.userPoints = 0;
        this.userSid = 0;
        this.state={
            active_option:[],
            industry_option:[],
            case_id:'',
            industry_name:'',
            BScase_name:'',
            BS_sid:'', // 存發布專案的人(BS_sid)
            BScase_photo:'',
            BScase_ask_people:'1',
            BScase_pay:'',
            BScase_location:'',
            BScase_time_limit:dateNow,
            BScase_fans:'',
            BScase_active:'',
            BScase_info:'',
            BScase_publish_at:dateTimeNow,
            selectPhoto:null,
           
        }
        this.flag_BScase_name =null;
        this.flag_industry_name =null;
        this.flag_BScase_active =null;
    }
    // tagChangeState(index){
    //     this.state.selectTag[index]=!this.state.selectTag[index]
    //     console.log(this.state.selectTag)
    // }
    //下面兩隻都是呼叫
    getSearchIndustry(){
        fetch("http://localhost:3000/api/searchIndustry/")
            .then(res =>res.json())
            .then(data=>{        
                let Data = data[0]         
                console.log(Data['industry_name'])
                this.setState({
                industry_option:data,
                industry_name:Data['industry_name'],                
            })
        })      
    };
    getSearchActive(){
        fetch("http://localhost:3000/api/searchActive/")
            .then(res =>res.json())
            .then(data=>{
                let Data = data[0]
                // console.log(data) 
                this.setState({
                active_option:data,
                BScase_active:Data['active_name']
            })
        })      
    }
   
    //從資料庫呼叫資料製造表單選項
    componentDidMount(){
        if(this.isLogin()){
        // this.cookie = cookies.load('userId')[0] 
        console.log(this.cookie)  //看cookie內容

        // 將下面code放componentDidMount才能新增BS_sid進DB，放addHandler就不行 ((怪怪的
        this.setState({
            BS_sid:this.cookie.BS_sid
        })   
    }
    else{
        this.props.history.push('/loginIdSelect')
        return
    }
        this.getSearchIndustry();
        this.getSearchActive();

    }

    //處理受控表單
    handleChange = (evt) => {
        let key = evt.target.name;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    }
    fileSelectPhoto = evt =>{
        this.setState({
            selectPhoto:evt.target.files[0]
        })
        this.setState({
            BScase_photo:evt.target.files[0].name
        })
        console.log(this.state.BScase_photo)
    }
    //上傳照片到upload資料夾
    submitPhoto = (evt) => {     
        evt.preventDefault();
        let formData = new FormData();

        formData.append('image', this.state.selectPhoto, this.state.selectPhoto.name);

        fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData
        }).then(function(response){
            return response.json();
        }).then(function(data){
            alert('update')
        })
        
    }
    
    // fetchPoints = (userSid)=>{
    //     return fetch('http://localhost:3000/api3/bsmembers/'+userSid);
    // }

    //表單發送前檢查
    blur= evt =>{
        //Publish name checked
        if(evt.target == document.querySelector('#publish_name')){
            //no input
            if(this.state.BScase_name ==''){
                this.flag_BScase_name =false;
                // document.querySelector('.blank_text1').style.display='none';
                // document.querySelector('#publish_name_content_text').style.display='block';
            }
            else{
                this.flag_BScase_name = true;
                // document.querySelector('#publish_name_content_text').style.display='none';
                // document.querySelector('.blank_text1').style.display='block';
            }
        }
        if(evt.target == document.querySelector('#industry_name')){
            //no input
            if(this.state.BScase_name =='請選擇產業類型'){
                this.flag_BScase_name =false;

            }
            else{
                this.flag_industry_name = true;

            }
        }
        if(evt.target == document.querySelector('#active_name')){
            //no input
            if(this.state.BScase_name =='請選擇活動類型'){
                this.flag_BScase_active =false;
            }
            else{
                this.flag_BScase_active = true;
            }
        }
    }




    //post表單到資料庫
    addHandler = (evt) =>{
        evt.preventDefault();
        console.log(this.state)
        this.userSid = this.cookie.BS_sid
        this.userPoints = this.cookie.BS_point //cookie紀錄的point
        console.log(this.userPoints)
        // console.log(this.userSid)

        //判斷點數是否足夠
        if(this.userPoints<500){
            swal('點數不足，請先到商城購買點數！')
            return
        }

        if(this.flag_BScase_name ==true && this.flag_industry_name  ==true && this.flag_BScase_active == true){
            delete this.state.industry_option;
            delete this.state.case_id;
            delete this.state.active_option;
            delete this.state.selectPhoto;
            //新增bs_case
            fetch('http://localhost:3000/api/publish',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:new Headers({
                'content-type':'application/json'
                })
            }).then(res=>res.json())
            .then(data => {
                alert(data.message)
            })
            .then(()=>{
                            //扣500點點數 並更新cookie裡的BS_point
            cookies.save('userId',[{
                ...this.cookie,
                BS_point: parseInt(cookies.load('userId')[0].BS_point)-500
            }])
            this.cookie = cookies.load('userId')[0]  //對this.cookie更新
            // console.log(cookies.load('userId')[0]) 
            // console.log(this.cookie)
            
            //更新bsmember裡的bs_point
                fetch('http://localhost:3000/you04/updateBSmember/'+this.userSid, {
                    method: 'PUT',
                    body: JSON.stringify({BS_point:this.cookie.BS_point}), //只更新bsmember點數
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json())
                    .then(data => {
                        // alert(data.message);
                }).then(
                    fetch('http://localhost:3000/api/publishlastOne')
                    .then(res =>res.json())
                    .then(data=>{
                        
                        let Data = data[0]
                        console.log(Data['BScase_sid'])
                        window.scrollTo(0,0);
                        this.props.history.push('/publish_content/' + Data['BScase_sid'])
                        
                    })
                )
            })
            }else{
                swal('您有應填寫的欄位未填')
            }
    }
    



    isLogin = ()=>{
        return cookies.load('userId')?true:false
    }
    selectClick = evt =>{
        let select =evt.target;
        
        select[0].setAttribute('disabled', 'disabled')
    }


    render(){
        // console.log(this.cookie)
        if(!this.isLogin()){
            return(
                <React.Fragment>
                {alert("請先登入")}
                {this.props.history.push("/loginIdSelect")}
                </React.Fragment>
            )
        }
        this.cookie = cookies.load('userId')[0] 
        if(this.cookie.BS_point<100){
            return(
                <React.Fragment>
                    {alert("點數不足，請先去買點數!")}
                    {this.props.history.push("/plan")}
                </React.Fragment>
            )
        }
        else if(this.cookie.BS_status!="啟用中"){
            return(
                <React.Fragment>
                    {alert("帳戶狀態不允許刊登方案!")}
                    {this.props.history.push("/plan")}
                </React.Fragment>
            ) 
        }
        else{
        return(
            <React.Fragment>
                <div className="publish_container">
                    <form className="publish_content">
                        <h3>專案刊登</h3>
                        <p>*為必填欄位</p>
                        <br/>
                        <br/>
                        <button type="button" className="upload_btn publish_btn" data-toggle="modal" data-target="#exampleModal">
                            上傳圖片
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">請選擇要上傳的照片</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="exampleFormControlFile1">檔案請勿超過100k</label>
                                        <input type="file" onChange={this.fileSelectPhoto} className="form-control-file" id="exampleFormControlFile1"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                                    <button type="button" className="btn btn-primary" onClick={this.submitPhoto} data-dismiss="modal">確定傳送</button>
                                </div>
                                </div>
                            </div>
                            </div>

                        <div className="form-group">
                            <label>*請填寫專案名稱</label>
                            <input type="text" value={this.state.BScase_name} id="publish_name" onBlur={this.blur} name="BScase_name" onChange={this.handleChange} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <h4>專案內容</h4>
                            <label>*請選擇產業類型</label>
                            <select value={this.state.industry_name} onClick={this.selectClick} id="industry_name" onBlur={this.blur} name="industry_name" onChange={this.handleChange} className="form-control" >
                                <ISearchBarOption industry_option={this.state.industry_option}/>                    
                            </select>
                            <label>請選擇薪資區間</label>
                            <select className="form-control" value={this.state.BScase_pay} name="BScase_pay" onChange={this.handleChange}>
                                <option>1,000-3,000元</option>
                                <option>3,000-5,000元</option>
                                <option>5,000-10,000元</option>
                                <option>10,000-50,000元</option>
                                <option>50,001元以上</option>
                            </select>
                            <label>選擇需求人數</label>
                            <select className="form-control" value={this.state.BScase_ask_people} name="BScase_ask_people" onChange={this.handleChange} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">3人以上</option>
                            </select>
                        </div>
                        <br/>
                        <div>
                            <h4>條件內容</h4>
                            <label>*請選擇活動型態</label>
                            <select value={this.state.BScase_active} onClick={this.selectClick} id="active_name" onBlur={this.blur} name="BScase_active" onChange={this.handleChange} className="form-control" >
                                <ATSearchBarOption active_option={this.state.active_option}/>
                            </select>
                            <div className="form-group">
                                <label>人氣要求</label>
                                <select value={this.state.BScase_fans} name="BScase_fans" onChange={this.handleChange} className="form-control" >
                                    <option>100-500</option>
                                    <option>500-1,000</option>
                                    <option>1,000-5,000</option>
                                    <option>5,001-10,000</option>
                                </select>
                                <label>*期限要求</label>
                                <input value={this.state.BScase_time_limit} name="BScase_time_limit" type="date" onChange={this.handleChange} className="form-control" />
                                <label>工作地點</label>
                                <select value={this.state.BScase_location} name="BScase_location" onChange={this.handleChange} className="form-control" >
                                    <option>不限</option>
                                    <option>台北</option>
                                    <option>台中</option>
                                </select>
                            </div>
                        </div>

                        <br/>
                        <div>
                            <h4>額外資訊</h4>
                            <textarea value={this.state.BScase_info} name="BScase_info" onChange={this.handleChange} className="form-control" rows="5"></textarea>
                        </div>
                        <div className="form-group" value={this.state.tag_name} name="tag_name" onChange={this.handleChange}>
                            {/* <label>請選擇符合您的tag標籤</label>
                            <div >
                                {this.state.tag_option.map((tg,index)=>
                                
                                        <div key={index}>
                                        <input type="checkbox" id="scales" checked={this.state.selectTag[index]|| false} onChange={()=>this.tagChangeState(index)} name="scales"/>
                                        <label>{tg.tag_name}</label>
                                        </div>
                                    )
                                }
                            </div> */}
                        </div>
                        <div className="alert alert-success" role="alert">
                            本次刊登將會扣除您500點點數
                        </div>
                        <br/> 

                        <div className="publish_warning">
                            <h5>還沒有點數嗎？</h5>
                            <Link to="./plan">點擊這裡購買方案！</Link>
                        </div>
                        <br/>
                        <div className="publish_btn_container">
                            <button className="publish_btn" onClick={this.addHandler}>發布</button>
                            <button className="publish_btn" type="submit">清空</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
            )
        }
    }
}

export default Publish;