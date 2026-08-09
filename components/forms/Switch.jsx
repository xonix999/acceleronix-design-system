import React from 'react';
export function Switch({ checked, onChange }) {
  return React.createElement('button', { onClick: onChange, style: { width: 40, height: 22, borderRadius: 'var(--radius-pill)', background: checked ? 'var(--accent-violet)' : 'var(--divider)', border: 'none', position: 'relative', cursor: 'pointer', padding: 2 } },
    React.createElement('span', { style: { display: 'block', width: 18, height: 18, borderRadius: '50%', background: '#fff', transform: checked ? 'translateX(18px)' : 'translateX(0)', transition: 'transform .15s' } }));
}
