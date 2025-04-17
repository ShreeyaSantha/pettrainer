import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';


const Header = () => {
  return (
    <View style = {headerstyle.outer}>
      <View style = {headerstyle.container}>
        <Image source = {require('../../assets/images/iconp.png')} style = {{width: 50, height: 50}} />
        <Title name = 'Shreeya'/>
      </View>
      <Image source = {require('../../assets/images/iconp.png')} style = {{width: 30, height: 30}} />
    </View>
  );
}

const Title = (props) => {
  const [now] = useState(new Date());
  if (now.getHours() < 12) {
    return(
    <View style = {headerstyle.intro}>
      <Text style = {headerstyle.title}>Good Morning,</Text>
      <Text style = {headerstyle.subtitle}>{props.name}</Text>
    </View>);
  } else if (now.getHours() < 18) {
    return(
      <View style = {headerstyle.intro}>
        <Text style = {headerstyle.title}>Good Afternoon,</Text>
        <Text style = {headerstyle.subtitle}>{props.name}</Text>
      </View>);
  } else {
    return(
      <View style = {headerstyle.intro}>
        <Text style = {headerstyle.title}>Good Evening,</Text>
        <Text style = {headerstyle.subtitle}>{props.name}</Text>
      </View>);
  }
}


const ProgressBar = (props) => {

  return (
  <View style = {progressstyle.container}>
    <View style = {progressstyle.box}></View>
  </View>
  )

}
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProgressBar />
      <Text>Open up App.js to start working on your app Shreeya!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



//STYLES 

const headerstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  outer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingEnd: 20,
    paddingTop: 20,
    paddingBottom: 10,
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',  
},
  image: {
    width: 40,
    height: 40,
  },
  intro: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  subtitle: {
    fontSize: 15,
    paddingTop: 4,
    color: '#000',
  }
});

const progressstyle = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#4CAF50',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingTop: 50,
  },
});
