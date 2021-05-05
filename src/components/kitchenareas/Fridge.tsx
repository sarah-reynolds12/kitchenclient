import * as React from 'react';

export interface FridgeProps {
    token: string
}
 
export interface FridgeState {
    fridgedata: string
}
 
class Fridge extends React.Component<FridgeProps, FridgeState> {
    constructor(props: FridgeProps) {
        super(props);
        this.state = { 
            fridgedata: ''
          };
    }

    componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")

    fetch(`http://localhost:3000/fooditem/:fridge`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
        })
    }).then(
        (response) => response.json()).then((data) => {console.log(data)
        this.setState({fridgedata: data})
    })
}

    render() { 
        return ( 
            <div>Fridge Page</div>
         );
    }
}
 
export default Fridge;