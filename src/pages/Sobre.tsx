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
  
        <p>   Olá! Meu nome é Roberto, sou estudante de Análise e Desenvolvimento de Sistemas.  
          Gosto de programação e estou aprendendo a desenvolver aplicações móveis com Ionic + React.  </p>

        <IonButton routerLink='/home'>Voltar ao cartão</IonButton>
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
