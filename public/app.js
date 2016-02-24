import './components/my-foo/my-foo';
import $ from 'jquery'

$('#mybutton').click(() => {
  require.ensure([], () => {
    const mybutton = require('./mybutton').default;
    mybutton.makeItYellow();
  });
});