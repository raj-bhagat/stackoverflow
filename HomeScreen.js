import React from 'react';
import { View, Text , StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const { width } = Dimensions.get('window'); 
const HomeScreen = ({ navigation }) => {
	const menu =[
			{ name: 'Buy Medicine', key: '1', screen: 'Prescription', image: "shopping-cart" },
			{ name: 'My Address', key: '2', screen: 'Prescription', image: "home" },
			{ name: 'Reminder', key: '3', screen: 'Prescription', image: "alarm" },
			{ name: 'Favourites', key: '4', screen: 'Prescription', image: "favorite" },
			];
  const img=[
    {uri:'../../assets/image.png', key: '1'},
    {uri:'../../assets/image.png', key: '2'},
    {uri:'../../assets/image.png', key: '3'}
  ];

	return(
		<SafeAreaView style={styles.container} forceInset={{ top: 'always' }} >
			<Image
        style={styles.tinyLogo}
        source={require('../../assets/image.png')}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          data={img}
          renderItem={({ item }) =>{
            return(
              <Image style={{width, height: 300, backgroundColor:"#f0ffff",flex: 1 }} source={{uri:item.uri}}/>
            )
          } }
        />
      </View>
      <FlatList
	      data={menu}
	      renderItem={({ item }) => {
	      	return (
            <TouchableOpacity  onPress={() => {
              navigation.navigate(item.screen)
            }}
            style={styles.GridViewContainer} >
            <Animatable.View
              animation="fadeIn"
            >
	      			<MaterialIcons style={{alignSelf: 'center',}} name={item.image} size={24} color="#009387" />
		      		<Text style={styles.GridViewTextLayout} >{item.name}</Text>	      		
            </Animatable.View>
            </TouchableOpacity>
	      	);
	      }}
	      numColumns={2}
	      keyExtractor={ menu => menu.key }
      />
		</SafeAreaView>
		);
};


const styles = StyleSheet.create({
	tinyLogo: {
  	width: 200,
    height: 89,
    alignSelf: 'center',
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 200,
   margin: 5,
   backgroundColor: '#f0ffff',
   borderRadius: 20,
   elevation: 10,
	},
 	GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#009387',
   padding: 10,
 }
});

export default HomeScreen;