import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert,} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.native";
import theme from "../helpers/theme";


const CreateWaiterScreen = (props) => {
  const [name, setName] = React.useState("");

  const createAccount = () => {
    return fetch("http://localhost:3001/category/create", {
      method: "POST",
      body: JSON.stringify({
        // name: name,
      })
    }).then((res) => {
      Alert.alert("Cliente cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o cliente");
      console.log(err);
    })
  };

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.pageContent}>
          <View>
            <Text>Name</Text>
            <TextInput value={name} onChange={setName}/>
          </View>


          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              createAccount();
            }}
          >
            <Text>
              Criar nova conta
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={theme.button}
            onPress={() => {
              props.navigation.navigate("HomeRestaurantScreen");
            }}
          >
            <Text>
              Voltar
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

CreateWaiterScreen.navigationOptions = {
  title: "CreateCustomerScreen",
};

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    justifyContent: "center",
  },
});

CreateWaiterScreen.propTypes = {};

export default CreateWaiterScreen;