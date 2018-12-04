import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import './publish.scss';

import cookies from 'react-cookies';
import swal from 'sweetalert'
class CheckPublish extends Component {
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
            industry_name:'',
            BScase_ask_people:'1',
            BScase_pay:'',
            BScase_name:'',
            BScase_location:'',
            BScase_time_limit:dateNow,
            BScase_fans:'',
            BScase_active:'',
            BScase_info:'',
            BScase_publish_at:dateTimeNow,
            BS_sid:'', // 存發布專案的人(BS_sid)
            BScase_photo:'',
            selectPhoto:null,
        }

    }
  
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
        this.props.history.push('/login')
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


    //post表單到資料庫
    addHandler = (evt) =>{
        evt.preventDefault();
        console.log(this.state)
        this.userSid = this.cookie.BS_sid
        this.userPoints = this.cookie.BS_point //cookie紀錄的point


        if(this.flag_BScase_name ==true && this.flag_industry_name  ==true && this.flag_BScase_active == true){
            delete this.state.industry_option;
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
            
            //扣100點點數 並更新cookie裡的BS_point
            cookies.save('userId',[{
                ...this.cookie,
                BS_point: parseInt(cookies.load('userId')[0].BS_point)-100
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
                    alert(data.message);
            })
                // this.props.history.push('/home')
        }else{
            swal('填表啊大哥')
        }
    }
    
    isLogin = ()=>{
        return cookies.load('userId')?true:false
    }
    selectClick = evt =>{
        let select =evt.target;
        
        select[0].setAttribute('disabled', 'disabled')
    }

    getCase(Bscase_sid){
        fetch("http://localhost:3000/api/publish/1")
        .then(res => res.json())
        .then(data =>{
            let Data = data[0]
            this.setState({
                BScase_name:Data['BScase_name'],
                BScase_ask_people:Data['BScase_ask_people'],
                BScase_location:Data['BScase_location'],
                BScase_pay:Data['BScase_pay'],
                BScase_experience:Data['BScase_experience'],
                BScase_fans:Data['BScase_fans'],
                BScase_active:Data['BScase_active'],
                BScase_contact:Data['BScase_contact'],
                BScase_info:Data['BScase_info'],
                industry_name:Data['industry_name'],
                BScase_Photo:Data['BScase_photo']
            })
        })
        // this.getIndustry();
        // this.getActive();
    }

    componentWillMount(){
        this.getCase()
    }
    render(){

        if(!this.isLogin()){
            return(
                <React.Fragment>
                {alert("請先登入")}
                {this.props.history.push("/login")}
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
        else{
        return(
            <React.Fragment>
                
                <form className="publish_container">
                <h3>專案確認</h3>

               
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
                    <div className="job_wrap">
          <header className="job_upper">
            <figure className="upper_left">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    上傳圖片
                </button>
              <img className="photo" src={(`http://localhost:3000/api/${this.state.BScase_Photo}`)} />
            </figure>
            <aside className="upper_right">

              <div className="form-group">
                    <label>專案名稱</label>
                    <input type="text" value={this.state.BScase_name} id="publish_name" onBlur={this.blur} name="BScase_name" onChange={this.handleChange} className="form-control"/>
                </div>
            </aside>
          </header>
          <section className="job_lower">
              <article className="job_content">
                  <h3 className="text_align_center ">工作內容</h3>
                <div className="container720">
                
                <p><b>產業類別: </b>{this.state.industry}</p>
                <p><b>期限要求: </b> {this.state.BScase_time_limit}</p>
                <p><b>薪資待遇: </b>{this.state.BScase_pay}</p>
                
                </div>
              </article>
              <article className="job_content">
                <h3 className="text_align_center ">條件內容</h3>
              <div className="container720">
                <p><b>地點: </b> {this.state.BScase_location}</p>
                <p><b>人氣:</b> {this.state.BScase_fans}</p>
                <p><b>專案形式: </b>{this.state.active}</p>
                </div>
              </article>
              <article className="job_content">
                <h3 className="text_align_center ">補充說明</h3>
                <div className="container720">
                <p>{this.state.BScase_info}
                </p></div>
              
              </article>

              <div className="publish_btn">
                    <button className="btn" onClick={this.addHandler}>確認發布</button>
                </div>
          </section>
        </div>
                </form>
            </React.Fragment>
            )
        }
    }
}

export default CheckPublish;