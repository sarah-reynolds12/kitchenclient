import React from 'react';
import './FoodItem.css';

export interface KitchenProps {
  // updateToken: Function;
    token: string
}
 
export interface KitchenState {
    kitchenarea1: string,
    kitchenarea2: string,
    kitchenarea3: string,
    kitchenarea4: string,
    errors: {
        kitchenarea1: string,
        kitchenarea2: string,
        kitchenarea3: string,
        kitchenarea4: string,
    }
}
 
class Kitchen extends React.Component<KitchenProps, KitchenState> {
    constructor(props: KitchenProps) {
        super(props);
        const initialState = {
            kitchenarea1: '',
            kitchenarea2: '',
            kitchenarea3: '',
            kitchenarea4: '',
            errors: {
                kitchenarea1: '',
                kitchenarea2: '',
                kitchenarea3: '',
                kitchenarea4: '',
            }
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event : any) => {
        event.preventDefault();
        const {name, value}= event.target;

        let errors = this.state.errors;
        switch(name){
            case 'kitchenarea1':
                errors.kitchenarea1 = value.length === 0 ? 'Must choose a kitchen area': '';
                break;
                default:
                    break;
        }
        this.setState(Object.assign(this.state,{errors, [name]: value}));
        console.log(this.state.errors)
    }
    
    handleSubmit = (event : any) => {
      //  event.preventDefault();
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity === true){
           console.log("Created Successfully!");
        
        fetch(`http://localhost:3000/kitchen/create`, {
            method: 'POST',
            body: JSON.stringify({kitchenarea1: this.state.kitchenarea1,kitchenarea2: this.state.kitchenarea2, kitchenarea3: this.state.kitchenarea3, kitchenarea4: this.state.kitchenarea4}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? token : ''
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            // this.props.updateToken(data.sessionToken)
            // console.log(data.sessionToken);
            this.setState({kitchenarea1: ""});
            this.setState({kitchenarea2: ''});
            this.setState({kitchenarea3: ""});
            this.setState({kitchenarea4: ''});
            console.log(data);
        })
    }else {
           console.log("You cannot create a kitchen.")
        }    
     }

    render() { 
        const {errors } = this.state
        return ( <div className='wrapper'>
        <div className='form-wrapper'>
           <h2>Build Your Kitchen</h2>
           <p>Add the areas that you would like to include in your kitchen</p>
           <form onSubmit={this.handleSubmit} noValidate >
              <br />
              <div className='kitchenarea1'>
              <label htmlFor="kitchenarea1">Kitchen Area: </label> 
                 <select id="kitchenarea1" onChange={(e) => this.setState({kitchenarea1: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                    </select>
                 {errors.kitchenarea1.length > 0 &&  <span style={{color: "red"}}>{errors.kitchenarea1}</span>}
              </div>
              <br /><br />
              <div className='kitchenarea2'>
                 <label htmlFor="kitchenarea2">Add Another Kitchen Area: </label> 
                 <select id="kitchenarea2" onChange={(e) => this.setState({kitchenarea2: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
              </div>      
              <br /><br />
              <div className='kitchenarea3'>
                 <label htmlFor="kitchenarea3">Another Kitchen Area: </label> 
                 <select id="kitchenarea3" onChange={(e) => this.setState({kitchenarea3: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
              </div>      
              <br /><br />        
              <div className='kitchenarea4'>
                 <label htmlFor="kitchenarea4">Another Kitchen Area: </label> 
                 <select id="kitchenarea4" onChange={(e) => this.setState({kitchenarea4: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
              </div>      
              <br /><br />                
              <div className='submit'>
                 <button>Create Kitchen</button>
              </div>
         </form>
     </div>
  </div> 
  );
    }
}
 
export default Kitchen;
