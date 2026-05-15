import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image } from 'react-native';
import { styles } from '../style';

type AppbarViewProps = {
  subtitle?: string;
};

const AppbarView = ({ subtitle }: AppbarViewProps) => {
  return (
    <Appbar.Header elevated style={{backgroundColor: 'white'}} >
      {/* <Appbar.BackAction onPress={() => navigation.goBack()} />
       */}
      <Appbar.Action icon="menu" onPress={() =>{}} />
       
      {/* <Appbar.Content title={'InvesQ'} subtitle={subtitle} titleStyle={{alignSelf: 'center'}} /> */}
      <Appbar.Content
      
        title={
          <Image
            source={require('../../../assets/images/title_logo.png')}
            style={{
              width: 120,
              height: 40,
              resizeMode: 'contain',
              alignSelf: 'center'
            }}
            
          />
        
        }
        
      />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppbarView;
