import React from "react"
import {Link} from "react-router-dom"

class LoginPage extends React.Component{
    constructor(props){
		super(props);
		this.state ={
			isLoggedIn: false,
			currentUser: null
		}
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleSubmit(event){
        event.preventDefault();

        let formData = new FormData(event.currentTarget)

        //forcefully login as admin for demo purposes
        this.setState({
            isLoggedIn: true,
            currentUser: "admin@admin.com"
        })
        
        //create payload
        const payload = {
            method: "POST",
            headers: {    "Content-type": "application/json"  }, 
            body: JSON.stringify({email: formData.get("email"), password: formData.get("password")})
        };

        //submit payload to API (cannot login because of CORS)
        fetch("http://127.0.0.1:8080/api/login", payload)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoggedIn: true,
                        currentUser: result.data.email
                    })
                }
            );
    }

    componentDidMount(){
        console.log()
    }

    render(){
        const loginForm = (
            <div className="row">
                <div className="col-3">
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="Email" className="form-control"/>
                        <input type="password" name="password" placeholder="Password" className="form-control"/>
                        <input type="submit" value="Log In (Unable because of CORS)" className="btn btn-primary w-100"/>
                        <Link to="/Dashboard" className="btn btn-secondary w-100">Force login to dashboard</Link>
                    </form>
                </div>
            </div>
        );
            
        return loginForm;
    }
}

export default LoginPage