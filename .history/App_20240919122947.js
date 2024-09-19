import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const logo = { uri: 'https://media.discordapp.net/attachments/1217845928237469762/1284278417071538217/chat.png?ex=66e60cfb&is=66e4bb7b&hm=392c1d71dc24e984662df29c9c6ba48440363841a0b1693038c01336df63707f&=&format=webp&quality=lossless&width=410&height=468' }; 
const loginImage = { uri: 'https://media.discordapp.net/attachments/1217845928237469762/1284277478009081936/login.png?ex=66e60c1b&is=66e4ba9b&hm=dd4e2d075b3fc08c23ceb2f11edf6b3de69ca690c834092dd82ad5ab72c0e844&=&format=webp&quality=lossless&width=510&height=468' };
const recupImage = { uri: 'https://media.discordapp.net/attachments/1217845928237469762/1284277477652303882/signup.png?ex=66e60c1b&is=66e4ba9b&hm=60ae93ff6d485266a3167f29dfe959ee83e1337c2ef3cee0eb20399cf45af7dc&=&format=webp&quality=lossless&width=422&height=468' };



const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo!</Text>
      
      <Button 
      
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
        style={styles.botao}
      />
      
      <View style={styles.spacing} />
      
      <Button 
      style={styles.botao}
        title="Esqueci minha senha" 
        onPress={() => navigation.navigate('RecuperarSenha')} 
      />
    </View>
  );
};






const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else if (email === 'usuario@exemplo.com' && password === '123456') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};







const RecuperarSenhaScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {
    if (email === '') {
      Alert.alert('Erro', 'Por favor, preencha o campo de email.');
    } else {
      
      Alert.alert('Sucesso', 'Um email de recuperação foi enviado.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={recupImage} style={styles.logo} />
      <Text style={styles.title}>Recuperar Senha</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <Button title="Recuperar Senha" onPress={handleRecuperarSenha} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  switchText: {
    marginTop: 12,
    color: 'blue',
    textAlign: 'center',
  },
});

export default App;
