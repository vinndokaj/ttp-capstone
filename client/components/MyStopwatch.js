import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stopwatch } from "react-native-stopwatch-timer";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { toggleStopwatchStart, setIsStopwatchReset } from "../redux/actions";

export default function TimerScreen() {
  const dispatch = useDispatch();

  const { isStopwatchStart, isStopwatchReset } = useSelector(
    (state) => state.stopwatch
  );

  return (
    <View style={styles.sectionStyle}>
      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        reset={isStopwatchReset}
        options={options}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(toggleStopwatchStart());
        }}
      >
        <Text style={styles.buttonText}>
          {!isStopwatchStart ? "START" : "STOP"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setIsStopwatchReset(true));
        }}
      >
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    margin: 8,
  },
});

const options = {
  container: {
    backgroundColor: "tomato",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    margin: 5
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
