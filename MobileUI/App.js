// import React from 'react';
// import {
//   StyleSheet,
//   ActivityIndicator,
//   AsyncStorage,
//   StatusBar,
//   Button,
//   TextInput,
//   View,
//   TouchableOpacity,
//   Text,
//
// } from 'react-native';
// import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
//
// const userInfo = {username:'admin', password:'12345'};
//
// class LogInScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {username: '', password:''}
//   }
//
//   static navigationOptions = {
//     header:null
//   };
//
//   render() {
//     return (
//       <View style ={styles.container}>
//         <Text style={styles.welcome}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           onChangeText={(username)=>this.setState({username})}
//           value={this.state.username}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           onChangeText={(password)=>this.setState({password})}
//           value={this.state.password}
//           secureTextEntry={true}
//         />
//         <TouchableOpacity
//           style={styles.btnEnter}
//           onPress={this._signin}
//         >
//           <Text style={styles.btnEnterText}>ENTER</Text>
//
//         </TouchableOpacity>
//
//       </View>
//     );
//   }
//
//   _signin = async () => {
//     if(userInfo.username===this.state.username && userInfo.password===this.state.password) {
//       await AsyncStorage.setItem('logged', '1');
//       this.props.navigation.navigate('App');
//     } else {
//       alert('Username or Password wrong!');
//     }
//   }
// }
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome Logged Page
//         </Text>
//         <Button onPress={tihs._logout} title="Logout"/>
//       </View>
//     );
//   }
//
//   _logout = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   }
// }
//
// class AuthLoadingScreen extends React.Compenent {
//   constructor(props){
//     super(props);
//     _this._loadDate();
//
//   }
//   render() {
//     return(
//       <View style={styles.container}>
//         <ActivityIndicator/>
//         <StatusBar barStyle="default"/>
//       </View>
//
//     );
//   }
//   _loadData = async () => {
//     const logged = await AsyncStorage.getItem('logged');
//     this.props.navigation.navigate(logged !== '1' ? 'Auth' : 'App');
//
//   }
// }
// const AppStack = createStackNavigator({Home: HomeScreen});
// const AuthStack = createStackNavigator({Login: LogInScreen});
//
// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AutoLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack
//     },{
//       initialRouteName:'Auth'
//     }
//   )
// );
//
// const styles = StyleSheet.creat({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   input: {
//     margin:15,
//     height:40,
//     padding:5,
//     fontSize:16,
//     borderBottomWidth:1,
//     borderBottomColor:'#428AF8'
//   },
//   btnEnter: {
//     justifyContent:'center',
//     flexDirection:'row',
//     backgroundColor:'#428AF8',
//     alignItems:'center',
//     marginLeft:15,
//     marginRight:15,
//     padding:10
//   },
//   btnEnterText: {
//     color:'#ffffff',
//     fontWeight:'700'
//   }
// });
// version2
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window')
//import Icon

export default class Example extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>WOLFBERRY</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underLineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underLineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   LogoContainer: {
     alignItems: 'center'
   },
   LogoText: {
     color: '#92ba64',
     fontSize: 20,
     fontWeight: '500',
     marginTop: 10,
     opacity: 0.5

   },
   input: {
     width: WIDTH - 55,
     height: 25,
     borderRadius: 45,
     fontSize: 16,
     paddingLeft: 45,
     backgroundColor: 'rgba(0,0,0,0.35)',
     color: 'rgba(255,255,255,0.7)',
     marginHorizontal: 25

   },
   inputContainer: {
     marginTop: 10
   },
   btnLogin: {
     width: WIDTH-55,
     height: 45,
     borderRadius: 25,
     backgroundColor: '#432577',
     justifyContent: 'center',
     marginTop: 20
   },
   text: {
     color: 'rgba(255,255,255,0.7)',
     fontSize: 16,
     textAlign: 'center'
   }

 });


// version 3 :(
// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';
// //import Constants from 'expo-constants';
//
// function Separator() {
//   return <View style={styles.separator} />;
// }
//
// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>
//           The title and onPress handler are required. It is recommended to set
//           accessibilityLabel to help make your app usable by everyone.
//         </Text>
//         <Button
//           title="Press me"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           Adjust the color in a way that looks standard on each platform. On
//           iOS, the color prop controls the color of the text. On Android, the
//           color adjusts the backgroud color of the button.
//         </Text>
//         <Button
//           title="Press me"
//           color="#f194ff"
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           All interaction for the component are disabled.
//         </Text>
//         <Button
//           title="Press me"
//           disabled
//           onPress={() => Alert.alert('Cannot press this one')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           This layout strategy lets the title define the width of the button.
//         </Text>
//         <View style={styles.fixToText}>
//           <Button
//             title="Left button"
//             onPress={() => Alert.alert('Left button pressed')}
//           />
//           <Button
//             title="Right button"
//             onPress={() => Alert.alert('Right button pressed')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
//
// export default App;
