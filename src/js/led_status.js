import _ from "underscore";

export class LEDStatus {

    constructor(consumer) {
        if (_.isEmpty(consumer)) {
            console.error("Empty consumer provided");
            return;
        }
        this.consumer = consumer;
        this.consumer.on("leds.message", this.on_leds_message, this);
    }

    on_leds_message(message) {
        /*
        message is a dictionary with following keys
            
            * status - str - can be one of {'ocr_start', 'txt_ready', 'hocr_ready'}
            * page - dictionary with following keys:
                - page_id
                - document_id
                - page_number
        */
        if (_.isEmpty(message)) {
            return ;
        }

        console.log(message);
    }
}
