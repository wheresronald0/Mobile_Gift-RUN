import React, { useState, useContext } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Button,
  Icon,
  Input,
  Text,
  Divider,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import UserAuthContext from "../context/UserAuthContext";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { state, signUp } = useContext(UserAuthContext);

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
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Get a Gift-RUN Account" alignment="center" />
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
        <Button onPress={signUp(email, password)} style={styles.button}>
          Sign Up
        </Button>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={styles.text}
        >
          {state.message ? (
            <Text category="p1" style={styles.errorText}>
              {state.message}
            </Text>
          ) : null}
          <Text category="p1" status="primary" style={styles.text}>
            Already Have a Gift-RUN Account?
          </Text>
        </TouchableOpacity>
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
  text: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: "center",
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
    marginTop: 4,
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  },
});

export default SignUpScreen;
