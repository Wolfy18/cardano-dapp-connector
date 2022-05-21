import { css } from 'lit';
import { html, component } from 'haunted';
import shoeStyles from '@shoelace-style/shoelace/dist/themes/light.styles';
import { style } from './assets/css/main.css';
import { MainButton } from './components/MainButton';
import { useStyles } from './hooks/useStyles';

window.customElements.define('bak-main-button', component(MainButton));

function CardanoDappConnector(this: unknown) {
  useStyles(this, [
    shoeStyles,
    style,
    css`
      :host {
        font-family: 'arial';
        font-weight: 400
      }
    `,
  ]);

  return html`<bak-main-button></bak-main-button>`;
}

export { CardanoDappConnector };
