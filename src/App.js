import SortableList from './lib/SortableList'
import TestItem from './TestItem/TestItem'
import { data } from './TestItem/TestData'

function App() {
  const onClickItem = (index) => alert(index)
  const onDropItem = newList => console.log(newList)
  const renderItem = (item, index) => <TestItem data={item} index={index} />

  return (
    <SortableList
      data={data}
      // renderItem={(item, index) => <TestItem data={item} index={index} />}
      renderItem={renderItem}
      onDropItem={onDropItem}
      onClickItem={onClickItem}
    />
  )
}

export default App;
