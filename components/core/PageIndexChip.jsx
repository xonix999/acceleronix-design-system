import React from 'react';
export function PageIndexChip({ index }) {
  return React.createElement('div', { style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-page-index)', color: 'var(--ink-faint)' } }, String(index).padStart(2, '0'));
}
