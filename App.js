import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button, Alert, TouchableHighlight, Image } from 'react-native';

const Images = [
  {
    uri: "https://i.imgur.com/mxgtWKt.jpg",
    label: "Cat on a blue blanket"
  },

  {
    uri: "https://i.imgur.com/XCRnNWn.jpg",
    label: "A cat toy"
  },

  {
    uri: "https://i.imgur.com/dqQX1K0.jpg",
    label: "A close up of a dog"
  },

  {
    uri: "https://i.imgur.com/nZXbSbh.jpg",
    label: "Sheep next to a cat"
  },

  {
    uri: "https://i.imgur.com/mXCjefR.jpg",
    label: "Cat laying on the grass"
  },

  {
    uri: "https://i.imgur.com/AGyxRcc.jpg",
    label: "Bird sitting on a railing"
  }
];

export default class App extends React.Component {
  state = {
    index: 0,
    imageWidth: null
  }

  onImageLayout(event) {
    this.setState({
      imageWidth: event.nativeEvent.layout.width
    })
  }

  nextImage(event) {
    let newIndex = (this.state.index == Images.length-1) ? 0 : this.state.index + 1
    this.setState({
      index: newIndex
    })
  }

  previousImage(event) {
    let newIndex = (this.state.index == 0) ? Images.length -1 : this.state.index - 1
    this.setState({
      index: newIndex
    })
  }

  render() {
    const image = Images[this.state.index];

    return (
      <View style={styles.container}>
        <View style={styles.btnsContainer} >
          <Button onPress={this.previousImage.bind(this)} title="Previous" />
          <Button onPress={this.nextImage.bind(this)} title="Next" />
        </View>
        
          
        <TouchableHighlight onPress={() => { Alert.alert('Awesome!')}} style={styles.image} >
          <Image source={{ uri: image.uri }}
            style={styles.image}
            onLayout={this.onImageLayout.bind(this)} >
          </Image>
        </TouchableHighlight>
          

        <View style={styles.empty} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  btnsContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35
  },
  image: {
    flex: 4,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320
  },
  empty: {
    flex: 1
  }
});
