import logo from './logo.svg';
import './App.css';
// e3fa893156c14297a40e061679671fdc
import React, {useEffect,useState} from 'react'
import Navbar from './classcomponents/Navbar';
import News from './classcomponents/News';
import NewsItem from './classcomponents/NewsItem';
import { Route, Routes} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  //  pageSize = 9;
   const[pageSize,setPageSize] = useState(9)
  //  const [progress,setProgress] = useState(0)
   
// setProgress = (progress)=>{
// setState({
//   progress:progress
// })


  
    return (
     
      <div>
        <LoadingBar
        color='#f11946'

        // progress={state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Navbar/>
       
       {/* <News key="general" pageSize={pageSize}  category="general" country="in"/> */}
       <Routes>
       <Route  path = "/" element = {<News Progresss ={0} key="general" pageSize={pageSize} category="general" country="in"/>}/>
       <Route  path = "/business" element = {<News setProgresss ={0} key="business" pageSize={pageSize}  category="business" country="in"/>}/>
       <Route  path = "/entertainment" element = {<News setProgresss ={0} key="entertainment" pageSize={pageSize}  category="entertainment" country="in"/>}/>
       <Route  path = "/sports" element = {<News setProgresss ={0} key="sports" pageSize={pageSize}  category="sports" country="in"/>}/>
       <Route  path = "/science" element = {<News setProgresss ={0} key="science" pageSize={pageSize}  category="science" country="in"/>}/>
       <Route  path = "/health" element = {<News setProgresss ={0} key="health" pageSize={pageSize}  category="health" country="in"/>}/>

       

       </Routes>
       
      </div>
    )
  
}
export default App;

