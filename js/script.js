/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'spacegb': 'spacebackgr.webp',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	// 'spacegb': 'spacebackgr.webp',
	'lowpolyforest': 'low-poly_forest.png'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});
/*
monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});
*/
/*
monogatari.script({
    'Title': [
        'centered Introduction',
        'Detective Mystery Game',
        'Meet Detective Smith'
    ],

    'Start': [
        {
            'Choice': {
                'Dialog': 'Detective Smith is on a new case. What should he investigate first?',
                'Investigate Crime Scene': {
                    'Text': 'Investigate the Crime Scene',
                    'Do': 'jump CrimeScene'
                },
                'Question Witnesses': {
                    'Text': 'Question Witnesses',
                    'Do': 'jump Witnesses'
                }
            }
        }
    ],

    'CrimeScene': [
        'show scene crime_scene.jpg',
		// 'show image spacegb',
        'Detective Smith arrives at the crime scene.',
        'He finds some clues that lead him to a nearby alley.',
        {
            'Choice': {
                'Dialog': 'What should Detective Smith do next?',
                'Follow Clues': {
                    'Text': 'Follow the Clues',
                    'Do': 'jump Alley'
                },
                'Call for Backup': {
                    'Text': 'Call for Backup',
                    'Do': 'jump BadEnding'
                }
            }
        }
    ],

    'Alley': [
        // 'show scene alley.jpg',
        'show scene lowpolyforest',
        'Detective Smith follows the clues to a dark alley.',
        'He encounters a suspicious-looking person.',
        {
            'Choice': {
                'Dialog': 'What should Detective Smith do?',
                'Confront the Person': {
                    'Text': 'Confront the Person',
                    'Do': 'jump Confrontation'
                },
                'Stay Hidden': {
                    'Text': 'Stay Hidden',
                    'Do': 'jump BadEnding'
                }
            }
        }
    ],

	'Confrontation': [
		'show scene confrontation.jpg',
		'Detective Smith confronts the person, who turns out to be the criminal!',
		{
			'Choice': {
				'Dialog': 'What would you like to do?',
				'Back to Menu': {
					'Text': 'Go back to Menu',
					'Do': 'jump Title'
				},
				'Play Again': {
					'Text': 'Play Again',
					'Do': 'jump Start'
				}
			}
		}
	],


    'Witnesses': [
        'Detective Smith interviews witnesses.',
        'He gathers valuable information about the suspect.',
        {
            'Choice': {
                'Dialog': 'What should Detective Smith do next?',
                'Search Suspect\'s House': {
                    'Text': 'Search Suspect\'s House',
                    'Do': 'jump SuspectHouse'
                },
                'Check Alibi': {
                    'Text': 'Check Suspect\'s Alibi',
                    'Do': 'jump BadEnding'
                }
            }
        }
    ],

    'SuspectHouse': [
        'show scene suspect_house.jpg',
        'Detective Smith searches the suspect\'s house and finds incriminating evidence.',
        'Congratulations! Detective Smith has solved the case!'
    ],

    'BadEnding': [
        'The investigation did not go well.',
        'Game Over. Play again?',
		{
			'Choice': {
				'Dialog': 'What would you like to do?',
				'Back to Menu': {
					'Text': 'Go back to Menu',
					'Do': 'jump Title'
				},
				'Play Again': {
					'Text': 'Play Again',
					'Do': 'jump Start'
				}
			}
		}
    ]
});
*/
monogatari.script({
    'Title': [
        'centered Вступление',
        'Чёт',
        'Встречайте чёт'
    ],
    'Start': [
        'Текстик'
    ],
});
