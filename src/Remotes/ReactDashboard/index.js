import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'dashboard/Dashboard';

function ReactDashboard() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, { history } );
  }, []);

  return <div ref={ref} />
}

export default ReactDashboard;
