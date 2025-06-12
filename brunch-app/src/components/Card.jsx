import Button from "./Button";

const Card = ({
  children,
  bgImage,
  bgColor,
  overlay,
  button,
}) => {
  const cardStyle = {
    backgroundColor: bgImage ? "transparent" : bgColor,
  };

  return (
    <div className="card-container">
    <div className="card" style={cardStyle}>
      {/* Background Image (if provided) */}
      {bgImage && (
        <div
          className="card-bg-image"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Optional Dark Overlay (if overlay=true) */}
      {overlay && <div className="card-overlay" />}

      {/* Content (always on top) */}
      <div className="card-content">{children}</div>
        {/* Optional Button (if button is provided) */}
        {button && (
          <div className="card-button">
            <Button
              onClick={button.onClick}
              title={button.title}
              disabled={button.disabled}
            />
          </div>
        )}
    </div>
    </div>
  );
};

export default Card;
