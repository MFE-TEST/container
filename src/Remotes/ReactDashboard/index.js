import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/Dashboard';

function ReactDashboard() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />
}

export default ReactDashboard;
