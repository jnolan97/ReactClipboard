import React from 'react';
import useKeyPress from './helpers/useKeypress';

function Clipboard() {
  const keytest = useKeyPress(['c', 'Control']);
  const keymult = ['c', 'v']
  return (
    <div>
      {keytest ? <h1>True</h1> : <h1>False</h1>}
    </div>
  );
}

export default Clipboard;