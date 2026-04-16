import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { criarPedido } from "../services/pedidoService";

export default function CadastroPedido() {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const salvar = async () => {
    try {
      await criarPedido({
        cliente,
        produto,
        quantidade: Number(quantidade),
        valor: Number(valor),
      });

      Alert.alert("Sucesso", "Pedido cadastrado!");

      setCliente("");
      setProduto("");
      setQuantidade("");
      setValor("");
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar pedido");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cliente"
        value={cliente}
        onChangeText={setCliente}
        style={styles.input}
      />
      <TextInput
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Salvar Pedido" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});