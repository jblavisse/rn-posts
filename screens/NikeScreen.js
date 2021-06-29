import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';


export default function NikeScreen({route}) {

    function callMe() {
        console.log("Coucou");
    }

    return (
        <View>
            <Text>Vous croivez que nous sachons
                 {route.params.actionBadass} {route.params.nameSocial}
            </Text>


            <TouchableOpacity onPress={callMe}>
                <View>
                    <Text>M'appeler au 06.69.69.69.69</Text>
                </View>
            </TouchableOpacity>

            
        </View>
    )
}
