const TextInfo = ({ text, icon }) => {
    return (
        <div className="user-details-text-info-item-container">
            <span className="user-details-text-info-item-icon material-icons">
                {icon}
            </span>
            {text}
        </div>
    );
};

export default TextInfo;
