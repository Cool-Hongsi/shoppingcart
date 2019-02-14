import React from 'react';

export default class AdministratorInsert extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <form action="/administrator/insert" method="post">
                    <input type="text" name="id" placeholder="ID" required/><br/>
                    <input type="text" name="name" placeholder="Name" required/><br/>
                    <input type="text" name="picURL" placeholder="Picture URL" required/><br/>
                    <input type="text" name="quantity" placeholder="Quantity" required/><br/>
                    <input type="text" name="price" placeholder="Price" required/><br/>
                    <input type="text" name="description" placeholder="Description" required/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
} 