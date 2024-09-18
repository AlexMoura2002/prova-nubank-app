import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../assets/images/nubank-logo-branco.png')}></Image>
      </View>
      <Text style={styles.ola}>Olá, Felipe Melo</Text>

      <TouchableOpacity style={styles.btn}>

      <Text style={styles.btnProcurar}>Procurar...</Text>
      </TouchableOpacity>

      <View style={styles.cartaoCredito}>
      <TouchableOpacity style={styles.btn}>


      <Text style={styles.cartao}>Cartão de Crédito</Text>
      <Text style={styles.fatura}>Fatura</Text>
      <Text style={styles.valorFatura}>R$ 1.500,00</Text>

<Text style={styles.btnPagar}>Pagar Fatura</Text>
</TouchableOpacity>
      </View>

      <View style={styles.contaSaldo}>
      <Text style={styles.conta}>Conta</Text>
      <Text style={styles.saldo}>Saldo Disponível</Text>
      <Text style={styles.valorSaldo}>R$ 300,00</Text>
      </View>
    
    
      
    </View>
    
   
  );
}

const styles = StyleSheet. create({
  container: {
    backgroundColor: '#8B03BB',
    flex: 1,
  },
  containerLogo:{
    marginBottom: 30,
    paddingTop: 60,
    height: 100,
    alignItems: 'center',
  },
  logo:{
    width: 120,
    height: 50,
  },
  ola:{
    paddingLeft: 20,
    color: '#FFF'
  },

  btnProcurar:{
    textAlign: 'center',
    color: '#000',
    padding: 10,

  },

  btn: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  cartaoCredito:{
    backgroundColor: '#FFF',
    padding: 30,
    margin: 15,
    borderRadius: 10,
  },
  cartao:{
    color: '000',
    paddingLeft: 20,
    fontSize: 25,
    paddingTop: 30,
  },
  fatura:{
    color: '000',
    paddingLeft: 20,
    fontSize: 15,
  },
  valorFatura:{
    color: '#99CC',
    paddingLeft: 20,
    fontSize: 25,
  },
  btnPagar:{
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
contaSaldo:{
  backgroundColor: '#FFF',
  padding: 30,
  margin: 15,
  borderRadius: 10,
},

  conta:{
    color: '#000',
    paddingLeft: 20,
    fontSize: 25,
    paddingTop: 30,
  },
  saldo:{
    color: '#000',
    paddingLeft: 20,
    fontSize: 15,
  },
  valorSaldo:{
    color: '#000',
    paddingLeft: 20,
    fontSize: 25,
  },

}); 
