import React, { Component } from 'react'
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
			product: this.props.card,
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
		return (
			<div key={this.props.id} style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Modal
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
	}
}


export default ProductModal;
