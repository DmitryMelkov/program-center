import tippy from 'tippy.js';

export function programsTippy() {
  tippy('.programs__box-tippy', {
    trigger: 'click',
    theme: 'light',
    placement: 'right',
    arrow: true,
    content: `<div class="tippy">
                <span class="tippy__span">Роман</span>
                <span class="tippy__span">Pentium (R) Dual-Core CPU T440 @ 2.20 GHz</span>
                <span class="tippy__span">Майкрософт Windows 8.1 Профессиональная</span>
              </div>`,
    allowHTML: true,
  });
  tippy('.programs__content-tippy', {
    trigger: 'click',
    theme: 'light',
    placement: 'right',
    arrow: true,
    content: `<span class="tippy__span">Продлите заказ</span>`,
    allowHTML: true,
  });
}
