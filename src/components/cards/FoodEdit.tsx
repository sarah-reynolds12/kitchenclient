import * as React from 'react';
import {IFood} from "./FoodItemInterface";
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
  } from "reactstrap";
  

export interface FoodEditProps {
    token: string,
    food: IFood,
    fetchFood: Function,
}
 
export interface FoodEditState {
    modalOpen: boolean,
    editBrandname: string,
    editFoodCategory: string,
    editFoodItem: string,
    editItemAmount: string,
    loading: boolean,
}
 
class FoodEdit extends React.Component<FoodEditProps, FoodEditState> {
    constructor(props: FoodEditProps) {
        super(props);
        this.state = {
             modalOpen: true,
             editBrandname: this.props.food.brandname,
             editFoodCategory: this.props.food.foodcategory,
             editFoodItem: this.props.food.fooditem,
             editItemAmount: this.props.food.itemamount,
             loading: false
            };
        }
        UpdateFood = (event:any) => {
            event.preventDefault();
            console.log("Click")
            console.log(this.props.food)
            let token = this.props.token ? this.props.token: localStorage.getItem('token')
            fetch(`http://localhost:3000/fooditem/update/${this.props.food.id}`, {
                    method: "PUT",
                    body: JSON.stringify({fooditem: this.state.editFoodItem, brandname: this.state.editBrandname, itemamount: this.state.editItemAmount, foodcategory: this.state.editFoodCategory}),
                    headers: new Headers ({
                     'Content-Type': 'application/json',
                   //    Authorization: props.token,
                      Authorization: token ? token : ''
                 })
                })
                 .then(response => response.json()).then((updateData) => { console.log(updateData);
                this.setState ({
                    editFoodItem: '',
                   editBrandname: '',
                   editItemAmount: '',
                    editFoodCategory: '',
                })
                this.props.fetchFood()
                this.toggle()
              })

    }

    toggle = () => this.setState({modalOpen:!this.state.modalOpen});

    render() { 
        return (
            <div>
               <Button color="primary" onClick={this.toggle}>Edit Food Item</Button>
      <Modal isOpen={!this.state.modalOpen} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Update Food Item</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.UpdateFood}>
                <FormGroup>
                    <Label htmlFor="fooditem">Edit Food Item:</Label> <br />
                 <Input name='fooditem' value={this.state.editFoodItem} onChange={(e) => this.setState({editFoodItem: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="brandname">Edit Brand Name:</Label> <br />
                 <Input name='brandname' value={this.state.editBrandname} onChange={(e) => this.setState({editBrandname: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="itemamount">Edit Item Amount:</Label> <br />
                 <Input type="select" name='itemamount' value={this.state.editItemAmount} onChange={(e) => this.setState({editItemAmount: e.target.value}) }> 
                    <option value="full">Full</option>
                    <option value="half">Half</option>
                    <option value ="replace">Replace</option>
                 </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="foodcategory">Edit Food Category:</Label> <br />
                 <Input type="select" name='foodcategory' value={this.state.editFoodCategory} onChange={(e) => this.setState({editFoodCategory: e.target.value})}>
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
                 </Input>
                </FormGroup>
          <Button type="submit"color="primary">Update </Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </Form>
        </ModalBody>
            </Modal>
            </div>
          );
    }
}
 
export default FoodEdit;