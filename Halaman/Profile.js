import React, { Component } from 'react'
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const image = {
  uri:
    'https://img.freepik.com/free-photo/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures_1253-1375.jpg?size=626&ext=jpg',
};
export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {hover: false};
  }

  render() {
      
        const navigation = this.props;
    return (
      <ScrollView>
        <View>
          <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
              <View style={styles.fotoProfile}>
                <Image
                  source={{
                    uri:
                      'https://e7.pngegg.com/pngimages/1008/618/png-clipart-logo-design-brief-art-ramadan-word-logo-interior-design-services.png',
                  }}
                  style={styles.gambarLogo}
                />
                <Text style={styles.textNama}>Hasan</Text>
                <Text style={styles.textKelas}> XII - A</Text>
              </View>
            </ImageBackground>
          </View>
          <View>
            <View style={styles.containerBtnBawah}>
              <TouchableOpacity
                style={styles.buttonBawah}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text>Logout</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonBawah}
                onPress={() => alert('nanti aje, belum belajar gw')}>
                <Text>Need Help?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.8,
  },

  textNama: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    marginLeft: -22,
    color: '#f3ee',
    // textAlign: 'center',
    // backgroundColor: '#000000a0',
  },
  textKelas: {
    paddingTop: 8,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    // marginLeft: -22,
    color: '#726a95',

    // textAlign: 'center',
    // backgroundColor: '#000000a0',
  },
  gambarLogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  fotoProfile: {
    justifyContent: 'center',
    paddingLeft: Dimensions.get('window').width / 2.5,
  },

  containerBtnBawah: {
    paddingTop: 80,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor:'red'
  },
  buttonBawah: {
    height: 40,
    width: 120,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#2feaba',
    padding: 10,
  },
});
