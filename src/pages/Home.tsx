import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css'; // <-- Import do CSS

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Cartão de Identificação</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-container" fullscreen>
        <div className="card">
          <IonImg src="src/assets/BEBETO.png" alt="Minha Foto" className="foto" />
          <h2 className="nome">Roberto Santos Pinto Filho</h2>
          <p className="turma">Código da Turma: ADS123</p>
          <IonButton expand="block" onClick={() => history.push('/sobre')}>
            Ir para Sobre
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
