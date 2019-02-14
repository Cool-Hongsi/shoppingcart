import React from 'react';

export default class AdministratorDelete extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <form action="/administrator/delete" method="post">
                    <input type="text" name="id" placeholder="ID (want to delete)" required/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}