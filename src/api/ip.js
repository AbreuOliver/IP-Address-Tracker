

let ip = "0.0.0.0";
let api_key = "at_zwy9nuX6uvpaQsIwNPGHMxUiaVLYb"
const getRequest = () => {
    axios.get('https://geo.ipify.org/api/v1?apiKey=at_zwy9nuX6uvpaQsIwNPGHMxUiaVLYb&ipAddress=0.0.0.0')
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export {getRequest}