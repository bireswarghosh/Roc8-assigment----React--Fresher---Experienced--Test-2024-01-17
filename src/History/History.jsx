import React from 'react';

function History() {
  const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');

  return (
    <div className="history-page">
      <h1>Download History</h1>
      <div className="history-grid">
        {downloadHistory.map((image, index) => (
          <div key={index} className="history-item">
            <img src={image.webformatURL} alt={image.tags} />
            <p>{image.tags.split(",").join(" ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;