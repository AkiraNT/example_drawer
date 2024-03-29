import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
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

export default About;