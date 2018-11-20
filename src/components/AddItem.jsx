import React from 'react'

class AddItem extends React.Component {

    state = {
        quantity: "0",
        product_id: "40",
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.addItemSubmit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Quantity
            </label>
                <input type='text' name='quantity' value={this.state.quantity} onChange={(ev) => this.setState({ quantity: ev.target.value })} />
                <label>
                    Products
            </label>
                <select name='product_id' onChange={(ev) => this.setState({ product_id: ev.target.value })} >
                    {this.props.products.map((product, i) => <option key={product.id} value={product.id}>{product.name}</option>)}
                </select>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}


export default AddItem