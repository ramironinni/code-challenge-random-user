const NavigationBtn = ({ icon, type }) => {
    return (
        <button className={'navigation-btn ' + type}>
            <span className="material-icons">{icon}</span>
        </button>
    );
};

export default NavigationBtn;
