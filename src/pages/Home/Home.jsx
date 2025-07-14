import './Home.css';
import iconNames from '../../data/iconNames';
import typeNames from '../../data/typeNames';

const Home = () => {
  return (
    <main className='home flex-container'>
      <section className='explanation-container'>
        <h3>Historia del Juego</h3>
        <p>
          Hace incontables generaciones, el mundo estuvo dividido entre
          poderosos clanes. Cada uno alzaba su estandarte marcado con un símbolo
          único: emblemas que representaban su linaje, su poder... y su legado.
        </p>
        <br />
        <div className='pc-vw'>
          <p>
            Estos clanes no solo gobernaban territorios, sino que eran los
            guardianes de criaturas ancestrales. Cada una respondía a un tipo
            que definía su esencia y su propósito en combate... guerreros,
            magos, asesinos, protectores, sanadores...
          </p>
          <br />
          <p>
            Pero entre todos, habia un tipo que apenas se susurra: los
            Nigromantes. Según antiguos textos y ruinas selladas, hubo quienes
            osaron vincularse con la muerte misma. Se dice que podían despertar
            bestias ya caidas, devolverlas como sombras, fieles solo al llamado
            de su amo.
          </p>
          <br />
          <p>
            Nunca se conoció a un verdadero Nigromante. Tal vez nunca
            existieron... O quizá, el velo de la historia nunca quiso revelar su
            existencia.
          </p>
          <br />
          <p>
            Con el paso del tiempo, los clanes se desvanecieron en leyenda, pero
            las criaturas permanecieron... escondidas, esperando ser invocadas
            por quien domine sus símbolos. Ahora, tú tienes el poder de
            despertar ese legado. Reúne las criaturas, honra a los clanes, y
            domina los tipos. El legado de los clanes está en tus manos.
          </p>
        </div>
        <div className='tablet-mobile-vw'>
          <p>
            Los clanes no solo gobernaban, también custodiaban criaturas
            ancestrales, cada una ligada a un tipo que marcaba su esencia:
            guerreros, magos, asesinos, protectores, sanadores...y nigromantes.
          </p>
        </div>
      </section>
      <section className='family-icons flex-container'>
        <h3>Los Clanes</h3>
        {iconNames.map((name, index) => (
          <div
            key={index}
            className='icons-container flex-container'
            data-alt={name.split('.')[0]}
          >
            <img src={`/family-icons/${name}`} alt={name} />
          </div>
        ))}
      </section>
      <section className='types flex-container'>
        <h3>Los Tipos</h3>
        {typeNames.map((type, index) => (
          <div
            key={index}
            className='types-container flex-container'
            data={type.name}
            style={{ backgroundColor: type.color }}
          ></div>
        ))}
      </section>
    </main>
  );
};

export default Home;
