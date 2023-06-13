import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateTodo from './src/screens/CreateTodo/';
import Home from './src/screens/Home/';
import Account from './src/screens/Account/';
import Edit from './src/screens/Edit/';
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#F5E7D9' }, //Cor de de fundo do topo
                    headerTintColor: '#323B1D', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Edit" component={Edit} options={{ title: 'Editar Atividade'}} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateTodo" component={CreateTodo} options={{ title: 'Cadastro de Atividade' }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Início"){
                        iconName = "home";
                    }else if(route.name == "Conta"){
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#FFCBAE", //Cor de ícones ativos
                tabBarInactiveTintColor: "#323B1D", //Cor de ícones inativos
                tabBarStyle: {backgroundColor: "#F5E7D9"}, //Cor de fund da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#323B1D", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: {backgroundColor: '#F5E7D9'} //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Conta" component={Account}/>

        </Tab.Navigator>
    );
}

