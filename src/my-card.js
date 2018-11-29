/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icons/av-icons';
import './shared-styles.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import Word from './model/Word.js';

class MyCard extends PolymerElement {

  static get properties() {
    return {
      word: {
        type: Word,
        observer: 'wordSet'
      },
      wordId: Number,
      text: String,
      english: {
        type: Boolean,
        value() {
          return true;
        }
      },

    };
  }

  static get template() {
    return html`
      <style include="shared-styles">
    
        :host {
          display: block;
            width:330px;
        }
        .flip{
        animation: 0.5s flip;
        }
         .flip-back{
        animation: 0.5s flip-back;
        }
        @keyframes flip {
         from {transform:skewY(0deg)}
         to {transform:skewY(180deg)};
        }  
        @keyframes flip-back {
         from {transform:skewY(180deg)}
         to {transform:skewY(0deg)};
        }
      </style>

      <div id="card" class="card layout vertical"  on-click="rotate" >
       <h1>[[text]]</h1>
       <hr>
       <div class="container flex-horizontal">
            <paper-icon-button icon="av:volume-up" on-click="playSound"/>
             <div class="layout flexchild" ></div>
        </div>
      </div>
    `;
  }

  wordSet(newValue, oldValue) {
    this.computeText();
    this.wordId = newValue.id;
  }

  computeText() {
    if (this.english) {
      this.set('text', this.word.firstText);
    } else {
      this.set('text', this.word.secondText);
    }
  }

  rotate(event) {
    this.english = !this.english;
    this.computeText();
    let card = event.target;
    if (card.classList.contains('flip')) {
      card.classList.remove('flip');
      card.classList.add('flip-back');
    } else {
      card.classList.add('flip');
      card.classList.remove('flip-back');
    }
  }

  playSound(event) {
    event.stopImmediatePropagation();
    let audio = new Audio(this.english ? this.word.firstSoundUrl : this.word.secondSoundUrl);
    audio.play();
  }
}

window.customElements.define('my-card', MyCard);
