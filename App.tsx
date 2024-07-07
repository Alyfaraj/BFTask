import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Navigation from "./src/navigation";
import { Splash } from "./src/screens";

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1300);
  }, []);

  if (show) return <Splash />;

  return (
    <View style={{ flex: 1 }} >
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
