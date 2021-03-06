import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

function Home(){
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
    
    return(
        <Piano 
            noteRange={{first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {}}
            stopNote={(midiNumber) => {}}
            width={1000}
            keyboardShortcuts={keyboardShortcuts}
        />
    );
}

export default Home;