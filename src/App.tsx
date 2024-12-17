import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

import "./App.css";
import { ReactUnityEventParameter } from 'react-unity-webgl/distribution/types/react-unity-event-parameters';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [speed, setSpeed] = useState(30.0);

  const { unityProvider, loadingProgression, isLoaded, sendMessage, addEventListener, removeEventListener, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: "output.loader.js",
    dataUrl: "output.data",
    frameworkUrl: "output.framework.js",
    codeUrl: "output.wasm",
  });

  const sendToken = useCallback(() => {
    sendMessage('Trigger', 'RecieveUnity', 'nice');
  }, [sendMessage]);

  const setSpeedUp = useCallback((...speedParameters: ReactUnityEventParameter[]) => {
    const curSpeed = speedParameters[0] as number;
    const value = speedParameters[1] as number;
    setSpeed(curSpeed + value);
  }, []);

  const setSpeedDown = useCallback((...speedParameters: ReactUnityEventParameter[]) => {
    const curSpeed = speedParameters[0] as number;
    const value = speedParameters[1] as number;
    setSpeed(curSpeed - value);
  }, []);

  useEffect(() => {
    if (unityProvider) {
      addEventListener('GoToUnity', sendToken);
      addEventListener("reactSpeedUp", setSpeedUp);
      addEventListener("reactSpeedDown", setSpeedDown);
      return () => {
        detachAndUnloadImmediate().catch((reason) => {
          console.log(reason);
        });
        removeEventListener("reactSpeedUp", setSpeedUp);
        removeEventListener("reactSpeedDown", setSpeedDown);
        removeEventListener('GoToUnity', sendToken);
      };
    }

  }, [unityProvider, addEventListener, removeEventListener, detachAndUnloadImmediate, sendToken, setSpeedUp, setSpeedDown]);


  return (
    <div className='App'>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <div>
        <Unity
          unityProvider={unityProvider}
          style={{ visibility: isLoaded ? "visible" : "hidden", width: '1500px', height: '800px' }}
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
        setSpeed(speed + 1.0);
      }}>
        {`+`}
      </button>
      <button onClick={() => {
        setSpeed(speed - 1.0);
      }}>
        {`-`}
      </button>
      {speed}
      <button onClick={() => {
        sendMessage("Square", "setSpeed", speed);
      }}>apply</button>
    </div>
  );
}

export default App;
