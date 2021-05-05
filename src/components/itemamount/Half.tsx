import * as React from 'react';

export interface HalfProps {
    
}
 
export interface HalfState {
    
}
 
class Half extends React.Component<HalfProps, HalfState> {
    constructor(props: HalfProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <div>Half Page</div>
         );
    }
}
 
export default Half;