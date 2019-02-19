  var ToDo = (function() {
    var div = document.createElement('div');
    var div2 = document.createElement('div');
    var h1 = document.createElement('h1');
    var input = document.createElement('input');
    var button = document.createElement('button');
    var p = document.createElement('p');


    var item = document.createElement('div');
    var container = document.createElement('div');
    var holdBtn = document.createElement('button');
    var delIconBtn = document.createElement('button');
    var delBtn = document.createElement('button');
    var addBtn = document.createElement('button');


    h1.textContent = 'HEADING';
    input.placeholder = "INPUT";
    addBtn.textContent = "ADDING";
    p.textContent = "ITEM";
    holdBtn.textContent = "HOLD";
    delIconBtn.textContent = "Del Icon";
    delBtn.textContent = "DELETE";



    item.appendChild(p);
    item.appendChild(holdBtn);
    item.appendChild(delIconBtn);


    container.appendChild(h1);
    container.appendChild(input);
    container.appendChild(addBtn);
    container.appendChild(item);
    container.appendChild(delBtn);

    function run(){
      document.body.appendChild(container);
    }

    return {
      init: run
    };

  })();

  ToDo.init();
