const assert = require('chai').assert
import GameBoard from '../../src/actors/GameBoard'
import { GAME_COLS, GAME_ROWS } from '../../src/constants'
/*
beforeEach(function(){
    this.gameboard = new GameBoard()
});
*/

describe('gameboard tests', function(){

    const gameboard = new GameBoard()
    const tilemap = gameboard.createTileMap()
    /**
    * tile map should be 2 dimension array set with the dimensions of
    * GAME_COLS x GAME_ROWS
    * with a default object of val:0 and state:inactive
    **/
    it('generates a tile map with correct dimensions', function(){
        assert.typeOf(tilemap, 'Array')
        assert.equal(tilemap.length, GAME_COLS)
        assert.equal(tilemap[0].length, GAME_ROWS)

    })

    it('generates a tile map with correct default properties', function(){
        const results = tilemap.filter((val) => {
            return val.filter((v) => {
                return v.active === false && v.value === 0
            })
        })

        assert.equal(results.length, GAME_COLS)
        assert.equal(results[0].length, GAME_ROWS)
    })


});
