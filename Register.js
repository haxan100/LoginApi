import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function Register({route, navigation}) {
  //   console.log(route, navigation);
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [count, setCount] = useState(0);
  const onPress = () => alert('nanti aje, belum belajar gw');
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
            <Text style={styles.textLabel}>Nama Siswa</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Masukan Nama Siswa"
              //   value={value}
            />
          </View>

          <View style={styles.containerText}>
            <Text style={styles.textLabel}>NISN</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Masukan NISN"
              //   value={value}
            />
          </View>

          <View style={styles.containerText}>
            <Text style={styles.textLabel}>Username / Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Masukan Username Atau Email"
              //   value={value}
            />
          </View>
          <View style={styles.containerTextPW}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Masukan Passwords"
              secureTextEntry={true}
              //   value={value}
            />
          </View>
          <View style={styles.containerButton}>
            <View>
              <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.containerBtnBawah}>
          <TouchableOpacity
            style={styles.buttonBawah}
            onPress={() => navigation.navigate('Login')}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBawah} onPress={onPress}>
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
