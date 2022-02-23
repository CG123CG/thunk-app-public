import './App.css'
import ItemList from './components/ItemList'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'


function App() {

  const store = configureStore()

  return (
    <div >
      <Provider store={store}>
        <ItemList />
      </Provider>
    </div>
  )
}

export default App
