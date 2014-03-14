


/* The Invoker function */
function Switch (){
    this._commands = [];
    this.$log = $('#log');
  }
Switch.prototype.storeAndExecute = function(command){
        this._commands.push(command);
        command.execute();
        this.$log.append('<li>' + command.name() + '</li>')
    }

Switch.prototype.undoLast = function()
    {
      var lastCommand = this._commands.pop();
      lastCommand.undo();
      this.$log.find('li:last').remove()
    }

/*The Commands*/

var commandUp = function(receiver)
{
    this.execute = function()
    {
      receiver.moveUp();
    }

    this.undo = function()
    {
      receiver.moveDown();
    }

    this.name = function()
    {
      return "Up";
    }
}

var commandDown = function(receiver)
{
    this.execute = function()
    {
      receiver.moveDown();
    }

    this.undo = function()
    {
      receiver.moveUp();
    }

    this.name = function()
    {
      return "Down";
    }
}

var commandLeft = function(receiver)
{
    this.execute = function()
    {
      receiver.moveLeft();
    }

    this.undo = function()
    {
      receiver.moveRight();
    }

    this.name = function()
    {
      return "Left";
    }
}

var commandRight = function(receiver)
{
    this.execute = function()
    {
      receiver.moveRight();
    }

    this.undo = function()
    {
      receiver.moveLeft();
    }


    this.name = function()
    {
      return "Right";
    }
}

/* The Receiver is .... Pony*/
 function Pony (){
    this.pony = $('#pony');
}
    Pony.prototype.moveUp=function()
    {
       this.pony.animate({'top': '-=30px'});
    }

    Pony.prototype. moveDown=function()
    {
      this.pony.animate({'top': '+=30px'});
    }

    Pony.prototype. moveLeft=function()
    {
      this.pony.animate({'left': '-=30px'});

    }

    Pony.prototype. moveRight=function()
    {
       this.pony.animate({'left': '+=30px'});
    }

/*The client*/
function client()
{
  this.sw = new Switch();
  this.pony = new Pony();

}
client.prototype.moveDirection = function(direction) {
  
  switch (keyCodeToName[direction]) {
    case 'up':
      this.sw.storeAndExecute(new commandUp(this.pony));
      break
    case 'down':
      this.sw.storeAndExecute(new commandDown(this.pony));
      break
    case 'left':
      this.sw.storeAndExecute(new commandLeft(this.pony));
      break
    case 'right':
       this.sw.storeAndExecute(new commandRight(this.pony));
      break
  }
}

  client.prototype.undoLast = function (){
    this.sw.undoLast();
  }

