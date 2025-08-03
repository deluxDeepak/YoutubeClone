import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { API_KEY, value_convert } from '../../Data'
import { Link } from 'react-router'

const Recomended = ({ categoryId }) => {
    const [apidata, setapidata] = useState([]);

    const fetchdata = async () => {
        const related_aurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=0&key=${API_KEY}`
        try {
            const res = await fetch(related_aurl);
            const data = await res.json();
            console.log("Fetched Data:", data);
            setapidata(data.items || []); // fallback to empty array if items is undefined
        } catch (err) {
            console.error("API Error:", err);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [categoryId]);




    return (
        <div className='recommended'>


            {
                apidata?.map((item, index) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet?.thumbnails?.medium?.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet?.title}</h4>
                            <p>{item.snippet?.channelTitle}</p>
                            <p>{value_convert( item.statistics?.viewCount)} Views</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Recomended