import "./Search.css";

const Search: React.FC = () => {
  return (
    <form id="search-component">
      <div className="wrapper-search-field">
        <label htmlFor="search-input">
          Search for your coffee that you want
        </label>
        <input id="search-input" />
      </div>

      <button>Search</button>
    </form>
  );
};

export default Search;
