/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const userName = "리얼리티어"

  return (
    <View style={{flex:1}}>
      <View style={styles.appBar}>
          <View style={{
            flex:1.5,
            alignItems:"center",
          }}><Text style={styles.appBarUserNameText}>{userName} 님</Text></View>
          <View style={{flex:1.5}}></View>
          <View style={{
            flex:1,
            flexDirection:"row",
            alignItems:"flex-end",
            }}>
              <View style={styles.appBarIcon}>
                <IconFontAwesome5 name="user-friends" size={20} color="white"/>
              </View>
              <View style={styles.appBarIcon}>
                <IconFontAwesome5 name="battle-net" size={20} color="white"/>
              </View>
              <View style={styles.appBarIcon}>
                <IconMaterialCommunityIcons name="bell-alert-outline" size={20} color="white"/>
              </View>
            </View>
        </View>


      <View style={styles.mainView}>
            <View style={styles.mainViewRow}>
              <TouchableOpacity 
                key={"a"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/bowling.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>볼링</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                key={"b"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/soccer.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>축구</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainViewRow}>
              <TouchableOpacity 
                key={"c"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/basketball.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>농구</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                key={"d"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/baseball.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>야구</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainViewRow}>
              <TouchableOpacity 
                key={"e"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/tennis.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>테니스</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                key={"f"} 
                onPress={()=>{}} 
                style={styles.mainViewButton}>
                <Image source={require("./img/golf.png")} style={{flex:3}}/>
                <Text style={styles.mainViewButtonText}>골프</Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  appBar: {
    flex:1,
    backgroundColor:"grey",
    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
    flexDirection:"row",
    alignItems:"center",
    },
    appBarUserNameText: {
      fontSize:20,
      fontWeight:"500",
      color:"white",
    },
    appBarIcon: {
      alignItems:"center",
      margin:5
    },
    mainView: {
      flex:12,
      flexDirection:"column",
      padding:50
    },
    mainViewRow: {
      flex:1, 
      flexDirection:"row",
      margin:10
    },
    mainViewButton: {
      flex:1,
      flexDirection:"column",
      padding:10,
      alignItems:"center"
    },
    mainViewButtonText: {
      flex:1, 
      fontSize:24, 
      fontWeight:"500"
    },
});

export default App;
