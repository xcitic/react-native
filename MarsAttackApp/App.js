import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
} from 'react-native';

import Enemy from './app/components/Enemy';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movePlayerVal: new Animated.Value(40),
      playerSide: 'left',
      points: 0,

      moveEnemyval: new Animated.Value(0),
      enemyStartposX: 0,
      enemySide: 'left',
      enemySpeed: 4200,

      gameOver: false,
    };
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Image style={styles.container} source={require('./app/img/bg.png')} />

        <View style={{ flex: 1, right: 175, marginTop: 80, position: 'absolute' }}>
            <View style={styles.points}>
              <Text style={{ fontWeight: 'bold', fontSize: 40 }}>{this.state.points}</Text>
            </View>
        </View>

          <View style={styles.animatedImage}>
            <Animated.Image source={require('./app/img/marsian.png')}
              style = {{
                position: 'absolute',
                height: 150,
                width: 100,
                zIndex: 1,
                bottom: 50,
                resizeMode: 'contain',
                transform: [ { translateX: this.state.movePlayerVal }]
              }}>
            </Animated.Image>
          </View>
          <View style={{ flex:1, position: 'absolute'}}>
            <Enemy enemyImg={require('./app/img/trump.png')}
              enemyStartposX={this.state.enemyStartposX}
              moveEnemyval={this.state.moveEnemyval} />

          </View>

          <View style={styles.controls}>
            <Text style={styles.left} onPress={ () => this.movePlayer('left') }> {'<'} </Text>
            <Text style={styles.right} onPress={ () => this.movePlayer('right') }> {'>'}</Text>
          </View>
      </View>
    );
  }

  movePlayer(direction) {

    // Move player right
    if (direction == 'right') {
      this.setState({ playerSide: 'right' });

      Animated.spring(
        this.state.movePlayerVal,
        {
          toValue: Dimensions.get('window').width - 140,
          tension: 60,
        }
      ).start();

    } else if (direction == 'left') {
      this.setState({ playerSide: 'left' });

      Animated.spring(
        this.state.movePlayerVal,
        {
          toValue: 40,
          tension: 60,
        }
      ).start();
    }
  }

  componentDidMount() {
    this.animateEnemy();
  }

  // Define the movement of the enemy
  animateEnemy() {
    this.state.moveEnemyval.setValue(-100);
    var windhowHeight = Dimensions.get('window').height;

    var r = Math.floor(Math.random() * 2) + 1;

    if (r == 2) {
      r = 40;
      this.setState({ enemySide: 'left' });
    } else {
      r = Dimensions.get('window').width - 140;
      this.setState({ enemySide: 'right' });
    }

    this.setState({ enemyStartposX: r});

    // Interval to check for collision each 50 ms
    var refreshIntervalId;
    refreshIntervalId = setInterval( () => {

      // collision logic
      // If enemy collides with player then game over
      if (this.state.moveEnemyval._value > windhowHeight - 280
          && this.state.moveEnemyval._value < windhowHeight - 180
          && this.state.playerSide == this.state.enemySide) {
            clearInterval(refreshIntervalId)
            this.setState({ gameOver: true});
            this.gameOver();
          }
    }, 50);

    // Increase enemy speed every 20th second
    setInterval(() => {
      this.setState({ enemySpeed: this.state.enemySpeed - 50 })
    }, 20000);

    // Animate the enemy
    Animated.timing(
      this.state.moveEnemyval,
      {
        toValue: Dimensions.get('window').height,
          duration: this.state.enemySpeed,
      }
    ).start(event => {
      // If no collision, send more enemies
      if (event.finished && this.state.gameOver == false) {
        clearInterval(refreshIntervalId);
        this.setState({ points: ++this.state.points });
        this.animateEnemy();
      }
    });
  }

  gameOver() {
    alert('Game Over!');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    position: 'relative',
    resizeMode: 'cover',
  },
  points: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    bottom: 10,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  left: {
    flex: 1,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});
