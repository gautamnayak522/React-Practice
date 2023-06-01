import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { SharedService } from "../../services/SharedService";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ViewProduct(props) {
    const { id } = useParams();

    // const [product, setProduct] = useState([]);

    // const [product, setProduct] = useState({
    //     productId: 0,
    //     productName: '',
    //     price: 0,
    //     mafDate: Date,
    //     mafAt: '',
    //     sku: '',
    //     categoryName: '',
    //     subCategoryName: '', 
    //     description: '',
    //     quantity: 0,
    //     supplier: ''
    // })

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm(
        {
            defaultValues: {
                productId: 0,
                productName: '',
                price: 0,
                mafDate: Date,
                mafAt: '',
                sku: '',
                categoryName: '',
                subCategoryName: '',
                description: '',
                quantity: 0,
                supplier: ''
            }
        }
    );

    useEffect(() => {
        SharedService.getProduct(id)
            .then((res) => {
                console.log(res);
                reset(res.data);
                //setProduct(res.data)
                // setproductForm(res.data)
            })
            .catch()
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        SharedService.updateProduct(data.productId, data).then((res) => {
            toast.success('Product Updated !', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            reset(res.data)
            navigate('/pagination')
        })

    };

    return (
        <>

            <h3>Update product {id}</h3>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name : </label>
                    <input type="text" className="form-control"
                        {...register("productName", {
                            required: true
                        })} />
                    {errors.productName && errors.productName.type === "required" && (
                        <p className="text-danger">productName is required.</p>
                    )}

                    <label>Quantity : </label>
                    <input type="text" className="form-control"
                        {...register("quantity", {
                            required: true
                        })} />
                    {errors.productName && errors.productName.type === "required" && (
                        <p className="text-danger">Quantity is required.</p>
                    )}

                    <label>Price : </label>
                    <input type="text" className="form-control"
                        {...register("price", {
                            required: true
                        })} />
                    {errors.price && errors.price.type === "required" && (
                        <p className="text-danger">Price is required.</p>
                    )}

                    <label>SKU : </label>
                    <input disabled type="text" className="form-control"
                        {...register("sku", {
                            required: true
                        })} />

                    <div className="m-2">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="button" className="btn btn-danger" onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>

            {/* {JSON.stringify(product)} */}



        </>
    );
}

export default ViewProduct;