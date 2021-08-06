const PaginationBtn = ({ icon, type, changePage, handleClick }) => {
    return (
        <button
            className={'pagination-btn ' + type}
            onClick={(e) => {
                handleClick(changePage);
            }}
        >
            <span className="material-icons">{icon}</span>
        </button>
    );
};

export default PaginationBtn;
