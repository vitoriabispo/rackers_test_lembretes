import { Cards } from "../Cards/Cards"
import './ListReminders.css';

export function ListReminders() {
  return (
    <div className="containerList">
      <div className="title">
        <h2>Lista de Lembretes</h2>
      </div>
      <div className="cardList">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
    
  )
}