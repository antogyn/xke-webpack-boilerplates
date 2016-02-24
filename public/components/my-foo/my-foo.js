// my-foo.js
import './my-foo.scss'; // import du style
import template from './my-foo.html'; // import du template

console.log('source-maps test !');
// création du custom element my-foo
const MyFooProto = Object.create(HTMLElement.prototype);
MyFooProto.createdCallback = function() {
  this.innerHTML = template; // utilisation du template importé
};
document.registerElement('my-foo', {prototype: MyFooProto});