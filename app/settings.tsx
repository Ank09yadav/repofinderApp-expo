import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const settings = () => {
    const [username, setUsername] = React.useState('');


  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginTop: 20, paddingLeft: 10 }}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your github user name "
      />
    </View>
  )
}

export default settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})