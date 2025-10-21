import { StyleSheet } from 'react-native';

const lightTheme = {
  background: '#FFFFFF',
  text: '#222222',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
};

export const makeStyles = (isDarkMode: boolean) => {
  const theme = isDarkMode ? darkTheme : lightTheme;
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.text,
    },
  });
};
