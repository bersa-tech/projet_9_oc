import Menu from "../../containers/Menu";
import ServiceCard from "../../components/ServiceCard";
import EventCard from "../../components/EventCard";
import PeopleCard from "../../components/PeopleCard";

import "./style.scss";
import EventList from "../../containers/Events";
import Slider from "../../containers/Slider";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import Form from "../../containers/Form";
import Modal from "../../containers/Modal";
import { useData } from "../../contexts/DataContext";

// stock useDate dans la un tableau data . Déstructuration
// stock dans last les evenements du plus récent au plus ancien
// stock dans last le premier événement du tableau avec index [0];
// ajout de {last && , pour afficher le EvenCards que si last est défini
// donc la variable last affichira toujours l'event le plus récent de useData
// également, ajout des id au sections pour l'ancrage dans le menu
// ajout des alt, aria label, et lien.

const Page = () => {
  const { data } = useData();

  const last = data?.events.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  )[0];

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section className="SliderContainer">
          <Slider />
        </section>
        <section className="ServicesContainer" id="nos-services">
          <h2 className="Title">Nos services</h2>
          <p>Nous organisons des événements sur mesure partout dans le monde</p>
          <div className="ListContainer">
            <ServiceCard imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png">
              <h3>Soirée d’entreprise</h3>
              <p>
                Une soirée d’entreprise vous permet de réunir vos équipes pour
                un moment convivial afin de valoriser votre société en projetant
                une image dynamique. Nous vous proposons d’organiser pour vous
                vos diners et soirée d’entreprise
              </p>
            </ServiceCard>
            <ServiceCard imageSrc="/images/hall-expo.png">
              <h3>Conférences</h3>
              <p>
                724 events vous propose d’organiser votre évènement, quelle que
                soit sa taille, en s’adaptant à votre demande et à vos demandes.
                En tant que spécialistes de l’évènementiel, nous saurons trouver
                le lieu parfait ainsi que des solutions inédites pour capter
                votre audience et faire de cet évènement un succès
              </p>
            </ServiceCard>
            <ServiceCard imageSrc="/images/sophia-sideri-LFXMtUuAKK8-unsplash1.png">
              <h3>Experience digitale</h3>
              <p>
                Notre agence experte en contenus immersifs offre des services de
                conseil aux entreprises, pour l’utilisation de la réalité
                virtuelle, de la réalité augmentée et de la réalité mixte de
                l’animation événementielle, à la veille technologique jusqu’au
                développement de module de formation innovant
              </p>
            </ServiceCard>
          </div>
        </section>
        <section className="EventsContainer" id="nos-realisations">
          <h2 className="Title">Nos réalisations</h2>
          <EventList />
        </section>
        <section className="PeoplesContainer" id="notre-equipe">
          <h2 className="Title">Notre équipe</h2>
          <p>Une équipe d’experts dédiés à l’organisation de vos événements</p>
          <div className="ListContainer">
            <PeopleCard
              imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
              imageAlt="Samira - CEO"
              name="Samira"
              position="CEO"
            />
            <PeopleCard
              imageSrc="/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
              imageAlt="Jean-baptiste - Directeur marketing"
              name="Jean-baptiste"
              position="Directeur marketing"
            />
            <PeopleCard
              imageSrc="/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png"
              imageAlt="Alice - CXO"
              name="Alice"
              position="CXO"
            />
            <PeopleCard
              imageSrc="/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.png"
              imageAlt="Luís - Animateur"
              name="Luís"
              position="Animateur"
            />
            <PeopleCard
              imageSrc="/images/amy-hirschi-b3AYk8HKCl0-unsplash1.png"
              imageAlt="Christine - VP animation"
              name="Christine"
              position="VP animation"
            />
            <PeopleCard
              imageSrc="/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png"
              imageAlt="Isabelle - VP communication"
              name="Isabelle"
              position="VP communication"
            />
          </div>
        </section>
        <div className="FormContainer" id="contact">
          <h2 className="Title">Contact</h2>
          <Modal
            Content={
              <div className="ModalMessage--success">
                <div>Message envoyé !</div>
                <p>
                  Merci pour votre message, nous tâcherons de vous répondre dans
                  les plus brefs délais.
                </p>
              </div>
            }
          >
            {({ setIsOpened }) => (
              <Form onSuccess={() => setIsOpened(true)} onError={() => null} />
            )}
          </Modal>
        </div>
      </main>
      <footer className="row">
        <div className="col presta">
          <h3>Notre derniére prestation</h3>
          {last && (
            <EventCard
              imageSrc={last.cover}
              title={last.title}
              date={new Date(last.date)}
              small
              label="boom"
            />
          )}
        </div>
        <div className="col contact">
          <h3>Contactez-nous</h3>
          <address>45 avenue de la République, 75000 Paris</address>
          <div>01 23 45 67 89</div>
          <div>contact@724events.com</div>
          <div>
            <a
              href="https://www.twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
            >
              <Icon name="twitch" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon name="facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Icon name="twitter" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <Icon name="youtube" />
            </a>
          </div>
        </div>
        <div className="col description">
          <Logo size="large" />
          <p>
            Une agence événementielle propose des prestations de service
            spécialisées dans la conception et l&apos;organisation de divers
            événements tels que des événements festifs, des manifestations
            sportives et culturelles, des événements professionnels.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Page;
