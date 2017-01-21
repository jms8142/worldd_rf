const assert = require('chai').assert
import Coin from '../../src/actors/Coin'

describe('coin object tests', function(){

	it('generates a coin with correct values', function(){
		const coin = new Coin(5)

		assert.equal(coin.value, 5)

	})

})
