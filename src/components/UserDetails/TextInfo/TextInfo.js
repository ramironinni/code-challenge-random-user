import './TextInfo.css';

const TextInfo = ({ text, icon }) => {
    return (
        <div className="user-details-text-info-item-container">
            <span className="user-details-text-info-item-icon material-icons">
                {icon}
            </span>
            <div className="user-details-text-info-item-text">{text}</div>
        </div>
    );
};

export default TextInfo;
