import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [number, setNumber] = useState(0);

  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "output.loader.js",
    dataUrl: "output.data",
    frameworkUrl: "output.framework.js",
    codeUrl: "output.wasm",
  });

  const sendToken = useCallback(() => {
    sendMessage('Trigger', 'RecieveUnity', 'nice');
  }, [sendMessage]);

  useEffect(() => {
    if (unityProvider) {
      addEventListener('GoToUnity', sendToken);
      return () => {
        removeEventListener('GoToUnity', sendToken);
      };
    }
  }, [unityProvider, sendToken, addEventListener, removeEventListener]);


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
        const active = !isActive;
        sendMessage("Square", "toggleRotate");
        setIsActive(active);
      }}>
        {isActive ? "stop" : "active"}
      </button>

      <button onClick={() => {
        const changedNumber = number + 1;
        sendMessage("number", changedNumber.toString());
        setNumber(changedNumber);
      }}>
        {`+`}
      </button>
      <button onClick={() => {
        const changedNumber = number - 1;
        sendMessage("number", changedNumber.toString());
        setNumber(changedNumber);
      }}>
        {`-`}
      </button>
      {number}
    </div>
  );
}

export default App;

