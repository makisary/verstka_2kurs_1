export function Footer() {
  return (
      <footer className="app-footer">
          <div className="footer-container">
              <div className="footer-content">
                  <div className="developer-section">
                      <span className="developer-info">
                          <span className="code-icon">💻</span>
                          Разработчик: {" "}
                          <a href="https://github.com/" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="developer-link">
                              Александр Климович
                          </a>
                      </span>
                  </div>
                  
                  <div className="copyright-section">
                      <span className="copyright">
                          © {new Date().getFullYear()} React Movies
                      </span>
                      <span className="version">v1.0.0</span>
                  </div>
              </div>
          </div>
      </footer>
  )
}
