import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Button,
  Icon,
  Divider,
  Layout,
  Input,
  TopNavigation,
  TopNavigationAction,
  IndexPath,
  Select,
  SelectItem,
  Datepicker,
} from "@ui-kitten/components";
import RunDataContext from "../context/RunDataContext";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const CalendarIcon = (props) => <Icon {...props} name="calendar" />;

const LogRunScreen = ({ navigation }) => {
  //state
  const [runName, setRunName] = useState("");
  const [date, setDate] = useState(new Date());
  const [miles, setMiles] = useState("");
  const [lengthOfTime, setLengthOfTime] = useState("");
  const [selectedCharity, setSelectedCharity] = useState("Select");
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const { state, saveRunManually } = useContext(RunDataContext);

  //dropdown helper function
  const setDropDown = (index) => {
    setSelectedIndex(index);
    console.log(index);
    if (index.row == 0) {
      setSelectedCharity("American Cancer Society");
    } else if (index.row == 1) {
      setSelectedCharity("SPCA");
    } else if (index.row == 2) {
      setSelectedCharity("Habitat for Humanity");
    } else if (index.row == 3) {
      setSelectedCharity("Save the Children");
    }
  };

  //top navigation
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Log a Run"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ flex: 1 }} level="1">
        <Input
          label="Name of Your Run"
          placeholder="Enter Name"
          value={runName}
          autoCapitalize="words"
          onChangeText={(name) => setRunName(name)}
          style={styles.input}
        />
        <Datepicker
          label="Date of You Run"
          placeholder="Pick Date"
          date={date}
          onSelect={(nextDate) => setDate(nextDate)}
          accessoryRight={CalendarIcon}
          style={styles.input}
        />
        <Input
          label="Total Miles You Ran"
          placeholder="Enter Miles"
          value={miles}
          keyboardType="numeric"
          maxLength={2}
          returnKeyType="done"
          onChangeText={(miles) => setMiles(miles)}
          style={styles.input}
        />
        <Input
          label="Total Minutes Ran"
          placeholder="Enter Time"
          value={lengthOfTime}
          keyboardType="numeric"
          maxLength={3}
          returnKeyType="done"
          onChangeText={(time) => setLengthOfTime(time)}
          style={styles.input}
        />

        <Select
          label="Select Your Charity"
          value={selectedCharity}
          selectedIndex={selectedIndex}
          onSelect={(index) => {
            setDropDown(index);
          }}
          style={styles.input}
        >
          <SelectItem title="American Cancer Society" />
          <SelectItem title="SPCA" />
          <SelectItem title="Habitat for Humanity" />
          <SelectItem title="Save the Children" />
        </Select>

        <Button
          style={styles.input}
          onPress={() => {
            {
              saveRunManually(
                runName,
                date,
                miles,
                lengthOfTime,
                selectedCharity
              ),
                navigation.navigate("Home");
            }
          }}
        >
          Save Run
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
});

export default LogRunScreen;
