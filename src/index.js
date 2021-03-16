import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";

import { LEDDocumentStatus } from "./js/led_status";

$(function(){

    let events, config, led_status;

    events = _.clone(Backbone.Events);
    config = {
        'node_selector': '.node',
        'led_selector': '.led' // led selector within node
    };
    led_status = new LEDDocumentStatus(events, config);

    events.trigger("leds.message", "Hello, World!");
});