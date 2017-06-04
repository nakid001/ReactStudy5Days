import React, {Component} from 'react'
import { createStore} from 'redux'
import combineReducers from '../../reducers'


const store =createStore(combineReducers);

store.subscribe(()=>{
  console.log("store changed",store.getState())
})

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      repassword:'',
      email:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }


    handleChange(event) {
      if(event.target.name=="User")
        this.setState({username: event.target.value});
      else if(event.target.name=="Pass")
        this.setState({password:event.target.value})
      else if(event.target.name=="RePass")
        this.setState({repassword:event.target.value})
      else if(event.target.name=="Email")
        this.setState({email:event.target.value})
    }


  render() {
    return (
      <h2 className="title">
        <form action="/action_page.php">
        Username :    <input type="text" name="User"    value={this.state.value} onChange={this.handleChange} /><br />
        Password :    <input type="text" name="Pass"    value={this.state.value} onChange={this.handleChange} /> <br />
        Re-Password : <input type="text" name="RePass"  value={this.state.value} onChange={this.handleChange} /><br />
        Email :       <input type="text" name="Email"   value={this.state.value} onChange={this.handleChange} /><br />
        <input type="button" value="Submit"         
        onClick={()=>{
          store.dispatch(
            {
              type:"REGISTER",
              yaname:this.state.username,
              yapass:this.state.password,
              yarepass:this.state.repassword,
              yaemail:this.state.email
          })
          
          }}/>
        </form>
      </h2>
    )
  }
}
