import { connect, useDispatch, useSelector } from "react-redux";
import { DEPOSIT, WITHDRAW } from "../../Context/actions";
import { useEffect, useState } from "react";
import { store } from "../../Context/store";

function Counter() {

    const dispatch = useDispatch();

    const sam = useSelector((state) => {
        console.info(state);
    })

    console.log(sam);
    //console.log(store.getState());

    //props.dispatch({type:})

    // useEffect(()=>{
    //     // props.dispatch({type:DEPOSIT,payload: 600})
    // },[])

    const [amount, setamount] = useState(0);
    const [depositing, setdepositing] = useState(false)
    const [withdrawing, setwithdrawing] = useState(false)

    // document.querySelector('.btn').addEventListener('click', function() {
    //     var $this = document.querySelector(this);
    //   $this.button('loading');
    //     setTimeout(function() {
    //        $this.button('reset');
    //    }, 200);
    // });

    const deposit = (e) => {
        setdepositing(true)
        //e.terget.classList.add("loading");

        setTimeout(() => {
            dispatch({ type: DEPOSIT, payload: amount })
            setdepositing(false)
            setamount(0)
        }, 500);
    }

    const withdraw = () => {
        setwithdrawing(true)
        setTimeout(() => {
            dispatch({ type: WITHDRAW, payload: amount })
            setwithdrawing(false)
            setamount(0)
        }, 500);
    }

    return (
        <>
            {/* <section classNameName="vh-100" style={{ backgroundColor: "#9de2ff" }}>
                <div classNameName="container py-5 h-100">
                    <div classNameName="row d-flex justify-content-center align-items-center h-100">
                        <div classNameName="col col-md-9 col-lg-7 col-xl-5">
                            <div classNameName="card" style={{ borderRadius: "15px" }}>
                                <div classNameName="card-body p-4">
                                    <div classNameName="d-flex text-black">
                                        <div classNameName="flex-shrink-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                alt="Generic placeholder image" classNameName="img-fluid"
                                                style={{ width: "180px", borderRadius: "10px" }} />
                                        </div>
                                        <div classNameName="flex-grow-1 ms-3">
                                            <h5 classNameName="mb-1">Danny McLoan</h5>
                                            <p classNameName="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                                            <div classNameName="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                style={{ backgroundColor: "#efefef" }}>
                                                <div>
                                                    <p classNameName="small text-muted mb-1">Articles</p>
                                                    <p classNameName="mb-0">41</p>
                                                </div>
                                                <div classNameName="px-3">
                                                    <p classNameName="small text-muted mb-1">Followers</p>
                                                    <p classNameName="mb-0">976</p>
                                                </div>
                                                <div>
                                                    <p classNameName="small text-muted mb-1">Rating</p>
                                                    <p classNameName="mb-0">8.5</p>
                                                </div>
                                            </div>
                                            <div classNameName="d-flex pt-1">
                                                <button type="button" classNameName="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                                                <button type="button" classNameName="btn btn-primary flex-grow-1">Follow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="card p-3 w-25 text-center m-5">
                <div className="d-flex align-items-center">
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">Wallet</h4>
                        <div className="p-2 mt-2 bg-primary  rounded text-white stats">
                            <div className="d-flex flex-column">
                                <span className="articles">Current Balance</span>
                                <span className="number1"><span className="fa-solid fa-indian-rupee-sign"></span> {store.getState().Amount}</span>
                            </div>
                        </div>

                        <label className="float-start pt-2">Add money to wallet</label>
                        <input id="idname" type="number" className="form-control mt-2" placeholder="Enter Amount" value={amount} onChange={(e) => setamount(e.target.value)} />
                        <div className="button mt-2 d-flex flex-row align-items-center">
                            {/* <span className="spinner-border spinner-border-sm"></span> */}
                            <button type="button" id="btndeposit" data-loading-text="<span className='fa fa-circle-o-notch fa-spin'></span> Processing" className={"btn btn-sm btn-outline-primary w-100 " + (amount > 0 ? '' : 'disabled')} onClick={deposit}>
                                {depositing && (
                                    <span
                                        className="fa fa-refresh fa-spin"
                                        style={{ marginRight: "5px" }}
                                    />
                                )}
                                Deposit
                            </button>
                            <button className={"btn btn-sm btn-outline-primary w-100 " + (amount > store.getState().Amount || amount <= 0 ? 'disabled' : '')} onClick={withdraw}>
                                {withdrawing && (
                                    <span
                                        className="fa fa-refresh fa-spin"
                                        style={{ marginRight: "5px" }}
                                    />
                                )}
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>);
}

// const mapStateToProps = (state) => {
//     // console.warn(state);
//     return {
//         Amount: state.Amount
//     }
// }

// export default connect(mapStateToProps)(Counter);

export default Counter;