import React from 'react';
import AdministratorInsert from './AdministratorInsert';
import AdministratorUpdate from './AdministratorUpdate';
import AdministratorDelete from './AdministratorDelete';
import '../../css/Administrator.css';

export default class Administrator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            productList : []
        }
    }

    componentDidMount(){
        fetch('/administrator/select').then((response) => {
            response.json().then((data) => {
                this.setState({
                    productList : data
                })
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PICTUREURL</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                    </thead>
                    <tbody>
                        {this.state.productList.map((el) => {
                            return (
                                <tr>
                                    <td className="idCell">{el.id}</td>
                                    <td className="nameCell">{el.name}</td>
                                    <td className="imgCell"><img src={el.picURL} alt={el.name} /></td>
                                    <td className="quantityCell">{el.quantity}</td>
                                    <td className="priceCell">{el.price}</td>
                                    <td className="descriptionCell">{el.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <AdministratorInsert title="INSERT" />
                <AdministratorUpdate title="UPDATE" />
                <AdministratorDelete title="DELETE" />
            </div>
        )
    }
}