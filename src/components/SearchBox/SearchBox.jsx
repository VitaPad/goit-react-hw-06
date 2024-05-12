import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  const handleSearch = event => {
    onChange(event);
  };

  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input
        className={css.search}
        value={value}
        onChange={handleSearch}
        type="text"
      />
    </div>
  );
}
