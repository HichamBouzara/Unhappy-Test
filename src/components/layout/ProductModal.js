import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap'

class ProductModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			product: this.props.product,
			error: ''
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}))
	}

	render() {
		if (this.props.cards.modal) {
			return (
				<div key={this.props.id} style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<Modal
						isOpen={this.props.cards.modal}
						toggle={this.toggle}
						className={this.props.className}
					>
						<ModalHeader>Ajouter un Fabricant</ModalHeader>
						<ModalBody>
							<p>Hello</p>
						</ModalBody>
						<ModalFooter>
							<Button form="form1" type="submit" size="lg" color="primary">
								Soumettre
            			</Button>
						</ModalFooter>
					</Modal>
				</div>
			)
		} else {
			return (
				<div key={this.props.id} style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Modal
						isOpen={true}
						toggle={this.toggle}
						className={this.props.className}
					>
						<ModalHeader>Ajouter un Fabricant</ModalHeader>
						<ModalBody>
							<p>Loading..</p>
						</ModalBody>
						<ModalFooter>
							<Button form="form1" type="submit" size="lg" color="primary">
								Soumettre
            			</Button>
						</ModalFooter>
					</Modal>
				</div>
			)
		}
	}
}
ProductModal.propTypes = {
	cards: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
	cards: state.cards
})
export default connect(
	mapStateToProps
)(ProductModal);
