 import * as axios from "axios";

let token = '3027a9b1605be09af469842e7379b4265bd884b5'
let instancePutPostDelete = axios.default.create({
    baseURL: 'http://35.198.170.4/api',
    headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${token}`
    }
})


 let instanceGet = axios.default.create({
     baseURL: 'http://35.198.170.4/api/',
 })

let instance_login = axios.default.create({
    baseURL: 'http://35.198.170.4/api',
    Authorization:{
     token: "b229f356f8564e0d8aa033b4eaa0bca8cc3452b6"
}})

 export const productAPI = {
     getAllProducts() {
         return instanceGet.get("products/",)
     },
    getOneProduct(id) {
        return instanceGet.get(`products/${id}`)
    },
    updateProduct(id,name,description,price,amount,image) {
        return instancePutPostDelete.put(`products/${id}`,{
            id: id,name: name,description:description,price:price,amount:amount,image:image
            })}
}

 // name (текст)
 // description (текст)
 // price(десятичное число не меньше 0)
 // amount (целое число не меньше 0)
 // image (изображение)

// export const profileAPI = {
//
// getProfile(userId){return instance.get(`profile/ ` + userId);},
//
// getStatus(userId){
//     return instance.get(`profile/status` + userId) },
// updateStatus(status){
//     return instance.put(`profile/status`, {
//         status
// }) }
//
// }
//
// export const authAPI = {
//     me(){
//         return instance.get(`auth/me`);
//     },
//     login(email,password, rememberMe=false){
//         return instance.post(`auth/post`, { email,password, rememberMe});
//     },
//     logout(){
//         return instance.delete(`auth/post`);
//     },
// }

