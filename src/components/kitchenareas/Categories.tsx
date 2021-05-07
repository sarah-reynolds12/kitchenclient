import * as React from 'react';
import FoodItemCard from "../cards/FoodItemCard";
import {CardColumns} from "reactstrap";
import { IFood } from "./KitchenAreaInterface";
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface CategoryProps extends RouteComponentProps <{category:string}> {
    token: string;
}
 
export interface CategoryState {
    allFoodData: IFood[];
}
 
class Category extends React.Component<CategoryProps, CategoryState> {
    constructor(props: CategoryProps) {
        super(props);
        this.state = { allFoodData: [] };
    }
    componentDidMount = () => {
        const category = this.props.match.params.category

        let token = this.props.token ? this.props.token : localStorage.getItem("token")
    fetch(`http://localhost:3000/fooditem/get`, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: token ? token : '',
          })
      }).then(
              (response) => response.json()
          ).then((data: IFood[]) => {
              console.log(data)
              const filteredData = data.filter(food => food.foodcategory.toLowerCase() === category)
              this.setState({allFoodData: filteredData});
              //console.log(this.Categorydata);
          });

}

    render() { 
        return ( 
       <CardColumns>
           Category Page??
           {this.state.allFoodData.length > 0 ? (this.state.allFoodData.map((food: IFood, index: number) => (<FoodItemCard token= {this.props.token} food= {food} key={index}/>))) : (<></>)
           }
       </CardColumns>
        );
    }
}
 
export default withRouter(Category);