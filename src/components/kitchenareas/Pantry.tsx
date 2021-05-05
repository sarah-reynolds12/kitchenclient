import * as React from 'react';

export interface PantryProps {
    token: string
}
 
export interface PantryState {
    pantrydata: string
}
 
class Pantry extends React.Component<PantryProps, PantryState> {
    constructor(props: PantryProps) {
        super(props);
        this.state = { 
            pantrydata: ''
          };
    }

    componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")

    fetch(`http://localhost:3000/fooditem/:pantry`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
        })
    }).then(
        (response) => response.json()).then((data) => {console.log(data)
        this.setState({pantrydata: data})
    })
}

    render() { 
        return ( 
            <div> Pantry Page</div>
         );
    }
}
 
export default Pantry;