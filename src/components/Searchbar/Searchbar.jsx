const Searchbar = ({ handelChange, value, handleSubmit }) => (
  <header>
    <form>
      <button type="submit" onClick={handleSubmit}>
        <span>Search</span>
      </button>

      <input
        type="text"
        placeholder="Search images and photos"
        value={value}
        onChange={handelChange}
      />
    </form>
  </header>
);

export default Searchbar;
