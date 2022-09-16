import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the screen A</Text>
      <Button
        title="Open menu"
        onPress={() => navigation.openDrawer()} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ScreenA;