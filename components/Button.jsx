import { css } from "https://deno.land/x/treesap@0.0.2/src/css/mod.ts";

export const buttonStyles = css`
  a.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 2px solid var(--theme-on-background);
    border-radius: 2rem;
    text-decoration: none !important;
  }
  a.btn:hover {
    background-color: var(--theme-on-background);
    color: var(--theme-background);
  }
  .btn__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }
`

export function Button({href, children}) {
  return (
  <a class="btn" href={href}>
    {children}
  </a>
  );
}