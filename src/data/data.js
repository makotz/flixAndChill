const DARE_DEVIL = require('../../assets/images/dare-devil.jpeg');
const HOUSE_OF_CARDS = require('../../assets/images/house-of-cards.jpeg');
const LUKE_CAGE = require('../../assets/images/luke-cage.jpeg');
const ORANGE_IS_THE_NEW_BLACK = require('../../assets/images/orange-is-the-new-black.jpeg');
const STRANGER_THINGS = require('../../assets/images/stranger-things.jpeg');
const API_KEY = require('../data/config_keys.js');
const API = 'https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY.API_KEY;

import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class ShowData extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){
          console.log("dataSource is..."+ responseJson.results);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.release_date}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}



const SHOWS = [
  {
    title: 'Daredevil',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: DARE_DEVIL,
  },
  {
    title: 'House Of Cards',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: HOUSE_OF_CARDS,
  },
  {
    title: 'Luke Cage',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: LUKE_CAGE,
  },
  {
    title: 'Orange Is The New Black',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: ORANGE_IS_THE_NEW_BLACK,
  },
  {
    title: 'Stranger Things',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: STRANGER_THINGS,
  },
  {
    title: 'Daredevil',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: DARE_DEVIL,
  },
  {
    title: 'House Of Cards',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: HOUSE_OF_CARDS,
  },
  {
    title: 'Luke Cage',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: LUKE_CAGE,
  },
  {
    title: 'Orange Is The New Black',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: ORANGE_IS_THE_NEW_BLACK,
  },
  {
    title: 'StrangerThings',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: STRANGER_THINGS,
  },
  {
    title: 'Dare Devil',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: DARE_DEVIL,
  },
  {
    title: 'House Of Cards',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: HOUSE_OF_CARDS,
  },
  {
    title: 'LukeCage',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: LUKE_CAGE,
  },
  {
    title: 'Orange Is TheNewBlack',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: ORANGE_IS_THE_NEW_BLACK,
  },
  {
    title: 'Stranger Things',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving a secret experiment, terrify supernatural forces, and one strange little girl',
    starring: 'Winona Ryder, David Harbour, Mathew Modine',
    creator: 'The Duffer Brothers',
    image: STRANGER_THINGS,
  },
];

// export default SHOWS;
