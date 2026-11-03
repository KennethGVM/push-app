import { ThemedText } from '@/components/themed-text';
import { usePushNotifications } from '@/hooks/use-push-notifications';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PushApp() {
  const { expoPushToken, notifications } = usePushNotifications();

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <ThemedText style={{ marginTop: 24 }}>
        Expo token: {expoPushToken}
      </ThemedText>

      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <ThemedText style={{ fontWeight: 'bold' }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText style={{ fontSize: 10 }}>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'grey', opacity: 0.5 }} />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}
          >
            <ThemedText
              style={{ textAlign: 'center', fontSize: 16, color: 'grey' }}
            >
              No notifications received yet.
            </ThemedText>
          </View>
        )}
      />

      {/* <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification({
            to: [expoPushToken],
            title: 'Test Notification',
            body: 'This is a test notification',
            data: { chatId: '123' },
          });
        }}
      /> */}
    </SafeAreaView>
  );
}
