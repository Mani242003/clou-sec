import Lottie  from "lottie-react";
import  PreLoaderAnimi from "../../assets/zqgHQDavub.json"
import "./PreLoader.css"


import React from 'react'

const PreLoader = () => {
  return (
<>
<section className="preLoader-wrapper">
    <div className="preLoader-container">
        <Lottie animationData={PreLoaderAnimi}/>
    </div>
</section>
</>  )
}

export default PreLoader