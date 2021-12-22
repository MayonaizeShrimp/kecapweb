import React from "react";

class KecapInsert extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        //get form data
        let formData = new FormData(event.currentTarget)

        //create payload
        const payload = {
            method: "POST",
            headers: {    "Content-type": "application/json"  }, 
            body: JSON.stringify({nama: formData.get("nama"), harga: formData.get("harga")})
        };

        //submit payload to API (cannot login because of CORS)
        fetch("http://127.0.0.1:8080/api/kecap", payload)
            .then(res => res.json())
            .then(
                (result) => {
                    alert("kecap " + result.data.nama + " berhasil diinput ke database");
                }
            ).catch(() => {
                alert("Cannot connect to server due to CORS");
            });
    }

    render(){
        const form=(
            <div>
                <h1>Insert kecap baru</h1>
                <form className="col-3" onSubmit={this.handleSubmit}>
                    <input  className="form-control" 
                            type="text"
                            name="nama"
                            placeholder="Nama Kecap"
                            />
                    <input  className="form-control" 
                            type="number"
                            name="nama"
                            step="500"
                            min="0"
                            placeholder="Harga Kecap (IDR)"
                            />
                    <button type="submit" className="btn btn-secondary w-100">Submit</button>
                </form>
            </div>
        );

        return form;
    }
}

export default KecapInsert