import React from "react";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import Lunch from "./components/lunch/lunch";
import { clientKey } from "./config";

function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={clientKey} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <Lunch />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;
