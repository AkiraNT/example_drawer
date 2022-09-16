import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Setting screen</Text>
      <Button
        title="Open menu"
        onPress={() => {
          const drawerNavigation = navigation.getParent();

          // ...

          drawerNavigation?.openDrawer();
        }} // We added an onPress event which would navigate to the About screen
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

export default Setting;