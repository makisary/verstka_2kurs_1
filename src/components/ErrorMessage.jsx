export function ErrorMessage({ message }) {
    return (
        <div className="error-message animate-fade-in" role="alert">
            <div className="error-content">
                <i className="error-icon material-icons" aria-hidden="true">error</i>
                <div className="error-text">
                    <h5 className="error-title">Упс! Проверьте ваш запрос</h5>
                    <p className="error-description">Возможно стоит убрать фильтры</p>
                </div>
            </div>
        </div>
    );
}
