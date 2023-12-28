export const setUserProfile = userProfile => ({
  type: 'SET_USER_PROFILE',
  payload: userProfile,
});

export const ClearUser = () => ({
  type: 'CLEAR_USER',
});
