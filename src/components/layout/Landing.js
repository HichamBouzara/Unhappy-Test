import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCards } from '../../actions/cardActions'
import { Col, Row } from 'reactstrap'
import Spinner from '../common/Spinner'
import Product from './Product'
import ProductModal from './ProductModal'

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      product: null
    }

    this.openModal = this.openModal.bind(this);
  }
  componentDidMount() {
    this.props.getCards(1);
  }

  openModal(id) {

  }
  render() {
    const { cards, loading } = this.props.cards;
    if (!cards || loading) {
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
        <div className="landing">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {cards.map(card => (
                  <Product
                    card={card}
                    handleSeeMore={this.openModal}
                  />
                ))}
              </div>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      );
    }
  }
}


Landing.propTypes = {
  getCards: PropTypes.func.isRequired,
  cards: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(
  mapStateToProps,
  { getCards }
)(Landing)

