import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

export default class Projeto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gasolina: '',
      alcool: '',
      resultado: '',
      modalVisible: false,
      calculo: '',
    };

    this.Calcular = this.Calcular.bind(this);
    this.FecharModal = this.FecharModal.bind(this);
  }

  Calcular() {
    let { gasolina, alcool, calculo} = this.state;

    if (gasolina === '' || alcool === '') {
      alert('Preencha todos os dados corretamente!');
      return;
    }

    gasolina = parseFloat(gasolina);
    alcool = parseFloat(alcool);

    calculo = alcool / gasolina;
    let resultado = '';

    if (calculo < 0.7) {
      resultado = 'Álcool';
    } else {
      resultado = 'Gasolina';
    }

    this.setState({ resultado, calculo, modalVisible: true });
  }

  FecharModal() {
    this.setState({
      modalVisible: false,
      gasolina: '',
      alcool: '',
      resultado: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Cabeçalho */}
        <View style={{ flex: 'column', alignItems: 'center', paddingTop: 50 }}>
          <Image
            source={require('./src/img/logo_gasolina.png')}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ color: 'red', paddingTop: 50, fontSize: 30 }}>
            Qual a melhor opção?
          </Text>
        </View>

        {/* Inputs */}
        <View style={{ padding: 10 }}>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui"
            underlineColorAndroid="transparent"
            value={this.state.alcool}
            onChangeText={(texto) => this.setState({ alcool: texto })}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui"
            underlineColorAndroid="transparent"
            value={this.state.gasolina}
            onChangeText={(texto) => this.setState({ gasolina: texto })}
            keyboardType="numeric"
          />
        </View>

        {/* Botão calcular */}
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <TouchableOpacity
            style={{ width: '100%', padding: 10 }}
            onPress={this.Calcular}
          >
            <Text style={styles.botao}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {/* Modal como página */}
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modalPage}>
            <Image
              source={require('./src/img/gas.png')} // coloque sua imagem
              style={{ width: 120, height: 120, marginBottom: 20 }}
              resizeMode="contain"
            />

            {/* Resultado */}
            <Text
              style={[
                styles.resultadoTitulo,
                {
                  color: this.state.resultado === 'Álcool' ? 'limegreen' : 'red',
                },
              ]}
            >
              Compensa usar {this.state.resultado}
            </Text>

            {/* Preços */}
            <Text style={styles.precoTitulo}>Com os preços:</Text>
            <Text style={styles.precoTexto}>
              Álcool: R$ {this.state.alcool}
            </Text>
            <Text style={styles.precoTexto}>
              Gasolina: R$ {this.state.gasolina}
            </Text>
            <Text style={styles.precoTexto}>
              Relacao(alcool/gasolina): {this.state.calculo}
            </Text>

            {/* Botão fechar */}
            <TouchableOpacity style={styles.botaoFechar} onPress={this.FecharModal}>
              <Text style={styles.textoBotao}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131212ff',
    flex: 1,
  },
  label: {
    color: 'white',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    height: 50,
    fontSize: 25,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalPage: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultadoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  precoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  precoTexto: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 5,
  },
  botaoFechar: {
    marginTop: 30,
    borderColor: 'red',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  textoBotao: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
