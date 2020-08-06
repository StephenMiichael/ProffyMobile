import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text styles={styles.tittle}>
                Seja bem-vindo, {'\n'}
            </Text>
            <Text styles={styles.titleBold}>O que deseja fazer?</Text>
        </View>
    );
}

export default Landing;