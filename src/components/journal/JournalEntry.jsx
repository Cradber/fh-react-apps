
export const JournalEntry = () => {
  return (
      <div className="journal__entry pointer">
        <div className="journal__entry-picture"
    style={{
      backgroundSize: 'cover',
      backgroundImage: 'url(https://www.nfi.edu/wp-content/uploads/2021/10/Landscape-Photography_image1.jpg)'
    }}/>

        <div className="journal__entry-body">
          <p className="journal__entry-title">A new day</p>
          <p className="journal__entry-content">
            Sed ut perspiciatis unde omnis iste natus error
          </p>
        </div>

        <div className="journal__entry-date_box">
          <span>Monday</span>
          <h4>25</h4>
        </div>

      </div>
  )
}
