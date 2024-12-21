import { useState } from 'react'
import './App.css'
import ProfileHeader from './components/ProfileHeader'
import ObjectivesCard from './components/ObjectivesCard'
import HabitList from './components/HabitList'
import NavigationBar from './components/NavigationBar'
import CreateHabitModal from './components/CreateHabitModal/CreateHabitModal'

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [habits] = useState([
    {
      title: 'End at 1 or 2AM',
      description: "You've done well boi",
      isCompleted: false
    },
    {
      title: 'Start studying at 9PM',
      description: 'Get at it boi',
      isCompleted: false
    },
    {
      title: 'Python',
      description: 'Complete 5 classes every week',
      isCompleted: false
    }
  ])

  return (
    <div className="app">
      <header className="app-header">
        <button className="menu-button">☰</button>
        <h1>Aaradhya07</h1>
        <button className="search-button">🔍</button>
        <button className="more-button">⋮</button>
      </header>

      <main className="main-content">
        <ProfileHeader />
        <ObjectivesCard />
        <HabitList habits={habits} />
      </main>

      <NavigationBar onAddClick={() => setShowCreateModal(true)} />
      
      {showCreateModal && (
        <CreateHabitModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  )
}

export default App