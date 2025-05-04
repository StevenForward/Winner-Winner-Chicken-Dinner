import "../css/HairPoster.css"

export default function HairPoster({hair}) {
  
    return (
        <div className="hair-card">
            <img src={hair.image} alt={hair.type} className="hair-image" />
            <div className="hair-overlay">
            <h3>{hair.type}</h3>
            <p>{hair.description}</p>
            </div>
      </div>
    );
  }
  