import { useThemeColor } from '@/hooks/use-theme-color';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Push App' }} />
      </Stack>
    </ThemeProvider>
  );
}
