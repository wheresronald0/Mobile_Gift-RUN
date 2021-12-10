import React, { useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from "@ui-kitten/components";
import UserAuthContext from "../context/UserAuthContext";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { state, signIn } = useContext(UserAuthContext);

  //UI Kitten Navigation
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  //Password visible? functionality
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    if (password.length < 8) {
      return (
        <View style={styles.captionContainer}>
          {AlertIcon(styles.captionIcon)}
          <Text style={styles.captionText}>
            Should contain at least 8 characters
          </Text>
        </View>
      );
    } else {
      return <Text></Text>;
    }
  };
  //----END----Password visible? functionality

  return (
    <SafeAreaView>
      <TopNavigation
        title="Your Gift-RUN Account"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ height: "100%" }}>
        <Input
          value={email}
          label="User Name"
          placeholder="Enter User Name"
          onChangeText={(nextValue) => setEmail(nextValue)}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <Input
          value={password}
          label="Password"
          placeholder="Enter Password"
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <Button onPress={signIn(email, password)} style={styles.button}>
          Sign In
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("MainFlow");
          }}
          style={styles.button}
        >
          Flow
        </Button>
        {state.message ? (
          <Text category="p1" style={styles.errorText}>
            {state.message}
          </Text>
        ) : null}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  button: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  errorText: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: "center",
    color: "red",
  },

  //Password input styling
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  },
});

export default SignInScreen;
