import React, {useEffect,useState} from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";



const  News = (props)=>  {


  // articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Yahoo Sports Staff",
  //     title:
  //       "Victor Wembanyama's debut at NBA Summer League: Spurs rookie tallies 9 points, 8 rebounds, 5 blocks - Yahoo Sports",
  //     description:
  //       "The Spurs rookie got off to a slow start at NBA Summer League.",
  //     url: "https://sports.yahoo.com/victor-wembanyamas-debut-at-nba-summer-league-spurs-rookie-tallies-9-points-8-rebounds-5-blocks-031641899.html",
  //     urlToImage:
  //       "https://s.yimg.com/ny/api/res/1.2/UQHJzKNTUheGyn8vZLdReg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/b27b32a0-1d33-11ee-bfde-0d511e1546cc",
  //     publishedAt: "2023-07-08T05:58:00Z",
  //     content:
  //       "The day many NBA fans have been waiting for came Friday when heralded No. 1 overall NBA Draft pick Victor Wembanyamaplayed in his first NBA game during the opening night of Las Vegas Summer League. W… [+834 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Fox Business",
  //     },
  //     author: "Sarah Rumpf-Whitten",
  //     title:
  //       "Winning Mega Millions jackpot drawing for $450 million - Fox Business",
  //     description:
  //       "The Mega Millions' jackpot numbers for $450 Million with a $225.6 million cash offer was released on Saturday night.",
  //     url: "https://www.foxbusiness.com/markets/winning-mega-millions-jackpot-drawing-450-million",
  //     urlToImage:
  //       "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/04/0/0/Mega-Logo-A.jpg?ve=1&tl=1",
  //     publishedAt: "2023-07-08T04:10:31Z",
  //     content:
  //       "The Mega Millions' jackpot for $450 Million took another step forward Friday after nobody matched all six numbers the previous 33 consecutive drawings.\r\nThe winning numbers for Friday night's drawing… [+1825 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Athletic",
  //     },
  //     author: "Joe Vardon",
  //     title:
  //       "Trail Blazers’ Scoot Henderson, Rockets’ Amen Thompson exit Summer League game with injuries - The Athletic",
  //     description:
  //       "Henderson, the No. 3 pick in the draft last month, finished with 15 points, six assists and five rebounds in 21 minutes.",
  //     url: "https://theathletic.com/4675153/2023/07/07/scoot-henderson-amen-thompson-nba-summer-league-injuries/",
  //     urlToImage:
  //       "https://cdn.theathletic.com/app/uploads/2023/07/07211051/USATSI_21007099-1024x683.jpg",
  //     publishedAt: "2023-07-08T03:52:36Z",
  //     content:
  //       "LAS VEGAS Portland Trail Blazers rookie Scoot Henderson left his NBA Summer League debut with an unspecified right shoulder injury in the third quarter against the Houston Rockets and did not return.… [+2485 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "YouTube",
  //     },
  //     author: null,
  //     title:
  //       "Migrants moved, CPD officers investigated for sexual misconduct - CBS Chicago",
  //     description:
  //       "Chicago Police internal affairs and the Civilian Office of Police Accountability are investigating claims officers at the Ogden District station on the West ...",
  //     url: "https://www.youtube.com/watch?v=qTqjMVqDbLE",
  //     urlToImage: "https://i.ytimg.com/vi/qTqjMVqDbLE/maxresdefault.jpg",
  //     publishedAt: "2023-07-08T03:15:05Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Detroit Free Press",
  //     },
  //     author: "Andrea May Sahouri",
  //     title:
  //       "Detroiters vow to come together after killing of Wynter Cole-Smith - Detroit Free Press",
  //     description:
  //       "The gruesome details of the 2-year-old's killing sparked fierce outcry throughout the state. Friday was the second vigil for Wynter, and a third is planned Saturday in Lansing.",
  //     url: "https://www.freep.com/story/news/local/michigan/detroit/2023/07/07/wynter-cole-smith-vigil/70393646007/",
  //     urlToImage:
  //       "https://www.freep.com/gcdn/presto/2023/07/08/PDTF/3d2dbaae-2e62-4c80-8eea-424e233c740b-07072023_VIGIL-14.jpg?crop=2399,1350,x0,y0&width=2399&height=1350&format=pjpg&auto=webp",
  //     publishedAt: "2023-07-08T01:15:59Z",
  //     content:
  //       'In a mournful gathering on Erwin Street, near the east-side alley where a missing toddler was found dead props week, a crowd of Detroiters held their fists in the air and yelled, "We will do better," … [+3665 chars]',
  //   },
  // ];

  const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [page,SetPage] = useState(1)
const [totalres,setTotalRes] = useState(0)
const[Progress,SetProgress] = useState(0)

  //  YORK UN Secretary-General Antonio Guterres on Friday dismissed a demand from Israel that he retract his accusation that Israeli forces had obviously used excessive force during a counter-terror o… [+5352 chars]"
  // constructor(props) {
  //   super(props);
  //   // console.log("hello i am a constructor from news component");
  //   props = {
  //     article: props.articl,
  //     loading: false,
  //     page: 1, 
  //     totalres:0 
  //   }
  //   document.title = `${props.props.category}-NewsMonkey`
  // }

  document.title = `${props.category}-NewsMonkey`

 const updatenews =  async()=> {
    // props.setProgresss(1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=036fdb5ab91345e4b86437cad70aae4b&page=${props.page}&pageSize=${props.pageSize}`;
   
    // props.setState({
    //   loading: true,
    // });
    setLoading(false)
    // props.setProgresss(20);
    let data = await fetch(url);
    // props.setProgresss(50);
    var jsondata = await data.json();
    // console.log(jsondata.articles[1].title)
    // props.setProgresss(70);
    // props.setState({
    //   article: jsondata.articles,
    //   totalres: jsondata.totalResults,
    //   loading: false,
    // });
    setArticles(jsondata.articles)
  setLoading(false)
    setTotalRes(jsondata.totalResults)

  //  props.setProgresss(100);
  }

  // const componentDidMount= ()=> {
  //   updatenews()
  // }

  useEffect(()=>{
    updatenews();
  },[])

 const fetchMoreData =  async()=>{


  // props.setState({page:props.page+1})

  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=036fdb5ab91345e4b86437cad70aae4b&page=${page+1}&pageSize=${props.pageSize}`;
    // props.setState({
    //   loading: true,
    // });
    SetPage(page+1)
  
    setLoading(true)
    let data = await fetch(url);
    var jsondata = await data.json();
    
   
    // props.setState({
    //   article:props.article.concat(jsondata.articles),
    //   totalres: jsondata.totalResults,
    //   loading: false,
    // });

    setArticles(articles.concat(jsondata.articles))
    setTotalRes(jsondata.totalResults)
    setLoading(false)
  }
 
  


 

    return (
      <>
        <div className="box">
          <h2 className="text-center" >NewsMonkey - Top {props.category} HeadLines </h2>

           {props.loading && <Spinner />}

          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalres}
          loader={<Spinner/>}
        >
          <div className="row">
            {
              articles.map((elements) => {
               
                return (
                  
                  <div className="col-md-4 my-3" key={elements.url}>
                    <NewsItem
                    
                      title={elements.title}
                      description={elements.description}
                      imageurl={elements.urlToImage}
                      newsurl={elements.url}
                      author={elements.author}
                      time={elements.publishedAt}
                      source={elements.source.name}
                    ></NewsItem>

                  </div>
                );
              })}
          </div>
          </InfiniteScroll>


</div>
        
</>   
        
       
    );
  
          }
          

// static defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general",
// };
// static propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };


// function based proptypes 

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  progress:0
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
