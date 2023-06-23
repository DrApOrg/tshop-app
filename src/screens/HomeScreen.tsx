import { 
  Dimensions,
  StyleSheet,
  View,
  Text,
  FlatList,
  Platform,
  ListRenderItemInfo,
} from "react-native"
import { CategorieItem, HistoryCard, SearchBar } from "../components";
import { useHomeViewModel } from "../viewmodels/useHomeViewModel";
import { Category } from "../types/Category";

const width = Dimensions.get('window').width


const HomeScreen = () => {
  const {categories, histories, onPressCategorieItem} = useHomeViewModel()

  const renderCategoryList = (item: Category) => (
    <CategorieItem name={item.name} onPress={() => onPressCategorieItem(item)}/>
  )

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Text style={styles.title}>TShop</Text>
        <SearchBar/>
      </View>
      <View style={styles.historyList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          horizontal={true}
          renderItem={(item) => <HistoryCard/>}
        />
      </View>
      <View style={styles.categoriesList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={
            ({item}: ListRenderItemInfo<Category>) => renderCategoryList(item)
          }
          keyExtractor={({id}) => id.toString()}
        />
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20
  },
  actions: {
  },
  categoriesList: {
    height: '63%',
  },
  historyList: { 
  }
});


export default HomeScreen