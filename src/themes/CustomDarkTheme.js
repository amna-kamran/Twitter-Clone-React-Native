import {DefaultTheme} from '@react-navigation/native';

const customDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000', // Dark background color
    card: '#1C1C1E', // Slightly lighter shade for card backgrounds
    text: '#FFFFFF', // White text for high contrast
    primary: '#0A84FF', // Blue color for icons or highlights
    border: '#0A84FF', // Blue color for borders
  },
  // Additional customizations can go here, such as:
  // fonts, metrics, etc.
};

export default customDarkTheme;
