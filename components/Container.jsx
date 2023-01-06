import { css } from "https://deno.land/x/treesap@0.0.2/src/css/mod.ts";

export const containerStyles = css`
  .container {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: var(--container-max-width);
  }
`

export function Container({children}) {
  return (<div class="container">{children}</div>)
}