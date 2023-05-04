import "./css/Mypage.css";
import YouTube from "react-youtube";
import { useState } from "react";

function Mypage() {
  // const [inputValue, setInputValue] = useState("");

  // function handleInputChange(event) {
  //   const sliceValue = event.target.value.slice(17);
  //   setInputValue(sliceValue);
  //   console.log(sliceValue);
  // }

  // const opts = {
  //   height: "310",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1, //자동재생 O
  //     rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
  //     modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
  //   },
  // };

  // return (
  //   <>
  //     <div>
  //       <div className="app-container">
  //         <div className="app-copy">
  //           <div className="youtube-one">
  //             <input
  //               className="youtube-urlbar"
  //               onChange={handleInputChange}
  //             ></input>
  //             <div className="youtube-playing">
  //               <YouTube videoId={inputValue} opts={opts} />
  //             </div>
  //           </div>
  //           <div className="youtube-chart"></div>
  //           <div className="youtube-two">
  //             <input
  //               className="youtube-urlbar"
  //               onChange={handleInputChange}
  //             ></input>
  //             <div className="youtube-playing">
  //               <YouTube videoId={inputValue} opts={opts} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div>
        <h1 className='main-title'>| 마이페이지</h1>
      </div>
      <div className='results-container'>
        <div className='result-container'>
          <div className='youtube-container'>
            <div className='img'>
              <img src=''></img>
            </div>
            <div className='youtube-title'>영상제목</div>
          </div>
          <div className='percent-container'>
            <div>텍스트 표절률</div>
            <div className='percent'>60%</div>
            <div>영상 표절률</div>
            <div className='percent'>80%</div>
          </div>
          <div className='youtube-container'>
            <div className='img'>
              <img src=''></img>
            </div>
            <div className='youtube-title'>영상제목</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
