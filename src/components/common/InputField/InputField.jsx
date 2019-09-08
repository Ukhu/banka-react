import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  value, placeholder, title, error, index, onChange, type,
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      title={title}
      value={value}
      onChange={(e) => onChange(e, index)}
      required
    />
    <p className="validation-error">{error}</p>
  </div>
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
