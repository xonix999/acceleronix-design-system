import React from 'react';
export function FooterCaptionBar({ date, note = 'Confidential · Under NDA' }) {
  return React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--ink-mute)' } },
    React.createElement('span', null, date),
    React.createElement('span', null, note));
}
