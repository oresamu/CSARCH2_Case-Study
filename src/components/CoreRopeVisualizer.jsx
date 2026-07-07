// src/components/CoreRopeVisualizer.jsx
import React, { useState } from 'react';

export default function CoreRopeVisualizer() {
  const [mode, setMode] = useState('rope');
  const [cores, setCores] = useState([1, 0, 1, 1, 0, 1, 0, 1]);

  const toggleCore = (index) => {
    const updated = [...cores];
    updated[index] = updated[index] === 1 ? 0 : 1;
    setCores(updated);
  };

  return (
    <div style={{ padding: '20px', border: '1px dashed #777', borderRadius: '8px', margin: '20px 0' }}>
      <h3>Interactive Visualizer Model</h3>
      <p>Current View: <strong>{mode === 'rope' ? "Margaret Hamilton's Core Rope Memory" : "Ada Lovelace's Punch Card"}</strong></p>
      
      <button onClick={() => setMode(mode === 'rope' ? 'punchcard' : 'rope')}>
        Switch to {mode === 'rope' ? 'Punch Card View' : 'Core Rope View'}
      </button>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {cores.map((val, idx) => (
          <div 
            key={idx} 
            onClick={() => toggleCore(idx)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: mode === 'rope' ? '50%' : '4px',
              backgroundColor: val === 1 ? '#BC52EE' : '#333',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {val}
          </div>
        ))}
      </div>
      <p><small>*Click on the individual elements to flip their bit state and modify the physical memory map array.</small></p>
    </div>
  );
}