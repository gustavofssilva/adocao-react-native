import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login com:', email, password);
  };

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de registro
    console.log('Registrar com:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Cadastre-se'}</Text>
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
      <Button
        title={isLogin ? 'Entrar' : 'Registrar'}
        onPress={isLogin ? handleLogin : handleRegister}
      />
      <Text style={styles.switchText} onPress={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Ainda não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
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
