import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Product extends Component {
    constructor(props) {
        super(props)
        const { card } = this.props;
        this.state = {
            id: card.id,
            name: card.name,
            description: card.description,
            image: card.image
        }


    }


    render() {
        const { id, name, description, image } = this.state;
        return (
            <div className="col-md-4 mb-4">
                <Card key={id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                        <Button onClick={() => this.props.handleSeeMore(id)}>See more</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Product;

