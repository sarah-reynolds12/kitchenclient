import * as React from 'react';

export interface FullProps {
    
}
 
export interface FullState {
    
}
 
class Full extends React.Component<FullProps, FullState> {
    constructor(props: FullProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <div>Full Page</div>
         );
    }
}
 
export default Full;