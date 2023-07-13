

canva = document.querySelector('#c1');
brush = canva.getContext('2d');

        brush.fillStyle = 'white';
        brush.fillRect(0,0,600,400);
        brush.strokeStyle = "black";
        brush.strokeRect(0,0,600,400);

        brush.fillStyle = 'red';
        brush.beginPath();
        brush.arc(300,200,33,0,2*3.14);
        brush.fill();

        brush.fillStyle = 'green';
        brush.beginPath();
        brush.arc(225,200,40,0,2*3.14);
        brush.fill();

        brush.fillStyle = 'green';
        brush.beginPath();
        brush.arc(375,200,40,0,2*3.14);
        brush.fill();

        brush.fillStyle = 'yellow';
        brush.beginPath();
        brush.arc(300,125,40,0,2*3.14);
        brush.fill();

        brush.fillStyle = 'yellow';
        brush.beginPath();
        brush.arc(300,275,40,0,2*3.14);
        brush.fill();
         
        //2º canvas
        canva2 = document.querySelector('#c2');
        brush2 = canva2.getContext('2d');

        brush2.fillStyle = 'white';
        brush2.fillRect(0,0,600,400);
        brush2.strokeStyle = 'black';
        brush2.strokeRect(0,0,600,400);

        function DrawCircle(color,x,y,raio) {
            brush2.fillStyle = color;
            brush2.beginPath();
            brush2.arc(x,y,raio,0,2*3.14);
            brush2.fill();
        }

        DrawCircle('red',300,200,33);
        DrawCircle('green',225,200,40);
        DrawCircle('green',375,200,40);
        DrawCircle('yellow',300,125,40);
        DrawCircle('yellow',300,275,40);

        function DrawLinea (color,x,y,sx,sy) 
        {
        brush2.fillStyle = color;
        brush2.fillRect(x,y,sx,sy);
        }
        
        DrawLinea('blue',50,0,15,400);
        DrawLinea('blue',550,0,15,400);