import React, { Component } from "react";

class AddItem extends Component {
    state = {
        productName: "",
        productPrice: 0
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName, this.state.productPrice);
        // Clear input fields after submission
        this.setState({
          productName: "",
          productPrice: 0
        });
      };
    
  render() {
    return (
        <form className="raw mb-5" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
                Name
            </label>
            <input
                type="text"  // corrected from emailtext to text
                className="form-control"
                id="inputName"
                aria-describedby="name"
                name="productName"
                onChange={(e) => {
                    this.setState({productName:e.currentTarget.value})
                }}
                value={this.state.productName}
            />
        </div>
        <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
                Price
            </label>
            <input
                type="number"
                className="form-control"
                id="inputPrice"
                name="productPrice"
                onChange={(e) => {
                    this.setState({productPrice:e.currentTarget.value})
                }}
                value={this.state.productPrice}
            />
        </div>
        <div className="col-4">
            <button type="submit" className="btn btn-primary" >
                Add
            </button>
        </div>
    </form>
    
    );
  }
}

export default AddItem;
