import axios from "axios";

export default  axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID PJHgTcQOPMSeNonUa99GZeIts3jnf55vaPt1A61DSLs'

    }

})


