import React, { Component } from "react";
import data from "./data.json";
import "../../css/login.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "../../css/products.css";

class Products extends Component {
    state = {
        products: data
    }

    addColorClass = (data) => {
        const newDataArray = this.state.products.slice();
        newDataArray.forEach((element, index)=> {
            if (element.stockAmount >= 150) {
                newDataArray[index].classColor = "text-success";
            } else {
                if (element.stockAmount >= 50) {
                    newDataArray[index].classColor = "text-warning";
                } else {
                    newDataArray[index].classColor = "text-danger";
                }
            }
        });
        console.log(newDataArray);
        this.setState({products: newDataArray});
    }
    
    componentDidMount() {
        this.addColorClass();
    } 

    render() {
        return (
            <div id="container">
            <Sidebar />
            <Header />
            <table className="table table-striped">
                <caption style={{captionSide: "top"}}>Top Products</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Stock Amount</th>
                    <th scope="col">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((product, index) => (
                            <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td className={product.classColor}>{product.stockAmount}</td>
                            <td>{product.totalSales}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>

            </div>
        )
    }
}

export default Products;