import * as THREE from 'three';
import Controller from './Controller';

export default class Player {
    constructor(_options) {
        this.event = _options.event;
        this.scene = _options.scene;
        this.resources = _options.resources;
        this.parameter = _options.parameter;

        this.setPlayer();
        
        // Step 1: Create a new instance of the Controller class 
        // and pass the current instance of the Player class as a parameter
        // (to be able to access the player's properties and methods from the Controller class)
        this.controller = new Controller(this);

    }

    setPlayer(){
        this.setMesh();

    }

    setMesh(){
        this.playerGeometry = new THREE.PlaneGeometry(2.5,2);

        this.player = new THREE.Mesh(this.playerGeometry,  new THREE.MeshBasicMaterial({transparent: true, visible: false}));
        this.player.position.set(0,-3.8,0)

        this.setAssets(this.playerGeometry);

        this.setColliders()

        this.scene.add(this.player)
    }

    setAssets(geometry){
        this.bucketBackground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: this.resources.items.player_background, transparent: true}));
        this.bucketBackground.position.x = -.35
        this.bucketBackground.renderOrder = 1;
        
        this.bucketForeground = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({map: this.resources.items.player_foreground, transparent: true}));
        this.bucketForeground.position.x = -.35
        this.bucketForeground.renderOrder = 3;

        this.player.add(this.bucketBackground, this.bucketForeground)
    }

    setColliders(){
        // Create colliders for the player
    }

    // To move the popcorn cone horizontally
    moveHorizontally(value) {
        this.player.position.x += value;
    }

    updatePlayer(deltaT){
        // Step 3: Update the player's position according to the horizontal movement of the touch 
        // (the horizontalMovement property is set in the onTouchMove method of the Controller class)
        const horizontalMovement = this.controller.horizontalMovement;
        this.moveHorizontally(horizontalMovement);
    }

    update(deltaT){
        this.updatePlayer(deltaT);
    }

}