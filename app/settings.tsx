import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const settings = () => {
  const [username, setUsername] = React.useState('');
  const [repos, setRepos] = React.useState('');

  const fetchRepos = async (user: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRepos(data[randomIndex].name);
        } else {
          setRepos('No repos found');
        }
      });
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  return (

    <View style={styles.container}>
      <Text>settings</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginTop: 20, paddingLeft: 10 }}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your github user name "
      />

    <Button
      title="Fetch Repos"
      onPress={() => fetchRepos(username)}
    />

    <Text>{`Random Repo: ${repos}`}</Text>

    </View >
    
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