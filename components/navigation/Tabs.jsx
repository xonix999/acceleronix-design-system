import React from 'react';
export function Tabs({ items, active, onChange }) {
  return React.createElement('div', { style: { display: 'flex', gap: 24, borderBottom: '1px solid var(--divider)', fontFamily: 'var(--font-sans)' } },
    items.map((it) => React.createElement('button', { key: it, onClick: () => onChange(it), style: { background: 'none', border: 'none', cursor: 'pointer', padding: '10px 0', fontWeight: 700, fontSize: 'var(--fs-body)', color: it === active ? 'var(--accent-violet)' : 'var(--ink-mute)', borderBottom: it === active ? '2px solid var(--accent-violet)' : '2px solid transparent' } }, it)));
}
