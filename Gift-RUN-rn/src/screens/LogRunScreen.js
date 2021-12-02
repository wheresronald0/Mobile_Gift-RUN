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
  const [runName, setRunName] = useState("");
  const [date, setDate] = React.useState(new Date());
  const [miles, setMiles] = useState("");
  const [lengthOfTime, setLengthOfTime] = useState("");
  const [selectedCharity, setSelectedCharity] = React.useState(
    new IndexPath(0)
  );

  const { state, saveRunManually } = useContext(RunDataContext);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  console.log(state);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Log a Run"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ flex: 1 }}>
        <Input
          label="Name of Your Run"
          placeholder="Enter Name"
          value={runName}
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
          onChangeText={(miles) => setMiles(miles)}
          style={styles.input}
        />
        <Input
          label="Total Run Time"
          placeholder="Enter Time"
          value={lengthOfTime}
          onChangeText={(time) => setLengthOfTime(time)}
          style={styles.input}
        />
        <Select
          label="Select Your Charity"
          selectedCharity={selectedCharity}
          onSelect={(index) => setSelectedCharity(index)}
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
            saveRunManually(runName);
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
