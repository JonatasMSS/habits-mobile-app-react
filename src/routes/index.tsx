import { View } from "react-native";

import {NavigationContainer} from '@react-navigation/native';


import { AppRoutes } from "./app.routes";

export function Routes(){
    return (
        <View className="flex-1 bg-background"> 
            {/* //Manter o background escuro depois de um transição*/}
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </View>
    );
}