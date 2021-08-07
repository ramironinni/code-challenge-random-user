const TextInfoItemContainer = ({ text, icon }) => {
    return (
        <div className="user-text-info-item-container">
            <span className="user-text-info-icon material-icons">{icon}</span>
            <p className="user-text-info-item user-full-name">{text}</p>
        </div>
    );
};

export default TextInfoItemContainer;
