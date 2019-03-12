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
      pageNum: 1
    }
    this.reloadPage = this.reloadPage.bind(this);
  }
  componentDidMount() {
    this.props.getCards(this.state.pageNum);
  }

  reloadPage(pageNum) {
    this.setState({ pageNum });
    this.props.getCards(this.state.pageNum);
  }

  render() {
    const { cards, loading } = this.props.cards;
    if (loading) {
      return (
        <div className="landing">
          <div className="album py-5 bg-light">
            <div className="container h-100">
              <div className="h-100 animated fadeIn">
                <Row>
                  <Col xl={12}>
                    <Spinner />;
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )
    } else {

      //PAGINATION style
      const firstPage = (this.state.pageNum === 1);
      let page1Active = ["page-item"];
      let page1Disabled = ["page-item"];
      let page2Active = ["page-item"];
      let pageN2 = this.state.pageNum;
      let pageN1 = pageN2 - 1;
      if (firstPage) {
        page1Active.push("active");
        page1Disabled.push("disabled");
        pageN1 = 1;
        pageN2 = 2;
      } else {
        page2Active.push("active");
      }
      //PAGINATION style END
      return (
        <div className="landing">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {cards.map(card => (
                  <ProductCard
                    card={card}
                  />
                ))}
              </div>
              {/* PAGINATION */}
              <Row>
                <Col xl={12}>
                  <nav aria-label="...">
                    <ul className="pagination list-inline">
                      <li className={page1Disabled.join(' ')}>
                        <p onClick={() => { if (pageN1 != 1) this.reloadPage(pageN1) }} className="page-link" tabIndex="-1" aria-disabled="true">Previous</p>
                      </li>
                      {/* 1 */}
                      <li className={page1Active.join(' ')}><p onClick={() => this.reloadPage(pageN1)} className="page-link">{pageN1}</p></li>
                      {/* 2 */}
                      <li className={page2Active.join(' ')} aria-current="page"><p onClick={() => this.reloadPage(pageN2)} className="page-link">{pageN2} <span className="sr-only">(current)</span></p></li>
                      {/* 3 */}
                      <li className="page-item"><p onClick={() => this.reloadPage(pageN2 + 1)} className="page-link">{pageN2 + 1}</p></li>
                      <li className="page-item">
                        <p onClick={() => this.reloadPage(pageN2 + 1)} className="page-link">Next</p>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
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

