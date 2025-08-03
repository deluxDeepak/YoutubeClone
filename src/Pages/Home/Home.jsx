import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

// Sidebar me props bhejna hai grand parent ka to oske parent me bhejna parega (yehan parent=Home grandparent=App)
const Home = ({sidebar}) => {
  // After compliting the UI (This will be done )
  // To get the data dynamically

  // Catogarry side bar me dynamically show karna hai 
  const  [category,setcategory]=useState(0); 




  return (
    <>
      {/* Here we will mount the sidebar components  */}
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory} ></Sidebar>

      {/* Side bar ke component pe click karne ke badd feed change hona chiye  */}
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}></Feed>
      </div>


    </>
  )
}

export default Home;