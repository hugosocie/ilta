var _ = require( './const.js' );

module.exports = function() {

    return function(){

        _.stats.begin();    

        for( var i = 0; i < _.mesh.water.geometry.vertices.length; i++ ){
            var v = _.mesh.water.geometry.vertices[ i ];

            var h = 0.005 + ( ( Math.random() -0.5 ) / 100 );

            if( v.side === 'up' ) {

                if( v.dir === 'up' ) {
                    if( v.y < -0.5 ) {
                        v.y += h;
                    } else {
                        v.y -= h;
                        v.dir = 'down';
                    }
                } else {
                    if( v.y > -0.8 ) {
                        v.y -= h;
                    } else {
                        v.y += h;
                        v.dir = 'up';
                    }
                }

            }
        }

        _.mesh.water.geometry.verticesNeedUpdate = true;

        _.renderer.render( _.scene, _.camera );

        requestAnimationFrame( this.loop );
        _.stats.end();

    }

}();