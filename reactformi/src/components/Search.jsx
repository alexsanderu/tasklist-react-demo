import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <h2>Pesquisar:</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..."></input>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.string,

}
export default Search