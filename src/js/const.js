module.exports = function() {

    return {

        scene    : null,
        camera   : null,
        renderer : null,
        controls : null,
        stats    : null,

        lights : [],
        meshes : [],

        chunk : 32,
        seed  : 0,

        noises : {
            alt : null
        }

    }

}();