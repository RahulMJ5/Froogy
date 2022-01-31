import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ScrollView
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        pass: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(val) == true ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
                
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                pass: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                pass: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = async (userName, pass) => {


        if ( data.username.length == 0 || data.pass.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        await fetch("http://api.tablefrog.com/api/auth/login",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body : JSON.stringify({
                email: userName,
                password : pass
            })
        }). then(res => res.json())
        .then(resData => {
        //   console.log("The data is " ,resData)
          if(resData?.user?.status == true){
              navigation.navigate('HomeScreen') 
          } else {
            alert("Please enter  valid credentials")
              
          }
          
        })

       
    }

    return (
      <ScrollView style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
        <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Text style={styles.text_header}>Nice to See you again</Text>
        </View>
        <View style={[styles.practice]}>
            <Text style={[styles.login]}>
                Login to continue
            </Text>
        
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Your E-mail Address</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please Provide a Valid Email</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={[styles.textForget]}>Forgot your password ?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.pass )}}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Log in</Text>
                </TouchableOpacity>

              
            </View>
        </Animatable.View>
        </View>
      </ScrollView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#233A57',
      padding:20
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    textForget: {
        textAlign:'right',
        color: '#009387',
        marginTop: moderateScale(15),

    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
         padding: 30,
        borderRadius:20
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // paddingHorizontal: 20,
        // paddingVertical: 30
    },
    practice: {
        flex:3,
        padding:20,
        backgroundColor: '#697288',
        borderRadius:20,
        
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        padding:10,
        fontSize: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    login: {
        color: "white",
        fontSize: 15,
        padding: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: moderateScale(10),
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: moderateScale(25)
    },
    signIn: {
        width: '100%',
        height: moderateScale(35),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black'
    },
    textSign: {
        fontSize: moderateScale(18),
        fontWeight: 'bold'
    }
  });
