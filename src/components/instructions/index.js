import React from 'react';
import assets from '../../assets';
import {
  InstructionContent,
  InstructionHeader,
  InstructionStep,
} from '../../assets/styles/Instruction';
import { Whitespace } from '../../Elements';
import { useTranslation } from '../../languages';
import { DevButton } from '../DevButton';

const Instructions = ({ onNext }) => {
  let t = useTranslation();

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'center',
      }}
    >
      <DevButton onClick={onNext} />
      <Whitespace height={16} />
      <InstructionHeader>Start Instructies</InstructionHeader>
      <InstructionContent>
     Jullie gaan aan de slag met de pedagogische visie van Forte. Het volgende ga je de komende 80 minuten doen. 
        </InstructionContent>
      <div
        style={{
          //paddingTop:25,
          paddingLeft: 15,
          paddingRight: 15,
          //paddingBottom:25,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 25,
          arginBottom: 25,
        }}
      >
        <InstructionStep>Stap 1.</InstructionStep>
        <InstructionContent>Luister goed naar de gesproken berichten, maak desnoods aantekeningen. Deze geven je richting in de game. Ga nog niet verder met de volgende stap, want bij de volgende stap begint de tijd te lopen.</InstructionContent>
        <InstructionStep>Stap 2.</InstructionStep>
        <InstructionContent>
        Elk team heeft één teamcaptain. Deze houdt de telefoon vast en zorgt ervoor dat iedereen 
        de opdrachten goed hoort.
        </InstructionContent>
        <InstructionStep>Stap 3.</InstructionStep>
        <InstructionContent>
        In elk level van de game vind je een streepjescode. De teamcaptain scant deze streepjescode 
        met de camera van het mobieltje.  Lukt het niet de streepjescode te scannen, vul dan het 
        nummer in dat je er onder ziet staan.
        </InstructionContent>
        <InstructionStep>Stap 4.</InstructionStep>
        <InstructionContent>
        Speel goed samen. Dan ben je een stap dichter bij 
        het brengen van de 5 keer x naar een goed einde.
        </InstructionContent>
        <InstructionContent>
          <img src={assets.images.common?.StartInstruction} alt='' />
        </InstructionContent>
        <InstructionContent>
          Ben je er klaar voor? Vanaf het volgende scherm start de tijd! Succes!
        </InstructionContent>
        <Whitespace height={16} />
        <button onClick={onNext}>{t('Continue')}</button>
        <Whitespace height={16} />
      </div>
    </div>
  );
};

export default Instructions;
