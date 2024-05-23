import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicioCida from '../src/InicioCida';
import Login from '../src/Login';
import Home from '../src/Home';
import Beneficios from '../src/Beneficios';
import IdentificacaoFamilia from '../src/IdentificaoDaFamilia';
import Cadastro from '../src/CadastroUnico';
import PAIFAgenda from '../src/PAIFAgenda';
import PesquisarUnidades from '../src/PesquisarUnidades';
import Unidades1 from '../src/PesquisarUnidades1';
import Unidades2 from '../src/PesquisarUnidades2';
import Sobre from '../src/Sobre';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="InicioCida">
      <Stack.Screen name="InicioCida" component={InicioCida} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Beneficios" component={Beneficios} />
      <Stack.Screen name="IdentificacaoFamilia" component={IdentificacaoFamilia} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="PAIFAgenda" component={PAIFAgenda} />
      <Stack.Screen name="PesquisarUnidades" component={PesquisarUnidades} />
      <Stack.Screen name="Unidades1" component={Unidades1} />
      <Stack.Screen name="Unidades2" component={Unidades2} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
};

export default App;
