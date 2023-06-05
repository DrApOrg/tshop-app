import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

// types
import { Category } from "../types/Category"
import { History } from "../types/History"

export const useHomeViewModel = () => {
  const navigation = useNavigation()
  const [categories, setCategories] = useState<Category[]>([
    {id: 1, name: 'bedroom'},
    {id: 2, name: 'bedroom'},
    {id: 3, name: 'bedroom'},
    {id: 4, name: 'bedroom'},
    {id: 5, name: 'bedroom'},
    {id: 6, name: 'bedroom'},
    {id: 7, name: 'bedroom'},
    {id: 8, name: 'bedroom'},
    {id: 9, name: 'bedroom'},
  ])
  const [histories, setHistories] = useState<History[]>([])

  const onPressCategorieItem = (category: Category)  => {
    navigation.navigate('DetailCategory' as never, {category} as never)
  }

  const onPressHistoryItem = (history: History)  => {
    navigation.navigate('DetailHistory' as never, {history} as never)
  }

  return {
    categories,
    histories,
    onPressCategorieItem,
    onPressHistoryItem
  }
}

