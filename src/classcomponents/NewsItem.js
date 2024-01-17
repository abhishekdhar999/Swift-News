import React from 'react'

const  NewsItem = (props)=> {
        
     
  
        let {title,description,imageurl,newsurl,author,time,source} = props;
    return (
      <>
      <div className='my-3'>
       <div className="card" style={{width: " 18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >{title}....<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><strong>Author: </strong>{!author?"unknown":author} </p>
    <p className="card-text"><strong>Time:</strong>{new Date(time).toGMTString()} </p>
    <a href={newsurl} to="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
    </div>
    

      </div>


</>
    )
  
}
export default NewsItem;
