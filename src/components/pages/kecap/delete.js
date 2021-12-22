import React from "react";

class KecapDelete extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInitialData = this.getInitialData.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        let formData = new FormData(event.currentTarget)

        //create payload
        const payload = {
            method: "DELETE",
            headers: {    "Content-type": "application/json"  }, 
            body: JSON.stringify({nama: formData.get("nama"), harga: formData.get("harga")})
        };

        //submit payload to API (cannot login because of CORS)
        fetch("http://127.0.0.1:8080/api/kecap", payload)
            .then(res => res.json())
            .then(
                (result) => {
                    alert("kecap " + result.data.nama + " berhasil dihapus dari database");
                }
            ).catch(() => {
                alert("Cannot connect to server due to CORS");
            });
    }

    getInitialData(){
        alert("cannot connect to server due to CORS. Using pre-prepared data");

        return {
            ID: "1",
            Nama: "Kecap Bango",
            Harga: "13000"
        }
    }

    render(){
        const initialData = this.getInitialData();

        const form=(
            <div>
                <h1>Hapus {initialData.Nama}?</h1>
                <form className="col-3" onSubmit={this.handleSubmit}>
                    <input  className="form-control" 
                            type="text"
                            name="ID"
                            placeholder="ID"
                            value={initialData.ID}
                            readOnly
                            />
                    <input  className="form-control" 
                            type="text"
                            name="nama"
                            placeholder="Nama Kecap"
                            defaultValue={initialData.Nama}
                            />
                    <input  className="form-control" 
                            type="number"
                            name="nama"
                            step="500"
                            min="0"
                            placeholder="Harga Kecap (IDR)"
                            defaultValue={initialData.Harga}
                            />
                    <button type="submit" className="btn btn-secondary w-100">Submit</button>
                </form>
            </div>
        );

        return form;
    }
}

export default KecapDelete