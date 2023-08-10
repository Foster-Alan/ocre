import React, { useState, useEffect } from 'react';

import './App.css'; //test

function App() {
  const etapa20 = ["Camufoso, o Desconhecido" ,
"Moskoitos, o Interruptor",
"Arakula, o Capturador",
"Gobbach, ContraTrocadilho",
"Gobbalirro, o Barulhento",
"Tofulsom, o Carcereiro",
"Arakítica, a Delgada",
"Piwiki, o Genial",
"Piwicker, o Macho",
"Piwigem, o Chefe",
"Piwiliam, o Valente",
"Piwinston, o Rude",
"Krabaoli, o Paciente",
"Larvalaska, a Fria",
"Piwi, o Emplumado",
"Tofulo, o Raivoso",
"Tofumado, o Viciado",
"Matcogucogu, o Faiscante",
"Dandel, o Garoto",
"Araknoz, a Cascuda"];

const etapa21 = ["Ladinosujo, o Desarrumado",
  "Rosana, a Nórdica",
  "Gelaktose, a Açucarada",
  "Kwanium, o Inteligente",
  "Larvadelaide, o Infantil",
  "Gobbalada, o Romântico",
  "Koleraspotin, o Insensível",
  "Gelanolina, o Gorduroso",
  "Larvalente, a Corajosa",
  "Serpico, o Honesto",
  "Tiwana, o Sinal",
  "Padeiro das Tumbas",
  "Tiwaldo, o Escondido",
  "Tiwascal, o Coberto",
  "Barbaflor, o Corrompido",
  "Ladinamite, o Explosivo",
  "Gobstinado, o Teimoso",
  "Kokonkaskão, o Sujo",
  "Eskoko, o Nobre",
  "Glukoko, o Lento"];

  const etapa22 = ["Javalisso, o Avermelhado",
    "Spicogugodon, o Cabeludo",
    "Privatta, a Entupida",
    "Vamp, o Empalador",
    "Biblopopo, o Organizado",
    "Biblocadinho, o Careca",
    "Bilbpblop, o Grande",
    "Bibloponey, o Anfitrião",
    "Camiona, o Viajante",
    "Miliopoldo, o Fracassado",
    "Bawoso, o Faminto",
    "Presruela, o Lutador",
    "Porcotaça, Útil",
    "Tartatapa, o Fechado",
    "Wabbito, o Constante",
    "Porfavor, o Pedinte",
    "Robiolego, o Montado",
    "Gobbalki, o Teimoso",
    "Komenor, o Mínimo",
    "Tartanime, o Experiente"];

    const etapa23 = [
      "Bambuste, o Emboscador",
      "Corvomanion, o Primitivo",
      "Caranhado, o Sábio",
      "Caranhâ, o Comerciante",
      "Caranha, o Dragão",
      "Peskada, o Íngreme",
      "Tartacalo, o Chifrudo",
      "Lorde the Vampiric",
      "Robocoop, o Trocado",
      "Emboscador Azarado",
      "Milivanilli, o Mímico",
      "Mililibum, o Delator",
      "Iniolho, o Narcisista",
      "Tartenaldo, o Dramático",
      "Bwordem, o Organizado",
      "Wabbinhud, o Justiceiro",
      "Lupisnóquio, o Lobo Amadeirado",
      "Zorrose, o Messicano",
      "Minoskitou, o Colorido",
      "Blorko, o Colorido"
    ];

    const etapa24 = [
      "Spicoguti, o Fedorento",
      "Coguveloz, o Coredor",
      "Spicoguia, o Viajante",
      "Crackrockiscri, o Tigre",
      "Salamaa, a Dominadora de Maridos",
      "Male Stropé-Ada, a Espinhosa",
      "Gargoyla",
      "Dragotitis, o Penoso",
      "Jeleposucato, o Magro",
      "Wabbitor, o Capaz",
      "Chaferro, o Forte",
      "Jiminicrackler, o Consciente",
      "Bworak, o Boêmio",
      "Arvracroc, o Dentado",
      "Cameletux, o Tolerante",
      "Scapado, o Fugitivo",
      "Scarfeice, o Cicatrizado",
      "Scarabroso, o Pequeno",
      "Scarafolhoso, o Destruidor",
      "Rib, o Despedaçado"
    ];

    const etapa25 = [
      "Blopulento, o Abundante",
      "Blorquídea, o Floreado",
      "Blópio, o Delirante",
      "Bloldo, o Amargo",
      "Boombasta, o Suficiente",
      "Pighatchoo, o Elétrico",
      "Scaratê, o Marcial",
      "Chafred, o Peixe",
      "Larvomatik, o Limpo",
      "Trunkbardo, o Gentil",
      "Arvrakilino, o Curvo",
      "Chadacinco, o Pontual",
      "Croccyx, o Ocioso",
      "Ratatuli, o Intrigante",
      "Escorbisão, o Solitário",
      "Dragombroso, o Irascível",
      "Bulbushisu, o Coberto",
      "Crabartanio, o Singular",
      "Craborthos, o Todas",
      "Crabaramis, o Único"
    ];

    const etapa26 = [
      "Crabathos, o Para",
      "Ferrético, o Golpeador",
      "Florista, a Canibal",
      "Arachma, o Grego",
      "Grabbito, o Corredor",
      "Wowalker, o Egípcio",
      "Porcaladino, o Imundo",
      "Abubado, o Fértil",
      "Amlullabeye, o Sonhador",
      "Codemonic, o Abastado",
      "Ginsync, o Hiperativo",
      "Kirevampiro, o Rival",
      "Lert Macraken, o Chorão Acomodado",
      "Nabucodonozor, o Conquistador",
      "Niptuk the Plasticínico",
      "Osurcus, o Domador",
      "Suzessmano, o Entusiasmado",
      "Misskokoko, o Chanel",
      "Chafadado, o Predestinado",
      "Chafermento, o Grande"
    ];

    const etapa27 = [
      "Xamãsselo, o Absorto",
      "Dokterquem, o Transportador",
      "Minocnoc, o Visitante",
      "Koald, o Irritado",
      "Nojumento, o Empacado",
      "Nojanela, o Fofoqueiro",
      "Nojeriza, o Antipático",
      "Palmitômano, o Mentiroso",
      "Palmofolha, o Gorduroso",
      "Palmitola, o Delicado",
      "Javalino, o Brilhante",
      "Arvrakolá, o Distante",
      "Cracklerod, o Ancião",
      "Raiwapoko, a Violenta",
      "Chaferupção, o Vulcânico",
      "Smagomoso, o Viscoso",
      "Mestre Hado, o Diplomado",
      "Rãnufofa, a Boazinha",
      "Kannibal, o Leitor",
      "Kapota, o Descuidado"
    ];

    const etapa28 = [
      "Kanêmico, o Desnutrido",
      "Kanistérico, o Descontrolado",
      "Zarkwástiko, o Incompreendido",
      "Palmela, o Robusto",
      "Ratosco, o Grosseiro",
      "Ougatarda, o Bem-aventurado",
      "Kojaclator, o Desmancha Prazer",
      "Kwakeado, o Pirateado",
      "Kwakwático, o Encharcado",
      "Kwakamole, o Apetitoso",
      "Kwakolak, o Chocolatado",
      "Porsal, o Ranzinza",
      "Dragoskovit, o descalço",
      "Vetaurino, o Energizado",
      "Juba, a Doce",
      "Semcolhão, o Capado",
      "Quetnin, o Fictício",
      "Benhidiotô, o Intelectual",
      "Akaka, o Sujismundo",
      "Raul Modrid, o Chulo"
    ];

    const etapa29 = [
      "Ganon, o Pigmeu",
      "Seiomini, a Empinada",
      "Hazwoabola, o Enfadonho",
      "Warazpacho the Cherrilla",
      "Dragamemnon, o Destroçador",
      "Dragatão, o Latino",
      "Dregumpi, o Anão",
      "Dragnóstico, o Cético",
      "Jackoalak, o Espetacular",
      "Koali, o Ocioso",
      "Koabê, o Jurídico",
      "Snapoalak, o Ruivo",
      "Ratilla, o Huno",
      "Sparodi, o Peçonhento",
      "Aperóbico, o Dinâmico",
      "Polterghaisk, a Alma Perdida",
      "Fantoch, o Títere",
      "Ghostabrava, a Sonhadora",
      "Barbrossim, o Chefe",
      "Supergwass, o Livre"
    ];    

    const etapa30 = [
      "Crokdylann, o Rebelde",
      "Prikoko, o Estúpido",
      "Crackedral, a Majestade",
      "Alôiena, o Telefonista",
      "Pantegging, o Enorme",
      "Orfelira, o Encantador",
      "Feliginham, a Gulosa",
      "Kanibirita, a Acordoada",
      "Kanassukar, o Meloso",
      "Mufavabemz, o Canibal",
      "Milobesta, o Tolo",
      "Bendotadaum, o Atraente",
      "Kidolatra, o Adorador",
      "Kilimanj'haro, o Escalador",
      "Lacrimejosa, a Emotiva",
      "Olhupassarim, a Imortalizada",
      "Gafe, o Desajeitado",
      "Fouflay, o Caído",
      "Dragangora, a Sutil",
      "Chukoalak, o Norris"
    ];

    const etapa31 = [
      "Lichangora, a Imaculada",
      "Craquecrac, o Resistente",
      "Warko, o Escurecido",
      "Ino-Naum, o Negativo",
      "Arvrakaneta, o Escritor",
      "Tetanussa, a Roliça",
      "Koalakarquiteto, o Equilibrado",
      "Greedodoff, o Cavalheiro",
      "Popoalak, o Castanho",
      "Stewart, o Animal Pescador",
      "Piralhaka, o Intimidador",
      "Arvramado, o Benquisto",
      "Koelogue, o Criador",
      "Moops, o Garoto Bolha",
      "Traseirook, o Imponente",
      "Dregquântico, o Treinador",
      "Dragorio, o Robusto",
      "Ezothbeitor, o Vizinho",
      "Floratio, o Investigador",
      "Piktoven, o Surdo"
    ];

    const etapa32 = [
      "Barkricrack, o Instável",
      "Floramodovar, o Encaroçado",
      "Koalvície, o Careca",
      "Koalsen, o Parecido",
      "MamãeKalak, a Bibliomaníaca",
      "Jackoalak, o Lunático",
      "Mopidik the Mire",
      "Worka, o Determinado",
      "Calipzoth, o Gelado",
      "Zigzoth, o Indeciso",
      "Mopés, o Redodndo",
      "Treekness, o Preto",
      "Dragorsso, o Selvagem",
      "Dralegre, a Contente",
      "Dragostinho, o Cafona",
      "Dragcasa, o Cínico",
      "Fangshui, a Desortografiada",
      "Artiferradão, o Molhado",
      "Drakoamax, o Mal",
      "Ryukualak, o Entediado"
    ];

    const etapa33 = [
      "Bigbadabum, o Elementar",
      "Mestre Koântico, o Teórico",
      "Frengassa, o Bonitão",
      "Trooligan the Bulldogg",
      "Zouzoth, o Carinhoso",
      "Snailmetalica, Interiorano",
      "Tutufo, o Peludo",
      "Treekstabalo, o Psíquico",
      "Dom Quizoth, o Obstinado",
      "Nidsally, o Selvagem",
      "Cospefoh, o Surpreso",
      "Trumpanor, o Sobrevivente",
      "Edcogumunch, o Berrador",
      "Tsufuxico, a Mexeriqueira",
      "Tambanquete, o Gastronômico",
      "Cogumorista, o Engraçado",
      "Cogumelaço, o Adocicado",
      "Spicogukitaro, o Leal",
      "Onabuchocheio, a Satisfeita",
      "Jiangagá, o Caduco"
    ];

    const etapa34 = [
      "Foxguetinha, a Reduzida",
      "Rolls de Royce",
      "Garruda, o Doutor",
      "Bakongelado, o Friorento",
      "Kaonuclear, o Instável",
      "Tsumani, o Inundante"
    ];       

  const [ownedAnimals, setOwnedAnimals] = useState([]);

  useEffect(() => {
    const savedAnimals = JSON.parse(localStorage.getItem('ownedAnimals') || '[]');
    setOwnedAnimals(savedAnimals);
  }, []);

  const handleAnimalToggle = (animal) => {
    const updatedAnimals = ownedAnimals.includes(animal)
      ? ownedAnimals.filter(a => a !== animal)
      : [...ownedAnimals, animal];

    setOwnedAnimals(updatedAnimals);
    localStorage.setItem('ownedAnimals', JSON.stringify(updatedAnimals));
  };

  return (
    <>
    <h1>Lista De Arquimonstros</h1>
    <div className="App">
      <div className="etapaCard">
      <h2>Etapa 20</h2>
      <ul>
        {etapa20.map(animal => (
          <li key={animal}>
             <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 21</h2>
      <ul>
        {etapa21.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 22</h2>
      <ul>
        {etapa22.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 23</h2>
      <ul>
        {etapa23.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 24</h2>
      <ul>
        {etapa24.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 25</h2>
      <ul>
        {etapa25.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 26</h2>
      <ul>
        {etapa26.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 27</h2>
      <ul>
        {etapa27.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 28</h2>
      <ul>
        {etapa28.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 29</h2>
      <ul>
        {etapa29.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 30</h2>
      <ul>
        {etapa30.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 31</h2>
      <ul>
        {etapa31.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 32</h2>
      <ul>
        {etapa32.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 33</h2>
      <ul>
        {etapa33.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

      <div className="etapaCard">
      <h2>Etapa 34</h2>
      <ul>
        {etapa34.map(animal => (
          <li key={animal}>
            <label className={ownedAnimals.includes(animal) ? 'label-checked' : ''}>
              <input
                type="checkbox"
                checked={ownedAnimals.includes(animal)}
                onChange={() => handleAnimalToggle(animal)}
              />
              {animal}
            </label>
          </li>
        ))}
      </ul>
      </div>

    </div>
    <footer>
      <p>Todos os direitos reservados a Alan Foster.</p>
    </footer>
    </>
  );
}

export default App;
