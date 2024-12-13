import * as React from 'react';
import { useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

import "./App.css";

const App = () => {
  const [isRotate, setIsRotate] = useState(false)
  const { unityProvider, loadingProgression, isLoaded, sendMessage } = useUnityContext({
    loaderUrl: "output.loader.js",
    dataUrl: "output.data",
    frameworkUrl: "output.framework.js",
    codeUrl: "output.wasm",
  });
  return (
    <div className='App'>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <div>
        <Unity
          unityProvider={unityProvider}
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
        // style={{width: '1500px', height: '800px'}}
        // style={{width: 'auto', height: 'auto'}}
        />
      </div>
      <button onClick={() => {
        const rotate = !isRotate;
        sendMessage("rotate", rotate ? "ture" : "false");
        setIsRotate(rotate);
      }}>
        {isRotate ? "stop" : "rotate"}
      </button>
    </div>
  );
}

export default App;

