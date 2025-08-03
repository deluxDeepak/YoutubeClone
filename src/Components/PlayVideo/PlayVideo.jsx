import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import { API_KEY, value_convert } from '../../Data'
import moment from 'moment'
import {  useParams } from 'react-router'



const PlayVideo = () => {


    // take videoId from params not props 
    const {videoId}=useParams();

    const [appdata, setAppdata] = useState(null);
    const [channelData, setChannel] = useState(null);
    const [commentData, setComment] = useState(null);

    // To fetch the data from the youtube  details of one video
    const fetchvideodata = async () => {
        // Fetching video data 
        const videodetailsurl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;
        await fetch(videodetailsurl)
            .then(res => res.json())
            .then(data => setAppdata(data.items[0]));
    }
    useEffect(() => {
        fetchvideodata();
    }, [videoId]);


    // Fetching the  channel data
    const fectchChannelData = async () => {
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${appdata.snippet.channelId}&key=${API_KEY} `;
        await fetch(channel_url)
            .then(res => res.json())
            .then(data => setChannel(data.items[0]));

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url)
            .then(res => res.json())
            .then(data => setComment(data.items));
    }

    useEffect(() => {
        fectchChannelData();
       
    }, [appdata]);   //App data change hone par firse call ho jayega 





    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            {/* Use params jab hum dynamic url catch karna chate hai tab use karte hai  */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{appdata ? appdata.snippet.title : "Title default"}</h3>
            <div className="play-video-info">
                <p>{appdata ? value_convert(appdata.statistics.viewCount) : "16k"} Views &bull; {appdata ? moment(appdata.snippet.publishedAt).fromNow() : " DaysCount"}</p>
                <div>
                    <span><img src={like} alt="" />{appdata ? value_convert(appdata.statistics.likeCount) : 155}</span>
                    <span><img src={dislike} alt="" />{appdata ? value_convert(appdata.statistics.favoriteCount) : 155}</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>


            {/* Ab channel detai;s denge  */}
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{appdata ? appdata.snippet.channelTitle : "Channel name"}</p>
                    <span>{channelData ? value_convert(channelData.statistics.subscriberCount) : "1M"} Subscriber</span>
                </div>
                <button>Subscribe</button>

            </div>

            <div className="vid-description">
                <p>{appdata ? appdata.snippet.description.slice(0, 250) : "Decription of video is here "}</p>
                <hr />
                <h4>{appdata ? value_convert(appdata.statistics.commentCount) : "102"} Comments</h4>



                {
                    commentData?.map((items, index) => {

                        return (
                            <div key={index} className="comment">
                                <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                <div>
                                    <h3>{items.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                    <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className="comment-action">
                                        <img src={like} alt="" />
                                        <span>{value_convert(items.snippet.topLevelComment.snippet.likeCount)}</span>
                                        <img src={dislike} alt="" />
                                        <span>23</span>
                                    </div>

                                </div>
                            </div>

                        )

                    })
                }


                {/* 
                Comments details 
                ->Comment me bhi dynamic value lenge ab 
                */}



            </div>

        </div>
    )
}

export default PlayVideo