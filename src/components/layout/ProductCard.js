import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card
        }

    }

    render() {
        const { id, name, description, image } = this.state.card;
        return (
            <div className="col-md-4 mb-4">
                <Card key={id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                        <Link to={`/product/${id}`}><Button>See more</Button></Link>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ProductCard;

