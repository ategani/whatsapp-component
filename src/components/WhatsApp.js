import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import logo from '../assets/images/whatsapp-logo-transparent.png';

const WhatsApp = () => {

  const openWhatsApp = () => {
    let msg = 'Mensagem padrão...';
    let phoneWithCountryCode = ''; //5511912345678

    let mobile = Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Opened');
        }).catch(() => {
          alert('Certifique-se de que o WhatsApp esteja instalado em seu dispositivo');
        });
      } else {
        alert('Por favor insira uma mensagem para enviar');
      }
    } else {
      alert('Por favor insira o número do celular');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
          Entre em contato também pelo WhatsApp:
          </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={openWhatsApp}>
          <Image
            style={styles.image}
            source={logo}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
  },

  image: {
    height: 200,
    width: 200
  }
});

export default WhatsApp;
