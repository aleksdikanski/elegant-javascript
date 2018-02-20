class InputField {
  constructor(document) {
      this.document = document;
  }

  render(node) {
    this.input = this.document.createElement('input');
    this.input.classList.add('input');
    node.appendChild(this.input);
  }

  renderTextTo(node) {
    console.log('node ', node);
    console.log('value: ', this.input.value);
    node.updateText(this.input.value);
  }
}

class Button {
  constructor(document) {
    this.document = document;
  }

  render(node, onClickHandler) {
    this.btn = this.document.createElement('button');
    this.btn.classList.add('btn');
    this.btn.onclick = onClickHandler;
    node.appendChild(this.btn);
  }
}

class Heading {
  constructor(document, prefix) {
    this.document = document;
    this.prefix = prefix;
  }

  updateText(text) {
    this.heading.innerText = `${this.prefix} ${text}!`;
  }

  render(node) {
    this.heading = this.document.createElement('h1');
    this.heading.classList.add('heading1');
    node.appendChild(this.heading);
  }
}

class HelloWorld {
  constructor(inputField, button, heading) {
    this.inputField = inputField;
    this.button = button;
    this.heading = heading;
  }

  buttonClicked(event) {
    this.inputField.renderTextTo(this.heading);
  }

  render(node) {
    this.inputField.render(node);
    this.button.render(node, e => this.buttonClicked(e));
    this.heading.render(node);
  }
}

class App {
  constructor(appNode, appContent) {
    this.appNode = appNode; 
    this.appContent = appContent;
  }

  run() {
    this.appContent.render(this.appNode);
  }
}


document.addEventListener('DOMContentLoaded', () => 
  new App(
    this.document.querySelector('.app'),
    new HelloWorld(
      new InputField(document),
      new Button(document), 
      new Heading(document, 'Hello, '))).run());
