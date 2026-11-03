import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatByIdScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ marginHorizontal: 24, marginTop: 24 }}>
      <ThemedText style={{ marginTop: 24 }}>CHATID:</ThemedText>
      <ThemedText
        style={{
          fontSize: 55,
          lineHeight: 55,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        {id}
      </ThemedText>
    </SafeAreaView>
  );
};

export default ChatByIdScreen;
