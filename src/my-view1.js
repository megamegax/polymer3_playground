/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-list/iron-list.js';
import './my-card.js';
import Word from './model/Word.js';

import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get properties() {
    return {
      words: Array
    };
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        iron-list {
        height: 100vh;
        }
      </style>
      
 <!--      <template is="dom-repeat" items="{{words}}">
            <my-card word="[[item]]"/>
      </template>
      -->
      <iron-list items="[[words]]" as="item" grid="">
      <template>
                  <my-card word="[[item]]"/>
                  </template>
</iron-list>
      <iron-ajax auto
        url="https://tomcat.click4skill.hu/api/v3/lessons/1/words"
        handle-as="json"
        on-response="handleResponse"
        method="GET"
        headers='{"Mutation":"click_english"}'
        last-response="{{data}}"/>
     
    `;
  }

  handleResponse() {
    let words = this.data
      .filter(word => word.learnMode < 2)
      .map(word => new Word(word.id, word.motherLanguage, word.foreignLanguage));
    this.set('words', words);
  }
}

window.customElements.define('my-view1', MyView1);
