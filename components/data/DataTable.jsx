import React from 'react';
export function DataTable({ columns, rows }) {
  return React.createElement('table', { style: { borderCollapse: 'collapse', width: '100%', fontFamily: 'var(--font-sans)' } },
    React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', { key: i, style: { background: 'var(--ink-secondary)', color: '#fff', fontWeight: 700, fontSize: 'var(--fs-table-header)', textAlign: 'left', padding: '8px 12px' } }, c)))),
    React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', { key: ri, style: { background: ri % 2 === 0 ? 'var(--surface-tint)' : 'var(--surface-tint-strong)' } }, r.map((cell, ci) => React.createElement('td', { key: ci, style: { padding: '8px 12px', fontSize: 'var(--fs-table-body)', color: ci === 0 ? 'var(--accent-violet)' : 'var(--ink)', fontWeight: ci === 0 ? 700 : 400 } }, cell))))));
}
