import React from 'react';
import Dimensions from 'react-dimensions';

function DimensionsProvider(props){
    return(
        <div>
            {props.children({
                containerWidth: props.containerWidth,
                containerHeight: props.containerHeight
            })}
        </div>
    );
}

export default Dimensions() (DimensionsProvider);