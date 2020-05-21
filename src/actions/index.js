import Axios from 'axios';
const URL="http://localhost:3004";

export function artistOne(keywords){
    const data=Axios.get(`${URL}/artists?q=${keywords}`)
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch(err=>alert(err))
    return{
        type:"GET_ARTIST",
        payload:data
    }
}
export function artistList(){
    const data=Axios.get(`${URL}/artists?_limit=6`)
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch(err=>alert(err))
    return{
        type:"GET_ARTITST_LIST",
        payload:data
    }
}
export function artistDetails(id){
    const data=Axios.get(`${URL}/artists?id=${id}`)
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch(err=>alert(err))
    return{
        type:"GET_ARTITST_DATA",
        payload:data
    }
}
// This function is to clear the data in the redux so that when we route from one page to another
// we don't see the previous data which was loaded earlier
export function clearData(){
    return{
        type:"CLEAR_DATA",
        payload:null
    }
}