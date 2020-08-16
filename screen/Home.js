import React from 'react';
import { Container, Header, Content, View, Text} from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Iconawe from "react-native-vector-icons/FontAwesome5";


const {height, width} = Dimensions.get("window");
console.log(height,width);
const Home = ({navigation}) => {
    console.log(navigation);
    return (

        <Container>
            <Header style={{ height:height * 0.20, width:width,backgroundColor:"red",elevation:0,alignItems:"center"}}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>Koperasi Mandiri</Text>
            </Header>
            <Content style={{marginTop:80}}>
            <View style={{flexDirection:"column"}}>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Icon name="account-circle" size={60}></Icon></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {navigation.navigate("")}}><Text >Akun Saya</Text></TouchableOpacity>
                                </View>
                            </View>
                            
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center" , flex:2, alignItems:"center"}}>
                                    <Text ><Icon name="file-document" size={60}></Icon></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPengajuan")}}><Text >Transaksi Pengajuan </Text></TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Iconawe name="money-bill" size={60}></Iconawe></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPeminjaman")}}><Text >Transaksi Peminjaman </Text></TouchableOpacity>
                                </View>
                            </View>

                    </View>
            </Content>
        </Container>
    )
}

export default Home;