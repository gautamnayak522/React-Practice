class LoginServiceref {

    constructor() {
        this.data = false;
        this.checklogin = this.checklogin.bind(this);
    }

    checklogin() {
        return this.data;
    }

    setlogin(){
        alert("called");
       this.data = true; 
    }
}

export default LoginServiceref;