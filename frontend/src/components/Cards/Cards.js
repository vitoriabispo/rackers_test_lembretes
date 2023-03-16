import { FiPlus } from 'react-icons/fi';

import './Cards.css';

export function Cards() {
  return (
    <div className="cardContainer"> 
      <div className="reminderDate">
        <h3>01/04/2023</h3>
      </div>
      <div className="singleCard">
        <p>atividade de teoria da computação</p>
        <button id="excluir" type="submit"><FiPlus /></button>
      </div>

    </div>
  )
};