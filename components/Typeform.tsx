"use client"

import {Form} from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
// @ts-ignore
import {registerCoreBlocks} from "@quillforms/react-renderer-utils";
import "./styles.css";
import {useState} from "react";

function isValidEthereumAddress(address: string) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}


registerCoreBlocks();
export default function Typeform() {
    let [endMessage, setEndMessage] = useState("");

    return (<div style={{width: "100%", height: "100vh"}}>
        <Form
            formId={1}
            formObj={{
                blocks: [{
                    name: "welcome-screen", id: "welcome", attributes: {
                        label: "Become swissDAO Contributor",
                        description: "Congratulations on your journey with swissDAO so far! You have earned your right to join the ranks of contributors. There's just one final quest standing between you and this exciting role, a quest that will showcase your readiness to join a guild, earn XP and AP with your contributions and actively shape the future of swissDAO and web3.",
                        attachment: {
                            type: "image", url: "/swissdao_logo.png",
                        },
                        attachmentMaxWidth: "300px",
                    },
                }, {
                    name: "short-text", id: "ethereum_address", attributes: {
                        label: "Ethereum Wallet Address", required: true,
                    },
                }, {
                    name: "multiple-choice", id: "principle", attributes: {
                        required: true, verticalAlign: true, label: "What is one of our principles?", choices: [{
                            label: "Meritocracy", value: "Meritocracy",
                        }, {
                            label: "Plutocracy", value: "Plutocracy",
                        }, {
                            label: "Democracy", value: "Democracy",
                        },],
                    },
                }, {
                    name: "multiple-choice", id: "ensure_people", attributes: {
                        required: true,
                        verticalAlign: true,
                        label: "How do we ensure that active people have stronger voting power than inactive people?",
                        choices: [{
                            label: "The core team distributes Voting Power to those who, in its opinion, are most active",
                            value: "most_active",
                        }, {
                            label: "We don't, 1 Person = 1 Vote", value: "equal",
                        }, {
                            label: "Experience Points and Activity Points", value: "experience_points",
                        },],
                    },
                }], settings: {
                    animationDirection: "vertical",
                    disableWheelSwiping: false,
                    disableNavigationArrows: false,
                    disableProgressBar: false,
                    showLettersOnAnswers: false,
                    saveAnswersInBrowser: false,
                }, theme: {
                    font: "Roboto", //fontSize: MediaDevices,
                    //fontLineHeight: MediaDevices,
                    backgroundColor: "#000000",
                    backgroundImage: "", /*backgroundImageFocalPoint: {
                            x: number,
                            y: number,
                        },*/
                    logo: {
                        src: "/swissdao_logo.png",
                    },
                    questionsColor: "#ffffff",
                    questionsLabelFont: "Roboto", //questionsLabelFontSize: MediaDevices,
                    //questionsLabelLineHeight: MediaDevices,
                    questionsDescriptionFont: "Roboto", //questionsDescriptionFontSize: MediaDevices,
                    //questionsDescriptionLineHeight: MediaDevices,
                    answersColor: "#ffffff",
                    buttonsFontColor: "#000000", //buttonsFontSize: MediaDevices,
                    //questionsDescriptionMargin: MediaDevices,
                    //textInputAnswers: MediaDevices,
                    typographyPreset: 'md', //answersMargin: MediaDevices,
                    /*buttonsPadding: {
                        top: MediaDevices,
                        bottom: MediaDevices,
                        left: MediaDevices,
                        right: MediaDevices,
                    },*/
                    buttonsBgColor: "#ffffff",
                    buttonsBorderRadius: 5,
                    buttonsBorderWidth: 0,
                    buttonsBorderColor: "#ffffff",
                    errorsFontColor: "#000000",
                    errorsBgColor: "#ffffff",
                    progressBarFillColor: "#ffffff",
                    progressBarBgColor: "#ffffff", //formFooterBgColor: MediaDevices,
                }, messages: {
                    'block.defaultThankYouScreen.label': endMessage,
                }
            }}
            onSubmit={(data: any, {completeForm, setIsSubmitting}) => {
                let a = {
                    "answers": {
                        "ethereum_address": {
                            "value": "0xaE53fCBCa14c24238eA5bA021DF497753394B876",
                        },
                        "principle": {
                            "value": [
                                "Meritocracy"
                            ],
                        },
                        "ensure_people": {
                            "value": [
                                "most_active"
                            ],
                        }
                    }
                }

                const principle = data.answers["principle"]["value"][0] === "Meritocracy";
                const ensure_people = data.answers["ensure_people"]["value"][0] === "most_active";
                const ethereum_address = isValidEthereumAddress(data.answers["ethereum_address"].value);

                (principle && ensure_people && ethereum_address) ? setEndMessage("You passed the swissDAO Contributor quest!") : setEndMessage("You failed the swissDAO Contributor quest!");

                setTimeout(() => {
                    setIsSubmitting(false);
                    completeForm();
                }, 500);
            }}
            applyLogic/>
    </div>);
};