import React from 'react';
import { Link } from 'react-router-dom';

import CounterProvider from '../../Provider/CounterProvider';
import List from '../../Components/List/List';

const History = () => (
  <>
    <CounterProvider
    	render={({ history }) => (
    		<List
    			history={history}
    		/>
    	)}
    />
    <Link to="/">Counter</Link>
  </>
);

export default History;
