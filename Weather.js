import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: '안개',
    subtitle: '',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373b44', '#4286f4'],
    title: '번개',
    subtitle: '나가지 말고 집에서 일과를..',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#66a6ff'],
    title: '이슬비',
    subtitle: '우산 챙기기!',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00c6fb', '#005bea'],
    title: '비',
    subtitle: '우산 챙기기!',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7de2fc', '#89b6e5'],
    title: '눈',
    subtitle: '눈온다~',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89f7fe', '#55a6ff'],
    title: 'Atmosphere',
    subtitle: '',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ff7300', '#fef253'],
    title: '맑음',
    subtitle: '좋은 날씨',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#d7d2cc', '#304352'],
    title: '구름',
    subtitle: '일기예보 확인',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', '#d39d38'],
    title: '안개',
    subtitle: '',
  },
  dust: {
    iconName: 'weather-hail',
    gradient: ['#4da0b0', 'd39d38'],
    title: '먼지',
    subtitle: '마스크 필수!',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
