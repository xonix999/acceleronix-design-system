import React from 'react';
export function EyebrowKicker({ children }) {
  return React.createElement('div', { style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow-kicker)', fontWeight: 700, color: 'var(--purple)', letterSpacing: 'var(--ls-eyebrow-kicker)', textTransform: 'uppercase' } }, children);
}
