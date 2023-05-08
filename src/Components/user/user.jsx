import './user.css'
function User(props) {
    return (
        <div>

            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={`https://i.pravatar.cc/150?img=${props.user.id}`} alt='' />
                    </div>
                    <div className="contentBx">
                        <h2>{props.user.name}</h2>
                        <div className="size">
                            <h3>{props.user.email}</h3>
                        </div>
                        <div className="color">
                            <h3>phone : {props.user.phone}</h3>
                        </div>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default User;