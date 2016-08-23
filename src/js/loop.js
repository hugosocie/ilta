var _ = require( './const.js' );

module.exports = function() {

    return function(){

        _.stats.begin();

        _.renderer.render( _.scene, _.camera );         

        requestAnimationFrame( this.loop );
        _.stats.end();

    }

}();