import * as React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

import "./App.css";

const App = () => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
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
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      // style={{width: '1500px', height: '800px'}}
      // style={{width: 'auto', height: 'auto'}}
      />
    </div>
  );
}

export default App;

