function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function (handler) {
  const index = this.handlers.indexOf(handler);
  if (index !== -1) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function (...args) {
  this.handlers.forEach((handler) => {
    handler(...args);
  });
};

// Example usage:
const event = new Event();

// Subscribe handlers
const handler1 = (arg) => {
  console.log("Handler 1:", arg);
};

const handler2 = (arg) => {
  console.log("Handler 2:", arg);
};

event.subscribe(handler1);
event.subscribe(handler2);

// Emit event
event.emit("Hello!");

// Unsubscribe handler1
event.unsubscribe(handler1);

// Emit event again
event.emit("World!");


// test out


    var event = new Event();
    
    function f() {
        f.calls = (f.calls || 0) + 1;
        f.args = Array.prototype.slice.call(arguments);
    }

    event.subscribe(f);
    event.emit(1, 'foo', true);
    
    Test.expect(f.calls === 1); // calls a handler
    Test.assertSimilar(f.args, [1, 'foo', true]); // passes arguments
    
    event.unsubscribe(f);
    event.emit(2);
    
    Test.expect(f.calls === 1); //no second call
