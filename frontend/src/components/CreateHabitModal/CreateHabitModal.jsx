import './CreateHabitModal.css'
import DifficultySelector from './DifficultySelector'
import ResetCounter from './ResetCounter'

function CreateHabitModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="create-habit-modal">
        <header className="modal-header">
          <button className="back-button" onClick={onClose}>←</button>
          <h2>Create Habit</h2>
          <button className="create-button">CREATE</button>
        </header>

        <div className="modal-content">
          <input
            type="text"
            className="task-input"
            placeholder="Task Title"
          />
          
          <textarea
            className="notes-input"
            placeholder="Notes"
          />

          <div className="habit-type">
            <button className="type-button active">
              <span className="plus-icon">+</span>
              <span>Positive</span>
            </button>
            <button className="type-button">
              <span className="minus-icon">−</span>
              <span>Negative</span>
            </button>
          </div>

          <div className="section">
            <h3>Difficulty</h3>
            <DifficultySelector />
          </div>

          <div className="section">
            <h3>Reset Counter</h3>
            <ResetCounter />
          </div>

          <div className="section">
            <h3>Tags</h3>
            <div className="tags-container">
              {/* Tags will go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateHabitModal