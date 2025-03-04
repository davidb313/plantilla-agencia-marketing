import { c as createComponent, b as createAstro, m as maybeRenderHead, i as renderSlot, a as renderTemplate } from './astro/server_BTxPXuiM.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/davidbustos/Documents/develop/projectos-portfolio/Positivus/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
