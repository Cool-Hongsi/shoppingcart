import React from 'react';

export default class Cart extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cartId : []
        }

        this.removeItem = this.removeItem.bind(this);
    }
    
    componentDidMount(){
        fetch('/addcart/list').then((response) => {
            response.json().then((data) => {
                this.setState({
                    cartId : data
                })
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    removeItem(el){
        const idx = this.state.cartId.indexOf(el);
        this.state.cartId.splice(idx, 1);

        this.setState({
            cartId : this.state.cartId
        });
    }

    render(){
        let totalPrice = 0;

        for(var i=0; i<this.state.cartId.length; i++){
            totalPrice += this.state.cartId[i].price;
        }

        return(
            <div>
                <a href="/product"><button style={{textAlign:"center"}}>BACK</button></a><br/><br/>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>NAME</th>
                            <th style={{textAlign:"center"}}>IMAGE</th>
                            <th style={{textAlign:"center"}}>QTY</th>
                            <th style={{textAlign:"center"}}>PRICE</th>
                            <th style={{textAlign:"center"}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cartId.map((el) => {
                            return(
                                <tr>
                                    <td>{el.name}</td>
                                    <td style={{width: "15%"}}><img src={el.picURL} alt={el.name}/></td>
                                    <td>{el.quantity}</td>
                                    <td>{el.price}</td>
                                    <td><button onClick={() => this.removeItem(el)}>X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h2>Total Quantity : {this.state.cartId.length}</h2>
                <h2>Total Price : {totalPrice.toFixed(1)} </h2>
            </div>
        )
    }
}