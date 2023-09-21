import { StyleSheet,
           Text,
           View ,
           Image,
           ScrollView,
           ImageBackground,
           StatusBar,
           
           } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
 

// déclations des variables
const headerImage = require('./assets/images/header.jpg');
const notification = require('./assets/images/Notification.png');
const banner = require('./assets/images/BG.png');
const model = require('./assets/images/model.png');








const App = () => {
  return (
<>
   
         <SafeAreaView style={styles.container}  >
             <Header />
             <ScrollView style={styles.screen}  >
                <Banner/>
             </ScrollView>
        </SafeAreaView>

        </>
   
  )
}

export default App

// Header

const Header = () => { 

  return(
    <View style={styles.header}>
      <ImageContainer image={headerImage} />
        <HeaderTitle/>
        <ImageContainer image={notification} height={'50%'} width={'50%'}/>
      </View>)

  }


// Bannière

const Banner = () => {  
      return  (
            <ImageBackground style={styles.banner}  source={banner} >
              <View style={{ flex : 1 , justifyContent : 'center'}}  >
                <Text>limited offer</Text>
                <Text>30% Discount</Text>
                <Text>Flash Sales</Text>


              </View>
              <View style={{ flex : 1 }}  >
                <Image  
                  source={model}
                   height={100}
                   width={100}
                   resizeMode='contain'
                   style={ { position  : 'absolute', bottom : 0, zIndex : 1 }}  />


              </View>

            </ImageBackground> 
            
            )  
 } ;

// Image Container
 const ImageContainer = ({ image, height = '100%'  , width = '100%'}) => { 

return(
    <View style={styles.imageContainer}  >
        <Image
             source={image}
             style={ [styles.image,   {height,width } ] }
             resizeMode='contain'
             
              />
    </View>
)

  };

// Header titre

const HeaderTitle = () => { 

  return(

    <View style={styles.title}>

      <Text style={styles.bigTitle} >Hi, Jane</Text>
      <Text style={styles.smallTitle}  >Aug 12, 2021</Text>

    </View>

  )

 }

const styles = StyleSheet.create({

    container : { flex :1},
    header : { padding : 15 , flexDirection : 'row', alignItems : 'center'},
    //  borderWidth : 1 ,
    title : { paddingHorizontal : 10 ,  flex : 1 , justifyContent : 'center'},
    //borderWidth: 1 ,
    bigTitle : { fontSize : 16, fontFamily : 'Poppins-Medium'  },
    smallTitle : { fontSize : 10, fontFamily : 'Poppins-Regular', opacity : 0.6  },
    image : { height : '100%' , width : '100%'  } ,

    banner : { 
      padding : 10 ,
      flex : 1 ,
      resizeMode : 'contain',
      borderRadius : 20,
      // overflow : 'hidden' ,
      flexDirection : 'row',


    
    
    }, 

      //      borderWidth : 1 ,
    
    imageContainer : {
       height : 50,
       width : 50 ,
       borderRadius: 25 ,
       overflow : 'hidden',
      justifyContent : 'center',
      alignItems : 'center' ,
      },

      screen : {  margin : '3%' , flex : 1 },

});


