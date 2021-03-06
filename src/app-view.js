import {html} from '@polymer/polymer/polymer-element.js';

export default html`
<style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
    }

    app-header {
        color: #fff;
        background-color: var(--app-primary-color);
    }

    app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
    }

    .drawer-list {
        margin: 0 20px;
    }

    .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
    }

    .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
    }
</style>

<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
</app-location>

<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
</app-route>

<app-drawer-layout fullbleed="" narrow="{{narrow}}">
    <!-- Drawer content -->
    <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar>Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="demo" href="[[rootPath]]demo">Demó</a>
            <a name="setup" href="[[rootPath]]setup">Polymer berittyentése</a>
            <a name="links" href="[[rootPath]]links">Linkek</a>
        </iron-selector>
    </app-drawer>

    <!-- Main content -->
    <app-header-layout has-scrolling-region="">

        <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
                <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
                <div main-title="">My App</div>
            </app-toolbar>
        </app-header>

        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="demo"></my-view1>
            <my-view2 name="setup"></my-view2>
            <my-view3 name="links"></my-view3>
            <my-view404 name="view404"></my-view404>
        </iron-pages>
    </app-header-layout>
</app-drawer-layout>`;