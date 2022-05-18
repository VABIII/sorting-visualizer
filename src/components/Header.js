import React from 'react';
import '../styles/Header.css';

const Header = props => {
    const { setAlgo } = props;




    return (
        <div className='header-algos'>
            <h3 className="selection-algo" onClick={()=> setAlgo('selectionSort')}>Selection Sort</h3>
            <h3 className="bubble-algo" onClick={()=> setAlgo('bubbleSort')}>Bubble Sort</h3>
            <h3 className="insertion-algo" onClick={()=> setAlgo('insertionSort')}>Insertion Sort</h3>
        </div>
    );
};

export default Header;
















































