import * as React from 'react';

export interface SpicesProps {
    token: string
}
 
export interface SpicesState {
    spicesdata: string
}
 
class Spices extends React.Component<SpicesProps, SpicesState> {
    constructor(props: SpicesProps) {
        super(props);
        this.state = { 
            spicesdata: ''
          };
    }
        componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")

    fetch(`http://localhost:3000/fooditem/:spicerack`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
        })
    }).then(
        (response) => response.json()).then((data) => {console.log(data)
        this.setState({spicesdata: data})
    })
}

    render() { 
        return ( 
            <div> Spices Page</div>
         );
    }
}
 
export default Spices;