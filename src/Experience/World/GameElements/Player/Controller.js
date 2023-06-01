export default class Controller {
    constructor(player) {
        console.log('Controller called');

        this.player = player;
        this.target = { x: 0, y: 0 };
        console.log('Player :', this.player);
        console.log('Target :', this.target);

        this.horizontalMovement = 0;
        this.previousTouchX = 0;

        // Step 2: Add Tactile Event Managers
        this.addEventListeners();
    }

    addEventListeners() {
        // Step 2: Receive tactile events
        const element = document.getElementById('webglId');

        // Add Tactile Event Managers
        element.addEventListener('touchstart', this.onTouchStart.bind(this));
        element.addEventListener('touchmove', this.onTouchMove.bind(this));
        element.addEventListener('touchend', this.onTouchEnd.bind(this));
    }

    onTouchStart(event) {
        console.log('Start Touch :', event.touches);
     
        // Step 2: Get the initial position of the touch
        this.previousTouchX = event.touches[0].clientX;
    }
    
    onTouchMove(event) {
        console.log('Move Touch:', event.touches);

        // Step 2: Get the horizontal movement of the touch
        // And store it in the horizontalMovement property (used in the updatePlayer method) 
        if (event && event.touches && event.touches.length > 0) {
            this.horizontalMovement = this.getHorizontalMovement(event);
        } else {
            console.log('Undefined event or no touch');
        }
    }
    
    
    onTouchEnd(event) {
        console.log('End Touch', event.touches);
        // Reset the horizontal motion when the touch event ends 
        // (to prevent the player from continuing to move) 
        this.horizontalMovement = 0;
    }

    getHorizontalMovement(event) {

        // gets the first horizontal movement of the touch (the first finger)
        const touch = event.touches[0];

        //calculates the difference between the current position of the touch and the previous position of the touch (previousTouchX)
        const horizontalMovement = (touch.clientX - this.previousTouchX) * 0.01;
      
        // updates the previous position of the touch with the current position for the next frame
        this.previousTouchX = touch.clientX; 
      
        // returns the horizontal movement of the touch
        // Used in the updatePlayer method to move the player horizontally
        return horizontalMovement;
    }
}
