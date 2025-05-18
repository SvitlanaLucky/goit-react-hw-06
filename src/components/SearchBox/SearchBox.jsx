import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.field}
        type='text'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
