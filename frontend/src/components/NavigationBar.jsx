function NavigationBar({ onAddClick }) {
  return (
    <nav className="navigation">
      <button className="nav-item active">
        <span>±</span>
        <span>Habits</span>
      </button>
      <button className="nav-item">
        <span>📅</span>
        <span>Dailies</span>
      </button>
      <button className="nav-item add" onClick={onAddClick}>
        <span>+</span>
      </button>
      <button className="nav-item">
        <span>✓</span>
        <span>To Do's</span>
      </button>
      <button className="nav-item">
        <span>🎮</span>
        <span>Rewards</span>
      </button>
    </nav>
  )
}

export default NavigationBar