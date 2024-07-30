import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, FlatList, Button, TextInput} from 'react-native';
import { Modal } from "react-native";

const App = () =>  {
  const displayAlert = () =>{
    alert("this is modal")
  };

  // state for modal 
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //state for adding task
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
      setModalIsVisible(false);
    }
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <>
      <View style={styles.container}>
        {/* SECTION FOR THE HEADDING AND THE LIST TASKS */}
       <View>
         {/* THE HEADINGS */}
         <View style={styles.headingBg}>
            <Text style={styles.heading}>
              TO DO APP 
            </Text>
          </View>
          {/* ADDED LIST */}
          <View>
            <FlatList
              data={tasks}
              renderItem={({item})=>(
                <TouchableOpacity onPress={() => deleteTask(item.key)}>
                  <Text style={styles.listitem}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.key}
            />        
          </View>
       </View>
        {/* MODAL POP UP */}
        <View style={styles.modalBody}>
          <Modal visible={modalIsVisible}>
            <View style={styles.modalStyle}>
              {/* <View style={styles.imgBody}>
                <Image source={{uri: 'asset:/icon.jpg'}} style={{width: 100, height: 300}}/>
              </View> */}
              <View>
                <TextInput
                  keyboardType="default"
                  style={styles.addInput}
                  maxLength={16}
                  value={task}
                  onChangeText={setTask}
                />
              </View>

              <View style={styles.addSplit}>
                <TouchableOpacity onPress={addTask}>
                  <Text style={styles.buttStyle}>
                    ADD TASK
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalIsVisible(false)}>
                  <Text style={[styles.buttStyle, styles.cancelStyle]}>
                    CANCEL
                  </Text>
                </TouchableOpacity>
              </View>
            </View> 

          </Modal>
        </View>

        {/* TO ADD TASK BY BRINGING UP THE MODAL */}
        <View style={styles.centerBut}>
          <TouchableOpacity onPress={() => setModalIsVisible(true)}>
            <Text style={styles.addtaskbutton}>
              +
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
    
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#0f7ca5",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 40
  },
  headingBg:{
    backgroundColor: "gold"
  },
  heading: {
    backgroundColor: '#e5bc23',
    padding: 20,
    width: "fit-content",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  centerBut:{
    justifyContent: "center",
    alignItems: "center"
  },
  addtaskbutton:{
    backgroundColor: "#e5bc23",
    paddingTop: 5,
    paddingRight: 30,
    paddingBottom: 5,
    paddingLeft:30,
    borderRadius: 100,
    textAlign: "center",
    margin: 0,
    color: "white",
    fontSize: 50,
  },
  listitem:{
    color: "white",
    padding: 15,
    fontSize: 16,
    marginTop: 2,
    marginLeft: 12,
    marginBottom: 2,
    marginRight: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderLeftWidth: 5,
    borderLeftColor: "white",
    borderRadius: 5
  },
  modalBody:{
    justifyContent: "center"
  },
  modalStyle:{
    backgroundColor: "#0f7ca5",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imgBody:{
    backgroundColor: "green"
  },
  addInput:{
    borderWidth: 1,
    borderColor: "white",
    width: 300,
    padding: 10,
    color: "white",
    fontSize: 20
  },
  addSplit:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttStyle: {
    padding: 10,
    backgroundColor: "#e5bc23",
    color: "white",
    margin: 10,
    borderRadius: 5
  },
  cancelStyle:{
    backgroundColor: "gray"
  }
});
