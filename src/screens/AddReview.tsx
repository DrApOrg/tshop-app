import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Product } from "../types/Product";
import StarRating from "../components/StarRating/StarRating";
import { Color } from "../utils/Colors";

interface Props {
  name: string;

  product: Product;
}

const AddReview: React.FC<Props> = ({ name, product }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewTextChange = (text: string) => {
    setReviewText(text);
  };

  const handleSubmitReview = () => {
    const postData = async () => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/review/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: rating,
            comment: reviewText,
            productId: product._id,
            userId: "Diego",
          }),
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud POST");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        console.error("Error al enviar la solicitud POST:", error);
      }
    };
    postData();
    console.log("Rating:", rating);
    console.log("Review Text:", reviewText);
    setReviewText("");
    setRating(0);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={openModal}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.floatingScreen}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Informacion</Text>
            </View>
            <View style={styles.containerReview}>
              <StarRating rating={rating} onRatingChange={handleRatingChange} />
              <TextInput
                style={styles.reviewInput}
                placeholder="Escribe tu reseña aquí"
                value={reviewText}
                onChangeText={handleReviewTextChange}
                multiline={true}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmitReview}
              >
                <Text style={styles.submitButtonText}>Enviar Reseña</Text>
              </TouchableOpacity>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  floatingButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    height: 24,
  },
  name: {
    fontWeight: "600",
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
  },
  floatingScreen: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  reviewInput: {
    width: "100%",
    height: 60,
    marginTop: 16,
    marginBottom: 24,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: Color.primary,
    width: "100%",
    height: 64,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerReview: {
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddReview;
