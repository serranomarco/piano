import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Soundfont from 'soundfont-player';

function SoundfontProvider(props){
    const [activeAudioNodes, setActiveAudioNode] = useState({});
    const [instrument, setIntstrument] = useState(null);

    const propTypes = {
        instrumentName: PropTypes.string.isRequired,
        hostname: PropTypes.string.isRequired,
        format: PropTypes.oneOf(['mp3', 'ogg']),
        soundfont: PropTypes.oneOf(['MusyngKite', 'FluidR3_GM']),
        audioContext: PropTypes.instanceOf(window.AudioContext),
        render: PropTypes.func
    };

    const defaultProps = {
        format: 'mp3',
        soundfont: 'MusyngKite',
        instrumentName: 'acoustic_grand_piano'
    };


    return(
    );
}