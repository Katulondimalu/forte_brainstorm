import { differenceInSeconds } from 'date-fns';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../languages';
import { useFirebase } from '../../utils/firebase';

const TopScore = ({ to, RoomContext }) => {
  let navigate = useNavigate();
  let t = useTranslation();
  let room_ref = useContext(RoomContext);
  let room = useFirebase(room_ref);

  let seconds_elapsed = differenceInSeconds(
    room.finished_time ?? 0,
    room.start_time ?? 0
  );

  let hints_penalty = room.hints_penalty ?? 0;

  return (
    <div
      style={{
        padding: 32,
        fontSize: '1.5rem',
        height: '100%',
        position: 'relative',
      }}
    >
      {t('You finished in')}{' '}
      <span style={{ color: 'green' }}>
        <span>
          {(seconds_elapsed / 60).toFixed(0)} {t('minutes')}
        </span>{' '}
        {t('and')}{' '}
        <span>
          {(seconds_elapsed % 60).toFixed(0).padStart(2, '0')} {t('seconds')}
        </span>
      </span>{' '}
      {hints_penalty === 0 ? (
        <span>{t('without using any hints!')}</span>
      ) : (
        <span>
          {t('with')}{' '}
          <span style={{ color: 'red' }}>
            {room.hints_penalty ?? 0} {t('minutes')}
          </span>{' '}
          {t('penalty for using hints!')}
        </span>
        
      )}<span>
        😃 Jullie zijn door de game heen. Dat is een hele 
          prestatie want jullie hebben wat meer zicht op de koers 
          van het schip🚢 Ga nu met elkaar in gesprek om de koers 
          ook helemaal vast te leggen voor jullie vestiging. Besluit wat 
          de vier themas zijn uit de pedagogische visie waarmee jullie 
          gezamenlijk in 2023 aan de slag gaan. En bedenk ook hoe je dit 
          gaat borgen, want zonder routines, geen vooruitgang. Een klein 
          adviesje: begin simpel, bijvoorbeeld met 5 minuten per dag.
          </span>
      <button
        style={{ position: 'absolute', bottom: 20, left: 0 }}
        onClick={() => navigate(to)}
      >
        {t('Continue')}
      </button>
    </div>
  );
};

export default TopScore;
