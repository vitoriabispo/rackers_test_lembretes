import { Cards } from "../Cards/Cards"
import './ListReminders.css';

export function ListReminders({reminders, setReminders}) {
  return (
    <div className="containerList">
      <div className="title">
        <h2>Lista de Lembretes</h2>
      </div>
      <div className="cardList">
        <Cards reminders={reminders} setReminders={setReminders}/>
      </div>
    </div>
  )
}