import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";

import { LEDStatus }  from "./js/led_status";

$(function(){

    let events = _.clone(Backbone.Events);
    let led_status = new LEDStatus(events);

    events.trigger("leds.message", "Hello, World!");
});