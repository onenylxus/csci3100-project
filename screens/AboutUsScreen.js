// Import
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

// Export About us screen
export default function AboutUsScreen() {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            width: 128,
            height: 128,
            marginTop: '6%',
            borderRadius: 1024,
          }}
          source={require('../assets/icons/icon.png')}
        />
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            marginTop: 30,
            width: '75%',
          }}
        >
          We are 5 students from the Chinese University of Hong Kong (CUHK)
          minoring in Computer Science. A while ago we decided to launch this
          project CU There in order to practice our skills on software design
          and programming. In this project, we create an online discussion forum
          for CUHK members to exchange their ideas. We believe that CUHK is a
          place with cultural diversity and freedom of speech. Hence, in this
          application, users are free to express their own ideas with each
          other. Users can also receive likes and comments in their posts to
          gain popularity and get a chance to be displayed on the leaderboard.
          We hope you can find this application useful and entertaining, and
          most importantly, get to know more CUHK members.
        </Text>
      </View>
    </SafeAreaView>
  );
}
