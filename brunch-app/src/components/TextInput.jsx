const TextInput = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  className,
  required = false,
}) => {
  return (
    <div className='text-input-container' >
      <div className={`text-input ${className}`}>
        {label && (
          <label className="input-label">
            {label}
            {required && <span className="required-asterisk">*</span>}
          </label>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`input-field ${error ? "input-error" : ""}`}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
