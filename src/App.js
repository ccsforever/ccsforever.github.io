import * as React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

import "./App.css";

const App = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "output.loader.js",
    dataUrl: "output.data",
    frameworkUrl: "output.framework.js",
    codeUrl: "output.wasm",
});
  return (
    <div className='App'>
      <h1>Test Unity in React Page</h1>      
      <Unity unityProvider={unityProvider}
              style={{width: '1500px', height: '800px'}}
          />
    </div>
  );
}

export default App;

