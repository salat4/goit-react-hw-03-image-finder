const Filter = ({ handelFilter, filter }) => (
  <div>
    {/* <p>Find contacts by name</p> */}
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handelFilter}
    ></input>
  </div>
);
export default Filter;
