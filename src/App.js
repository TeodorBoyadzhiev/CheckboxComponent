// Styles
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import BaseCheckboxes from './components/BaseCheckboxes';
import StackedCheckboxes from './components/StackedCheckboxes';
import InlineCheckboxes from './components/InlineCheckboxes';
import BottomCheckboxes from './components/BottomCheckBoxes';

function App() {
  return (
    <div className="App">
      <div className='upper-section'>
        <BaseCheckboxes />
        <StackedCheckboxes />
        <InlineCheckboxes />
      </div>
      <div className='bottom-section'>
        <BottomCheckboxes />
      </div>
    </div>
  );
}

export default App;
