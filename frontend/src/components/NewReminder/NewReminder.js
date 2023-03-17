import React, { useState } from 'react';

import './NewReminder.css';
import transformData from "../../utils/transformData"


import api from "../../service/api"
import groupBy from "../../utils/groupBy"
import orderList from "../../utils/orderList"


export function NewReminder({ reminders, setReminders }) {
  
  const [ date, setDate ] = useState('');
  const [ name, setName ] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    
    if(name === '' || date === '') {
      return alert('Todos campos devem ser preenchidos!'); 
    }
    try {
      await api.post('', {name, date});
      const res = await api.get('/');
      const groupedArray = groupBy(res.data, "date");
      setReminders(orderList(transformData(groupedArray)));
      setName('');
      setDate('');
    } catch (err) {
      alert("Não foi possível adicionar o lembrete.");
    }
  }

  function disableDates() {
    var date = new Date();
    var day = date.getDate()+1; // só pode para dias maiores que o atual
    day = day < 10 ? '0' + day : day; 
    var month = date.getMonth()+1;
    month = month < 10 ? '0' + month : month; 
    var year = date.getFullYear();

    var minDate = year+"-"+month+"-"+day;
    return minDate;
  }

  return (
    <div className="containerNew">
      <div className="title">
        <h2>Novo Lembrete</h2>
      </div>
      
      <form className="addReminder">
        <div className="reminderInfo">
          <label>NOME</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Nome do lembrete"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="reminderInfo">
          <label>DATA</label>
          <input 
            type="date" 
            id="date" 
            name="date"
            value={date}
            min={disableDates()}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="submitReminder">
          <button 
            id="enviar" 
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            CRIAR
          </button>        
        </div>
      </form>
    </div> 
  )
}