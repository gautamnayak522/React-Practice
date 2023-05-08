import { useState } from "react";

function FormPractice() {
    

    const [state, setState] = useState({
        email: "",
        password: "",
        savepassword: false,
    });

    const handleInputChange = (event) => {

        let { name, value } = event.target;
        
        if (event.target.type == "checkbox") {
            value = !state.savepassword;
        }

        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));

        // setState((prevProps) => ({
        //     ...prevProps,
        //     [name]: value
        // }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };


    return (
        <div className="container w-50 p-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={state.email} onChange={handleInputChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={state.password} onChange={handleInputChange} />
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={state.savepassword} name="savepassword" onChange={handleInputChange} />
                    <label className="form-check-label" >Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <p>{JSON.stringify(state)}</p>



        </div>
    );
}

export default FormPractice;