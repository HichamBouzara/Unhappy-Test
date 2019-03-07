import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCards, getCard } from '../../actions/cardActions'
import { Col, Row } from 'reactstrap'
import Spinner from '../common/Spinner'
import ProductCard from './ProductCard'

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
      modal: false
    }

    this.openModal = this.openModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.getCards(1);
    console.log("did mount");
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  openModal(id) {
    const { card, cardLoading } = this.props.cards;
    this.props.getCard(id);
    if (!cardLoading) {
      this.setState({
        product: card
      });
      console.log(this.state.product);
      this.toggle();
    }
  }

  render() {
    const { cards, loading } = this.props.cards;
    if (loading) {
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
          {/* MODAL */}
          {/* <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div> */}
          {/* End of MODAL */}
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {cards.map(card => (
                  <ProductCard
                    card={card}
                    handleSeeMore={this.openModal}
                  />
                ))}
              </div>
              {/* PAGINATION */}
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
              {/* End of PAGINATION */}
            </div>
          </div>
        </div>
      );
    }
  }
}


Landing.propTypes = {
  getCards: PropTypes.func.isRequired,
  getCard: PropTypes.func.isRequired,
  cards: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(
  mapStateToProps,
  { getCards, getCard }
)(Landing)

