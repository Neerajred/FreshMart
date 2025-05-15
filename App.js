import {View , Text} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: "plum", paddingTop: 33}}>
      <Text style={{fontSize: 20, textAlign: "center", color: "white"}}>Hello World</Text>
    </View>
  );
}