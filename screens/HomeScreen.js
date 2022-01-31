 import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar,SafeAreaView, Alert, Modal, Pressable  , ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import { Appbar } from 'react-native-paper';



const HomeScreen = ({ navigation }) => {

  const [shouldShow, setshouldShow] = useState(false);

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    
   
    <ScrollView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#C4C4C4" }}>
    <Appbar.Action  icon={require('../assets/logo.png')} />
    <Appbar.Content title="Table Frog"/>
    <Appbar.Content title="Log Out"   onPress={() => navigation.navigate('SignInScreen') } />
  </Appbar.Header>
      <View style={styles.text}>
        <Text style={styles.text1}>
          ORDER - 22/01/2021
        </Text>
        <FontAwesome
          name="calendar"
          color={colors.text}
          size={20}
        />
      </View>
      <View style={styles.container1}>
        <View style={styles.circle}>
          <Text style={styles.table}>Table</Text>
          <Text style={styles.table}>1</Text>
        </View>
        <View> 
          <Text st vyle={styles.order}>Order Number</Text>
          <Text style={styles.number}>0023</Text>
        </View>
        <TouchableOpacity style={styles.details}
          onPress={() => setshouldShow(!shouldShow)}>
          <Text style={styles.cancel1}>
            Details

          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel}>
          <Text style={styles.cancel1}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accept} >
          <Text style={styles.cancel1}>
            Accept
          </Text>
        </TouchableOpacity>


      </View>


    


      {
        shouldShow ? (
          <View style={styles.container}>
            <Text style={styles.table}>Date/Time : 22/12/2021 20:10</Text>
            <View style={styles.container2}>
              <View>
                <Text style={styles.order}>Type</Text>
                <Text style={styles.number}>Dine-in</Text>
              </View>
              <View>
                <Text style={styles.table}>Order Number</Text>
                <Text style={styles.number}>0023</Text>
              </View>
              <View>
                <Text style={styles.table}>Table No</Text>
                <Text style={styles.number}>1</Text>
              </View>
              <View>
                <Text style={styles.table}>Pay</Text>
                <Text style={styles.number}>23 Zi</Text>
              </View>
            </View>
            <View style={styles.container4} >
              <View style={styles.container3}>
                <View>
                  <Text style={styles.table}>Quantity</Text>
                  <Text style={styles.number1}>1</Text>

                </View>
                <View>
                  <Text style={styles.table}>Dish</Text>
                  <Text style={styles.number1}>Frisco Burger</Text>
                </View>
                <View>
                  <Text style={styles.table}>Price</Text>
                  <Text style={styles.number1}>25 Zi</Text>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <Text style={styles.table1}>Add-on :</Text>
                <Text style={styles.number1}>Remove ingredients : Salat, ADD : Cheddar, Halloumi</Text>
              </View>
              <View>
                <Text style={styles.total}>
                  Total :  923 PLN
                </Text>
              </View>
              <View>
                <Text style={styles.number1}>
                  Comments : Add ingredients : Salat, ADD : Ser C00heddar, Halloumi,
                </Text>
              </View>

              <FontAwesome
                onPress={() => setshouldShow(!shouldShow)}
                style={styles.close}
                name="angle-up"
                color={colors.text}
                size={25}
              />
            </View>
            <View>
              
            </View>
            
          </View>
        ) : null
      }
     
    </ScrollView>
    
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#C4C4C4",
    borderRadius: 25,
    margin: "2%"
  },
  container4: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#F6F5F5",
    margin: "3%",
    borderRadius: 6,
    borderBottomWidth: 6,
    borderBottomColor: "#C4C4C4"
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: "3%"
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: "#F6F5F5",
    justifyContent: 'space-between',
    padding: "3%",
    borderRadius: 6
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  text1: {
    margin: "3%",
    padding: "2%",
    fontSize: 18,
    fontWeight: 'bold'
  },
  circle: {
    margin: "30%",
    padding: "1%",
    backgroundColor: "white",
    margin: "3%",
    width: "15%",
    borderRadius: 48 / 2
  },
  table: {
    // padding: "3%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  table1: {
    paddingLeft: "5%",
    fontSize: 16,
    fontWeight: "bold"
  },
  order: {
    fontSize: 15,
    textAlign: "center",
    paddingLeft: "1%",
    fontWeight: "bold"
  },
  number: {
    fontSize: 15,
    textAlign: "center",
  },
  number1: {
    fontSize: 12,
    padding: "2%",
    textAlign: "center",
  },
  details: {
    marginLeft: "3%",
    backgroundColor: "blue",
    borderRadius: 8
  },
  cancel: {
    margin: "1%",
    backgroundColor: "red",
    borderRadius: 8
  },
  accept: {
    backgroundColor: "green",
    borderRadius: 8
  },
  cancel1: {
    color: "white",
    padding: "1%",
    fontSize: 12
  },
  contentWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4"
  },
  total: {
    textAlign: "right",
    fontSize: 15,
    margin: "2%",
    fontWeight: 'bold',

  },
  close: {
    textAlign: "center"
  },
  textStyle : {
    textAlign: "center"

  }
});
