import './style.css';

const Form = () => (
    <div className="form__container form__container--input"> <input className="form__input" autoFocus
          placeholder="Co jest do zrobienia?" />
          <button className="form__addButton">Dodaj zadanie</button>
        </div>
);

export default Form;