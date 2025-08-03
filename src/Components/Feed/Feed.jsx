import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router'
import { API_KEY, value_convert } from '../../Data'
import moment from 'moment'



const Feed = ({ category }) => {
    // Here fetch the data from the url

    // State variable banayege jo data aa reha hai fetch karne se 
    const [data, setData] = useState([]);

    const fetchData = async () => {
        // yehan id hum category se lenge 
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url)
            .then(respose => respose.json())
            .then(data => setData(data.items))

    }

    useEffect(() => {
        fetchData();
    }, [category])






    return (
        <div className="feed">
            {/* 
            <Route path='/video/:categoryId/:videoId' element={<Video></Video>}></Route>
            yehan ab dynamic data leke card create karenge 
             */}
            {
                data.map((items) => {
                    return (
                        <Link to={`video/${items.snippet.categoryId}/${items.id}`} className='card'>
                            <img src={items.snippet.thumbnails.medium.url} alt="" />
                            <h2>{items.snippet.title}</h2>
                            <h3>{items.snippet.channelTitle}</h3>

                            {/* 
                            ->Converter banaya fir data use kar rehe hai
                            ->Time bhi pura dikha reha hai ye convert karna parega 

                            */}
                            <p>{value_convert(items.statistics.viewCount)} &bull; {moment(items.snippet.publishedAt).fromNow()}</p>

                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Feed