import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'vue3/Vue3';

function Vue3() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, { history } );
  }, []);

  return <div ref={ref} />
}

export default Vue3;
