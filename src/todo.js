import React from 'react';

const PrototypeFormComponent = () => {
  const PrototypeForm = {
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats'
  };

  const containerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    width: '300px'
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  const dataBelowStyle = {
    marginTop: '5px',
    fontStyle: 'italic',
    color: '#888'
  };

  return (
    <div style={containerStyle}>
      <div className="form-field">
        <label htmlFor="key1" style={labelStyle}>Key 1:</label>
        <input type="text" id="key1" value={PrototypeForm.key1} readOnly />
        <div style={dataBelowStyle}>{PrototypeForm.key1}</div>
      </div>

      <div className="form-field">
        <label htmlFor="key2" style={labelStyle}>Key 2:</label>
        <input type="text" id="key2" value={PrototypeForm.key2} readOnly />
        <div style={dataBelowStyle}>{PrototypeForm.key2}</div>
      </div>

      <div className="form-field">
        <label htmlFor="key3" style={labelStyle}>Key 3:</label>
        <input type="text" id="key3" value={PrototypeForm.key3} readOnly />
        <div style={dataBelowStyle}>{PrototypeForm.key3}</div>
      </div>

      <div className="form-field">
        <label htmlFor="key4" style={labelStyle}>Key 4:</label>
        <input type="text" id="key4" value={PrototypeForm.key4} readOnly />
        <div style={dataBelowStyle}>{PrototypeForm.key4}</div>
      </div>
    </div>
  );
};

export default PrototypeFormComponent;
