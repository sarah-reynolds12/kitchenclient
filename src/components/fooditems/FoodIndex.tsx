import * as React from 'react';

export interface FoodIndexProps {
    
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
            <div>FoodIndex</div>
         );
    }
}
 
export default FoodIndex;