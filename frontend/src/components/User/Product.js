import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import '../../css/Product.css';

export default class Product extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            productList : [],
            unchangedProductList : []
        }

        this.searchBar = this.searchBar.bind(this);
    }

    componentDidMount(){
        fetch('/frontend/data').then((response) => {
            response.json().then((data) => {
                this.setState({
                    productList : data,
                    unchangedProductList : data
                })
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    searchBar(e){
        let filteredValue = this.state.unchangedProductList.filter((el) => {
            return el.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        this.setState({
            productList : filteredValue
        });
    }

    render(){
        const productData = this.state.productList.map((el) => {
            return (
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Thumbnail src={el.picURL} alt={el.name}>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p>{el.quantity}</p>
                        <p>{el.price}</p>
                        <p>
                            <form action="/addcart" method="post">
                                <input type="hidden" value={el.id} name="id" />
                                <input type="submit" onClick={this.increase} value="Add" />
                            </form>
                            {/* <a href="/frontend/data"><Button bsStyle="primary">Add</Button></a> */}
                        </p>
                    </Thumbnail>
              </Col>
            )
        })
        return(
            <div id="product">
                <div className="product-data">
                    {this.props.title}
                </div>
                <div className="searchBar">
                        <input type="text" onChange={this.searchBar} placeholder="Search Name"/>
                        <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
                </div>
                <div className="data">
                    <Grid>
                        <Row className="show-grid">
                            {productData}
                        </Row>
                    </Grid> 
                </div>
            </div>
        )
    }
}