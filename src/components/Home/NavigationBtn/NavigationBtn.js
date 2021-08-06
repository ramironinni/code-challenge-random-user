const NavigationBtn = ({ icon, type, changePage, handleClick }) => {
    return (
        <button
            className={'navigation-btn ' + type}
            onClick={(e) => {
                handleClick(changePage);
            }}
        >
            <span className="material-icons">{icon}</span>
        </button>
    );
};

export default NavigationBtn;
