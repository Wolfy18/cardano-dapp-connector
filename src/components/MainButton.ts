import { css } from 'lit';
import { html, useState, component, useEffect } from 'haunted';
import { gridStyles } from '../assets/css/grid.css';
import shoeStyles from '@shoelace-style/shoelace/dist/themes/light.styles';
import { FlintEnabler } from '../api/FlintAdapter';
import { NamiEnabler } from '../api/NamiAdapter';
import { YoroiEnabler } from '../api/YoroiAdapter';
import { useStyles } from '../hooks/useStyles';
import { WalletDetail } from './WalletDetail';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/dialog/dialog';
import '@shoelace-style/shoelace/dist/components/alert/alert';

window.customElements.define('flint-enabler', component(FlintEnabler));
window.customElements.define('nami-enabler', component(NamiEnabler));
window.customElements.define('yoroi-enabler', component(YoroiEnabler));
window.customElements.define('wallet-detail', component(WalletDetail));

function MainButton(this: any) {
  useStyles(this, [
    shoeStyles,
    gridStyles,
    css`
      #wallet-list {
      }
      #wallet-list div {
        margin: 1rem auto;
      }
    `,
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState({
    wallet: null,
    name: '',
    icon: '',
  });

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const setWallet = (e: CustomEvent) => {
    setIsConnected(true);
    setConnectedWallet({
      wallet: e.detail.wallet,
      name: e.detail.name,
      icon: e.detail.icon,
    });
  };

  const unsetWallet = async () => {
    await window.cardano.off();
    setIsConnected(false);
    setConnectedWallet({ wallet: null, name: '', icon: '' });
  };

  return html`
    <sl-button variant="primary" @click=${openDrawer}
      >${isConnected ? connectedWallet.name : 'Connect'}</sl-button
    >
    <sl-dialog
      label=${isConnected ? 'Enabled Wallet' : 'Please select a wallet'}
      class="drawer-overview"
      .open=${isOpen}
      @sl-hide=${closeDrawer}
    >
      ${isConnected
        ? html`<wallet-detail
            .API=${connectedWallet.wallet}
            .name=${connectedWallet.name}
            .icon=${connectedWallet.icon}
            @disconnect=${unsetWallet}
          ></wallet-detail>`
        : html`<div class="row" id="wallet-list">
            <div class="col-10">
              <flint-enabler @connect=${setWallet}></flint-enabler>
            </div>
            <div class="col-10">
              <nami-enabler @connect=${setWallet}></nami-enabler>
            </div>
            <div class="col-10"><yoroi-enabler></yoroi-enabler></div>
          </div>`}
    </sl-dialog>
  `;
}

export { MainButton };
