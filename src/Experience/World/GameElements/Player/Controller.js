import * as THREE from "three"

export default class Controller {
    constructor(player) {
        console.log('Controller called');

        this.player = player;
        this.target = { x: 0, y: 0 };
        console.log('Player:', this.player);
        console.log('Target:', this.target);

        // Step 2: Add Tactile Event Managers
        this.addEventListeners();
    }

    addEventListeners() {
        // Step 2 : Receive tactile events
        const element = document.getElementById('webglId');

        // Add Tactile Event Managers
        element.addEventListener('touchstart', this.onTouchStart.bind(this));
        element.addEventListener('touchmove', this.onTouchMove.bind(this));
        element.addEventListener('touchend', this.onTouchEnd.bind(this));
    }

    onTouchStart(event) {
        console.log('Touch start:', event.touches);
        // ...
    }
    
    onTouchMove(event) {
        console.log('Touch move:', event.touches);
        // ...
    }
    
    onTouchEnd(event) {
        console.log('Touch end');
        // ...
    }
}
