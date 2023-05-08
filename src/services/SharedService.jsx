import http from '../Interceptors/HttpInterceptor';


export const SharedService = {

    getProducts : async () =>{
         return await http.get('Product')
    },

    getFilterdProducts : async (pageNo,pageSize,searchstring,sortcolumnname,sortorder) =>{
        console.log("Calling getFilterdProducts");
        return await http.get(`Product/GetDataWithPagination`,{params:{pageNo:pageNo,pageSize:pageSize,searchstring:searchstring,sortcolumnname:sortcolumnname,sortorder:sortorder}})
    },

    getProduct : async (id) =>{
        return await http.get(`Product/${id}`)
    },

    updateProduct : async (id,data)=>{
        return await http.put(`Product?id=${id}`,data)
    },

    deleteProduct : async (id)=>{
        return await http.delete(`Product?id=${id}`)
    }
    
}
