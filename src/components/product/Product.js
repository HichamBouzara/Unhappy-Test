import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCard } from '../../actions/cardActions'
import { Col, Row } from 'reactstrap'
import Spinner from '../common/Spinner'
import './Product.css';
import isEmpty from '../../validation/is-empty';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      product: null
    }

  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getCard(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards.card === null && this.props.cards.cardLoading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { card, cardLoading } = this.props.cards;
    const { images } = card;
    if (isEmpty(card) || cardLoading) {
      return (
        <div className="landing">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="animated fadeIn">
                <Row>
                  <Col xl={6}>
                    <Spinner />;
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        < div className="landing" >
          <div className="container">
            <div className="card">
              <div className="container-fliud">
                <div className="wrapper row">
                  <div className="preview col-md-6">

                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1"><img alt="just another product" src="http://placekitten.com/400/252" /></div>
                      {/* {card.images.map(img alt="just another product" => (
                        console.log(img alt="just another product")
                      ))} */}
                      <div className="tab-pane" id="pic-2"><img alt="just another product" src="http://placekitten.com/400/252" /></div>
                      <div className="tab-pane" id="pic-3"><img alt="just another product" src="http://placekitten.com/400/252" /></div>
                      <div className="tab-pane" id="pic-4"><img alt="just another product" src="http://placekitten.com/400/252" /></div>
                      <div className="tab-pane" id="pic-5"><img alt="just another product" src="http://placekitten.com/400/252" /></div>
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                      <li className="active"><a data-target="#pic-1" data-toggle="tab"><img alt="just another product"
                        src="http://placekitten.com/200/126" /></a></li>
                      <li><a data-target="#pic-2" data-toggle="tab"><img alt="just another product" src="http://placekitten.com/200/126" /></a></li>
                      <li><a data-target="#pic-3" data-toggle="tab"><img alt="just another product" src="http://placekitten.com/200/126" /></a></li>
                      <li><a data-target="#pic-4" data-toggle="tab"><img alt="just another product" src="http://placekitten.com/200/126" /></a></li>
                      <li><a data-target="#pic-5" data-toggle="tab"><img alt="just another product" src="http://placekitten.com/200/126" /></a></li>
                    </ul>

                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{card.name}</h3>
                    <p className="product-description">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      );
    }
  }
}


Product.propTypes = {
  getCard: PropTypes.func.isRequired,
  cards: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(
  mapStateToProps,
  { getCard }
)(Product)

