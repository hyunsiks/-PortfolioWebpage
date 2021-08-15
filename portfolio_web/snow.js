class snowflake {
     
    constructor(){
        this.posX = 0;
        this.posY = Math.random()*-50+1;
        this.initialangle = Math.random()*(2 * Math.PI);
        this.size = Math.random()*3+2;
    
        this.radius = Math.sqrt(Math.random()*(Math.pow(cm.canvas.width / 2, 2)));
    }
    
    update(time) {
      let w = 0.1;
      let angle = w * time + this.initialangle;
      this.posX = cm.canvas.width / 2 + this.radius * Math.sin(angle);
      this.posY += Math.pow(this.size, 0.6);
    
      if (this.posY > cm.canvas.height) {
        let index = cm.snowflakes.indexOf(this);
        cm.snowflakes.splice(index, 1);
      }
    }
    
    display() {
        cm.ctx.beginPath();
        cm.ctx.fillStyle = 'white';
        cm.ctx.arc(this.posX, this.posY, this.size, 0, Math.PI*2);
        cm.ctx.fill();
        cm.ctx.closePath();
    };
  }