const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click', function(change_color){
    const color_id = change_color.target.id;

    switch (color_id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
        case 'purple':
          body.style.backgroundColor = 'purple';
          break;        
      default:
        console.log('Unknown color:', color_id);
    }
  });
});