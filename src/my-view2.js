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
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
  main {
    position: relative;
    background: white;
    padding: 10px 40px;
    font-size: 16px;
    font-family: 'Roboto', 'Noto', sans-serif;
    line-height: 24px;
    font-weight: 300;
    /* layout horizontal-reverse */
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }

  @media (max-width: 1000px) {
    main {
      -webkit-flex-direction: column;
          -ms-flex-direction: column;
              flex-direction: column;
      /* At < 1000px, the TOC floats to the top, so we can add back the right-padding. */
      padding-right: 40px;
    }
  }

  @media (max-width: 500px) {
    main {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  article {
    min-width: 0;  /* For some reason, this is non-0 */
    max-width: 800px;
    padding-right: 20px;
  }

  .article-wrapper.right-nav {
    width: calc(100% - 300px);  /* 300px is the width of the TOC */
  }

  .details-wrapper {
    display: block;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 20px;
    width: 300px;
  }

  .details-wrapper.fixed {
    position: fixed;
    right: 40px;  /* The <main> right padding */
  }

  .details-wrapper ul {
    list-style-type: none;
    font-size: 14px;
    margin: 0;
  }

  .details-wrapper ul[data-depth="1"], .details-wrapper ul[data-depth="3"] {
    padding: 0;
    margin-top: 10px;
  }

  .details-wrapper ul[data-depth="1"] a, .details-wrapper ul[data-depth="3"] a {
    color: black;
    font-weight: 500;
  }

  .details-wrapper ul[data-depth="2"] {
    font-weight: 300;
    padding: 0 20px;
  }

  .details-wrapper ul[data-depth="2"] a {
    font-weight: 300;
  }

  @media (max-width: 1000px) {
    .details-wrapper {
      padding: 0;
      max-width: 100%;
    }
  }

  details {
    display: block;
    will-change: transform;
  }

  @media (min-width: 1001px) {
    details {
      padding-left: 20px;
      border-left: 1px solid black;
    }
  }

  details summary {
    font-weight: bold;
    font-size: 15px;
    line-height: 24px;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  @media (max-width: 1000px) {
    details summary::-webkit-details-marker {
      display: inline-block;
    }
  }

  pre {
    background: white;
    font-weight: 400;
  }

  h1 {
    font-size: 40px;
    font-weight: 300;
    line-height: 48px;
  }

  h2 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    border-bottom: 1px solid #f50057;
    margin: 20px 0;
  }

  h3 {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 24px;
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }

  h4, p.caption {
    font-size: 16px;
    font-weight: 500;
  }

  p.caption {
    margin-bottom: 0;
  }

  a > code {
    color: #1e88e5 !important;
  }

  table {
    border-collapse: collapse;
  }

  table th {
    text-align: left;
    padding: 12px 12px 12px 0px;

  }

  table td {
    padding: 12px 12px 12px 0px;
    border-top: 1px solid #cfd8dc;
    /* blue-grey-100 */
    vertical-align: top;
  }

  .alert {
    padding: 10px 10px 10px 44px;  /* 34px from the icon + 10px left padding */
    margin: 30px;
    border-radius: 3px;
    font-size: 15px;
  }

  @media (max-width: 767px) {
    .alert {
      margin: 0px;
    }
  }

  .alert:before {
    display: inline-block;  /* Hack to have the icon in a separate column than the text */
    float: left;
    margin-left: -34px;  /* the icon is 24px wide, + 10px padding */
  }

  .alert.alert-success, .alert.alert-tip {
    background-color: #E8F5E9;
    border: 1px solid #C8E6C9;
  }

  .alert.alert-success:before, .alert.alert-tip:before {
    content: url(/images/alerts/tip.svg);
  }

  .alert.alert-info {
    background-color: #E1F5FE;
    border: 1px solid #B3E5FC;
  }

  .alert.alert-info:before {
    content: url(/images/alerts/info.svg);
  }

  .alert.alert-error, .alert.alert-warning {
    background-color: #FBE9E7;
    border: 1px solid #FFCCBC;
  }

  .alert.alert-error:before, .alert.alert-warning:before {
    content: url(/images/alerts/warning.svg);
  }

  /* Helpers to automagically lay out in a row and resize images */
  .image-container {
    width: 100%;
    max-width: 100%;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .image-container .image-wrapper {
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin: 0 10px;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }
      </style>

      <div class="card">
      <article>
<p>In this tutorial, you'll build your first custom element with Polymer 3.0. You’ll create a simple toggle button:</p>
<p><img src="https://polymer-library.polymer-project.org/images/3.0/first-element/sample-toggles.png" alt="Sample star-shaped toggle buttons, showing pressed and unpressed state"></p>
<p>You’ll be able to use the toggle button with simple markup like this:</p>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">icon-toggle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">icon-toggle</span>&gt;</span>
</code></pre>
<h2 id="step-1-set-up" class="has-permalink">Step 1: Set up</h2>
<p>In this step, you'll:</p>
<ul>
<li><a href="view2#install">Install Polymer CLI</a>.</li>
<li><a href="view2#download">Download the starting code</a>.</li>
<li><a href="view2#run">Install dependencies and run the demo</a>.</li>
</ul>
<p>To follow this tutorial, you’ll first need to install some command line tools. See the <a href="https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli">Polymer CLI install guide</a> for full instructions on setting up Polymer CLI and its prerequisites (Git, npm, and Node.js).</p>
<h3 id="install" class="has-permalink">Install Polymer CLI</h3>
<p>If you're comfortable that you have all the prerequisites installed, update Polymer CLI with the following command:</p>
<pre><code>npm install -g polymer-<span class="hljs-keyword">cli</span>
</code></pre>
<p>If you don't have the prerequisites, or you're not sure whether you have them, follow the <a href="https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli">Polymer CLI install guide</a>.</p>
<h3 id="download" class="has-permalink">Download the starting code</h3>
<p>Download the starting code for this tutorial by running the following command:</p>
<pre><code class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/PolymerLabs/polymer-3-first-element.git
</code></pre>
<p>Open the project folder:</p>
<pre><code class="language-bash"><span class="hljs-built_in">cd</span> polymer-3-first-element
</code></pre>
<p>Your top-level project folder should look something like this:</p>
<pre>README.md
demo
icon-toggle-finished
icon-toggle.js
index.html
package.json
polymer.json
</pre>
<p>The main file you’ll work with is <code>icon-toggle.js</code> in the top-level project folder. This file contains the definition for your custom element, which you will modify.</p>
<h3 id="run" class="has-permalink">Install dependencies and run the demo</h3>
<p>To install the element's dependencies and run the demo:</p>
<ol>
<li>
<p>Run <code>npm install</code> from the repo directory:</p>
<pre><code>npm <span class="hljs-keyword">install</span>
</code></pre>
<p>This installs the components and dependencies required to use the Polymer library and other web components.</p>
<p>You will now see an extra folder named <code>node_modules</code> and an extra file named <code>package-lock.json</code>:</p>
<pre>README.md
demo
icon-toggle-finished
icon-toggle.js
index.html
node_modules
package.json
package-lock.json
polymer.json
</pre>
<ul>
<li><code>node_modules</code> is where the project's dependencies are installed.</li>
<li><code>package-lock.json</code> contains some npm-related dependency-management info.</li>
</ul>
</li>
<li>
<p>Run the Polymer development server from the root project directory:</p>
<pre><code>polymer serve <span class="hljs-comment">--open</span>
</code></pre>
<p>You’ll see something like this:</p>
</li>
</ol>
<p><img src="https://polymer-library.polymer-project.org/images/3.0/first-element/starting-state.png" width="500px" alt="Initial state of the demo. The demo shows three icon-toggle elements, two labeled 'statically-configured icon toggles' and one labeled 'data-bound icon toggle'. Since the icon toggles are not implemented yet, they appear as placeholder text reading 'Not much here yet'." title="Initial demo"></p>
</article>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
