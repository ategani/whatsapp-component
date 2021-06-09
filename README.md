# React Native WhatsApp Component
React Native component to open WhatsApp app with a preset message to a preset phone number


## Clone

Local clone:

```
git clone https://github.com/ategani/whatsapp-component.git
```

## Install all the dependencies

```
cd whatsapp-component
yarn install
```

## Start a local dev server for the app

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

## License

React Native Whatsapp Component is open source software [licensed as MIT](https://github.com/ategani/whatsapp-component/blob/main/LICENSE).
