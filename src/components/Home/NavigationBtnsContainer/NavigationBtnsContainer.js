import './NavigationBtnsContainer.css';

const NavigationBtns = () => {
    return (
        <div className="navigation-btns">
            <button className="navigation-btn">
                <span className="material-icons">navigate_before</span>
            </button>

            <button className="navigation-btn">
                <span className="material-icons">navigate_next</span>
            </button>
        </div>
    );
};

export default NavigationBtns;
