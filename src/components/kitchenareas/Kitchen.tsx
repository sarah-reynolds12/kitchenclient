import * as React from 'react';

export interface KitchenProps {
    
}
 
export interface KitchenState {
    
}
 
class Kitchen extends React.Component<KitchenProps, KitchenState> {
    constructor(props: KitchenProps) {
        super(props);
        this.state = { 
        
         };
    }
    render() { 
        return ( 
        <div>
            Kitchen
        </div> );
    }
}
 
export default Kitchen;