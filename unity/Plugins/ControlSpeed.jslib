mergeInto(LibraryManager.library, {
  reactSpeedUp: function (curSpeed, value) {
  try {
        window.dispatchReactUnityEvent("reactSpeedUp", curSpeed, value);
  } catch (e) {
    console.warn("Failed to dispatch event");
  }
  },
  reactSpeedDown: function (curSpeed, value) {
  try {
        window.dispatchReactUnityEvent("reactSpeedDown", curSpeed, value);
  } catch (e) {
    console.warn("Failed to dispatch event");
  }
  },
});