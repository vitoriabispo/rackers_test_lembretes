import './NewReminder.css';

export function NewReminder() {
  return (
    <div className="containerNew">
      <div className="title">
        <h2>Novo Lembrete</h2>
      </div>
      <form name="addReminder">
        <div className="reminderData">
          <label for="name">NOME</label>
          <input type="text" id="name" name="name" placeholder="Nome do lembrete"/>
        </div>
        <div className="reminderData">
          <label for="date">DATA</label>
          <input type="date" id="date" name="date" placeholder="Data do lembrete (no formato dd/mm/yyyy)"/>
        </div>
        <div className="submitReminder">
          <button id="enviar" type="submit">CRIAR</button>

        </div>
      </form>
    </div> 
  )
}