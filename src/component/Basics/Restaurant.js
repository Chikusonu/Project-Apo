import React from 'react';
import './style.css';

export default function Restaurant() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle" style={{ color: 'black' }}>
              breakfastbreakfast
            </span>
            <h1 className="card-title">maggi</h1>
            <div classNames="card-descriptio subtl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </div>
            <div className="card-read">
READ 
            </div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYV_Y8uOeIEMVJnDLYCbgUJwONFFCVE-l4TNYS3TtIHFyfwbythwyl0s&s=10" alt="image" className="card-media" />
          </div>
        </div>
      </div>
    </>
  );
}
