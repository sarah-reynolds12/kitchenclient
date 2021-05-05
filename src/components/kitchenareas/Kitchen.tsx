import * as React from 'react';

export interface KitchenProps {
    token: string
}
 
export interface KitchenState {
    allfooddata: string
}
 
class Kitchen extends React.Component<KitchenProps, KitchenState> {
    constructor(props: KitchenProps) {
        super(props);
        this.state = { 
            allfooddata: ''
         };
    }
    componentDidMount = () => {
        let token = this.props.token ? this.props.token : localStorage.getItem("token")
    fetch(`http://localhost:3000/fooditem/get`, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: token ? token : '',
          })
      }).then(
              (response) => response.json()
          ).then((data) => {
              console.log(data)
              this.setState({allfooddata: data});
              //console.log(this.kitchendata);
          })

}


    render() { 
        return ( 
        <div>
           All Food Items Displayed
        </div> );
    }
}
 
export default Kitchen;