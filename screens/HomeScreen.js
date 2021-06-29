import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Avatar, ListItem, SocialIcon, Switch } from 'react-native-elements';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([]);

  let [fontsLoaded] = useFonts({
    'Yellowtail': require('../assets/fonts/Yellowtail-Regular.ttf')
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      setPosts(res.data);
    })
  }, [])

  function goToNike(reso) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Nike', 
          params: {
              nameSocial: reso,
              actionBadass: "roxer"
            }
        }
      ]
    })
  }
  // {truc: 'twitter'} quand je cliquerai sur twitter
  // {truc: 'facebook'} quand je cliquerai sur facebook

  if(!fontsLoaded) {
      return <View>Loading...</View>
  }
  else {
    return (
      <View style={styles.container}>
  
        <SocialIcon type='twitter' onPress={()=> goToNike('twitter')}/>
        <SocialIcon type='facebook' onPress={() => goToNike('facebook')}/>
  
  
        <FlatList
          data={posts}
  
          renderItem={({item})=> (
            <ListItem bottomDivider 
              onPress={() => navigation.reset('PostDetails',{
                post: item
              })}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <Switch value={false} />
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>)
          }
  
          keyExtractor={item => item.id.toString()}
        />
      
    </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontFamily: 'Yellowtail'
  }
});
