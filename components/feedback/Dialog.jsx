import React from 'react';
export function Dialog({ title, children, onClose }) {
  return React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'rgba(18,14,38,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    React.createElement('div', { style: { background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)', padding: 24, width: 320, fontFamily: 'var(--font-sans)' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 } },
        React.createElement('div', { style: { fontSize: 'var(--fs-card-heading)', fontWeight: 700, color: 'var(--ink)' } }, title),
        React.createElement('button', { onClick: onClose, style: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--ink-mute)' } }, '\u00d7')),
      React.createElement('div', { style: { fontSize: 'var(--fs-body)', color: 'var(--ink-mute)' } }, children)));
}
