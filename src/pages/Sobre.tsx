import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Sobre.css'; // <-- importa o CSS

const Sobre: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sobre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding sobre-container" fullscreen>
        <div className="sobre-card">
          <h2>Olá! 👋</h2>
          <p>
            Meu nome é Roberto, sou estudante de Análise e Desenvolvimento de Sistemas na UNISUAM.
            Este é o meu cartão digital desenvolvido com Ionic + React para a disciplina de Programação Móvel.
          </p>
          <IonButton 
            expand="block" 
            className="botao-sobre"
            onClick={() => history.push('/home')}
          >
            Voltar ao Cartão
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sobre;
