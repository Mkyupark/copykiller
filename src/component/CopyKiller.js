import React, { useState } from "react";
import "./css/CopyKiller.css";
import YouTube from "react-youtube";
import { sendurl } from "../service/LogService";

// function CopyKiller() {
//   const {videoUrl, setVideoUrl} = useState("");
//   const {videoTitle, setVideoTitle} = useState("");
//   const {videoThumbnail, setVideoThumbnail} = useState("");

//   const getVideoData = () => {
//     const videoId = videoUrl.split("v=")[1];
//     const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
//   }
// }

function CopyKiller() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  function handleInputChange1(event) {
    const sliceValue = event.target.value.slice(17);
    setInputValue1(sliceValue);
    console.log(sliceValue);
  }
  function handleInputChange2(event) {
    const sliceValue = event.target.value.slice(17);
    setInputValue2(sliceValue);
    console.log(sliceValue);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    sendurl({ url1: inputValue1, url2: inputValue2 }).then((response) => {
      window.location.href = "/resultpage";
    });
  };

  const opts = {
    height: "310",
    width: "100%",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <div className='header'>
          <div className='main-title'>| 영상 업로드</div>
        </div>
        <div className='explain'>
          유튜브 영상 링크를 첨부하세요. 자동으로 영상이 업로드 됩니다.
          <br />
          검사는 약 10분정도 소요될 수 있습니다.
        </div>
        <div>
          <div className='app-container'>
            <div className='app-copy'>
              <div className='youtube'>
                <input
                  className='youtube-urlbar'
                  onChange={handleInputChange1}
                ></input>
                <div className='youtube-playing'>
                  <YouTube videoId={inputValue1} opts={opts} />
                </div>
              </div>
              <div className='youtube'>
                <input
                  className='youtube-urlbar'
                  onChange={handleInputChange2}
                ></input>
                <div className='youtube-playing'>
                  <YouTube videoId={inputValue2} opts={opts} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='test-button'>
          <button type='submit'>검사 시작하기</button>
        </div>
      </form>
    </>
  );
}

export default CopyKiller;
