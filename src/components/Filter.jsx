
function Filter() {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status: </p>
                <select>
                    <option value="all">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Orden Alfabética:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter