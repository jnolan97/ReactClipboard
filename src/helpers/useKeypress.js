import { useState, useEffect } from 'react';

function useKeyPress() {
  // State for keeping track of whether key is pressed
  const [target, setTarget] = useState({'c' : false, 'Control': false});
  const [keyPressed, setKeyPressed] = useState(false);
  const [copy, setCopy] = useState([]);
  const [upKeys, setUpKeys] = useState(['c', 'Control']);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    // for(let k of keys){
    //   if (k === targetKey) {
    //     setKeyPressed(true);
    //   }
   // setUpKeys(targets);
    if(key === 'c'){
      setTarget(prev =>
        ({...prev, 
          'c' : true
        }))
    }
    if(key === 'Control'){
      setTarget(prev =>
        ({...prev, 
          'Control' : true
        }))
    }
    if(target.c && target.Control){
      setKeyPressed(true);
    }
    console.log('keydown ', target);
  }
  // const resetPress = () => {
  //   if(target.c && target.Control){
  //     setTarget(prev =>
  //       ({...prev, 
  //         'c' : false,
  //         'Control': false,
  //       }));
  //     setKeyPressed(false);
  //   }
  // }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
export default useKeyPress;