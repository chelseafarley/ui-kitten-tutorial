import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  IconRegistry,
  Icon,
  Card,
  Datepicker,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { useState } from "react";

// npx expo install @ui-kitten/components @eva-design/eva
// npx expo install react-native-svg@9.13.6

const deleteIcon = (props) => {
  return <Icon name="trash" {...props} />;
};

export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Layout style={styles.container}>
          <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            accessoryLeft={deleteIcon}
            onPress={() => console.log("Pressed")}
          >
            Press Me
          </Button>
          <Card status="success">
            <Text>Hello world!</Text>
          </Card>
          <StatusBar style="light" />
        </Layout>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
