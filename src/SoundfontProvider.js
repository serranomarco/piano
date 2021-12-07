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

    playNote = midiNumber => {
        audioContext.resume().then(() => {
            const audioNode = instrument.play(midiNumber);
        })
    }

    stopNote = midiNumber => {
        audioContext.resume().then(() => {
            if(!activeAudioNodes[midiNumber]) {
                return;
            }
            const audioNode = activeAudioNodes[midiNumber];
            audioNode.stop();
            setActiveAudioNode(Object.assign({}, activeAudioNodes, {
                [midiNumber]: null,
            }));
        });
    };

    stopAllNotes = () => {
        props.audioContext.resume().then(() => {
            const activeAudioNodes.forEach(node => {
                if(node) {
                    node.stop();
                }
            });
            setActiveAudioNode({});
        })
    };


    return(
        props.render({
            isLoading: !instrument,
            playNote: playNote,
            stopNote: stopNote,
            stopAllNotes: stopAllNotes
        })
    );
}

export default SoundfontProvider;