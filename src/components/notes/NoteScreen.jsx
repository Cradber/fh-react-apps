import {NoteAppBar} from "./NoteAppBar";

export const NoteScreen = () => {
  return (
      <div className="notes__main-content">
          <NoteAppBar />

          <div className="notes__content">
              <input className="notes__title-input"
                     type="text"
                     autoComplete="off"
                     placeholder="Some awesome text" />

              <textarea className="notes__textarea"
                     placeholder="What happened today"/>

              <div className="notes__images">
                  <img src="https://composeclick.com/wp-content/uploads/2018/05/nature-1-1024x637.jpg"
                       alt="note"/>
              </div>
          </div>
      </div>
  )
}
