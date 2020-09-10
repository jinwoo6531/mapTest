import React from "react";
import { NaverMap, Marker } from "react-naver-maps";
import "./style.css";
import markerPng from "./marker_v2.png";
import markerPng2 from "./marker_v1.png";
import { data } from "../data/data";

function lunch() {
  const navermaps = window.naver.maps;

  return (
    <>
      <div id="navbar">방문한곳 체크!</div>
      <div id="infoBox">
        <div id="infoTitle">현재 날짜</div>
        <div id="infoContent">2020.07.10</div>
      </div>
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "100vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={11} // 지도 초기 확대 배율
      >
        {data.map((item) => {
          if (item.content === "비트교육센터") {
            return (
              <Marker
                key={1}
                position={new navermaps.LatLng(item.lat, item.lng)}
                icon={{
                  url: markerPng2,
                  size: { width: 24, height: 32 },
                  scaledSize: { width: 24, height: 32 },
                  anchor: { x: 12, y: 32 },
                }}
                shape={{
                  coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12],
                  type: "poly",
                }}
                onClick={() => {
                  alert(`여기는 ${item.content}입니다.`);
                }}
              />
            );
          } else if (item.content === "지영이집") {
            return (
              <Marker
                key={1}
                position={new navermaps.LatLng(item.lat, item.lng)}
                icon={{
                  url: markerPng,
                  size: { width: 24, height: 32 },
                  scaledSize: { width: 24, height: 32 },
                  anchor: { x: 12, y: 32 },
                }}
                shape={{
                  coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12],
                  type: "poly",
                }}
                onClick={() => alert("지영이네집")}
              />
            );
          } else if (item.content === "바울이집") {
            return (
              <Marker
                key={1}
                position={new navermaps.LatLng(item.lat, item.lng)}
                icon={{
                  url: markerPng,
                  size: { width: 24, height: 32 },
                  scaledSize: { width: 24, height: 32 },
                  anchor: { x: 12, y: 32 },
                }}
                shape={{
                  coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12],
                  type: "poly",
                }}
                onClick={() => alert("바울이네집")}
              />
            );
          } else if (item.content === "재영이집") {
            return (
              <Marker
                key={1}
                position={new navermaps.LatLng(item.lat, item.lng)}
                icon={{
                  url: markerPng,
                  size: { width: 24, height: 32 },
                  scaledSize: { width: 24, height: 32 },
                  anchor: { x: 12, y: 32 },
                }}
                shape={{
                  coords: [0, 12, 12, 0, 24, 12, 12, 32, 0, 12],
                  type: "poly",
                }}
                onClick={() => alert("재영이네집")}
              />
            );
          }
        })}
      </NaverMap>
    </>
  );
}

export default lunch;
