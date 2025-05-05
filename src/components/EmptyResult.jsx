export function EmptyResult() {
    return (
        <div className="empty-result animate-fade-in">
            <div className="empty-content">
                <i className="empty-icon material-icons">travel_explore</i>
                <div className="empty-text">
                    <h5>Мы ничего не нашли!</h5>
                    <p>Может быть вы искали что-то другое?</p>
                </div>
            </div>
        </div>
    );
}