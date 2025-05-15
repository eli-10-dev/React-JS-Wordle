import './Body.css';

function Body( {clue, tiles} ) {
    return (
        <div className="body">
            <div className="clue flex">
                {clue}
            </div>  
            
            <div className="input-boxes flex">
                <div className="tile-container flex">
                    {tiles}
                </div>
            </div>
        </div>
    );
}

export default Body;