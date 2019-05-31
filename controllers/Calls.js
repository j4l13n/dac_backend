import dotenv from 'dotenv';
import Nexmo from 'nexmo';
const request = require('request');

dotenv.config();

const TO_NUMBER = process.env.TO_NUMBER;
const NEXMO_NUMBER = process.env.NEXMO_NUMBER;
const BASE_URL = process.env.BASE_URL;

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH;

const nexmo = new Nexmo(
	{
		apiKey: NEXMO_API_KEY,
		apiSecret: NEXMO_API_SECRET,
		applicationId: NEXMO_APPLICATION_ID,
		privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH
	},
	{ debug: true }
);

const event_url = BASE_URL + '/webhooks/events';
const answer_url = BASE_URL + '/audio/answer.json';
const questionOne_url = BASE_URL + '/webhooks/questionOne';

class Calls {
	call(req, res) {
		nexmo.calls.create({
			to: [
				{
					type: 'phone',
					number: TO_NUMBER
				}
			],
			from: {
				type: 'phone',
				number: NEXMO_NUMBER
			},
			answer_url: [ answer_url ]
		});
		res.end('Ok');
	}

	eventUrl(req, res) {
		const dtmf = req.body.dtmf;
        console.log(dtmf);
		switch(dtmf) {
			case '1':
				const stream = [
					{
						action: 'stream',
						streamUrl: [
							'https://raw.githubusercontent.com/j4l13n/voice-stream-audio-node/master/public/Info11.mp3'
                        ],
                        bargeIn: true
                    },
                    {
                        action: 'input',
                        eventUrl: [ questionOne_url ]
                    }
                ];
                res.json(stream);
				break;
			case '2':
				const talk = [
					{
						action: 'talk',
						text: `That number is ${dtmf}`
					}
                ];
                res.json(talk)
				break;
			default:
				const wrong = [
					{
						action: 'talk',
						text: 'you entered an invalid number'
					}
                ];
                res.json(wrong);
                break;
		}
    }
    
    questionOne(req, res) {
        const dtmf = req.body.dtmf;
        console.log(dtmf);
		switch(dtmf) {
			case '1':
				const streamOne = [
					{
						action: 'stream',
						streamUrl: [
							'https://raw.githubusercontent.com/j4l13n/voice-stream-audio-node/master/public/Info11.mp3'
                        ],
                        bargeIn: true
                    }
                ];
                res.json(streamOne);
				break;
			case '2':
				const talk = [
					{
						action: 'talk',
						text: `That number is ${dtmf}`
					}
                ];
                res.json(talk)
				break;
			default:
				const wrong = [
					{
						action: 'talk',
						text: 'you entered an invalid number'
					}
                ];
                res.json(wrong);
                break;
		}
    }
}

const calls = new Calls();
export default calls;
