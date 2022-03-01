<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    TextureLoader,
    EquirectangularReflectionMapping,
    MeshToonMaterial,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
    props: {},
    async mounted() {
        const canvas = this.$refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.25,
            20
        );
        camera.position.set(0, 0, 3);
        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: canvas,
        });
        renderer.setClearColor(0xefefef, 1); //设置背景颜色
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0, 0);
        controls.autoRotate = true;
        this.controls = controls;
        controls.autoRotateSpeed = 3;

        const texture = await new TextureLoader().load("/env.jpg");
        const loader = new GLTFLoader();
        loader.load("/dwendwen.gltf", (gltf) => {
            gltf.scene.traverse((child) => {
                if (child.name == "outer" || child.name == "mask") {
                    child.material.envMap = texture;
                    child.material.envMap.mapping =
                        EquirectangularReflectionMapping;
                    child.material.envMapIntensity = 2;
                } else if (child.name == "body") {
                    var map = child.material.map;
                    child.material = new MeshToonMaterial({ map: map });
                }
            });
            scene.add(gltf.scene);
        });

        var ambient = new AmbientLight(0x404040);
        scene.add(ambient); //环境光对象添加到scene场景中

        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.render();
    },
    methods: {
        render() {
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.render);
        },
    },
};
</script>

<style scoped>
</style>
