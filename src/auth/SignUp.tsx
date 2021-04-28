import React from "react";
import "./SignUpStyle.css"
//import { RouteComponentProps, withRouter } from 'react-router-dom';

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface SignUpProps {
   name?: any;
   value?: any;
   updateToken: Function;
   //toggle: Function;
}
interface SignUpState {
   username : string,
   email : string,
   password : string,
   role: string,
   errors : {
      username :  string,
      email : string,
      password : string,
      role: string,
   }
}


export class SignUp extends React.Component <SignUpProps, SignUpState> {
   
   constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         username : '',
         email : '',
         password : '',
         role: '',
         errors : {
           username : '',
           email : '',
           password : '',
           role: '',
         } 
       }
       this.state = initialState;
       this.handleChange = this.handleChange.bind(this);
   }

   handleChange = (event : any) => {
      event.preventDefault();
      const { name, value } = event.target;
   
      let errors = this.state.errors;
     switch (name) {
      case 'email':
          errors.email = Regex.test(value)? '': 'Email is not valid!';
          break;
       case 'password':
          errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
          break;
       default:
         break;
   }
   this.setState(Object.assign(this.state, { errors,[name]: value }));
   console.log(this.state.errors);
   }
   
   handleSubmit = (event : any) => {
      event.preventDefault();
      let validity = true;
      Object.values(this.state.errors).forEach(
        (val) => val.length > 0 && (validity = false)
      );
      if(validity === true){
         console.log("Registered Successfully!");
      
         fetch(`http://localhost:3000/user/create`, {
            method: 'POST',
            body: JSON.stringify({username: this.state.username, email: this.state.email, password: this.state.password, role: this.state.role}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            //this.props.toggle();
            console.log(data.sessionToken);
            console.log(data);
        })
        } else {
           console.log("You cannot be registered.")
        }
      }

    render() {
      const {errors} = this.state
        return (
            <div className='wrapper'>
              <div className='form-wrapper'>
                 <h2>Sign Up</h2>
                 <form onSubmit={this.handleSubmit} noValidate >
                    <br />
                    <div className='userName'>
                       <label htmlFor="userName">Kitchen Name</label>
                       <input type='text' name='userName' onChange= {this.handleChange}/>
                       {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
                    </div>
                    <br />
                    <div className='email'>
                       <label htmlFor="email">Email</label>
                       <input type='email' name='email' onChange={this.handleChange}/>
                       {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
                    </div>
                    <div className='password'>
                       <label htmlFor="password">Password</label>
                       <input type='password' name='password' onChange={this.handleChange}/>
                       {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
                    </div>             
                    <div className='role'>
                       <label htmlFor="role">Role: </label> 
                       <select id="roles">
                          <option value="">Select</option>
                          <option value="shopper">Shopper</option>
                          <option value="householdmember">Household Member</option>
                       </select>
                       {/* <input type='role' name='role' onChange={this.handleChange}/> */}
                       {/* {errors.role.length > 0 && <span style} */}
                    </div>              
                    <div className='submit'>
                       <button>Sign Up</button>
                    </div>
               </form>
           </div>
        </div>
       );
    }

}
