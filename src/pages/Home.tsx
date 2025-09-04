import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center" fullscreen>
        <img src='src/assets/BEBETO.png' width={300} height={300} style={{ borderRadius:"50%"}}></img>
        <h2>Roberto dos Santos Pinto Filho</h2>
        <p>Código da turma: ADS-2025</p>

        <IonButton routerLink='src/pages/Sobre.tsx'>Sobre mim</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
