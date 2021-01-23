import React ,{useState,Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import qs from 'qs';

// import Profile from './Halaman/Profile';

import * as axios from 'axios';

export default function Login({route, navigation}) {

  const [state, setState] = useState({
    username: '',
    password: '',
  });
//   console.log(route, navigation);
   const [username, setUsername] = React.useState('');   
   const [password, setPassword] = React.useState('');   

  const onLogin = () => {
    
    var pw = password;
    var nama = username;
    const user = {
      username: nama,
      password: pw,
    };
    
    if(pw=='' && nama==''){
        alert(`Mohon Isi Username & Password`);
    }else {
      axios
        .post(
          'http://192.168.43.121/raportonline/login/login_proses',
          qs.stringify(user),
        )
        .then(function (response) {
          var data = response.data;
          // console.log(data);
          if (data.status) {
            alert(`Selamat datang...`);
            // navigation.navigate('');
            navigation.navigate('Profile');
          } else {
            alert(`${data.message}`);
          }
        })
        .catch(function (error) {
          console.warn(error);
          // console.log(error);
        });
    }
    // var pw = password;
    // var nama = username;
    
    // if (pw == 'password' && nama == 'Hasan') {
    //   alert(`Selamat Datang` + nama);
    // } else if (pw != 'password' && nama == 'Hasan') {
    //   alert(`Password salah!`);
    // } else {
    //   alert('User Tidak Terdaftar');
    // }
  };

  return (
    <ScrollView style={styles.containerAll}>
      <View>
        <View style={styles.gambarContainer}>
          <Image
            source={{
              uri:
                'https://e7.pngegg.com/pngimages/1008/618/png-clipart-logo-design-brief-art-ramadan-word-logo-interior-design-services.png',
            }}
            style={styles.gambarLogo}
          />
        </View>
        <View style={styles.containerTextInputAndText}>
          <View style={styles.containerText}>
            <Text style={styles.textLabel}>Username / Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan Username Atau Email"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
          <View style={styles.containerTextPW}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              placeholder="Masukan Password"
              secureTextEntry={true}
              value={password}
            />
          </View>
          <View style={styles.containerButton}>
            <View>
              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.containerBtnBawah}>
          <TouchableOpacity
            style={styles.buttonBawah}
            onPress={() => navigation.navigate('Register')}>
            <Text>Register Here</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonBawah}
            onPress={  () => alert('nanti aje, belum belajar gw')}>
            <Text>Need Help?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    backgroundColor: '#ffeeffaa',
    // justifyContent:'center',
  },
  gambarContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  gambarLogo: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 80,
  },
  containerTextPW: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 80,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    width: 260,
    borderRadius: 20,
    borderColor: '#2febeb',
    borderWidth: 1,
    paddingLeft: 20,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  containerTextInputAndText: {
    flex: 1,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 80,
    marginBottom: 10,
  },

  button: {
    height: 40,
    width: 260,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#2febeb',
    padding: 10,
  },
  containerBtnBawah: {
    paddingTop: 80,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
