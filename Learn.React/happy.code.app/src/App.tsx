//import './App.css'
import Gallery from './components/Gallery'
import Drink from './components/Lessons/ConditionalRendering/Drink'
import PackingList from './components/PackingList'
import TodoList from './components/TodoList'

function App() {
  return (
      <>
        <section>
            <Gallery />
            <TodoList />
            <PackingList />
          </section>

          <section>
              <Drink name="tea" />
              <Drink name="coffee" />
          </section>
    </>
  )
}

export default App
