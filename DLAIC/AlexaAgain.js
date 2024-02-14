const Alexa = require("ask-sdk-core");

const randomNumber = (max = 10, min = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

class QnA {
  constructor() {
    this.operatorArray = ["+", "-"];
    this.operator = this.operatorArray[randomNumber(2)];
    this.param1 = randomNumber();
    this.getParam()
    //this.param2 = randomNumber(this.param1);
  }
  
  getParam(){
      if(this.operator === "+"){
          let temp = randomNumber()
            //console.log(temp)
            if(temp+this.param1 < 10){
                this.param2 = temp
            }else{
                this.getParam()
            }
      }else{
          this.param2 = randomNumber(this.param1)
      }
  }  

  getQuestion() {
    let operatorText;
    if (this.operator === "+") {
        operatorText = "plus";
    } else if (this.operator === "-") {
        operatorText = "minus";
    }

    return `${this.param1} ${operatorText} ${this.param2}`;
}


  getAnswer() {
    let result;
    switch (this.operator) {
      case "+":
        result = this.param1 + this.param2;
        break;
      case "-":
        if (this.param1 > this.param2) {
          result = this.param1 - this.param2;
        } else {
          result = this.param2 - this.param1;
        }
        break;
    }
    return result;
  }

generateOptions() {
    const answer = this.getAnswer();
    const options = [answer];

    const verifyOption = () => {
      let ran = randomNumber(10); // Generate random number between 0 and 9
      while (options.includes(ran)) {
        ran = randomNumber(10);
      }
      return ran;
    };

    for (let i = 0; i < 3; i++) {
      let option;
      do {
        option = randomNumber(10); // Generate random number between 0 and 9
      } while (options.includes(option));
      options.push(option);
    }

    const verifiedOption = verifyOption();

    options.sort(() => Math.random() - 0.5);
    return [verifiedOption, options];
}

}

let answerr;
const DOCUMENT_ID = "apl";

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
  return {
    type: "Alexa.Presentation.APL.RenderDocument",
    token: tokenId,
    document: {
      type: "Link",
      src: "doc://alexa/apl/documents/" + aplDocumentId
    },
    datasources: dataSources
  }
};
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = `Hello! Let's start a math quiz. Are you ready?`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Are you ready to begin the math quiz?")
      .getResponse();
  },
};


const confirmTouchIntentHandler = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'Alexa.Presentation.APL.UserEvent'
        && handlerInput.requestEnvelope.request.arguments.length > 0
    },handle(handlerInput){
        
        const speakOutput = `${handlerInput.requestEnvelope.arguments[0]}`;
        
        
        return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Please choose the correct answer.')
      .getResponse();
    }
}


const Mathhandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'Mathhandler'
    );
  },
  handle(handlerInput) {
    const newQ = new QnA();
    const question = newQ.getQuestion();
    answerr = newQ.getAnswer();
    const options = newQ.generateOptions();
      const datasource = {
      multipleChoiceTemplateData: {
        type: "object",
        properties: {
          backgroundImage: "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
          titleText: "Math Question",
          primaryText: question,
          choices: options[1],
          choiceListType: "alphabet",
          headerAttributionImage: "",
        },
      },
    };

    const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);

    handlerInput.responseBuilder.addDirective(aplDirective);


    const speakOutput = `Here's your math question: ${question}. Your options are ${options[1].join(', ')}.`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Please choose the correct answer.')
      .getResponse();
  },
};

const AnswerIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
        'Alexa.Presentation.APL.UserEvent'
    );
  },
  handle(handlerInput) {
    const userEvent = handlerInput.requestEnvelope.request;

    // Extract the user's choice from the userEvent data
    const userChoice = userEvent.arguments[0];

    // Extract the correct answer from the options array
    const answerr = handlerInput.requestEnvelope.request.token.split("_")[1];

    // Compare userChoice with the correct answer (answerr)
    if (parseInt(userChoice, 10) === parseInt(answerr, 10)) {
      const speakOutput = 'Correct answer! Great job!';

      // Generate the next question and options
      const newQ = new QnA();
      const question = newQ.getQuestion();
      const answerr = newQ.getAnswer();
      const options = newQ.generateOptions();

      const datasource = {
        multipleChoiceTemplateData: {
          question: question,
          options: options,
          answer: answerr
        }
      };

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .addDirective(createDirectivePayload("MultipleChoice", datasource))
        .getResponse();
    } else {
      const speakOutput = 'Incorrect answer. Try again.';

      // Generate the next question and options
      const newQ = new QnA();
      const question = newQ.getQuestion();
      const answerr = newQ.getAnswer();
      const options = newQ.generateOptions();

      const datasource = {
        multipleChoiceTemplateData: {
          question: question,
          options: options,
          answer: answerr
        }
      };

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .addDirective(createDirectivePayload("MultipleChoice", datasource))
        .getResponse();
    }
  },
};

const NoHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoHandler';
  },
  handle(handlerInput) {
    const speakOutput = 'I am not sure I Understand. Please say Start to start the math quiz and Stop to quit the skill';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Hello?")
      .getResponse();
  },
};

const StopIntent = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent') ||
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'StopIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Thank you for playing. Goodbye!';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withShouldEndSession(true)  // Add this line to explicitly end the session
      .getResponse();
  },
};

const HelpIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    );
  },
  handle(handlerInput) {
    const speakOutput = 'This is a math quiz skill. I will ask you math questions and provide multiple-choice options. You need to choose the correct answer. Are you ready to begin the quiz?';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Are you ready to begin the math quiz?")
      .getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
    console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    confirmTouchIntentHandler,
    Mathhandler,
    AnswerIntent,
    StopIntent,
    NoHandler,
    HelpIntent
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
