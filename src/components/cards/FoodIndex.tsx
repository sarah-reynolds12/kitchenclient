import * as React from 'react';
import {Container, Row, Col} from "reactstrap";
import FoodItem from "./FoodItem";

export interface FoodIndexProps {
    token: string
}
 
export interface FoodIndexState {
    
}
 
class FoodIndex extends React.Component<FoodIndexProps, FoodIndexState> {
    constructor(props: FoodIndexProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col md= "3">
                        {/* <FoodItem fetchFood={fetchFood} token= {this.props.token} /> */}
                    </Col>
                    <Col md= "9">
                        <h2>INDEX</h2>
                    </Col>
                </Row>
                INDEX
            </Container>
         );
    }
}
 
export default FoodIndex;