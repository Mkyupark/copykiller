import React, { useState } from "react";
import Header from "../Header";
import "./css/resultpage.css";
import styled from "styled-components";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ResultPage = () => {
  const [timelineCount, setTimelineCount] = useState(5);

  const handleAddTimeline = () => {
    setTimelineCount(timelineCount + 1);
  }

  const [percent, setPercent] = useState({
    Percent: 60,
    titlePercent: 80,
    thumbnail: 70,
  });

  const MyBox = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding-left: 10px;
    padding-top: 0px;
    width: 48%;
    float: left;
  `;

  return (
    <>
      <div className="result-container" style={{ display: "flex", alignItems: "center" }}>
        <div className='main-title'>| 검사 결과</div>
        <div className="download-button">
          <button>다운로드</button>
        </div>
      </div>
      <table className='resultTable'>
        <tbody>
          <tr className='resultTr'>
            <th className='resultTh-title'>링크</th>
            <td className='resultTd'></td>
            <th className='resultTh-title'>링크</th>
            <td className='resultTd'></td>
          </tr>
          <tr className='resultTr'>
            <th className='resultTh-title'>영상제목</th>
            <td className='resultTd'></td>
            <th className='resultTh-title'>영상제목</th>
            <td className='resultTd'></td>
          </tr>
          <th className="resultTh">텍스트 표절률</th>
          <td className="totalResultbar">
            {/* <div style={{ ...barStyle, width: percent.Percent + "%"}}>{percent.Percent}%</div> */}
            <div className="barStyle" style={{width: percent.Percent + "%"}}>{percent.Percent}%</div>
          </td>
          <th className="resultTh">이미지 표절률</th>
          <td className="totalResultbar">
            <div className="barStyle" style={{width: percent.Percent + "%"}}>{percent.Percent}%</div>
          </td>
          <th className="resultTh">전체 표절률</th>
          <td className="totalResultbar">
            <div className="barStyle" style={{width: percent.Percent + "%"}}>{percent.Percent}%</div>
          </td>
        </tbody>
      </table>
      
      <div className="mainContainer">
        <div className='video'>
          <video src='' alt='video1'></video>
          <video src='' alt='video2'></video>
        </div>
        <div className="timelines">
          <button className="timeline">1</button>
          <button className="timeline">2</button>
          <button className="timeline">3</button>
          <button className="timeline">4</button>
          <button className="timeline">5</button>
        </div>
      </div>
      {/* <div className='Container'>
        <MyBox>
          <p>텍스트 표절의심 부분</p>
          <hr />
          {textList.map((idx) => (
            <div
              key={idx.id}
              style={{
                padding: "3px",
                float: "right",
                width: "100%",
                backgroundColor: " #1b2430",
                color: "white",
              }}
            >
              표절률
              <div className='totalResultbar' style={{ float: "right" }}>
                <div
                  style={{
                    ...barStyle,
                    width: idx.percent + "%",
                    color: "white",
                  }}
                >
                  {idx.percent}%
                </div>
              </div>
              <div>
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <h4 style={{ margin: 0, padding: 0 }}>텍스트1</h4>
                  <p>
                    타임라인:{idx.timeline1}
                    <br />
                    {idx.text1}
                  </p>
                  <br />
                  <h4 style={{ margin: 0, padding: 0 }}>텍스트2</h4>
                  <p>
                    타임라인:{idx.timeline2}
                    <br />
                    {idx.text2}
                  </p>
                </Box>
              </div>
            </div>
          ))}
        </MyBox> */}
        {/* <MyBox>
          <p>영상 표절의심 부분</p>
          <hr />
          {imgList.map((idx) => (
            <div key={idx.id}>
              <div
                key={idx.id}
                style={{
                  padding: "3px",
                  float: "right",
                  width: "100%",
                  backgroundColor: " #1b2430",
                  color: "white",
                }}
              >
                표절률
                <div className='totalResultbar' style={{ float: "right" }}>
                  <div
                    style={{
                      ...barStyle,
                      width: idx.percent + "%",
                      color: "white",
                    }}
                  >
                    {idx.percent}%
                  </div>
                </div>
              </div>
              <Card sx={{ float: "left", pl: "5px" }}>
                <CardMedia
                  component='img'
                  alt={idx.img1}
                  style={{ objectFit: "cover", height: 200, width: 345 }}
                  image={idx.img1}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    타임라인: {idx.timeline1}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ float: "right" }}>
                <CardMedia
                  component='img'
                  alt={idx.img2}
                  style={{
                    objectFit: "cover",
                    height: 200,
                    width: 345,
                    padding: 5,
                  }}
                  image={idx.img2}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    타임라인: {idx.timeline2}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </MyBox> */}
      {/* </div> */}
    </>
  );
};

export default ResultPage;
