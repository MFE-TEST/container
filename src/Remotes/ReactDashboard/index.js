import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'dashboard/Dashboard';

function ReactDashboard() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const onNavigate = (fullPath) => {
      if (fullPath !== (history.location.pathname + history.location.search)) {
        history.push(fullPath);
      }
    }

    const initialPath = history.location.pathname + history.location.search;
    const { onParentNavigate } = mount(ref.current, { onNavigate, initialPath } );

    const unlisten = history.listen(location => {
      onParentNavigate(history.location.pathname + history.location.search);
    })

    return () => {
      unlisten();
    }
  }, []);

  return <div ref={ref} />
}

export default ReactDashboard;
