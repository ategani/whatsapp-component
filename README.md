# React Native WhatsApp Component
React Native component to open WhatsApp app with a preset message to a preset phone number

## Clone

Local clone:

```
git clone https://github.com/ategani/whatsapp-component.git
```

## Install
Installing all the dependencies

```
cd whatsapp-component
yarn install
```

## Start
Starting a local dev server for the app

```
expo start
```

## Example

```jsx
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import WhatsApp from '../components/WhatsApp';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <WhatsApp />
      </View>
    </SafeAreaView>
  )
}
```

## Important
Go to [whatsapp-component/src/components/WhatsApp.js](https://github.com/ategani/whatsapp-component/blob/main/src/components/WhatsApp.js) and set the value of **phoneWithCountryCode** variable with a valid phone number
```jsx
let phoneWithCountryCode = ''; //5511912345678
```


## License

React Native Whatsapp Component is open source software [licensed as MIT](https://github.com/ategani/whatsapp-component/blob/main/LICENSE).
