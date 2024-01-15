"use client"

import {Form} from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
// @ts-ignore
import {registerCoreBlocks} from "@quillforms/react-renderer-utils";
import "./styles.css";
import {useState} from "react";

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
                },

                    {
                        name: "statement", id: "personal_information", attributes: {
                            label: "Personal Information",
                            description: "To ensure we can contact you in the future we need to gather a few details. You will then receive an invitation to view the swissDAO calendar and get added to our Notion page",
                            buttonText: "Continue",
                            quotationMarks: false,
                        },

                    }, {
                        name: "group", id: "group_name", attributes: {
                            label: "Please fill the following..."
                        }, innerBlocks: [{
                            id: "first_name", name: "short-text", attributes: {
                                label: "First Name", required: true, placeholder: "Write your answer here!"
                            }
                        }, {
                            id: "last_name", name: "short-text", attributes: {
                                label: "Last Name", required: true, placeholder: "Write your answer here!"
                            }
                        }, {
                            id: "email", name: "email", attributes: {
                                label: "Email", required: true, placeholder: "Write your email here!"
                            }
                        }]
                    }, {
                        name: "short-text", id: "ens_name", attributes: {
                            label: "Ethereum Wallet AddressThis question is required.",
                            description: "No ENS",
                            required: true,
                        },
                    }, {
                        name: "short-text", id: "telegram_handle", attributes: {
                            label: "Telegram Handle",
                        },
                    }, {
                        name: "multiple-choice", id: "media_consent", attributes: {
                            required: true,
                            verticalAlign: true,
                            label: "Do you consent to having photos taken of you at events and workshops that may be posted on social media?",
                            choices: [{
                                label: "Yes", value: "Yes",
                            }, {
                                label: "No", value: "No",
                            },],
                        },
                    }, {
                        name: "statement", id: "swissdaoprimer", attributes: {
                            label: "swissDAO Primer",
                            description: "As we continue to weave strong bonds within our community, it's crucial that we all share a common vision and align with our core goals and principles. For that, please read through our swissDAO Primer and answer the questions below.",
                            buttonText: "Continue",
                            quotationMarks: false,
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
                    }, {
                        name: "multiple-choice", id: "fake_1", attributes: {
                            required: true, verticalAlign: true, label: "Pick the correct answer (1/3)", choices: [{
                                label: "1", value: "1",
                            }, {
                                label: "2", value: "2",
                            }, {
                                label: "3", value: "3",
                            },],
                        },
                    }, {
                        name: "multiple-choice", id: "fake_2", attributes: {
                            required: true, verticalAlign: true, label: "Pick the correct answer (2/3)", choices: [{
                                label: "1", value: "1",
                            }, {
                                label: "2", value: "2",
                            }, {
                                label: "3", value: "3",
                            },],
                        },
                    }, {
                        name: "multiple-choice", id: "fake_3", attributes: {
                            required: true, verticalAlign: true, label: "Pick the correct answer (3/3)", choices: [{
                                label: "1", value: "1",
                            }, {
                                label: "2", value: "2",
                            }, {
                                label: "3", value: "3",
                            },],
                        },
                    }, /*
                    {
                        name: "statement", id: "guilds", attributes: {
                            label: "Guilds",
                            description: "Our Guilds for the heart of our community and our productive action. Every Guild has designated areas of expertise and together form an unbeatable community. If you're keen on a particular guild or multiple guilds, it is vital to familiarize yourself with the nuances and expectations of each one. Learn more about the Guilds here: [Insert Link]",
                            buttonText: "Continue",
                            quotationMarks: false,
                        },

                    },
                    {
                        name: "multiple-choice", id: "community_choice", attributes: {
                            required: true,
                            verticalAlign: true,
                            label: "Which guilds are most appealing to you and are you considering to join?",
                            choices: [{
                                label: "Community", value: "Community",
                            }, {
                                label: "Design", value: "Design",
                            }, {
                                label: "Development", value: "Development",
                            }, {
                                label: "Education", value: "Education",
                            }, {
                                label: "Event", value: "Event",
                            }, {
                                label: "Media", value: "Media",
                            }, {
                                label: "Partnership", value: "Partnership",
                            }, {
                                label: "Project", value: "Project",
                            }, {
                                label: "Treasury", value: "Treasury",
                            },],
                        },
                    },

                    {
                        name: "number", id: "hours_available", attributes: {
                            required: true,
                            label: "How much time do you have weekly available to contribute to swissDAO?",
                        },
                    },*/
                    /*
                        {
                            name: "statement",
                            id: "survey_start",
                            attributes: {
                                label: "Survey",
                                description: "The last part is to better understand your goals and motivation behind joining swissDAO.",
                                buttonText: "Continue",
                                quotationMarks: false,
                            },
                        },
                        {
                            name: "statement",
                            id: "survey_title_motivation",
                            attributes: {
                                label: "Motivation and Engagement",
                                buttonText: "Continue",
                                quotationMarks: false,
                            },
                        },
                        {
                            name:'short-text',
                            id:'survey_motivation_1',
                            attributes:{
                                label:'How did you first hear about swissDAO and what motivated you to become a contributor?',
                                required:true,
                            }
                        },
                        {
                            name:'short-text',
                            id:'survey_motivation_2',
                            attributes:{
                                label:'Where were you when you decided to join swissDAO?',
                                required:true,
                            }
                        },
                        {
                            name:'short-text',
                            id:'survey_motivation_3',
                            attributes:{
                                label:'What specific skills or interests do you feel that you bring to the swissDAO community?',
                                required:true,
                            }
                        },
                        {
                            name:'multiple-choice',
                            id:'survey_motivation_4',
                            attributes:{
                                label:'How often do you actively participate in swissDAO activities/events?',
                                required:true,
                                verticalAlign:true,
                                choices:[
                                    {
                                        label: "Weekly",
                                        value: "Weekly",
                                    },
                                    {
                                        label: "Bi-Weekly",
                                        value: "Bi-Weekly",
                                    },
                                    {
                                        label: "Monthly",
                                        value: "Monthly",
                                    },
                                    {
                                        label: "Occasionally",
                                        value: "Occasionally",
                                    },
                                ],
                            }
                        },
                        {
                            name:'long-text',
                            id:'survey_motivation_5',
                            attributes:{
                                label:'What are your expectations from swissDAO in terms of personal or professional growth?This question is required.',
                                required:true,
                            }
                        },
                        {
                            name:'long-text',
                            id:'survey_motivation_6',
                            attributes:{
                                label:'How likely are you to recommend joining swissDAO to others interested in web3, and what factors influence your recommendation?',
                                required:true,
                            }
                        },
                        {
                            name:'statement',
                            id:'survey_title_project',
                            attributes:{
                                label:'Project and Vision',
                                buttonText:'Continue',
                                quotationMarks:false,
                            }
                        },
                        {
                            name: 'short-text',
                            id: 'survey_project_1',
                            attributes: {
                                label: 'Where do you see swissDAO going?',
                                required: true,
                            }
                        },
                        {
                            name: 'multiple-choice',
                            id: 'survey_project_2',
                            attributes: {
                                label: 'Which aspects of swissDAO are most appealing to you?',
                                required: true,
                                verticalAlign:true,
                                choices: [
                                    {
                                        label: 'Workshops and Education Classes',
                                        value: 'Workshops and Education Classes',
                                    },
                                    {
                                        label: 'Community Building Events',
                                        value: 'Community Building Events',
                                    },
                                    {
                                        label: 'Gaining Practical DAO Experience',
                                        value: 'Gaining Practical DAO Experience',
                                    },
                                    {
                                        label: 'Hackathons',
                                        value: 'Hackathons',
                                    },
                                    {
                                        label: 'Venture Building',
                                        value: 'Venture Building',
                                    }
                                ],
                            }
                        },
                        {
                            name: "statement",
                            id: "survey_title_experience",
                            attributes: {
                                label: "Perception and Experience",
                                buttonText: "Continue",
                                quotationMarks: false,
                            },
                        },
                        {
                            name: 'slider',
                            id: 'survey_experience_1',
                            attributes: {
                                label: 'How would you rate the community feeling in swissDAO?',
                                required: true,
                                max: 10,
                                min: 1,
                                step: 1,
                            }
                        },
                        {
                            name: 'long-text',
                            id: 'survey_experience_2',
                            attributes: {
                                label: 'Are there any particular challenges or pain points you have encountered while participating in swissDAO? If yes, please describe them.',
                            }
                        },
                        {
                            name: 'long-text',
                            id: 'survey_experience_3',
                            attributes: {
                                label: 'What kind of support or resources do you feel would enhance your involvement in swissDAO?',
                            }
                        },*/], settings: {
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
            onSubmit={(data, {completeForm, setIsSubmitting}) => {
                let rightAnswers = {
                    "principle": ["Meritocracy"],
                    "ensure_people": ["most_active"],
                    "fake_1": ["1"],
                    "fake_2": ["2"],
                    "fake_3": ["3"],
                };
                let res = 0;
                for (let key in rightAnswers) {
                    if (JSON.stringify(data.answers[key].value) === JSON.stringify(rightAnswers[key])) res++;
                }
                if (res / Object.keys(rightAnswers).length >= 0.7) setEndMessage("You passed the swissDAO Contributor quest!"); else setEndMessage("You failed the swissDAO Contributor quest!");

                setTimeout(() => {
                    setIsSubmitting(false);
                    completeForm();
                }, 500);
            }}
            applyLogic/>
    </div>);
};