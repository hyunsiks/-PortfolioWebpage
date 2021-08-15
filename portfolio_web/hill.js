class Hill{

    constructor(color, speed, total){
      
        this.color = color;
        this.speed = speed;
        this.total = total;
    }

    resize(stageWidth, stageHeight){
        
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];
        this.gap = Math.ceil(this.stageWidth / (this.total - 2));
       
       

        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x: i * this.gap,
                y: this.getY()
            };
        }
    }
    
    draw(ctx){
        // cm.ctx.clearRect(0, 0, cm.stageWidth, cm.stageHeight);
   
        cm.ctx.fillStyle = this.color;
        cm.ctx.beginPath();

        
        let cur = this.points[0];
        let prev = cur;
        
        let dots = [];
        cur.x += this.speed;

        //지워주는것
        if(cur.x > -this.gap){
            this.points.unshift({
                x: -(this.gap * 2),
                y: this.getY()
            });
        }else if(cur.x > this.stageWidth + this.gap){
            this.points.splice(-1);
        }

        cm.ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;


        for(let i = 0; i < this.points.length; i++){
            cur= this.points[i];
            cur.x += this.speed;
            const cx = (prev.x + cur.x) /2;
            const cy = (prev.y + cur.y) /2;
            cm.ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
            
            dots.push({
                x1: prevCx,
                y1: prevCy,
                x2: prev.x,
                y2: prev.y,
                x3: cx,
                y3: cy,
            });

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }

        cm.ctx.lineTo(prev.x, prev.y);
        cm.ctx.lineTo(this.stageWidth*2, this.stageHeight);
        cm.ctx.lineTo(this.points[0].x, this.stageHeight);
        cm.ctx.fill();
 
    }

    getY(){
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }
}