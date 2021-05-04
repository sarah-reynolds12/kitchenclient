import React from 'react';
import './FoodItem.css';

export interface KitchenProps {
  // updateToken: Function;
    token: string
}
 
export interface KitchenState {
    kitchenarea: string,
    errors: {
        kitchenarea: string,
    }
}
 
class Kitchen extends React.Component<KitchenProps, KitchenState> {
    constructor(props: KitchenProps) {
        super(props);
        const initialState = {
            kitchenarea: '',
            errors: {
                kitchenarea: '',
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
            case 'kitchenarea':
                errors.kitchenarea = value.length === 0 ? 'Must choose a kitchen area': '';
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
            body: JSON.stringify({kitchenarea: this.state.kitchenarea}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? token : ''
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            // this.props.updateToken(data.sessionToken)
            // console.log(data.sessionToken);
            this.setState({kitchenarea: ""});
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
              <div className='kitchenarea'>
              <label htmlFor="kitchenarea">Kitchen Area: </label> 
                 <select id="kitchenarea" onChange={(e) => this.setState({kitchenarea: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                    </select>
                 {errors.kitchenarea.length > 0 &&  <span style={{color: "red"}}>{errors.kitchenarea}</span>}
              </div>
              <br /><br />
              <div className='kitchenarea'>
                 <label htmlFor="kitchenarea">Add Another Kitchen Area: </label> 
                 <select id="kitchenarea" onChange={(e) => this.setState({kitchenarea: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
              </div>      
              <br /><br />
              <div className='kitchenarea'>
                 <label htmlFor="kitchenarea">Another Kitchen Area: </label> 
                 <select id="kitchenarea" onChange={(e) => this.setState({kitchenarea: e.target.value})}>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
              </div>      
              <br /><br />        
              <div className='kitchenarea'>
                 <label htmlFor="kitchenarea">Another Kitchen Area: </label> 
                 <select id="kitchenarea" onChange={(e) => this.setState({kitchenarea: e.target.value})}>
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
