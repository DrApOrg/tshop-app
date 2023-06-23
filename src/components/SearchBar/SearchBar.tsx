import { Image, StyleSheet, TextInput, View } from "react-native"

const SearchBar = () => {
  return (
    <View style={styles.viewTextInput}>
      <Image 
        style={styles.searchIcon}
      source={require('../../assets/search-icon.png')}/>
      <TextInput
        placeholder="Search"
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewTextInput: {
    width: '100%',
    borderRadius: 12,
    height: 60,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: "#F5F5F5",
    color: "#9E9E9E",

    borderWidth: 1,
    borderColor: '#C7C7C7'
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    width: '90%',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
  }
})

export default SearchBar 