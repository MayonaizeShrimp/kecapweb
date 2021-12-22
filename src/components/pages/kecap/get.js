import React from "react"
import { Link } from "react-router-dom";

class KecapGet extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: []
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(){
        const payload = {
            method: "GET"
        };
        //submit payload to API (cannot login because of CORS)
        fetch("http://127.0.0.1:8080/api/kecap", payload)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data
                    })
                }
            ).catch(() => {
                alert("Cannot connect to server due to CORS. Using pre-prepared data insetad");
                this.setState({
                    data: [
                        {ID: 1, Nama: "kecap bango", Harga: "13000"},
                        {ID: 2, Nama: "kecap ABC", Harga: "15000"},
                        {ID: 3, Nama: "kecap Sedapp", Harga: "5000"}
                    ]
                })
            });

                
    }

    render(){
        const kecapPage = (
            <div>
                <Link to="insert" className="btn btn-outline-success">Insert new Soy Sauce</Link>
                <button onClick={this.fetchData} className="btn btn-outline-secondary">Refresh</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((kecap) => {
                            return (
                                <tr id={kecap.ID}>
                                    <td>{kecap.ID}</td>
                                    <td>{kecap.Nama}</td>
                                    <td>{kecap.Harga}</td>
                                    <td>
                                        <Link to="update/" state={{
                                                ID: kecap.ID,
                                                Nama: kecap.Nama,
                                                Harga: kecap.Harga
                                            }}>Update</Link> 
                                        <Link to="delete/">Delete</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );

        return kecapPage;
    }
}

export default KecapGet