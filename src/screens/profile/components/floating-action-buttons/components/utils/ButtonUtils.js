export const handlePress = (
  isOverlayMode,
  setOverlayVisible,
  setIsOverlayMode,
  navigation,
) => {
  if (isOverlayMode) {
    setOverlayVisible(true);
  } else {
    navigation.navigate('create-tweet');
    setIsOverlayMode(false);
    setOverlayVisible(false);
  }
  setIsOverlayMode(!isOverlayMode);
};

export const toggleOverlay = (
  overlayVisible,
  setOverlayVisible,
  setIsOverlayMode,
) => {
  setOverlayVisible(!overlayVisible);
  setIsOverlayMode(true);
};
