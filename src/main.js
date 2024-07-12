import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

import CollectingStarScene from '../CollectingStarsScene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [CollectingStarScene]
}

export default new Phaser.Game(config)
