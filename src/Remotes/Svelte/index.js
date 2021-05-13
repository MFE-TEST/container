import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'svelte/App';

function Svelte() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />
}

export default Svelte;
