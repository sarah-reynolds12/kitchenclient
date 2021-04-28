import React from 'react';
import './FoodItem.css';

export interface FoodItemProps {
    updateToken: Function;
}
 
export interface FoodItemState {
    fooditem: string, 
    itemamount: string, 
    foodcategory: string, 
    brandname: string, 
    photo: string,
    errors: {
        fooditem: string, 
        itemamount: string, 
        foodcategory: string,
        brandname: string,
        photo: string,
    }
}
 
class FoodItem extends React.Component<FoodItemProps, FoodItemState> {
    constructor(props: FoodItemProps) {
        super(props);
        const initialState = {
            fooditem: '',
            itemamount: '',
            foodcategory: '',
            brandname: '',
            photo: '',
            errors: {
                fooditem: '',
                itemamount: '',
                foodcategory: '',
                brandname: '',
                photo: '',
            }
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }
        
    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value} = event.target;
        
        let errors = this.state.errors;
        switch (name) {
            case 'fooditem':
                errors.fooditem = value.length === 0 ? 'Must enter food item': '';
                break;
            case 'itemamount':
                errors.itemamount = value.length === 0 ? 'Must choose an amount': '';
                 break;
            case 'foodcategory': 
            errors.foodcategory = value.length === 0 ? 'Must choose a category': "";
            break;
            default:
            break;
        }
        this.setState(Object.assign(this.state, {errors, [name]: value}));
        console.log(this.state.errors)
    }

    handleSubmit = (event : any) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity === true){
           console.log("Created Successfully!");
        
        fetch(`http://localhost:3000/fooditem/create`, {
            method: 'POST',
            body: JSON.stringify({fooditem: this.state.fooditem, itemamount: this.state.itemamount, foodcategory: this.state.foodcategory, brandname: this.state.brandname, photo: this.state.photo}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
            console.log(data.sessionToken);
            console.log(data);
        })
    }else {
           console.log("You cannot create a food item.")
        }
      
        }
    
    
    render() { 
        const { errors } =this.state
        return ( <div className='wrapper'>
        <div className='form-wrapper'>
           <h2>Kitchen Items</h2>
           <form onSubmit={this.handleSubmit} noValidate >
              <br />
              <div className='foodItem'>
                 <label htmlFor="foodItem">Food Item</label>
                 <input type='text' name='foodItem' onChange= {this.handleChange}/>
                 {errors.fooditem.length > 0 &&  <span style={{color: "red"}}>{errors.fooditem}</span>}
              </div>
              <br />
              <div className='brandname'>
                 <label htmlFor="brandname">Brand Name</label>
                 <input type='text' name='brandname' onChange= {this.handleChange}/>
                 {/* {errors.fooditem.length > 0 &&  <span style={{color: "red"}}>{errors.fooditem}</span>} */}
              </div>
              <div className='itemamount'>
              <label htmlFor="itemamount">Item Amount: </label> 
                 <select id="itemamount">
                    <option value="">Select</option>
                    <option value="full">Full</option>
                    <option value="half">Half</option>
                    <option value ="replace">Replace</option>
                 </select>
              </div>
              <div className='foodcategory'>
                 <label htmlFor="foodcategory">Food Category</label>
                 <select id="ifoodcategory">
                    <option value="">Select</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value='produce'>Produce</option>
                    <option value='bakery'>Bakery</option>
                    <option value='condiments'>Condiments</option>
                    <option value='beverages'>Beverages</option>
                    <option value='frozen'>Frozen</option>
                 </select>
              </div>             
              <div className='kitchenarea'>
                 <label htmlFor="kitchenarea">Where does it go: </label> 
                 <select id="Kitchen Area">
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spicerack">Spices</option>
                 </select>
                
              </div>              
              <div className='submit'>
                 <button>Kitchen Update</button>
              </div>
         </form>
     </div>
  </div>
   );
    }
}

 
export default FoodItem;
