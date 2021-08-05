import NavigationBtn from './NavigationBtn/NavigationBtn';
import './NavigationBtnsContainer.css';

const NavigationBtns = () => {
    return (
        <div className="navigation-btns">
            <NavigationBtn
                icon="navigate_before"
                type="navigation-btn-before"
            />
            <NavigationBtn icon="navigate_next" type="navigation-btn-next" />
            {/* <button className="navigation-btn navigation-btn-before">
                <span className="material-icons">navigate_before</span>
            </button>
            <button className="navigation-btn navigation-btn-next">
                <span className="material-icons">navigate_next</span>
            </button> */}
        </div>
    );
};

export default NavigationBtns;
