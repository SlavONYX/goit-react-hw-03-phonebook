import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <form>
      <label className={css.filterLabel}>
        <span>Filter</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};