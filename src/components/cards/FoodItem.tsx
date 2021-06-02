import React from 'react';
import './FoodItem.css';

export interface FoodItemProps {
    token: string
}
 
export interface FoodItemState {
    fooditem: string, 
    itemamount: string, 
    foodcategory: string, 
    brandname: string, 
    kitchenarea: string,
    errors: {
        fooditem: string, 
        itemamount: string, 
        foodcategory: string,
        brandname: string,
        kitchenarea: string,
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
            kitchenarea: '',
            errors: {
                fooditem: '',
                itemamount: '',
                foodcategory: '',
                brandname: '',
                kitchenarea: '',
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
                errors.fooditem = value.length < 0 ? 'Must enter food item': '';
                break;
            case 'itemamount':
                errors.itemamount = value.length === null ? 'Must choose an amount': '';
                 break;
            case 'foodcategory': 
            errors.foodcategory = value.length === 0 ? 'Must choose a category': "";
            break;
            case 'kitchenarea':
                errors.kitchenarea = value.length === 0 ? 'Must choose an area for this item' : '';
                break;
            default:
            break;
        }
        this.setState(Object.assign(this.state, {errors, [name]: value}));
        console.log(this.state.errors)
    }

    handleSubmit = (event : any) => {
        event.preventDefault();
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity === true){
           console.log("Created Successfully!");


        fetch(`http://localhost:3000/fooditem/create`, {
            method: 'POST',
            body: JSON.stringify({fooditem: this.state.fooditem, itemamount: this.state.itemamount, foodcategory: this.state.foodcategory, brandname: this.state.brandname, kitchenarea: this.state.kitchenarea}),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? token : ''
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
         this.setState({fooditem: ""});
         this.setState({itemamount: ""});
         this.setState({foodcategory: ""});
         this.setState({brandname: ""});
         this.setState({kitchenarea: ""});
        //  this.props.fetchWorkouts()
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
           <h2>Add Food to Kitchen</h2>
           <form onSubmit={this.handleSubmit} noValidate >
              <br />
              <div className='fooditem'>
                 <label htmlFor="fooditem">Food Item</label> <br />
                 <input type='text' name='fooditem' onChange={(e) => this.setState({fooditem: e.target.value})}/>
                 {errors.fooditem.length > 0 &&  <span style={{color: "red"}}>{errors.fooditem}</span>}
              </div>
              <br />
              <div className='brandname'>
                 <label htmlFor="brandname">Brand Name</label>
                 <input type='text' name='brandname' onChange={(e) => this.setState({brandname: e.target.value})}
/>
                 {/* {errors.fooditem.length > 0 &&  <span style={{color: "red"}}>{errors.fooditem}</span>} */}
              </div>
              <div className='itemamount'>
              <label htmlFor="itemamount">Item Amount: </label> 
                 <select id="itemamount" onChange={(e) => this.setState({itemamount: e.target.value})}
>
                    <option value="">Select</option>
                    <option value="full">Full</option>
                    <option value="half">Half</option>
                    <option value ="replace">Replace</option>
                 </select>
              </div>
              <div className='foodcategory'>
                 <label htmlFor="foodcategory">Food Category: </label>
                 <select id="foodcategory" onChange={(e) => this.setState({foodcategory: e.target.value})}
>
                    <option value="">Select</option>
                    <option value='bakery'>Bakery</option>
                    <option value='beverages'>Beverages</option>
                    <option value= 'cereal'>Cereal</option>
                    <option value='condiments'>Condiments</option>
                    <option value='supplies'>Cooking Supplies</option>
                    <option value="dairy">Dairy</option>
                    <option value='dessert'>Dessert</option>
                    <option value='frozen'>Frozen</option>
                    <option value="meat">Meat</option>
                    <option value='pasta'>Pasta</option>
                    <option value='produce'>Produce</option>
                    <option value='spices'>Spices</option>
                    <option value='other'>Other</option>
                 </select>
              </div>             
              {/* <div className='kitchenarea'>
                 <label htmlFor="kitchenarea">Where does it go: </label> 
                 <select id="kitchenarea" onChange={(e) => this.setState({kitchenarea: e.target.value})}
>
                    <option value="">Select</option>
                    <option value="pantry">Pantry</option>
                    <option value="fridge">Fridge</option>
                    <option value="freezer">Freezer</option>
                    <option value="spices">Spices</option>
                 </select>
                
              </div>               */}
              <div className='submit'>
                 <button >Create</button>
              </div>
         </form>
     </div>
  </div>
   );
    }
}

 
export default FoodItem;

