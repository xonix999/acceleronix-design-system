import React from 'react';
export function Tooltip({ children, label }) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', { style: { position: 'relative', display: 'inline-block' }, onMouseEnter: () => setShow(true), onMouseLeave: () => setShow(false) },
    children,
    show && React.createElement('span', { style: { position: 'absolute', bottom: '125%', left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: '#fff', fontSize: 12, padding: '6px 10px', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)' } }, label));
}
