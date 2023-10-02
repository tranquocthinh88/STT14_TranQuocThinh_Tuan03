import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import index from "./index";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang chủ" component={index}/>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screen5" component={Screen5} />
      <Stack.Screen name="Screen6" component={Screen6} />
      <Stack.Screen name="Screen7" component={Screen7} />

      
    </Stack.Navigator>
  );
};

export { MainStackNavigator };