import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ALBUMS_WITH_TRACKS = [
  {
    album: 'VAI-TE FODER',
    year: '2025',
    type: 'SINGLE',
    tracks: [
      { title: 'Vai-te Foder', lyrics: `Age, não podes parar
Criado pelo ódio
O destino na palma da mão

Saí, não é tarde demais
Nada te pode parar
Vivendo sem duvidar

Diferente dos demais
Rasgando as páginas da escuridão
Uma alucinação sem saída

Não, não queiras ser
Um ser que recusa viver
Caminhando ferido e sem ver

Não, não quero ser
Um animal na trela
Um servo de merda

Conspiração, vida de merda
Não pode ser realidade
Sofreguidão, medo de viver na verdade
Repressão, viver na merda
E respirar, não quero ser alienado
Não quero viver no terror

Ilusão, decepção - sofrer não chega
No meio do horror - fodido sempre
Condenado ao abandono, sem querer viver
Não interessa, vai-te foder

Age, não podes ceder
Forjado no ódio
O destino na palma da mão

Saí, tens tempo de sobra
Nada te pode parar
Vivendo sem hesitar

Diferente de todos
Rasgando as páginas da escuridão
Uma alucinação, sem saída

Conspiração, vida de merda
Não pode ser realidade
Sofreguidão, medo de viver na verdade
Repressão, viver na merda
E respirar, não quero ser alienado
Não quero viver no terror

No meio da merda – fodido sempre
Vai morrer longe - vai-te foder` },
    ],
  },
  {
    album: 'PARASITA',
    year: '2024',
    type: 'ALBUM',
    tracks: [
      { title: 'A Arte da Morte', lyrics: `A destruição é o meu prazer
Escuridão é o que eu quero ver
O mundo em ruínas, o caos reina
A morte e a dor é o que me fascina

Destruição é a minha arte
A morte é a minha parte
Violência é o meu caminho
O caos é o que semeio

Eu sinto o ódio, eu sinto a raiva
Eu destruo tudo, eu sou a praga
Eu sou a fúria, eu sou a chama
Sou a dor, sou a matança

Destruição é a minha arte
A morte é a minha parte
Violência é o meu caminho
O caos é o que semeio

A arte da morte
O início do fim
Sinto a guerra, sinto a dor
Sinto o fogo, sinto o horror
A arte da morte
O terror sem fim
Sinto a guerra, sinto a dor
Sinto o fogo, sinto o horror

Eu sou a tempestade
Eu sou a escuridão
Eu sou a destruição

A desolação é a minha vida
O caos é a minha razão
Sou a fúria, sou a morte
Sou a ruína em devastação

Destruição é a minha arte
A morte é a minha parte
Violência é o meu caminho
O caos é o que semeio

Sou o ódio, o sinistro fim` },
      { title: 'Máscara Capitalista', lyrics: `Porco capitalista, vives da ganância
Narcisista, na puta da extravagância
Porco capitalista na tua arrogância
De bolsos cheios, uma alma sem substância

Aproveitas o sistema
Retrato da opressão

Porco capitalista desperta do devaneio
O mundo colapsa, pedestal de ego cheio
Falso moralista de ideias vazias
Atrocidade extrema, espalhas decadência

Tens o saco cheio
Hipócrita nojento
Tens o saco cheio
Hipócrita pestilento

Aproveitas o sistema
Retrato da opressão

Opressão

Tens o saco cheio
Hipócrita nojento
Tens o saco cheio
Hipócrita pestilento` },
      { title: 'Menino da Lágrima', lyrics: `Pelas ruas vagueias
Implorando por pão
Por um abrigo anseias
Carregas a maldição

Causas medo, terror
Morte, destruição
Nos teus olhos vejo dor
A eterna assombração

És a desgraça
Preso à tela de horror
És a desgraça
Preso ao horror

Quem o vê amargurado
Ele é menino da lágrima
Quem o vê amaldiçoado
Ele é menino da lágrima

És uma tela de horror
Nos teus olhos vejo dor

Quem o vê amargurado
Ele é menino da lágrima
Quem o vê amaldiçoado
Ele é menino da lágrima

Inútil mal-amado
Fazes pactos com o diabo
O fogo te devora
Chegou a tua hora

És um ser imune
Um fardo sem solução
A única merda que nos une
É a maldição

Maldição` },
      { title: 'Obscuro', lyrics: `Na escuridão, no obscuro da noite
Caminhas sem chão, rasgas a pele
O sangue que cheiras é a morte por perto
Palavras vazias percorrem-te a mente

Obscuro, sombrio
No escuro o vazio
Procuras o nada
E no escuro despertas

Soturno
Caminhando nas brumas das sombras
Taciturno
Viajando na vida entre a morte

Não, não sei por onde ando
Na busca, a busca do ser humano
Grotesco, gritas de dor
Um animal em busca do amor

Soturno
Desdenhando em desapego a noite
Taciturno
Deambulando sem norte na solidão

É a vida que te leva
É a terra que te move
É a morte que te acena
É um desgosto que te consome

Obscuro, sombrio
No escuro o vazio
Procuras o nada
No escuro despertas

Obscuro, sombrio
No escuro o vazio

É a vida que te leva
É a terra que te move
É a morte que te acena
É um desgosto que te consome

É a vida que te leva
É a vida que te leva

Obscuro` },
      { title: 'Religião de Merda', lyrics: `És um porco, suíno da pior espécie
Religião, pregas a tua prece
Orai irmão que deus é verdade
Mais uma moeda no bolso da divindade

Idolatrado por crentes acéfalos
Pregador ou filho da puta
Doutrinação de ovelhas babadas
De joelhos, realidade absurda

Pai nosso que estais no céu
Crucificado seja o teu nome
Venha a nós a vossa merda
Assim na terra, como na tua peida

Abre os olhos cabra cega
Eixo do mal que te rega
O pão nosso de cada dia
No poleiro apregoas cobardia

Religião de merda

Quem desdenha nem sempre quer comprar
O que vendes, uma puta a defecar
Cala a boca verme endeusado
Antes morrer que rezar calado

Abre os olhos cabra cega
Eixo do mal que te rega
O pão nosso de cada dia
E um pau no cu da tua tia

Religião de merda` },
      { title: 'O Lado Eterno do Mal', lyrics: `O mal alastra sem limites
Contamina a mente obscura
Gritos ecoam em dor e agonia
O vício leva à loucura

O lado eterno do mal
Consome sem piedade
E o caos é total
Escuridão sem fim, insanidade

A morte não é o fim, é só o começo
A morte não é o fim
O lado eterno do mal não tem recomeço

O lado eterno do mal
Consome sem piedade
E o caos é total
Escuridão eterna, insanidade

Vultos perversos espreitam nas sombras
A maldição avança sem receios, sem escolhas
Vida corrompida por este mal sem fim
Condenados à loucura em mãos sádicas e vis

O lado eterno do mal não tem recomeço` },
      { title: 'Puta Gorda', lyrics: `És mentiroso, traidor, corrupto
De sorriso falso roubas tudo e todos
Prometes o mundo mas roubas o povo
Pelos ouvidos emprenhas a plebe

Governo da engorda

Político cabrão
Ladrão da nação
Filho da puta
Fedes a corrupção

Governo da engorda
Engorda puta gorda
Raspa bem o tacho
Enche essa pança
Com o pescoço na corda
Salta puta gorda
Gatuno de gravata
És puta mimada

Sistema corrompido
Política de merda
De sorriso manso
Pões dinheiro ao bolso

Passas impune
Escondes a verdade
Não passas de um podre
Desta sociedade

Governo da engorda
Engorda puta gorda
Com a corda ao pescoço
Salta puta gorda` },
      { title: 'Parasita', lyrics: `A vida é um labirinto sem sentido
Um fardo pesado ou um atalho retorcido?
Quem somos? De onde viemos?
Existência sem resposta a perguntas que fazemos

Existencialista, numa busca incessante
Um som raivoso, mente hesitante
Reflexão sobre o ser, existência confrontada
Na puta de vida, ganhar tudo e não ter nada

Parasita
O teu alimento é a minha vida
Parasita
Rasgas a pele despida

O livre-arbítrio é a nossa maldição
A escolha é a nossa prisão
O peso do dever, liberdade condicionada
Existência sem sentido, uma viagem condenada

Parasita
O teu alimento é a minha vida
Parasita
Rasgas a pele despida

A minha existência é a minha verdade?
O meu destino é a minha liberdade?

Um turbilhão de emoções, um grito mental
Poder da vida, um surto existencial
Batalha incessante sem clemência
De tanta loucura a vida é uma demência

Parasita
O teu alimento é a minha vida
Parasita
Rasgas a pele despida

Parasita` },
    ],
  },
  {
    album: 'PESTE NEGRA',
    year: '2023',
    type: 'EP',
    tracks: [
      { title: 'Peste Negra', lyrics: `Num silêncio de morte
Cadáveres empilhados
Não escapam à doença
Inglória miséria
Nada mais se sente
Nada mais existe
O vazio corrói, destrói e persiste
Rios de sangue
Peste negra
Gritos de morte
Somos peste negra
Nada mais se sente
Nada mais existe
O vazio corrói, destrói e persiste
Rios de sangue
Peste negra
Gritos de morte
Somos peste negra
A peste te rodeia
Não existe saída
A praga se alimenta
Da puta da tua vida
Vida que se esvai
Em menos de um segundo
Condenado a arder
Num eterno sepulcro
Quando sentes um calafrio
E a peste a chegar
Não te podes esconder
Da foice não te vais escapar
Nada mais se sente
Nada mais existe
O vazio corrói, destrói e persiste
Rios de sangue
Peste Negra
Gritos de morte
Somos peste negra` },
      { title: 'Punição Imoral', lyrics: `O ódio mora na cruz
Sedento de incertezas
Torturado pelo destino
Um rei com coroa de espinhos
Apregoando a palavra
Castigando o fiel mortal
Cuspindo na tua cara
Punição imoral
Vai-te foder
Sou a besta da matança
Odioso
Filho de satanás
Crucificado, sem salvação
Injúria, fé perdida
O seu sangue semeia
O ódio mora na cruz
O ódio mora na cruz
O ódio mora na cruz
Apregoando a palavra
Castigando o fiel mortal
Cuspindo na tua cara
Punição imoral
Apregoando a palavra
Castigando o fiel mortal
Cuspindo na tua cara
Punição imoral
Punição imoral
O ódio mora na cruz
Punição imoral
O ódio mora na cruz
Punição` },
      { title: 'Abismo', lyrics: `À beira do abismo
Lamentando o seu destino
Cansado de viver
Soluçando e a tremer
Demónios te acompanham
Na imensidão do ser
Vorazes te desmembram
Ficas a sofrer
Memórias do passado
O teu presente a solidão
Sem nada a perder
Sem vida para viver
Sem nada a perder
Sem nada a perder
Sem vida
Sem nada
Sem vida para viver
Ficas pálido e sem fôlego
Inquieto e ansioso
Será o teu último passo
Ponto final da tua história
No meio do absurdo
As memórias são vagas
Não há regresso
E te desprendes
Deste mundo cruel
Sem nada a perder
Sem vida para viver
Sem nada a perder
Sem vida para viver
Sem nada a temer
Sem nada a perder
Sem vida
Sem nada
Sem vida para viver
Sem nada a perder` },
      { title: 'Veneno', lyrics: `Na tua mente nada mais que medo
Visão da vida baseada em mentiras
Sonhos vazios presos na tua cabeça
Pulhas sem escrúpulos comandam vidas
Veneno, veneno
Besta que nos atormenta
Veneno, veneno
Raiva que nos alimenta
Presas humanas
Na ganância dum contágio
Veneno, veneno
Besta que nos atormenta
Veneno, veneno
Raiva que nos alimenta
Filho da puta
Bicho humano
São os zombies do suburbano
A tua mente está morta
Comes, fodes e morres
Bicho embevecido
Na corda bamba do suicídio
A tua mente já morreu
Bebes, mentes e rezas a deus
Semente do medo
Cresces no meio da dor
Delinquente sanguinário
Geras revolta
Em tudo o que tocas
Voraz assassino, mercenário
Veneno, veneno
Besta que nos atormenta
Veneno, veneno
Raiva que nos alimenta
Controlam massas
Almas conformadas
Veneno, veneno
Besta que nos atormenta
Veneno, veneno
Raiva que nos alimenta
Veneno` },
      { title: 'Decrépito', lyrics: `Decrépito` },
    ],
  },
  {
    album: 'PODRIDÃO',
    year: '2023',
    type: 'SINGLE',
    tracks: [
      { title: 'Podridão', lyrics: `Podridão, perversão
És um ser podre
Vives para enganar
Perversão humana
Viver para matar

Tu pensas ser deus
Mas não passas dum escroto
Matas por poder
Mas não passas de um louco

Podridão, escorbuto da sociedade
Sem noção, mata-te à vontade
Podridão, merda de vaidade
Sem razão, nojo de insanidade

És um ser podre
Dizes que és governo
Perversão desumana
Arde no inferno

Podridão, perversão

És um ser podre
Vives para enganar
Perversão humana
Viver para matar

Tu pensas ser deus
Mas não passas dum escroto
Matas por poder
Mas não passas de um louco

Podridão, escorbuto da sociedade
Sem noção, mata-te à vontade
Podridão, merda de vaidade
Sem razão, nojo de insanidade

Podridão, perversão` },
    ],
  },
];

export default function Lyrics() {
  const [selectedAlbum, setSelectedAlbum] = useState(0);

  return (
    <section id="lyrics" data-testid="lyrics-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          LYRICS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        {/* Album selector */}
        <div className="border-b md:border-b-0 md:border-r border-white">
          {ALBUMS_WITH_TRACKS.map((album, i) => (
            <button
              key={album.album}
              data-testid={`lyrics-album-${i}`}
              onClick={() => setSelectedAlbum(i)}
              className={`w-full text-left px-6 py-5 border-b border-white/20 transition-colors duration-100 ${
                selectedAlbum === i
                  ? 'bg-white text-black'
                  : 'bg-black text-white hover:bg-white/5'
              }`}
            >
              <span className="font-heading text-lg uppercase block">{album.album}</span>
              <span className="font-mono text-xs text-current opacity-60 uppercase tracking-widest">
                {album.year} — {album.type}
              </span>
            </button>
          ))}
        </div>

        {/* Tracks */}
        <div className="p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {ALBUMS_WITH_TRACKS[selectedAlbum].tracks.map((track, i) => (
              <AccordionItem
                key={`${selectedAlbum}-${i}`}
                value={`track-${i}`}
                className="border-b border-white/20"
              >
                <AccordionTrigger
                  data-testid={`lyrics-track-${i}`}
                  className="font-heading text-xl uppercase tracking-tight hover:text-[#8A0303] hover:no-underline py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#A3A3A3] w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {track.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  {track.lyrics ? (
                    <pre className="font-mono text-sm text-[#A3A3A3] whitespace-pre-wrap leading-relaxed">
                      {track.lyrics}
                    </pre>
                  ) : (
                    <p className="font-mono text-xs text-[#A3A3A3]/50 uppercase tracking-widest">
                      LYRICS COMING SOON
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
