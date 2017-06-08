/*
 * Copyright 2017 Adobe Systems Incorporated. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND,
 * either express or implied.  See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
var Alexa = require('alexa-sdk');   //Alexa SDK

var APP_ID = null;
/* ignored in this demo */

//Speech strings
var languageStrings = {
    "en-US": {
        "translation": {
            "WELCOME" : "Welcome to Adobe Help.",
            "WELCOME_REPROMPT" : "Welcome",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

// Create default handlers
var newSessionHandlers = {
    'LaunchRequest': function () {
        //Skill was launched

        this.emit(':tell', "Welcome to Adobe Help.");
    }
};

var main = function (event) {
    console.log('ALEXA Event', event.request.type + '!');

    return new Promise(
        (resolve, reject) => {
            try {
                var alexaSDK = Alexa.handler(event,
                    {
                        succeed: resolve,
                        fail: reject
                    });
                alexaSDK.APP_ID = APP_ID;
                alexaSDK.resources = languageStrings;
                alexaSDK.registerHandlers(newSessionHandlers);
                return alexaSDK.execute();
            } catch (err) {
                console.log(err);
                reject(err.toString());
            }
        });
};
