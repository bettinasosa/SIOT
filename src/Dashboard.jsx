import React, { useRef, useCallback } from "react";

import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";


const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-bgega",
});

const music = sdk.createChart({
  chartId: "84119c93-5323-4e1f-a192-b60a49948e1e", 
});

const weather = sdk.createChart({
  chartId: "954246e9-afec-4c7d-a13b-de7bd1d8dfca",
});

export default function Dashboard() {
  const refmusic = useRef(null);
  const refweather = useRef(null);

  const rendermusic = useCallback(async (ref) => {
    try {
      await music.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderweather = useCallback(async (ref) => {
    try {
      await weather.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefmusic = useCallback(
    (ref) => {
      if (ref) {
        rendermusic(ref);
      }
      // Save a reference to the node
      refmusic.current = ref;
    },
    [rendermusic]
  );

  const setRefweather = useCallback(
    (ref) => {
      if (ref) {
        renderweather(ref);
      }
      // Save a reference to the node
      refweather.current = ref;
    },
    [renderweather]
  );

  return (
    <>
      <div className="charts">
        <div id="music" ref={setRefmusic}></div>
      </div>
      <div className="charts">
        <div id="weather" ref={setRefweather}></div>
      </div>
    </>
  );
}
