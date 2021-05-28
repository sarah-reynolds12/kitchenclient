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
    brandname: string,
    foodcategory: string,
    fooditem: string,
    itemamount: string,
}
 
class FoodEdit extends React.Component<FoodEditProps, FoodEditState> {
    constructor(props: FoodEditProps) {
        super(props);
        this.state = {
             modalOpen: true,
             brandname: this.props.food.brandname,
             foodcategory: this.props.food.foodcategory,
             fooditem: this.props.food.fooditem,
             itemamount: this.props.food.itemamount,
            };
        }
        UpdateFood = (event:any) => {
            event.preventdDefault();
            console.log(this.props.food)
            let token = this.props.token ? this.props.token: localStorage.getItem('token')
            fetch(`http://localhost:3000/fooditem/update/${this.props.food.id}`, {
                    method: "PUT",
                    body: JSON.stringify({food: {fooditem: this.state.fooditem, brandname: this.state.brandname, itemamount: this.state.itemamount, foodcategory: this.state.foodcategory}}),
                    headers: new Headers ({
                     'Content-Type': 'application/json',
                   //    Authorization: props.token,
                      Authorization: token ? token : ''
                 })
                })
                 .then(response => response.json()).then((updateData) => { console.log(updateData);
                this.setState ({
                    fooditem: '',
                    brandname: '',
                    itemamount: '',
                    foodcategory: '',
                })
                this.props.fetchFood()
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
                 <Input name='fooditem' value={this.state.fooditem} onChange={(e) => this.setState({fooditem: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="brandname">Edit Brand Name:</Label> <br />
                 <Input name='brandname' value={this.state.brandname} onChange={(e) => this.setState({brandname: e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="itemamount">Edit Item Amount:</Label> <br />
                 <Input name='itemamount' value={this.state.itemamount} onChange={(e) => this.setState({itemamount: e.target.value}) }/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="foodcategory">Edit Food Category:</Label> <br />
                 <Input name='foodcategory' value={this.state.foodcategory} onChange={(e) => this.setState({foodcategory: e.target.value})}/>
                </FormGroup>
          <Button color="primary" onClick={this.toggle}>Update </Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </Form>
        </ModalBody>
            </Modal>
            </div>
          );
    }
}
 
export default FoodEdit;