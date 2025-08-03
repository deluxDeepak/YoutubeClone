import React from 'react'
import './Sidebar.css'
import home from '../../Assets/home.png'
import game_icon from '../../Assets/game_icon.png'
import automobiles from '../../Assets/automobiles.png'
import sports from '../../Assets/sports.png'
import entertainment from '../../Assets/entertainment.png'
import tech from '../../Assets/tech.png'
import music from '../../Assets/music.png'
import blogs from '../../Assets/blogs.png'
import news from '../../Assets/news.png'
import jack from '../../Assets/jack.png'
import simon from '../../Assets/simon.png'
import tom from '../../Assets/tom.png'
import megan from '../../Assets/megan.png'
import cameron from '../../Assets/cameron.png'

// After doing the Ui caategory set karenge 
const Sidebar = ({ sidebar, category, setcategory }) => {
    return (
        // Dynamic class dene ka matlaba hua jab wo class rehega to property chalega nahi to hat jayega 
        // ek aur naya side bar add ho jaye (sidebar true hone par )
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`} >
            <div className="sortcut-link">

                {/* 
                Ab Catogarry ke hisab se class ko rename karenge
                Kun sa catogary kab active hai (ek underline aa jayega jispe click karenge )
                */}

                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setcategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setcategory(20)}>
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setcategory(2)}>
                    <img src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setcategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setcategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setcategory(28)}>
                    <img src={tech} alt="" /><p>Tecchnology</p>
                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setcategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`side-link ${category === 23 ? "active" : ""}`} onClick={() => setcategory(23)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setcategory(25)}>
                    <img src={news} alt="" /><p>News</p>
                </div>

            </div>
            <hr />
            <div className="subscribeed-list">
                <h3>Suscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="" /><p>PewdiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" /><p>Mr.Beast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /><p>Justine Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /><p>5-minutes Craft</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar