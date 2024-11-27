import React, {Fragment, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
  } from 'react-native';
export default function Login() {
   

    const [username, setUsername] = useState<string>('emilys');
    const [password, setPassword] = useState<string>('emilyspass');
    const [loading, setLoading] = useState<boolean>(false);


    return (
        <section>
            <View>
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
              />
            </View>

            <View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
              />
            </View>
        </section>
    );
  }