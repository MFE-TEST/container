import React, { useEffect, useRef } from 'react';
import { mount } from 'vue2/Vue2';

function Vue2() {
  const ref = useRef(null);

  useEffect(() => {
    const div = document.createElement('div');
    ref.current.appendChild(div);
    mount(div);
  }, []);

  return <div ref={ref} />
}

export default Vue2;
