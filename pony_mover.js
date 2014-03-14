


/* The Invoker function */
var Switch = function(){
    var _commands = [];
    this.$log = $log;
    this.storeAndExecute = function(command){
        _commands.push(command);
        command.execute();
        this.$log.append('<li>' + command.name() + '</li>')
    }

    this.undoLast = function()
    {
      var lastCommand = _commands.pop;
      lastCommand.prototype.undo();
      this.$log.find('li:last').remove()
    }
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
var Pony = function(){
    var pony = $('#pony');

    function moveUp()
    {
       receiver.animate({'top': '-=30px'});
    }

    function moveDown()
    {
      receiver.animate({'top': '+=30px'});
    }

    function moveLeft()
    {
      receiver.animate({'left': '-=30px'});

    }

    function moveRight()
    {
       receiver.animate({'top': '+=30px'});
    }
}

PonyMover.prototype.moveDirection = function(direction) {
  switch (direction) {
    case 'up':
      this.$pony.animate({'top': '-=30px'})
      break
    case 'down':
      this.$pony.animate({'top': '+=30px'})
      break
    case 'left':
      this.$pony.animate({'left': '-=30px'})
      break
    case 'right':
      this.$pony.animate({'left': '+=30px'})
      break
  }
}
