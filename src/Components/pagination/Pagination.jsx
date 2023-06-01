import { useEffect, useState } from "react";
import { SharedService } from "../../services/SharedService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Pagination() {

  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchString, setsearchString] = useState('');
  const [sortColumnName, setsortColumnName] = useState('productId')
  const [sortOrder, setsortOrder] = useState(true)
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [products, setproducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFilterdProducts()
  }, [sortOrder, pageSize, pageNo])

  useEffect(() => {
    const getData = setTimeout(() => {
      getFilterdProducts()
    }, 1000)
    return () => clearTimeout(getData)
  }, [searchString])

  function getFilterdProducts() {
    SharedService.getFilterdProducts(pageNo, pageSize, searchString, sortColumnName, sortOrder)
      .then(res => {
        setproducts(res.data.data)
        setTotalPages(res.data.totalPages)
        setTotalRecords(res.data.totalRecords)
      })
      .catch(err=>{console.log(err);})
  }

  function setFilters(columnName) {
    setsortOrder(!sortOrder)
    setsortColumnName(columnName)
  }

  function addIcon() {
    if (sortOrder) {
      return <span className="fa-solid fa-arrow-down-short-wide"></span>
    }
    else {
      return <span className="fa-solid fa-arrow-down-wide-short"></span>
    }
  }

  function GetPages() {
    const rows = [];
    for (let index = 1; index <= totalPages; index++) {
      rows.push(<li key={index} className={"page-item " + (pageNo == index ? 'active' : '')} onClick={() => setPageNo(index)}><a className="page-link">{index}</a></li>)
    }
    return rows
  }

  function deleteProduct(id) {
    if (window.confirm("Do you really want to Delete?")) {
      SharedService.deleteProduct(id).then(res => {
        console.log("Product Deleted")
        toast.success('Product Deleted !', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        getFilterdProducts();
    })
  }
  }

  return ( 
    <>
      <input type=" search" placeholder="Search product.." className="form-control my-3 w-25" value={searchString} onChange={(e) => setsearchString(e.target.value)} />

      {products.length > 0  &&
        <>
          < table className="table table-striped text-center">
            <thead>
              <tr>
                <th onClick={() => { setFilters('productId') }}> Id {sortColumnName == 'productId' && <span>{addIcon()}</span>}</th>
                <th onClick={() => { setFilters('productName') }}>Name {sortColumnName == 'productName' && <span>{addIcon()}</span>} </th>
                <th onClick={() => { setFilters('price') }}>Price {sortColumnName == 'price' && <span>{addIcon()}</span>} </th>
                 <th onClick={() => { setFilters('mafDate') }}>Maf Date {sortColumnName == 'mafDate' && <span>{addIcon()}</span>} </th>
                <th onClick={( ) => { setFilters('mafAt') }}>Maf At {sortColumnName == 'mafAt' && <span>{addIcon()}</span>} </th>
                <th onClick={() => { setFilters('sku') }}>SKU {sortColumnName == 'sku' && <span>{addIcon()}</span>} </th>
                <th onClick={() => { setFilters('categoryName') }}>Qauntity {sortColumnName == 'categoryName' && <span>{addIcon()}</span>} </th>
                <th onClick={() => { setFilters('subCategoryName') }}>Supplier {sortColumnName == 'subCategoryName' && <span>{addIcon()}</span>} </th>
                 <th onClick={() => { setFilters('description') }}>Description {sortColumnName == 'description' && <span>{addIcon()}</span>} </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                return (
                  <tr key={p.productId}>
                    <td>{p.productId}</td>
                    <td>{p.productName}</td>
                    <td>{p.price}</td>
                    <td>{p.mafDate}</td>
                    <td>{p.mafAt}</td>
                    <td>{p.sku}</td>
                    <td>{p.quantity}</td>
                    <td>{p.supplier}</td>
                    <td>{p.description}</td>
                    <td>
                      <button className="btn btn-secondary mx-1" onClick={() => navigate(`/view-product/${p.productId}`)}><span className="fa fa-edit"></span></button>
                      <button className="btn btn-danger" onClick={() => deleteProduct(p.productId)}><span className="fa fa-trash"></span></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <div className="d-flex justify-content-around">

            <p>Show
              <select className="p-1 mx-1 rounded border" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              entries
            </p >

            <p>Showing <strong>{pageSize}</strong> records of <strong>{totalRecords}</strong></p>

            {/* <p>Pagination pages[1,2...]</p> */}

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">

                <li className={"page-item " + (pageNo == 1 ? 'disabled' : '')} onClick={() => { if (pageNo > 1) setPageNo(pageNo - 1) }}>
                  <a className="page-link">Previous</a>
                </li>

                {GetPages()}

                <li className={"page-item " + (pageNo == totalPages ? 'disabled' : '')} onClick={() => { if (pageNo < totalPages) setPageNo(pageNo + 1) }}><a className="page-link">Next</a></li>

              </ul>
            </nav>
          </div>
        </>
      }

      {products.length == 0 &&
        <h1 className="text-danger mt-5 text-center">No Data found</h1>
      }
    </>

  );
}

export default Pagination;