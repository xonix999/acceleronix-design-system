/* @ds-bundle: {"format":4,"namespace":"AcceleronixDesignSystem_3e11b3","components":[{"name":"FlagTabCard","sourcePath":"components/cards/FlagTabCard.jsx"},{"name":"PillarCard","sourcePath":"components/cards/PillarCard.jsx"},{"name":"EyebrowKicker","sourcePath":"components/core/EyebrowKicker.jsx"},{"name":"FooterCaptionBar","sourcePath":"components/core/FooterCaptionBar.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"NumberedBadge","sourcePath":"components/core/NumberedBadge.jsx"},{"name":"PageIndexChip","sourcePath":"components/core/PageIndexChip.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/cards/FlagTabCard.jsx":"77a4827aba59","components/cards/PillarCard.jsx":"faf24b00f482","components/core/EyebrowKicker.jsx":"a03f36ab52a8","components/core/FooterCaptionBar.jsx":"fd003611a731","components/core/IconCircle.jsx":"67d5fac0525c","components/core/NumberedBadge.jsx":"01a28a2fb0e1","components/core/PageIndexChip.jsx":"fc07b4a69d09","components/data/DataTable.jsx":"3eb39a1b8a6e","components/feedback/Dialog.jsx":"5168b576e3d5","components/feedback/Tag.jsx":"0fd760ac9f72","components/feedback/Toast.jsx":"df2d133f7d0c","components/feedback/Tooltip.jsx":"e517fcacebfd","components/forms/Button.jsx":"ffd9279802c2","components/forms/Checkbox.jsx":"15241682a26f","components/forms/Input.jsx":"89155594d7d6","components/forms/Radio.jsx":"0ce0582b5075","components/forms/Select.jsx":"2555dff45d01","components/forms/Switch.jsx":"6c5630bab7bf","components/navigation/Tabs.jsx":"c1c25535f8e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AcceleronixDesignSystem_3e11b3 = window.AcceleronixDesignSystem_3e11b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/FlagTabCard.jsx
try { (() => {
function FlagTabCard({
  label,
  heading,
  body,
  accent = 'var(--accent-violet)'
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      background: accent,
      height: 10,
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
    }
  }), React.createElement('div', {
    style: {
      background: accent,
      color: '#fff',
      fontWeight: 700,
      fontSize: 'var(--fs-label-pill)',
      padding: '6px 16px',
      marginTop: -1
    }
  }, label), React.createElement('div', {
    style: {
      padding: 16
    }
  }, heading && React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 'var(--fs-card-heading)',
      color: 'var(--ink)',
      marginBottom: 6
    }
  }, heading), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--ink-mute)'
    }
  }, body)));
}
Object.assign(__ds_scope, { FlagTabCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FlagTabCard.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowKicker.jsx
try { (() => {
function EyebrowKicker({
  children
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow-kicker)',
      fontWeight: 700,
      color: 'var(--purple)',
      letterSpacing: 'var(--ls-eyebrow-kicker)',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { EyebrowKicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowKicker.jsx", error: String((e && e.message) || e) }); }

// components/core/FooterCaptionBar.jsx
try { (() => {
function FooterCaptionBar({
  date,
  note = 'Confidential · Under NDA'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--ink-mute)'
    }
  }, React.createElement('span', null, date), React.createElement('span', null, note));
}
Object.assign(__ds_scope, { FooterCaptionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FooterCaptionBar.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function IconCircle({
  children,
  color = 'var(--purple)',
  size = 48
}) {
  return React.createElement('div', {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flexShrink: 0
    }
  }, children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/cards/PillarCard.jsx
try { (() => {
function PillarCard({
  icon,
  heading,
  body,
  accent = 'var(--purple)'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--card-padding)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement(__ds_scope.IconCircle, {
    color: accent
  }, icon), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-card-heading)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, heading), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body-muted)',
      color: 'var(--ink-mute)'
    }
  }, body));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberedBadge.jsx
try { (() => {
function NumberedBadge({
  number,
  accent = 'var(--accent-violet)'
}) {
  return React.createElement('div', {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      background: accent,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--fs-label-pill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, String(number).padStart(2, '0'));
}
Object.assign(__ds_scope, { NumberedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberedBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/PageIndexChip.jsx
try { (() => {
function PageIndexChip({
  index
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-page-index)',
      color: 'var(--ink-faint)'
    }
  }, String(index).padStart(2, '0'));
}
Object.assign(__ds_scope, { PageIndexChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PageIndexChip.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns,
  rows
}) {
  return React.createElement('table', {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      background: 'var(--ink-secondary)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 'var(--fs-table-header)',
      textAlign: 'left',
      padding: '8px 12px'
    }
  }, c)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    style: {
      background: ri % 2 === 0 ? 'var(--surface-tint)' : 'var(--surface-tint-strong)'
    }
  }, r.map((cell, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: '8px 12px',
      fontSize: 'var(--fs-table-body)',
      color: ci === 0 ? 'var(--accent-violet)' : 'var(--ink)',
      fontWeight: ci === 0 ? 700 : 400
    }
  }, cell))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  title,
  children,
  onClose
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(18,14,38,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 24,
      width: 320,
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-card-heading)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, title), React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-mute)'
    }
  }, '\u00d7')), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--ink-mute)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  accent = 'var(--accent-violet)'
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      color: accent,
      background: 'var(--surface-tint)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  variant = 'info'
}) {
  const bg = {
    info: 'var(--accent-indigo)',
    success: 'var(--green)',
    error: 'var(--red)'
  }[variant] || 'var(--accent-indigo)';
  return React.createElement('div', {
    style: {
      background: bg,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      padding: '12px 18px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-card)'
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink)',
      color: '#fff',
      fontSize: 12,
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick
}) {
  const pad = size === 'sm' ? '8px 14px' : '12px 20px';
  const fs = size === 'sm' ? '14px' : 'var(--fs-body)';
  let bg = 'var(--accent-violet)',
    color = '#fff',
    border = 'none';
  if (variant === 'secondary') {
    bg = '#fff';
    color = 'var(--ink)';
    border = '1px solid var(--divider)';
  }
  if (variant === 'ghost') {
    bg = 'transparent';
    color = 'var(--accent-violet)';
    border = 'none';
  }
  return React.createElement('button', {
    disabled,
    onClick,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: fs,
      padding: pad,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--ink-faint)' : bg,
      color,
      border,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--accent-violet)'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  placeholder,
  value,
  onChange,
  disabled
}) {
  return React.createElement('input', {
    placeholder,
    value,
    onChange,
    disabled,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--divider)',
      color: 'var(--ink)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--accent-violet)'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options,
  value,
  onChange
}) {
  return React.createElement('select', {
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--divider)',
      color: 'var(--ink)',
      background: '#fff'
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange
}) {
  return React.createElement('button', {
    onClick: onChange,
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-violet)' : 'var(--divider)',
      border: 'none',
      position: 'relative',
      cursor: 'pointer',
      padding: 2
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform .15s'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--divider)',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map(it => React.createElement('button', {
    key: it,
    onClick: () => onChange(it),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 0',
      fontWeight: 700,
      fontSize: 'var(--fs-body)',
      color: it === active ? 'var(--accent-violet)' : 'var(--ink-mute)',
      borderBottom: it === active ? '2px solid var(--accent-violet)' : '2px solid transparent'
    }
  }, it)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FlagTabCard = __ds_scope.FlagTabCard;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.EyebrowKicker = __ds_scope.EyebrowKicker;

__ds_ns.FooterCaptionBar = __ds_scope.FooterCaptionBar;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.NumberedBadge = __ds_scope.NumberedBadge;

__ds_ns.PageIndexChip = __ds_scope.PageIndexChip;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
