import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization: "Client-ID uG7n-mWhsgQWUR5mu11t_AJHnsrXr-onjjv_sP7ft8o"
      },
      params: {
        query:term
      }
    })
    debugger
    return response.data.results 
  }

    export default searchImages