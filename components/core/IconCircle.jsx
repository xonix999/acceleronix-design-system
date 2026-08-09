import React from 'react';
export function IconCircle({ children, color = 'var(--purple)', size = 48 }) {
  return React.createElement('div', { style: { width: size, height: size, borderRadius: 'var(--radius-pill)', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 } }, children);
}
