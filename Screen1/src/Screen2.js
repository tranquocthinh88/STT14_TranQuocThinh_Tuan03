import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button, Pressable} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen2() {
  return (
    <View style={styles.wrap}>
      <LinearGradient
      colors ={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style ={styles.linearGradient}
      >
      <View style={styles.container}>
        <View
          style={[styles.circle, {width: 170, height: 170}]}
        />
        <Text style={[styles.titleOn, styles.titleUp]}>GROW</Text>
        <Text style={styles.titleOn}>YOUR BUSINESS</Text>
        <Text style={styles.text}>We will help you to grow your business using online server</Text>
        <View style={styles.button}>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonClick}>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonClick}>SIGN UP</Text>
          </Pressable>
        </View>
        <Text style={styles.text1}>HOW WE WORK?</Text>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  linearGradient: {
    height: "100%",
  },
  circle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 15,
    borderColor: 'balck',
    marginTop: 20,
  },
  wrap: {
    flex: 1
  },
  titleOn: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  titleUp: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#E3C000',
    marginTop: 60,
    borderRadius: 1,
    width: 100,
    fontWeight: '300',
  },
  buttonClick:{
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    padding: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 300,
    textAlign: 'center',
    marginTop: 20,
  },
});
