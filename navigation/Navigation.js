import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../screen/Home';
import Pengajuan from '../screen/Pengajuan';
import Peminjaman from '../screen/Peminjaman';

const Navigation = createStackNavigator(
    {
        HomeScreen :Home,
        TransaksiPengajuan : Pengajuan,
        TransaksiPeminjaman : Peminjaman
    },
    {
        initialRouteName :"HomeScreen",
        headerMode :"none"
    }
)

export default createAppContainer(Navigation);