import React from 'react';
import baffle from 'baffle';
import '../../css/Home.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{

    componentDidMount() {
        let mainText = baffle('.home-data');
        mainText.set({
          speed: 130,
          characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
        });
        mainText.reveal(5000);
    }

    render(){
        return(
            <div>
                <div id="home">
                    <div className="home-data">
                        <Grid>
                            <Row className="show-grid">
                                <Col xs={12} sm={12} md={12} lg={12}>{this.props.title}</Col>
                            </Row>
                        </Grid>
                    </div>
                    <div className="productBtn">
                        <a href="/product"><button>Product</button></a>
                    </div>
                </div>
            </div>
        )
    }
}