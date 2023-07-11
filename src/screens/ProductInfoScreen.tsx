import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Product } from "../types/Product";
interface Props {
  name: string;
  detail: string;
  prodcut: Product;
}
const ProductInfoScreen: React.FC<Props> = ({ name, detail, prodcut }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={openModal}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.floatingScreen}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Informacion</Text>
              <Text style={styles.subtitle}>medidas</Text>
              <View style={styles.containerInfo}>
                <Text style={styles.key}>Talla</Text>
                <Text style={styles.value}>{prodcut.size}</Text>
              </View>
              <Text style={styles.subtitle}>proveedor</Text>
              <View style={styles.containerInfo}>
                <Text style={styles.key}>Marca</Text>
                <Text style={styles.value}>{prodcut.supplier}</Text>
              </View>
              <Text style={styles.subtitle}>Composición</Text>
              <Text>{prodcut.composition}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 64,
  },
  name: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  detail: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: 60,
  },
  floatingScreen: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },

  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  closeButtonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    height: 64,
    fontSize: 32,
    fontWeight: "600",
  },
  subtitle: {
    height: 64,
    fontSize: 24,
    fontWeight: "600",
  },
  key: {
    height: 64,
    fontSize: 16,
    fontWeight: "400",
  },
  value: {
    height: 64,
    fontSize: 16,
    fontWeight: "400",
    color: "#9E9E9E",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductInfoScreen;
