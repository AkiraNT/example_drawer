import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Contact = () => {
  return (
    <View style={styles.center}>
      <Text>This is the contact screen</Text>
      <Button
        title="Open menu"
        onPress={() => {
          const drawerNavigation = navigation.getParent().getParent();

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

export default Contact;