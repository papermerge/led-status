import { assert } from "chai";

import _ from "underscore";
import $ from "jquery";
import Backbone from "backbone";

import { LEDDocumentStatus } from '../src/js/led_status.js';

describe("Basic test suite", function() {

  it("Can instanciate LEDDocumentStatus", function() {

    let dispatcher = _.clone(Backbone.Events);
    let doc_status = new LEDDocumentStatus(dispatcher, {'use_sockets': false});

    assert.isDefined(doc_status);

  });

  it("Changes status from unkown to in-progress", function() {
    let dispatcher = _.clone(Backbone.Events);

    let doc_status = new LEDDocumentStatus(dispatcher, {'use_sockets': false});

    assert.equal(
        $(".led > .led-unknown").length, 1,
        "Test should start with initial state led-unknown"
    );
    dispatcher.trigger(
        "leds.document", {"document_id": 1, "type": "ocrdocument.started"}
    );
    assert.equal(
        $(".led > .led-unknown").length, 0,
        "led-unknown was replaced"
    );
    assert.equal(
        $(".led > .led-in-progress").length, 1,
        "Document ID=1 led now indicate status -in progress-"
    );
  });

});
