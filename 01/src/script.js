import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects

const group = new THREE.Group()
group.position.y = 1

group.rotation.y = Math.PI / 4
scene.add(group)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff11})
)
cube2.position.x = -2
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x1100ff})
)
cube3.position.x = 2
group.add(cube1, cube2, cube3)


//Sizes

const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

scene.add(camera)
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//Time

let time = Date.now()

//Animation

const tick = () => {
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

//Update objects

    cube3.rotation.x += 0.01
    cube2.position.x += 0.01
    cube2.position.y += -0.01
    cube1.rotation.z += 0.01
    group.rotation.y += 0.001 * deltaTime


    //Render
    renderer.render(scene, camera)


    //Call tick again on the next frame
    window.requestAnimationFrame(tick)
    renderer.render(scene, camera)
}
tick()