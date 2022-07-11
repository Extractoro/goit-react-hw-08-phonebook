import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/contactsSlice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={s['label']}>
      <p className={s['text']}>Filter contacts by name</p>
      <input
        className={s['input']}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
