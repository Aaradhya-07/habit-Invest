function ProfileHeader() {
  return (
    <div className="profile-section">
      <div className="profile-avatar">
        <div className="pixel-avatar"></div>
      </div>
      <div className="stats">
        <div className="stat-bar health">
          <span>❤️ 50 / 50</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="stat-bar experience">
          <span>⭐ 12 / 25</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '48%' }}></div>
          </div>
        </div>
        <div className="stat-bar locked">
          <span>💠 Unlock by reaching level 10</span>
        </div>
      </div>
      <div className="level-info">
        <span>Lvl. 1</span>
        <div className="currency">
          <span>🪙 1</span>
          <span>💎 0</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader