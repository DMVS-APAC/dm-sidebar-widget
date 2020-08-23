import getParam from "../utilities/get-query-params";

import infWidget from "./interfaces/InfWidget";

export default class DmWidget {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private widgetParams: infWidget = null;
    
    // Showing debug console that need to check
    private debugMode: boolean = false;

    private apiReady: Event;
    private widgetExtracted: Event;
    private searchParamsReady: Event;

    public constructor(rootEls: NodeListOf<HTMLDivElement>) {
        this.rootEls = rootEls;

        if (getParam('dmdebug') != null) {
            this.debugMode = getParam('dmdebug') != 'false';
        }

        this.addEventListeners();
        this.registerNewEvents();
        this.extractAttrs();
    }

    private addEventListeners() {

    }

    private registerNewEvents() {
        this.apiReady = new Event('dm-api-ready');
        this.widgetExtracted = new Event('dm-player-extracted');
        this.searchParamsReady = new Event('dm-search-params-ready');
    }

    private extractAttrs() {
        const rootEl = this.rootEls[0];

        this.widgetParams = {
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            playlist: rootEl.getAttribute("playlist") ? rootEl.getAttribute("playlist") : "",
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
        };

        if (this.debugMode === true) {
            console.log("%c DM Player Params: ", "background: #56C7FF; color: #232323", this.widgetParams);
        }
    }

}