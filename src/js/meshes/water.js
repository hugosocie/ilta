var _ = require( '../const.js' );

module.exports = function() {

    return function(){

        var size = _.chunk - 0.05,
            vertices = _.chunk * 2;

        var material = this.material( 0x499ddc );

        material.transparent = true;
        material.opacity = 0.7;

        var geometry = new THREE.BoxGeometry(
            size, 1.2, size,
            vertices, 1, vertices
        );

        geometry.dynamic = true;

        for( var i = 0; i < geometry.vertices.length; i++ ){

            var v = geometry.vertices[ i ];

            v.side = v.y > 0 ? 'up' : 'down';
            v.dir = 'up';

            var h = ( ( _.noises.alt.simplex2(
                v.x / 20, 
                v.z / 20
            ) * 0.8 ) + 3 );

            h = ( h + Math.exp( h / 4 ) ) - 6;
            h = h + Math.random() / 6;

            v.y += h;

        }

        _.mesh.water = new THREE.Mesh( geometry, material );

        _.mesh.water.position.x = -.5;
        _.mesh.water.position.y = -1.4;
        _.mesh.water.position.z = -.5;

        _.scene.add( _.mesh.water );

    }

}();