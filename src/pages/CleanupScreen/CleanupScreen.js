import { useNavigate } from 'react-router-dom';
import assets from '../../assets';
import { Titlebar } from '../../assets/styles/Common.style';
import Topbar from '../../components/topbar/Topbar';
import { Whitespace } from '../../Elements';
import { useTranslation } from '../../languages';

const CleanupScreen = ({ to }) => {
  let t = useTranslation('nl');
  let navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Topbar />

      <div style={{ margin: 16 }}>
        <Titlebar>{t('Cleanup Instructions')}</Titlebar>
        <Whitespace height={16} />
       
        <span>
        😃 Jullie zijn door de game heen. Dat is een hele 
          prestatie want jullie hebben wat meer zicht op de koers 
          van het schip🚢 Ga nu met elkaar in gesprek om de koers 
          ook helemaal vast te leggen voor jullie vestiging. Besluit wat 
          de vier themas zijn uit de pedagogische visie waarmee jullie 
          gezamenlijk in 2023 aan de slag gaan. En bedenk ook hoe je dit 
          gaat borgen, want zonder routines, geen vooruitgang. Een klein 
          adviesje: begin simpel, bijvoorbeeld met 5 minuten per dag.
          </span>
          
        <Whitespace height={16} />
        {to && (
          <button
            onClick={() => {
              navigate(`${to}`);
            }}
          >
            {t('Done')}
          </button>
        )}
        <Whitespace height={16} />
      </div>
    </div>
  );
};

export default CleanupScreen;
