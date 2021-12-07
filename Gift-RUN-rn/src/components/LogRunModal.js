import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button, Card, Modal, Text } from "@ui-kitten/components";

export const LogRunModal = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setVisible(true);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text>How Would You Like to Log Your Run?</Text>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate("ManuallyLog"), setVisible(false);
              //onPress={() => {props.screenSelect(man)}}
            }}
          >
            Log Run Manually
          </Button>
          <Button
            onPress={() => {
              {
                navigation.navigate("Auto"), setVisible(false);
              }
            }}
          >
            Automatically Track Run
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    marginVertical: 20,
  },
});
