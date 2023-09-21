import PropTypes from 'prop-types';

const Filter = ({ setFilter, setSort }) => {

    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className='filter-options'>
                <div>
                    <p>Status:</p>
                    <select value={null} onChange={(e) => setFilter(e.target.value)}>
                        <option value={null}>Todas</option>
                        <option value={true}>Completas</option>
                        <option value={false}>Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => { setSort("Asc") }}>Asc</button>
                    <button onClick={() => { setSort("Desc") }}>Desc</button>
                </div>
            </div>
        </div>
    )
}

Filter.propTypes = {
    setFilter: PropTypes.func,
    setSort: PropTypes.func
}

export default Filter