import { css, CSSResultGroup } from 'lit';

export const alertifyStyles: CSSResultGroup = css`
  /**
 * alertifyjs 1.13.1 http://alertifyjs.com
 * AlertifyJS is a javascript framework for developing pretty browser dialogs and notifications.
 * Copyright 2019 Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) 
 * Licensed under GPL 3 <https://opensource.org/licenses/gpl-3.0>*/
  .alertify .ajs-dimmer {
    position: fixed;
    z-index: 1981;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #252525;
    opacity: 0.5;
  }
  .alertify .ajs-modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0;
    overflow-y: auto;
    z-index: 1981;
  }
  .alertify .ajs-dialog {
    position: relative;
    margin: 5% auto;
    min-height: 110px;
    max-width: 500px;
    padding: 24px 24px 0 24px;
    outline: 0;
    background-color: #fff;
  }
  .alertify .ajs-dialog.ajs-capture:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 1;
  }
  .alertify .ajs-reset {
    position: absolute !important;
    display: inline !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 0 !important;
  }
  .alertify .ajs-commands {
    position: absolute;
    right: 4px;
    margin: -14px 24px 0 0;
    z-index: 2;
  }
  .alertify .ajs-commands button {
    display: none;
    width: 10px;
    height: 10px;
    margin-left: 10px;
    padding: 10px;
    border: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  .alertify .ajs-commands button.ajs-close {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC);
  }
  .alertify .ajs-commands button.ajs-maximize {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC);
  }
  .alertify .ajs-header {
    margin: -24px;
    margin-bottom: 0;
    padding: 16px 24px;
    background-color: #fff;
  }
  .alertify .ajs-body {
    min-height: 56px;
  }
  .alertify .ajs-body .ajs-content {
    padding: 16px 24px 16px 16px;
  }
  .alertify .ajs-footer {
    padding: 4px;
    margin-left: -24px;
    margin-right: -24px;
    min-height: 43px;
    background-color: #fff;
  }
  .alertify .ajs-footer .ajs-buttons.ajs-primary {
    text-align: right;
  }
  .alertify .ajs-footer .ajs-buttons.ajs-primary .ajs-button {
    margin: 4px;
  }
  .alertify .ajs-footer .ajs-buttons.ajs-auxiliary {
    float: left;
    clear: none;
    text-align: left;
  }
  .alertify .ajs-footer .ajs-buttons.ajs-auxiliary .ajs-button {
    margin: 4px;
  }
  .alertify .ajs-footer .ajs-buttons .ajs-button {
    min-width: 88px;
    min-height: 35px;
  }
  .alertify .ajs-handle {
    position: absolute;
    display: none;
    width: 10px;
    height: 10px;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==);
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    cursor: se-resize;
  }
  .alertify.ajs-no-overflow .ajs-body .ajs-content {
    overflow: hidden !important;
  }
  .alertify.ajs-no-padding.ajs-maximized .ajs-body .ajs-content {
    left: 0;
    right: 0;
    padding: 0;
  }
  .alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body {
    margin-left: -24px;
    margin-right: -24px;
  }
  .alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body .ajs-content {
    padding: 0;
  }
  .alertify.ajs-no-padding.ajs-resizable .ajs-body .ajs-content {
    left: 0;
    right: 0;
  }
  .alertify.ajs-maximizable .ajs-commands button.ajs-maximize,
  .alertify.ajs-maximizable .ajs-commands button.ajs-restore {
    display: inline-block;
  }
  .alertify.ajs-closable .ajs-commands button.ajs-close {
    display: inline-block;
  }
  .alertify.ajs-maximized .ajs-dialog {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    margin: 0 auto !important;
    top: 0 !important;
    left: 0 !important;
  }
  .alertify.ajs-maximized.ajs-modeless .ajs-modal {
    position: fixed !important;
    min-height: 100% !important;
    max-height: none !important;
    margin: 0 !important;
  }
  .alertify.ajs-maximized .ajs-commands button.ajs-maximize {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=);
  }
  .alertify.ajs-maximized .ajs-dialog,
  .alertify.ajs-resizable .ajs-dialog {
    padding: 0;
  }
  .alertify.ajs-maximized .ajs-commands,
  .alertify.ajs-resizable .ajs-commands {
    margin: 14px 24px 0 0;
  }
  .alertify.ajs-maximized .ajs-header,
  .alertify.ajs-resizable .ajs-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 16px 24px;
  }
  .alertify.ajs-maximized .ajs-body,
  .alertify.ajs-resizable .ajs-body {
    min-height: 224px;
    display: inline-block;
  }
  .alertify.ajs-maximized .ajs-body .ajs-content,
  .alertify.ajs-resizable .ajs-body .ajs-content {
    position: absolute;
    top: 50px;
    right: 24px;
    bottom: 50px;
    left: 24px;
    overflow: auto;
  }
  .alertify.ajs-maximized .ajs-footer,
  .alertify.ajs-resizable .ajs-footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  .alertify.ajs-resizable:not(.ajs-maximized) .ajs-dialog {
    min-width: 548px;
  }
  .alertify.ajs-resizable:not(.ajs-maximized) .ajs-handle {
    display: block;
  }
  .alertify.ajs-movable:not(.ajs-maximized) .ajs-header {
    cursor: move;
  }
  .alertify.ajs-modeless .ajs-dimmer,
  .alertify.ajs-modeless .ajs-reset {
    display: none;
  }
  .alertify.ajs-modeless .ajs-modal {
    overflow: visible;
    max-width: none;
    max-height: 0;
  }
  .alertify.ajs-modeless.ajs-pinnable .ajs-commands button.ajs-pin {
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC);
  }
  .alertify.ajs-modeless.ajs-unpinned .ajs-modal {
    position: absolute;
  }
  .alertify.ajs-modeless.ajs-unpinned .ajs-commands button.ajs-pin {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=);
  }
  .alertify.ajs-modeless:not(.ajs-unpinned) .ajs-body {
    max-height: 500px;
    overflow: auto;
  }
  .alertify.ajs-basic .ajs-header {
    opacity: 0;
  }
  .alertify.ajs-basic .ajs-footer {
    visibility: hidden;
  }
  .alertify.ajs-frameless .ajs-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 1;
  }
  .alertify.ajs-frameless .ajs-footer {
    display: none;
  }
  .alertify.ajs-frameless .ajs-body .ajs-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog {
    padding-top: 0;
  }
  .alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog .ajs-commands {
    margin-top: 0;
  }
  .ajs-no-overflow {
    overflow: hidden !important;
    outline: 0;
  }
  .ajs-no-overflow.ajs-fixed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll !important;
  }
  .ajs-no-selection,
  .ajs-no-selection * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @media screen and (max-width: 568px) {
    .alertify .ajs-dialog {
      min-width: 150px;
    }
    .alertify:not(.ajs-maximized) .ajs-modal {
      padding: 0 5%;
    }
    .alertify:not(.ajs-maximized).ajs-resizable .ajs-dialog {
      min-width: initial;
      min-width: auto;
    }
  }
  @-moz-document url-prefix() {
    .alertify button:focus {
      outline: 1px dotted #3593d2;
    }
  }
  .alertify .ajs-dimmer,
  .alertify .ajs-modal {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-property: opacity, visibility;
    transition-property: opacity, visibility;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
  }
  .alertify.ajs-hidden .ajs-dimmer,
  .alertify.ajs-hidden .ajs-modal {
    visibility: hidden;
    opacity: 0;
  }
  .alertify.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
  }
  .alertify.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-duration: 250ms;
    animation-duration: 250ms;
  }
  .alertify .ajs-dialog.ajs-shake {
    -webkit-animation-name: ajs-shake;
    animation-name: ajs-shake;
    -webkit-animation-duration: 0.1s;
    animation-duration: 0.1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes ajs-shake {
    0%,
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  @keyframes ajs-shake {
    0%,
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  .alertify.ajs-slide.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-slideIn;
    animation-name: ajs-slideIn;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .alertify.ajs-slide.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-slideOut;
    animation-name: ajs-slideOut;
    -webkit-animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .alertify.ajs-zoom.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-zoomIn;
    animation-name: ajs-zoomIn;
  }
  .alertify.ajs-zoom.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-zoomOut;
    animation-name: ajs-zoomOut;
  }
  .alertify.ajs-fade.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-fadeIn;
    animation-name: ajs-fadeIn;
  }
  .alertify.ajs-fade.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-fadeOut;
    animation-name: ajs-fadeOut;
  }
  .alertify.ajs-pulse.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-pulseIn;
    animation-name: ajs-pulseIn;
  }
  .alertify.ajs-pulse.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-pulseOut;
    animation-name: ajs-pulseOut;
  }
  .alertify.ajs-flipx.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-flipInX;
    animation-name: ajs-flipInX;
  }
  .alertify.ajs-flipx.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-flipOutX;
    animation-name: ajs-flipOutX;
  }
  .alertify.ajs-flipy.ajs-in:not(.ajs-hidden) .ajs-dialog {
    -webkit-animation-name: ajs-flipInY;
    animation-name: ajs-flipInY;
  }
  .alertify.ajs-flipy.ajs-out.ajs-hidden .ajs-dialog {
    -webkit-animation-name: ajs-flipOutY;
    animation-name: ajs-flipOutY;
  }
  @-webkit-keyframes ajs-pulseIn {
    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes ajs-pulseIn {
    0%,
    100%,
    20%,
    40%,
    60%,
    80% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes ajs-pulseOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  @keyframes ajs-pulseOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  @-webkit-keyframes ajs-zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.25, 0.25, 0.25);
      transform: scale3d(0.25, 0.25, 0.25);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes ajs-zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.25, 0.25, 0.25);
      transform: scale3d(0.25, 0.25, 0.25);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes ajs-zoomOut {
    0% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.25, 0.25, 0.25);
      transform: scale3d(0.25, 0.25, 0.25);
    }
  }
  @keyframes ajs-zoomOut {
    0% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.25, 0.25, 0.25);
      transform: scale3d(0.25, 0.25, 0.25);
    }
  }
  @-webkit-keyframes ajs-fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes ajs-fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes ajs-fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes ajs-fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes ajs-flipInX {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }
  @keyframes ajs-flipInX {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }
  @-webkit-keyframes ajs-flipOutX {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  @keyframes ajs-flipOutX {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes ajs-flipInY {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }
  @keyframes ajs-flipInY {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }
  @-webkit-keyframes ajs-flipOutY {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }
  @keyframes ajs-flipOutY {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }
  @-webkit-keyframes ajs-slideIn {
    0% {
      margin-top: -100%;
    }
    100% {
      margin-top: 5%;
    }
  }
  @keyframes ajs-slideIn {
    0% {
      margin-top: -100%;
    }
    100% {
      margin-top: 5%;
    }
  }
  @-webkit-keyframes ajs-slideOut {
    0% {
      margin-top: 5%;
    }
    100% {
      margin-top: -100%;
    }
  }
  @keyframes ajs-slideOut {
    0% {
      margin-top: 5%;
    }
    100% {
      margin-top: -100%;
    }
  }
  .alertify-notifier {
    position: fixed;
    width: 0;
    overflow: visible;
    z-index: 1982;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .alertify-notifier .ajs-message {
    position: relative;
    width: 260px;
    max-height: 0;
    padding: 0;
    opacity: 0;
    margin: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
  }
  .alertify-notifier .ajs-message.ajs-visible {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 1;
    max-height: 100%;
    padding: 15px;
    margin-top: 10px;
  }
  .alertify-notifier .ajs-message.ajs-success {
    background: rgba(91, 189, 114, 0.95);
  }
  .alertify-notifier .ajs-message.ajs-error {
    background: rgba(217, 92, 92, 0.95);
  }
  .alertify-notifier .ajs-message.ajs-warning {
    background: rgba(252, 248, 215, 0.95);
  }
  .alertify-notifier .ajs-message .ajs-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAAFBJREFUGBl1j0EKADEIA+ve/P9f9bh1hEihNBfjVCO1v7RKVqJK4h8gM5cAPR42AkQEpSXPwMTyoi13n5N9YqJehm3Fnr7nL1D0ZEbD5OubGyC7a9gx+9eNAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 2px;
  }
  .alertify-notifier.ajs-top {
    top: 10px;
  }
  .alertify-notifier.ajs-bottom {
    bottom: 10px;
  }
  .alertify-notifier.ajs-right {
    right: 10px;
  }
  .alertify-notifier.ajs-right .ajs-message {
    right: -320px;
  }
  .alertify-notifier.ajs-right .ajs-message.ajs-visible {
    right: 290px;
  }
  .alertify-notifier.ajs-left {
    left: 10px;
  }
  .alertify-notifier.ajs-left .ajs-message {
    left: -300px;
  }
  .alertify-notifier.ajs-left .ajs-message.ajs-visible {
    left: 0;
  }
  .alertify-notifier.ajs-center {
    left: 50%;
  }
  .alertify-notifier.ajs-center .ajs-message {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .alertify-notifier.ajs-center .ajs-message.ajs-visible {
    left: 50%;
    -webkit-transition-timing-function: cubic-bezier(0.57, 0.43, 0.1, 0.65);
    transition-timing-function: cubic-bezier(0.57, 0.43, 0.1, 0.65);
  }
  .alertify-notifier.ajs-center.ajs-top .ajs-message {
    top: -300px;
  }
  .alertify-notifier.ajs-center.ajs-top .ajs-message.ajs-visible {
    top: 0;
  }
  .alertify-notifier.ajs-center.ajs-bottom .ajs-message {
    bottom: -300px;
  }
  .alertify-notifier.ajs-center.ajs-bottom .ajs-message.ajs-visible {
    bottom: 0;
  }
  .ajs-no-transition.alertify .ajs-dialog,
  .ajs-no-transition.alertify .ajs-dimmer,
  .ajs-no-transition.alertify .ajs-modal {
    -webkit-transition: none !important;
    transition: none !important;
    -webkit-animation: none !important;
    animation: none !important;
  }
  .ajs-no-transition.alertify-notifier .ajs-message {
    -webkit-transition: none !important;
    transition: none !important;
    -webkit-animation: none !important;
    animation: none !important;
  }
  @media (prefers-reduced-motion: reduce) {
    .alertify .ajs-dialog,
    .alertify .ajs-dimmer,
    .alertify .ajs-modal {
      -webkit-transition: none !important;
      transition: none !important;
      -webkit-animation: none !important;
      animation: none !important;
    }
    .alertify-notifier .ajs-message {
      -webkit-transition: none !important;
      transition: none !important;
      -webkit-animation: none !important;
      animation: none !important;
    }
  }
  /**
 * alertifyjs 1.13.1 http://alertifyjs.com
 * AlertifyJS is a javascript framework for developing pretty browser dialogs and notifications.
 * Copyright 2019 Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) 
 * Licensed under GPL 3 <https://opensource.org/licenses/gpl-3.0>*/
  .alertify .ajs-dialog {
    background-color: #fff;
    -webkit-box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.25);
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }
  .alertify .ajs-header {
    color: #000;
    font-weight: 700;
    background: #fafafa;
    border-bottom: #eee 1px solid;
    border-radius: 2px 2px 0 0;
  }
  .alertify .ajs-body {
    color: #000;
  }
  .alertify .ajs-body .ajs-content .ajs-input {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 4px;
    border-radius: 2px;
    border: 1px solid #ccc;
  }
  .alertify .ajs-body .ajs-content p {
    margin: 0;
  }
  .alertify .ajs-footer {
    background: #fbfbfb;
    border-top: #eee 1px solid;
    border-radius: 0 0 2px 2px;
  }
  .alertify .ajs-footer .ajs-buttons .ajs-button {
    background-color: transparent;
    color: #000;
    border: 0;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .alertify .ajs-footer .ajs-buttons .ajs-button.ajs-ok {
    color: #3593d2;
  }
  .alertify-notifier .ajs-message {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    text-align: center;
    border: solid 1px #ddd;
    border-radius: 2px;
  }
  .alertify-notifier .ajs-message.ajs-success {
    color: #fff;
    background: rgba(91, 189, 114, 0.95);
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  .alertify-notifier .ajs-message.ajs-error {
    color: #fff;
    background: rgba(217, 92, 92, 0.95);
    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  .alertify-notifier .ajs-message.ajs-warning {
    background: rgba(252, 248, 215, 0.95);
    border-color: #999;
  }
`;
