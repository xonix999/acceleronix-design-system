import React from 'react';
import { IconCircle } from '../core/IconCircle.jsx';
export function PillarCard({ icon, heading, body, accent = 'var(--purple)' }) {
  return React.createElement('div', { style: { background: 'var(--surface)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)', padding: 'var(--card-padding)', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' } },
    React.createElement(IconCircle, { color: accent }, icon),
    React.createElement('div', { style: { fontSize: 'var(--fs-card-heading)', fontWeight: 700, color: 'var(--ink)' } }, heading),
    React.createElement('div', { style: { fontSize: 'var(--fs-body-muted)', color: 'var(--ink-mute)' } }, body));
}
