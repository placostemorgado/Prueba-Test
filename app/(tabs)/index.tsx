import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Provider } from 'react-redux';
import Login from '@/components/Login';


export default function HomeScreen() {
  return (
    <div><Login /></div>
  );
}