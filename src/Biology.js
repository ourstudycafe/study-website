import { useState, useEffect } from "react";
import biologyQuestions from "./data/biologyQuestions";
function StudyTimer() {

  const TOTAL_TIME = 25 * 60;

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {

    if (!isRunning) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [isRunning, timeLeft]);


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


  const progress =
    ((TOTAL_TIME - timeLeft) / TOTAL_TIME) * 100;


  const startTimer = () => {

    setFinished(false);
    setIsRunning(true);

  };


  const pauseTimer = () => {

    setIsRunning(false);

  };


  const resetTimer = () => {

    setIsRunning(false);
    setFinished(false);
    setTimeLeft(TOTAL_TIME);

  };


  return (

    <div
      className="timer-card"
      style={{
        textAlign: "center",
        padding: "45px 30px",
        maxWidth: "650px",
        margin: "30px auto"
      }}
    >

      {/* TIMER */}

      <div
        style={{
          fontSize: "76px",
          fontWeight: "700",
          letterSpacing: "3px",
          marginBottom: "25px"
        }}
      >
        {formattedTime}
      </div>


      {/* PROGRESS */}

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "rgba(100, 130, 180, 0.15)",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "25px"
        }}
      >

        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#6d8fd6",
            borderRadius: "20px",
            transition: "width 0.5s ease"
          }}
        ></div>

      </div>


      {/* MESSAGE */}

      {finished ? (

        <div
          style={{
            marginBottom: "25px",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          🎉 Amazing! You completed your study session! 💙
        </div>

      ) : isRunning ? (

        <p
          style={{
            marginBottom: "25px"
          }}
        >
          Stay focused. You've got this. ✨
        </p>

      ) : (

        <p
          style={{
            marginBottom: "25px"
          }}
        >
          Ready for a focused Biology session?
        </p>

      )}


      {/* BUTTONS */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >

        {!isRunning ? (

          <button
            className="primary-button"
            onClick={startTimer}
          >
            ▶️ {timeLeft === TOTAL_TIME ? "Start" : "Resume"}
          </button>

        ) : (

          <button
            className="secondary-button"
            onClick={pauseTimer}
          >
            ⏸️ Pause
          </button>

        )}


        <button
          className="secondary-button"
          onClick={resetTimer}
        >
          🔄 Reset
        </button>

      </div>


      {/* SESSION INFO */}

      <div
        style={{
          marginTop: "30px",
          fontSize: "14px",
          opacity: 0.75
        }}
      >
        <p>
          🍅 25-minute focus session
        </p>

        <p>
          💡 Try not to switch tabs until the session is complete.
        </p>
      </div>

    </div>

  );

}

function Biology() {
  const chapters = [
    {
      title: "Origin and Evolution of Life and Introduction to Classification",

      notes: `
CHAPTER 1 — SHORT NOTES

1. ORIGIN OF LIFE
• Earth was formed about 4–5 billion years ago.
• Life evolved on Earth about 3.5 billion years ago.
• Origin of life means the appearance of the simplest primordial life from non-living matter.
• Evolution of life means gradual formation of complex organisms from simpler ones.

2. CHEMOSYNTHETIC THEORY
• The widely accepted theory in the NIOS lesson is the Chemosynthetic Theory.
• It was proposed by A.I. Oparin.
• Primitive Earth had a hot atmosphere containing ammonia, water vapour, hydrogen and methane.
• There was no free oxygen in the early atmosphere.
• Chemical reactions in water produced organic compounds.
• These included amino acids, nitrogenous bases, sugars and fatty acids.
• These substances combined to form biomolecules such as proteins and nucleic acids.

3. MILLER–UREY EXPERIMENT
• Stanley Miller and Harold C. Urey performed an experiment in 1953.
• They s  imulated conditions believed to exist on primitive Earth.
• Their apparatus contained gases and an electric discharge.
• Organic substances including amino acids were produced.
• The experiment supported the possibility that organic molecules could arise under primitive-Earth conditions.

4. PROBABLE STAGES OF ORIGIN OF LIFE
• Simple inorganic substances → simple organic molecules.
• Simple organic molecules → large molecules.
• Large molecules → molecular complexes.
• Complexes → coacervate-like aggregates.
• Nucleic acids developed the ability to carry information and reproduce.
• The earliest cells were formed.
• Early organisms were heterotrophs.
• Later, chlorophyll-bearing organisms developed and began photosynthesis.
• Photosynthesis released free oxygen into the atmosphere.

5. ORGANIC EVOLUTION
• Organic evolution is the gradual formation of complex organisms from simpler ancestral forms over geological time.
• Present-day organisms evolved from simpler ancestral forms.
• Organisms are related through common ancestry.
• Organisms change as their environments change.
• Some organisms become extinct during evolution.

6. EVIDENCES OF ORGANIC EVOLUTION

A. Morphological evidence
• Homologous organs: similar structure and origin but different functions.
• Example: forelimbs of vertebrates.
• Analogous organs: similar function but different structure.
• Example: wings of insects and birds.
• Vestigial organs: reduced or non-functional structures inherited from ancestors.
• Example: appendix and wisdom teeth in humans.
• Connecting links possess characteristics of two different groups.
• Archaeopteryx is a connecting link between reptiles and birds.

B. Embryological evidence
• Early embryos of vertebrates show similarities.
• Vertebrates begin life from a single cell called the zygote.
• Similar embryonic stages support common ancestry.

C. Palaeontological evidence
• Paleontology is the study of fossils.
• Fossils are remains or traces of organisms preserved in rocks.
• Fossil records provide evidence of organisms that lived in the past.
• Fossils also help trace evolutionary history.

D. Molecular evidence
• Organisms share many common biomolecules.
• DNA is hereditary material in almost all organisms.
• ATP is involved in energy storage and release.
• Genetic code is nearly universal.
• Similarities in DNA, proteins and other molecules can indicate evolutionary relationships.

7. DARWIN'S THEORY OF NATURAL SELECTION
• Charles Darwin proposed natural selection as a mechanism of evolution.
• Organisms produce more offspring than can survive.
• Resources are limited, causing a struggle for existence.
• Organisms with advantageous variations have better chances of survival and reproduction.
• Unfavourable variations are eliminated more often.
• Favourable characteristics become more common over generations.

8. MODERN SYNTHETIC THEORY / NEO-DARWINISM
• Modern evolutionary theory combines natural selection with genetics.
• Population is considered the unit of evolution.
• A population has a gene pool.
• Heritable variations arise through mutation and recombination.
• Natural selection acts on variations.
• Differential reproduction changes the genetic constitution of populations.
• Reproductive isolation helps maintain distinct species.

9. SOURCES OF VARIATION
• Mutation — sudden genetic change.
• Genetic recombination — new combinations of parental genes.
• Gene flow — movement/mixing of genes between populations.
• Genetic drift — random changes in gene frequencies, especially in small populations.

10. IMPORTANT TERMS
• Variation = differences among individuals.
• Natural selection = selection of favourable variations by environmental conditions.
• Isolation = separation that prevents gene exchange.
• Speciation = formation of new species.
• Gene pool = all different genes present in a population.

11. HARDY–WEINBERG EQUILIBRIUM
• It relates population genetics to evolution.
• A population remains genetically stable when evolutionary forces are absent.
• Changes in gene frequencies indicate that evolution is occurring.

12. CLASSIFICATION
• Classification means grouping organisms according to similarities and differences.
• Classification makes the study of biodiversity easier.
• Modern classification considers evolutionary relationships.
• Systematics includes classification as well as evolutionary relationships.

13. VIRUSES AND VIROIDS
• Viruses contain nucleic acid and protein.
• They reproduce only inside living cells.
• Viruses occupy a special position in the living world.
• Viroids are much simpler infectious agents consisting essentially of small RNA molecules.
`,

      summary: `
CHAPTER 1 — SIMPLE SUMMARY

NIOS Chapter 1 introduces the origin of life, evolution and classification.

The Earth was formed about 4–5 billion years ago and life evolved about 3.5 billion years ago. The Chemosynthetic Theory, associated with A.I. Oparin, explains that life could have originated through a series of chemical reactions on primitive Earth. The early atmosphere contained gases such as methane, ammonia, hydrogen and water vapour and lacked free oxygen.

Miller and Urey experimentally simulated primitive-Earth conditions and obtained organic substances such as amino acids. The NIOS lesson describes several possible stages from simple organic molecules to molecular complexes, coacervate-like structures and finally primitive cells.

Evolution is the gradual formation of complex organisms from simpler ancestral forms. Evidence for evolution comes from morphology, embryology, fossils and molecular biology.

Homologous organs have similar basic structure and origin but may perform different functions. Analogous organs perform similar functions but have different structures. Vestigial organs are reduced structures inherited from ancestors. Connecting links show characteristics of two different groups; Archaeopteryx is an important example.

Darwin explained evolution through natural selection. Organisms produce more offspring than can survive, resources are limited, and individuals with favourable variations are more likely to survive and reproduce.

The Modern Synthetic Theory combines natural selection with genetics. Mutation, recombination, gene flow and genetic drift contribute to variation. Isolation and natural selection can contribute to the formation of new species.

The chapter also introduces classification. Organisms are grouped according to similarities, differences and evolutionary relationships. The chapter finally discusses the special position of viruses and viroids in the living world.
`,

      video:
        "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+1+Origin+Evolution+Life"
    },

    {
  title: "The Kingdom Monera, Protoctista and Fungi",

  notes: `
CHAPTER 2 — SHORT NOTES

1. KINGDOM MONERA
• Monera includes prokaryotic organisms.
• They generally lack a true nucleus surrounded by a nuclear membrane.
• Their genetic material lies in the nucleoid region.
• They are generally unicellular.
• Bacteria are the most common members of Monera.

2. BACTERIAL CELL
• A bacterial cell has a cell wall, plasma membrane, cytoplasm and ribosomes.
• The genetic material is usually present as a circular DNA molecule.
• Some bacteria also contain plasmids.
• Some bacteria possess flagella for movement.
• The bacterial cell wall helps maintain shape and provides protection.

3. NUTRITION IN BACTERIA
• Bacteria may be autotrophic or heterotrophic.
• Autotrophic bacteria can prepare their own food.
• Some use light energy while others obtain energy from chemical reactions.
• Heterotrophic bacteria obtain organic nutrients from other sources.
• Saprophytic bacteria obtain nutrients from dead organic matter.
• Parasitic bacteria obtain nutrients from living hosts.

4. IMPORTANCE OF BACTERIA
• Bacteria help decompose organic matter.
• Some bacteria are useful in agriculture through nitrogen fixation.
• Some are used in the production of food and industrial products.
• Certain bacteria cause diseases in humans, animals and plants.

5. KINGDOM PROTOCTISTA
• Protists are mainly unicellular eukaryotic organisms.
• Their cells contain a true nucleus.
• They may be autotrophic, heterotrophic or mixotrophic.
• Many protists live in aquatic or moist environments.

6. IMPORTANT PROTISTS
• Amoeba is a unicellular organism that moves with pseudopodia.
• Paramecium moves with the help of cilia.
• Euglena has both plant-like and animal-like characteristics.
• Some protists are photosynthetic.
• Some protists can cause diseases.

7. KINGDOM FUNGI
• Fungi are eukaryotic organisms.
• Most fungi are multicellular, although yeast is unicellular.
• Fungal cells have a cell wall.
• The cell wall commonly contains chitin.
• Fungi do not contain chlorophyll.
• Therefore, fungi cannot perform photosynthesis.

8. NUTRITION IN FUNGI
• Fungi obtain food by absorption.
• Many fungi are saprophytic and obtain nutrients from dead organic material.
• Some fungi are parasitic.
• Some fungi live in mutual association with other organisms.

9. FUNGAL STRUCTURE
• The body of a multicellular fungus is called a mycelium.
• Mycelium consists of thread-like structures called hyphae.
• Hyphae may be septate or aseptate depending on the fungus.
• Spores are important structures involved in reproduction and dispersal.

10. REPRODUCTION IN FUNGI
• Fungi reproduce by vegetative, asexual and sexual methods.
• Yeast can reproduce by budding.
• Many fungi reproduce asexually by producing spores.
• Sexual reproduction involves fusion of compatible reproductive structures or cells.

11. IMPORTANCE OF FUNGI
• Fungi are important decomposers.
• They help recycle nutrients in ecosystems.
• Yeast is useful in baking and fermentation.
• Some fungi are used in the production of medicines.
• Some fungi form useful associations with plant roots.
• Some fungi cause diseases and spoil food.

12. QUICK COMPARISON

MONERA
• Prokaryotic
• Usually unicellular
• No true nucleus
• Example: bacteria

PROTOCTISTA
• Eukaryotic
• Mostly unicellular
• True nucleus present
• Examples: Amoeba, Paramecium, Euglena

FUNGI
• Eukaryotic
• Mostly multicellular
• Cell wall generally contains chitin
• Examples: yeast, moulds and mushrooms

13. IMPORTANT TERMS

• Prokaryote — organism whose cell lacks a membrane-bound nucleus.
• Eukaryote — organism whose cell contains a membrane-bound nucleus.
• Nucleoid — region containing the genetic material in a prokaryotic cell.
• Pseudopodia — temporary projections used by Amoeba for movement and feeding.
• Hypha — thread-like structure forming the body of a multicellular fungus.
• Mycelium — network of fungal hyphae.
• Saprophyte — organism that obtains nutrients from dead organic matter.
• Parasite — organism that obtains nutrients from a living host.
`,

  summary: `
CHAPTER 2 — SIMPLE SUMMARY

This chapter introduces three important groups of organisms: Monera, Protoctista and Fungi.

Monera contains prokaryotic organisms such as bacteria. Their cells do not have a membrane-bound nucleus. Bacterial cells contain genetic material in a nucleoid region and may also contain structures such as a cell wall, plasma membrane, ribosomes, flagella and plasmids. Bacteria show different modes of nutrition and are important decomposers, nitrogen fixers and industrial organisms, although some bacteria cause diseases.

Protoctista consists mainly of unicellular eukaryotic organisms. Their cells have a true nucleus. Amoeba, Paramecium and Euglena are important examples. Protists may obtain food through photosynthesis or by consuming or absorbing organic material.

Fungi are eukaryotic organisms that lack chlorophyll and therefore cannot make food by photosynthesis. Most fungi are multicellular, while yeast is unicellular. The body of a multicellular fungus consists of hyphae forming a mycelium. Fungi obtain nutrients by absorption and may be saprophytic, parasitic or mutually associated with other organisms.

Fungi reproduce through vegetative, asexual and sexual methods. They are ecologically important because they decompose dead material and recycle nutrients. Humans also use fungi in food production, fermentation and medicine.

The main difference between these groups is their cellular organisation and method of obtaining nutrition. Monera are prokaryotic, whereas Protoctista and Fungi are eukaryotic.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+2+Kingdom+Monera+Protoctista+Fungi"
},  
    {
  title: "Kingdom Plantae and Animalia",

  notes: `
CHAPTER 3 — SHORT NOTES

1. KINGDOM PLANTAE

• Plants are mainly multicellular, eukaryotic and photosynthetic autotrophs.
• Their cell walls are mainly made of cellulose.
• The NIOS lesson groups the plant kingdom into Bryophyta and vascular plants (Trachaeophyta).
• Vascular plants include Pteridophyta and Spermatophyta.
• Spermatophyta are seed-producing plants and include Gymnospermae and Angiospermae.

MAIN GROUPS OF PLANTS:

Bryophyta
→ Non-vascular plants
→ Called the "amphibians of the plant kingdom"
→ Examples: Marchantia, Funaria, Anthoceros

Pteridophyta
→ Vascular plants
→ Have true roots, stems and leaves
→ Reproduce by spores
→ Example: Fern

Spermatophyta
→ Seed-producing plants
→ Divided into Gymnospermae and Angiospermae


2. BRYOPHYTA

• Bryophytes generally grow in damp and shady places.
• They are called amphibians of the plant kingdom because they complete their life cycle involving both water and land.
• They do not possess vascular tissues such as xylem and phloem.
• They do not have true roots, stems and leaves.
• Rhizoids help in anchorage and absorption of water and minerals.
• The main plant body is the gametophyte and is haploid.
• The sporophyte remains attached to and dependent on the gametophyte.

MAIN TYPES:

• Liverworts — example: Marchantia
• Mosses — example: Funaria
• Hornworts — example: Anthoceros

REPRODUCTION IN BRYOPHYTES:

• Male sex organs are antheridia.
• Female sex organs are archegonia.
• Fertilisation produces a zygote.
• The zygote develops into a sporophyte.
• The sporophyte produces haploid spores by meiosis.
• Spores germinate and form a new gametophyte.
• The life cycle shows alternation of generations.

IMPORTANT:

Gametophyte
→ Haploid
→ Produces gametes
→ Gametes are produced by mitosis
→ Dominant and photosynthetically active phase

Sporophyte
→ Diploid
→ Produces spores
→ Spores are produced by meiosis
→ Short-lived and attached to gametophyte

• Bryophytes are pioneers of vegetation.
• They can grow on habitats such as rocks, lava and sand.
• Mosses can hold water and help improve the microhabitat for seeds of other plants.


3. PTERIDOPHYTA

• Pteridophytes are lower vascular plants.
• They possess xylem and phloem.
• They usually grow in damp and shady places.
• The main plant body is the diploid sporophyte.
• True roots are present.
• Leaves are often called fronds.
• Fern is a common example.

FERN STRUCTURE:

• The leaves arise from an underground horizontal stem called rhizome.
• Adventitious roots arise from the rhizome.
• Young leaves show characteristic circinate coiling.
• Groups of sporangia are called sori.
• Sporangia produce haploid spores by meiosis.

LIFE CYCLE:

• Spores germinate to form a small independent gametophyte called prothallus.
• Prothallus bears antheridia and archegonia.
• Fertilisation produces a zygote.
• Zygote develops into a new diploid sporophyte.
• Gametophytic and sporophytic generations alternate.


4. GYMNOSPERMAE

• Gymnosperms are seed-producing plants.
• The word gymnosperm means "naked seed".
• Their ovules are not enclosed inside an ovary.
• Seeds therefore remain exposed or "naked".
• The reproductive structures are generally cones.
• The adult plant is usually a tall, woody and perennial sporophyte.
• Many are evergreen.
• Examples include Pinus, Cycas, Sequoia, Juniperus and Cedrus.

IMPORTANT FEATURES:

• Vascular tissues are present.
• Leaves may be simple or compound.
• Pinus has needle-like leaves.
• Cycas has large pinnately compound leaves.
• Male and female cones are usually separate.
• Pollen grains are produced in microsporangia.
• Ovules occur on megasporophylls.
• After fertilisation, the ovule develops into a seed.

ECONOMIC IMPORTANCE:

• Gymnosperms provide timber.
• They provide resins and turpentine.
• Pinus produces useful products including timber and resin.
• Cycas is associated with production of sago from old stems.
• Chilgoza is obtained from a gymnosperm.


5. ANGIOSPERMAE

• Angiosperms are flowering plants.
• Their seeds are enclosed inside fruits.
• The fruit develops from the mature fertilised ovary.
• Angiosperms are divided into two classes:
  → Dicotyledons
  → Monocotyledons

DICOTS:

• Embryo has two cotyledons.
• Leaves generally have reticulate venation.
• Vascular bundles generally show cambium.

MONOCOTS:

• Embryo has one cotyledon.
• Leaves generally show parallel venation.
• Vascular bundles generally lack cambium.


6. GYMNOSPERMS vs ANGIOSPERMS

Gymnosperms:
• Seeds are naked.
• Ovules are not enclosed in an ovary.
• Reproductive structures are cones.
• Xylem mainly has tracheids.

Angiosperms:
• Seeds are enclosed in fruits.
• Ovules occur inside an ovary.
• Reproductive structures are flowers.
• Xylem contains vessels as well as tracheids.


7. IMPORTANT ANGIOSPERM FAMILIES

NIOS discusses four families:

DICOT FAMILIES:
• Fabaceae
• Malvaceae

MONOCOT FAMILIES:
• Liliaceae
• Poaceae


8. FABACEAE

• Fabaceae is a dicotyledonous family.
• It is also known as the pea family.
• Plants may be herbs, shrubs and rarely trees.
• Flowers are generally bisexual and zygomorphic.
• Calyx has five sepals.
• Corolla has five petals arranged in the characteristic papilionaceous form.
• The large petal is called the standard.
• Two smaller petals are called wings.
• Two inner petals form the keel.
• There are usually 10 stamens arranged as 9+1.
• This is called the diadelphous condition.
• Ovary is superior and monocarpellary.
• Fruit is a pod.

IMPORTANT EXAMPLES:

• Pea — Pisum sativum
• Pigeon pea — Cajanus cajan
• Green gram — Phaseolus aureus
• Soybean — Glycine max
• Lentil — Lens culinaris
• Groundnut — Arachis hypogaea
• Chickpea — Cicer arietinum


9. MALVACEAE

• Malvaceae is a dicotyledonous family.
• China rose (Hibiscus rosa-sinensis) is an important example.
• Plants may be herbs, shrubs or trees.
• Flowers are generally large and attractive.
• Flowers are actinomorphic and pentamerous.
• Epicalyx is present.
• Calyx has five sepals.
• Corolla has five petals.
• Stamens are numerous and monadelphous.
• Filaments unite to form a staminal tube.
• Ovary is superior and made of five fused carpels.
• Fruit is a capsule.

IMPORTANT EXAMPLES:

• China rose
• Cotton
• Bhindi
• Hollyhock


10. LILIACEAE

• Liliaceae is a monocotyledonous family.
• It is known as the lily family.
• Plants are mostly perennial herbs.
• Stem may be a rhizome or bulb-like.
• Flowers are bisexual and actinomorphic.
• Flowers are usually trimerous.
• Perianth is generally made of six parts arranged in two whorls of three.
• Stamens are usually six.
• Carpels are three and fused.
• Ovary is superior.
• Fruit is usually a capsule.

IMPORTANT EXAMPLES:

• Aloe barbadensis — Ghrit kumari
• Asparagus racemosus — Shatawar
• Tulipa — Tulip
• Gloriosa superba — Kalihari
• Lilium — Lily
• Allium cepa — Onion


11. POACEAE

• Poaceae is a monocotyledonous family.
• It is the grass family.
• Plants are mainly herbs.
• Sugarcane is an example of a relatively woody member.
• Inflorescence is a spike of spikelets.
• Flowers are very small and inconspicuous.
• Stamens are usually three, although some plants such as rice and bamboo have six.
• Carpels are three and fused.
• Ovary is superior and has one basal ovule.
• Fruit is a caryopsis.
• In a caryopsis, the seed coat and ovary wall are inseparably fused.

IMPORTANT EXAMPLES:

• Rice — Oryza sativa
• Wheat — Triticum aestivum
• Maize — Zea mays
• Sugarcane — Saccharum officinarum
• Barley — Hordeum vulgare


12. KINGDOM ANIMALIA

• Animals are multicellular eukaryotes.
• They have heterotrophic nutrition and obtain food by ingestion.
• Most animals have the power of locomotion.
• They show sensitivity through the nervous system.

BASIS OF ANIMAL CLASSIFICATION:

Animals are classified using characteristics such as:

• Level of organisation
• Body symmetry
• Body cavity or coelom
• Number of embryonic germ layers
• Presence or absence of notochord


13. LEVEL OF ORGANISATION

Cellular level:
• Cells are organised as an aggregate.
• Example: Porifera.

Tissue level:
• Groups of cells perform specialised functions.
• Example: Cnidaria.

Organ-system level:
• Organs and organ systems perform body functions.
• Seen in most other animal groups.


14. BODY SYMMETRY

Asymmetrical:
• Body cannot be divided into two equal halves.
• Example: Porifera.

Radial symmetry:
• Body parts are arranged around a central axis.
• Example: Cnidaria.
• Adult echinoderms also show radial symmetry.

Bilateral symmetry:
• Body can be divided into two similar halves.
• Seen in most other animal groups.


15. BODY CAVITY / COELOM

• Coelom is a body cavity between the body wall and alimentary canal.

Acoelomate:
• No body cavity.
• Example: Platyhelminthes.

Pseudocoelomate:
• Has a false body cavity.
• Example: Aschelminthes / Nematoda.

Eucoelomate:
• Has a true body cavity.
• Present in many higher animal groups.


16. EMBRYONIC GERM LAYERS

Diploblastic:
• Two germinal layers:
  → Ectoderm
  → Endoderm
• Porifera and Cnidaria are treated separately in the NIOS classification; Cnidaria are diploblastic.

Triploblastic:
• Three germinal layers:
  → Ectoderm
  → Mesoderm
  → Endoderm
• Most other animal groups are triploblastic.


17. NOTOCHORD

• Notochord is a rod-like supporting structure found at some stage in chordates.
• Animals without a notochord are grouped as non-chordates.
• Chordates possess a notochord at some stage of life.


18. MAJOR PHYLA OF ANIMALIA

PORIFERA
• Includes sponges.
• Body has many pores called ostia.
• Water flows through a canal system.
• Large opening is called osculum.
• Internal cavity is spongocoel.
• Usually have a skeleton of spicules or spongin.
• Reproduction may be asexual or sexual.
• Mostly marine.
• Examples: Sycon, Euplectella, Euspongia.

CNIDARIA
• Includes Hydra, jellyfish, sea anemones and corals.
• Radial symmetry.
• Body wall has two layers.
• Cnidoblasts or stinging cells are present.
• They help in capturing prey.
• Polyp and medusa forms occur.
• Hydra is freshwater; most others are marine.

PLATYHELMINTHES
• Flatworms.
• Body is dorsoventrally flattened.
• No true body cavity.
• Many are parasites.
• Some are free-living.
• Examples: Planaria, Fasciola and Taenia.
• Tapeworm has no alimentary canal.

ASCHELMINTHES / NEMATODA
• Roundworms.
• Body is elongated and cylindrical.
• Pseudocoelom is present.
• Alimentary canal has mouth and anus.
• Sexes are usually separate.
• Many are parasitic.
• Example: Ascaris.

ANNELIDA
• Body is elongated and segmented.
• True coelom is present.
• Setae or parapodia help in locomotion.
• Digestive tract has two openings.
• Excretory organs are nephridia.
• Examples: Nereis, earthworm and leech.


19. ARTHROPODA

• Arthropoda is a major animal phylum.
• Body is segmented.
• Appendages are jointed.
• Exoskeleton is made of chitinous cuticle.
• Exoskeleton is shed periodically during moulting.
• Sexes are generally separate.

MAJOR CLASSES:

Arachnida
• Four pairs of walking legs.
• Example: Scorpion.

Crustacea
• Example: Prawn.

Myriapoda
• Numerous body segments.
• Example: Millipede / Scolopendra.

Insecta
• Body divided into head, thorax and abdomen.
• Thorax has three pairs of legs.
• Usually has wings.
• Example: Cockroach.


20. MOLLUSCA

• Molluscs have soft, unsegmented bodies.
• Many possess a hard calcareous shell.
• A muscular foot helps in locomotion.
• They may be aquatic or terrestrial.
• Examples:
  → Snail
  → Oyster
  → Mussel
  → Squid
  → Octopus
  → Cuttlefish


21. ECHINODERMATA

• Includes starfish, brittle stars, sea urchins and sea cucumbers.
• They are marine animals.
• Body is unsegmented.
• Adults show radial symmetry.
• Larvae are bilaterally symmetrical.
• Endoskeleton contains calcareous ossicles.
• Tube feet help in movement.
• Regeneration of lost parts is characteristic.
• Example: Starfish.


22. PHYLUM CHORDATA

IMPORTANT CHORDATE FEATURES:

• Notochord is present at some stage.
• Dorsal tubular nerve cord is present.
• Gill slits are present at some stage of life.
• Body generally has a head and trunk.
• Two pairs of appendages are present in vertebrates.

SUBPHYLA:

Urochordata
• Notochord occurs mainly in the larval tail.
• Adult body is bag-shaped and covered by a tunic.
• Example: Herdmania.

Cephalochordata
• Notochord and nerve cord remain throughout life.
• Example: Amphioxus.

Vertebrata
• Notochord is replaced by the vertebral column.
• Well-developed head is present.
• Vertebrates have an internal skeleton.
• Examples include all animals with a backbone.


23. VERTEBRATA

Vertebrata has two superclasses:

AGNATHA
• Jawless vertebrates.
• Class Cyclostomata.
• No jaws.
• Seven pairs of gill slits.
• No paired fins.
• Example: Petromyzon (lamprey).

GNATHOSTOMATA
• Jawed vertebrates.
• Includes:
  1. Chondrichthyes
  2. Osteichthyes
  3. Amphibia
  4. Reptilia
  5. Aves
  6. Mammalia


24. CHONDRICHTHYES

• Cartilaginous fishes.
• Skeleton is made of cartilage.
• Mouth is ventral.
• Tail is heterocercal.
• Five to seven pairs of gills.
• Operculum is absent.
• Example: Scoliodon (dogfish).


25. OSTEICHTHYES

• Bony fishes.
• Skeleton is made of bone.
• Mouth is terminal.
• Tail is homocercal.
• Four pairs of gills.
• Operculum is present.
• Example: Labeo (Rohu).


26. AMPHIBIA

• Amphibians can live both in water and on land.
• Skin is smooth or rough and rich in glands.
• Two pairs of limbs are present.
• Digits generally lack claws.
• Eggs are laid in water.
• Larvae breathe through gills.
• Adults generally breathe through lungs.
• Heart is three-chambered.
• Examples: Frog, toad and salamander.


27. REPTILIA

• Reptiles are mainly terrestrial.
• Body is covered with horny scales.
• Skin is dry.
• Paired limbs are present in most reptiles but absent in snakes.
• Digits have claws.
• Respiration occurs through lungs.
• Heart is generally three-chambered.
• Crocodiles have a four-chambered heart.
• Eggs have a leathery shell.
• Examples: Turtle, lizard, cobra and crocodile.


28. AVES

• Aves includes birds.
• Birds are warm-blooded / homoiothermal.
• Body is covered with feathers.
• Jaws form a horny beak and teeth are absent.
• Forelimbs are modified into wings.
• Bones are generally light and pneumatic.
• Heart is four-chambered.
• Respiration occurs through lungs connected with air sacs.
• Voice box is called syrinx.
• Birds are oviparous and lay eggs.
• Examples: ostrich, kiwi, pigeon, crow and peacock.


29. MAMMALIA

• Mammals have hair on the body.
• Mammary glands produce milk for young ones.
• Sweat and oil glands occur in the skin.
• External ears or pinnae are generally present.
• Teeth are generally heterodont and thecodont.
• Mammals are warm-blooded.
• Heart is four-chambered.
• Most mammals are viviparous.
• Foetus is nourished through the placenta.
• Some primitive mammals are egg-laying.

SUBCLASSES:

Prototheria
• Egg-laying mammals.
• Placenta absent.
• Example: Duck-billed platypus.

Metatheria
• Pouched mammals.
• Females possess a marsupium.
• Example: Kangaroo.

Eutheria
• Placenta present.
• Includes most familiar mammals.


30. IMPORTANT MAMMALIAN ORDERS

Rodentia
• Herbivorous terrestrial mammals.
• Incisors are long and chisel-shaped.
• Examples: Rat, squirrel.

Chiroptera
• Flying mammals.
• Forelimbs are modified for flight.
• Examples: Bats.
• Bats use echolocation to detect objects.

Carnivora
• Flesh-eating mammals.
• Sharp canines and claws.
• Examples: Lion, tiger, cat and dog.

Primates
• Highly developed brain.
• Eyes face forward and provide binocular vision.
• Five digits with flat nails.
• Opposable thumb helps grasping.
• Examples: Monkey, apes and humans.

Cetacea
• Aquatic mammals.
• Forelimbs are modified into paddles.
• Respire through lungs.
• Example: Whale.

Proboscidea
• Large herbivorous terrestrial mammals.
• Upper lip and nose form a long trunk.
• Example: Elephant.

Ungulata
• Hoofed mammals.
• Mainly herbivorous.
• Examples: Deer, cattle and sheep.


31. HIGH-YIELD DIFFERENCES

BRYOPHYTES vs PTERIDOPHYTES

Bryophytes:
• Non-vascular
• No true roots, stems and leaves
• Gametophyte is dominant
• Example: Funaria

Pteridophytes:
• Vascular
• True roots, stems and leaves
• Sporophyte is dominant
• Example: Fern


GYMNOSPERMS vs ANGIOSPERMS

Gymnosperms:
• Naked seeds
• No ovary enclosing ovules
• Cones

Angiosperms:
• Seeds enclosed in fruits
• Ovules enclosed in ovary
• Flowers


CHONDRICHTHYES vs OSTEICHTHYES

Chondrichthyes:
• Cartilaginous skeleton
• Ventral mouth
• Heterocercal tail
• Operculum absent

Osteichthyes:
• Bony skeleton
• Terminal mouth
• Homocercal tail
• Operculum present


AMPHIBIA vs REPTILIA

Amphibia:
• Live in water and on land
• Eggs usually laid in water
• Larvae have gills
• Skin moist/glandular
• Heart three-chambered

Reptilia:
• Mainly terrestrial
• Eggs laid on land
• Lungs throughout life
• Dry scaly skin
• Heart generally three-chambered, four in crocodiles


32. IMPORTANT TERMS TO REMEMBER

• Bryophyta = non-vascular plants
• Pteridophyta = vascular spore-producing plants
• Gymnosperms = naked-seeded plants
• Angiosperms = flowering plants with seeds enclosed in fruits
• Gametophyte = gamete-producing generation
• Sporophyte = spore-producing generation
• Porifera = sponges
• Cnidoblast = stinging cell of Cnidaria
• Nephridia = excretory organs of annelids
• Chitinous exoskeleton = characteristic feature of arthropods
• Tube feet = locomotory structures of echinoderms
• Notochord = characteristic supporting structure of chordates
• Agnatha = jawless vertebrates
• Chondrichthyes = cartilaginous fishes
• Osteichthyes = bony fishes
• Amphibia = animals living in water and on land
• Aves = birds
• Mammalia = mammals
• Prototheria = egg-laying mammals
• Metatheria = pouched mammals
• Eutheria = placental mammals
`,

  summary: `
CHAPTER 3 — SIMPLE SUMMARY

Chapter 3 of NIOS Biology deals with the two major kingdoms, Plantae and Animalia. Plants are mainly multicellular, eukaryotic and photosynthetic organisms. The lesson classifies plants into Bryophyta, Pteridophyta and Spermatophyta, with Spermatophyta divided into Gymnospermae and Angiospermae. :contentReference[oaicite:1]{index=1}

Bryophytes are non-vascular plants that commonly grow in damp and shady places. They are called the amphibians of the plant kingdom because their life cycle is associated with both water and land. Their main plant body is the haploid gametophyte, while the sporophyte remains attached to it. Marchantia, Funaria and Anthoceros are important examples. Their life cycle shows alternation of generations.

Pteridophytes are vascular plants such as ferns. Unlike bryophytes, they have vascular tissues and true roots, stems and leaves. The dominant plant body is the diploid sporophyte. Spores are produced in sporangia, often grouped into sori on the underside of fern leaves. The spores form a small gametophyte called the prothallus.

Gymnosperms are seed-producing plants whose seeds are not enclosed within an ovary. Their ovules are therefore described as naked. Pinus and Cycas are important examples. Angiosperms are flowering plants whose seeds are enclosed in fruits. They are divided into dicots and monocots. Dicots have two cotyledons, while monocots have one cotyledon. :contentReference[oaicite:2]{index=2}

The NIOS lesson also describes four important angiosperm families: Fabaceae and Malvaceae among dicots, and Liliaceae and Poaceae among monocots. Fabaceae includes pea and several pulses. Malvaceae includes China rose, cotton and bhindi. Liliaceae includes lily and onion, while Poaceae includes important cereals such as rice, wheat and maize. :contentReference[oaicite:3]{index=3}

The second major part of the chapter deals with Kingdom Animalia. Animals are multicellular eukaryotes with heterotrophic nutrition. Animal classification is based on features such as level of organisation, symmetry, body cavity, embryonic germ layers and the presence or absence of a notochord.

The major non-chordate groups discussed in the lesson include Porifera, Cnidaria, Platyhelminthes, Aschelminthes/Nematoda, Annelida, Arthropoda, Mollusca and Echinodermata. Each group has characteristic features. For example, Porifera have a canal system and pores, Cnidaria have cnidoblasts, annelids show segmentation and possess nephridia, arthropods have jointed appendages and a chitinous exoskeleton, molluscs have soft bodies and often shells, and echinoderms possess tube feet. :contentReference[oaicite:4]{index=4}

Chordates are characterised by the presence of a notochord at some stage of life, a dorsal tubular nerve cord and gill slits. The lesson divides Chordata into Urochordata, Cephalochordata and Vertebrata. Vertebrates are further divided into jawless Agnatha and jawed Gnathostomata. Gnathostomata includes cartilaginous fishes, bony fishes, amphibians, reptiles, birds and mammals. :contentReference[oaicite:5]{index=5}

Chondrichthyes have cartilaginous skeletons, while Osteichthyes have bony skeletons. Amphibians can live in water as well as on land and generally have a three-chambered heart. Reptiles have dry scaly skin and mainly live on land. Birds are warm-blooded animals with feathers, wings and a four-chambered heart. Mammals possess hair and mammary glands and are also warm-blooded.

Mammals are divided in the lesson into Prototheria, Metatheria and Eutheria. Prototheria includes egg-laying mammals such as the platypus, Metatheria includes pouched mammals such as kangaroos, and Eutheria includes placental mammals. The lesson also introduces important mammalian orders including Rodentia, Chiroptera, Carnivora, Primates, Cetacea, Proboscidea and Ungulata. :contentReference[oaicite:6]{index=6}

The most important things to remember from this chapter are the classification of plants and animals, differences between bryophytes and pteridophytes, gymnosperms and angiosperms, major angiosperm families, animal phyla and their identifying features, chordate characteristics, vertebrate classes, and mammalian subclasses and orders.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+3+Kingdom+Plantae+and+Animalia"
},
    {
  title: "Cell Structure and Function",

  notes: `
CHAPTER 4 — SHORT NOTES

1. CELL — THE BASIC UNIT OF LIFE
• The cell is the basic structural and functional unit of all living organisms.
• All living organisms are made up of cells.
• A cell is capable of carrying out essential life processes.
• Organisms may be unicellular (single-celled) or multicellular (many-celled).
• Unicellular organisms perform all life activities within one cell.
• In multicellular organisms, different cells become specialised to perform different functions.

2. DISCOVERY OF THE CELL
• Robert Hooke observed thin slices of cork under a microscope in 1665.
• He observed many small box-like compartments and called them "cells".
• The structures observed by Hooke were actually dead cells.
• Anton van Leeuwenhoek was one of the first scientists to observe living cells using a microscope.

3. CELL THEORY
• The cell theory was developed mainly through the work of Matthias Schleiden and Theodor Schwann.
• Schleiden concluded that plants are made up of cells.
• Schwann concluded that animals are made up of cells.
• The basic ideas of cell theory are:
  → All living organisms are composed of cells.
  → The cell is the basic structural and functional unit of life.
  → New cells arise from pre-existing cells.
• Rudolf Virchow later stated that new cells arise from pre-existing cells.

4. TYPES OF CELLS

A. PROKARYOTIC CELLS
• Prokaryotic cells are structurally simpler cells.
• They do not possess a true membrane-bound nucleus.
• Their genetic material is present in a nucleoid region.
• Membrane-bound organelles such as mitochondria, chloroplasts and Golgi bodies are absent.
• Bacteria and cyanobacteria are examples of prokaryotic organisms.

B. EUKARYOTIC CELLS
• Eukaryotic cells are more complex.
• They possess a well-defined nucleus surrounded by a nuclear membrane.
• They contain membrane-bound organelles.
• Plants, animals, fungi and protists generally have eukaryotic cells.

5. CELL MEMBRANE / PLASMA MEMBRANE
• The cell membrane forms the outer boundary of the cell.
• It separates the internal contents of the cell from the external environment.
• It is selectively permeable, meaning that it controls the movement of substances into and out of the cell.
• The membrane is mainly composed of lipids and proteins.
• The fluid mosaic model describes the organisation of the plasma membrane.
• Proteins present in the membrane perform functions such as transport, communication and recognition.

6. CELL WALL
• The cell wall is present outside the plasma membrane in plant cells.
• It provides mechanical support and protection.
• The plant cell wall is mainly composed of cellulose.
• It gives the plant cell a definite shape.
• Animal cells do not have a cell wall.

7. CYTOPLASM
• Cytoplasm is the region between the plasma membrane and the nucleus.
• It contains the cell organelles suspended in a semi-fluid matrix.
• Many metabolic reactions take place in the cytoplasm.

8. NUCLEUS
• The nucleus is the control centre of a eukaryotic cell.
• It contains the genetic material, mainly DNA.
• The nucleus is surrounded by a nuclear envelope.
• The nuclear envelope contains pores through which substances can move between the nucleus and cytoplasm.
• The nucleolus is involved in the formation of ribosomal components.
• Chromosomes contain DNA and proteins and carry hereditary information.

9. MITOCHONDRIA
• Mitochondria are important sites of aerobic cellular respiration.
• They are often called the "powerhouses" of the cell.
• They produce ATP, which is used as an energy source for cellular activities.
• Mitochondria have an outer membrane and an inner membrane.
• The inner membrane forms folds called cristae.
• The internal fluid-filled region is called the matrix.
• Mitochondria contain their own DNA and ribosomes.

10. PLASTIDS
• Plastids occur mainly in plant cells and some protists.
• Chloroplasts contain chlorophyll and are the sites of photosynthesis.
• Chromoplasts contain pigments responsible for many colours in plant parts.
• Leucoplasts are generally colourless and are involved in storage.

11. CHLOROPLAST
• Chloroplasts are double-membrane-bound organelles.
• They contain chlorophyll.
• They are responsible for photosynthesis.
• The internal membrane system consists of flattened sacs called thylakoids.
• A stack of thylakoids is called a granum.
• The fluid surrounding the grana is called the stroma.
• The chloroplast also contains its own DNA and ribosomes.

12. ENDOPLASMIC RETICULUM
• Endoplasmic reticulum (ER) is a network of membranes within the cytoplasm.
• Rough endoplasmic reticulum has ribosomes attached to its surface.
• Rough ER is mainly involved in the synthesis and transport of proteins.
• Smooth endoplasmic reticulum lacks ribosomes.
• Smooth ER is involved in lipid synthesis and other metabolic functions.

13. RIBOSOMES
• Ribosomes are small structures involved in protein synthesis.
• They may occur freely in the cytoplasm or be attached to rough ER.
• Ribosomes are made up of ribosomal RNA and proteins.
• They are found in both prokaryotic and eukaryotic cells.

14. GOLGI APPARATUS
• The Golgi apparatus consists of flattened membrane-bound sacs.
• It modifies, sorts and packages proteins and other substances.
• It helps in the formation of secretory vesicles.
• It also participates in the formation of lysosomes.

15. LYSOSOMES
• Lysosomes are membrane-bound organelles containing digestive enzymes.
• They help break down unwanted materials and cellular waste.
• They can digest damaged cell components.
• Because of their digestive enzymes, lysosomes are sometimes called "suicidal bags" of the cell.

16. VACUOLES
• Vacuoles are membrane-bound spaces containing cell sap or other substances.
• Plant cells usually possess a large central vacuole.
• Vacuoles help in storage and maintaining the internal pressure of plant cells.
• Animal cells may contain smaller temporary vacuoles.

17. CENTROSOME AND CENTRIOLES
• The centrosome is generally present in animal cells.
• It contains a pair of centrioles.
• Centrioles participate in the organisation of spindle fibres during cell division.
• They are also involved in the formation of cilia and flagella in certain cells.

18. CYTOSKELETON
• The cytoskeleton is a network of protein fibres within the cell.
• It helps maintain cell shape.
• It provides support and helps in movement of organelles and cells.
• Major components include microtubules, microfilaments and intermediate filaments.

19. CILIA AND FLAGELLA
• Cilia and flagella are structures involved in movement.
• Cilia are generally shorter and numerous.
• Flagella are generally longer and fewer.
• Their movement can help cells move or move substances over the cell surface.

20. TRANSPORT ACROSS THE CELL MEMBRANE

A. DIFFUSION
• Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration.
• It does not require cellular energy.

B. OSMOSIS
• Osmosis is the movement of water through a selectively permeable membrane.
• Water moves from a region of higher water potential to a region of lower water potential.

C. ACTIVE TRANSPORT
• Active transport moves substances against their concentration gradient.
• It requires energy, usually in the form of ATP.
• Transport proteins in the membrane help move specific substances.

21. ENDOCYTOSIS AND EXOCYTOSIS
• Endocytosis is the process by which a cell takes material into the cell by forming a vesicle.
• Phagocytosis involves the intake of relatively large particles.
• Pinocytosis involves the intake of fluids or dissolved substances.
• Exocytosis is the process by which materials are released from the cell through vesicles.

22. PLANT CELL AND ANIMAL CELL
• Plant cells generally possess a cell wall, chloroplasts and a large central vacuole.
• Animal cells lack a cell wall and chloroplasts.
• Animal cells generally have smaller vacuoles.
• Both plant and animal cells possess common structures such as plasma membrane, cytoplasm, nucleus, mitochondria, ribosomes, ER and Golgi apparatus.

23. IMPORTANT IDEA
• The structure of a cell organelle is closely related to its function.
• Different organelles work together to maintain the life and activities of the cell.
• A cell therefore functions as an organised system rather than as a collection of independent structures.
`,

  summary: `
CHAPTER 4 — SIMPLE SUMMARY

Cell Structure and Function explains why the cell is considered the basic unit of life. Every living organism is made of one or more cells, and cells carry out the essential activities required for life.

Robert Hooke first used the term "cell" after observing cork under a microscope. Later scientists such as Schleiden, Schwann and Virchow contributed to the development of cell theory. Cell theory states that living organisms are made of cells, the cell is the basic structural and functional unit of life, and new cells arise from pre-existing cells.

Cells are broadly classified into prokaryotic and eukaryotic cells. Prokaryotic cells, such as bacteria, lack a true membrane-bound nucleus and membrane-bound organelles. Eukaryotic cells possess a well-defined nucleus and many specialised organelles.

The plasma membrane forms the boundary of the cell and controls the movement of substances. In plants, the cell wall provides additional support and protection. The cytoplasm contains various organelles, while the nucleus contains DNA and controls many cellular activities.

Each organelle has a particular function. Mitochondria produce ATP through cellular respiration. Chloroplasts carry out photosynthesis in plant cells. Ribosomes synthesise proteins. The endoplasmic reticulum helps in the synthesis and transport of proteins and lipids. The Golgi apparatus modifies and packages materials. Lysosomes digest unwanted materials and cellular waste. Vacuoles help in storage, while the cytoskeleton provides structural support and helps with movement.

Materials can move across the plasma membrane through processes such as diffusion, osmosis and active transport. Endocytosis brings materials into the cell, while exocytosis releases materials outside the cell.

Plant and animal cells share many structures, but plant cells characteristically possess a cell wall, chloroplasts and a large central vacuole.

Overall, the chapter shows that the different structures of a cell work together. The organisation and specialised functions of cell organelles allow cells to survive, grow, reproduce and perform the activities necessary for life.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+4+Cell+Structure+and+Function"
},
    {
  title: "Tissues and Other Levels of Organisation",

  notes: `
CHAPTER 5 — SHORT NOTES

1. WHAT IS A TISSUE?
• A tissue is a group of cells having a common origin, similar structure and a specific function.
• The study of tissues is called histology.
• Tissues form an organisational level between cells and organs.
• In multicellular organisms, cells become specialised and work together as tissues.
• Different tissues combine to form organs, and organs work together as organ systems.

2. LEVELS OF ORGANISATION

The main levels of organisation are:

Cell → Tissue → Organ → Organ System → Organism

• Cell: The basic structural and functional unit of life.
• Tissue: A group of similar cells performing a particular function.
• Organ: A structure made up of different tissues working together.
• Organ system: A group of organs working together to perform major body functions.
• Organism: A complete living individual.

Examples:

ANIMAL:
• Cell → Leucocyte
• Tissue → Epithelial tissue
• Organ → Heart
• Organ system → Blood vascular system
• Organism → Human

PLANT:
• Cell → Parenchyma cell
• Tissue → Plant tissue
• Organ → Root
• Organ system → Root system
• Organism → Mustard plant

3. PLANT TISSUES

Plant tissues are broadly divided into:

• Meristematic tissues
• Permanent tissues

4. MERISTEMATIC TISSUES

• Meristematic tissues contain actively dividing cells.
• They are responsible for the growth of plants.
• Their cells are generally young, living and undifferentiated.
• Cells are usually small and have dense cytoplasm.
• The nucleus is prominent.
• Vacuoles are absent or very small.
• There are generally no intercellular spaces between meristematic cells.

5. TYPES OF MERISTEMATIC TISSUES

A. APICAL MERISTEM
• Present at the tips of roots and shoots.
• Responsible mainly for increase in the length of the plant.
• It produces primary growth.

B. INTERCALARY MERISTEM
• Present between mature tissues, commonly near nodes or bases of leaves/internodes in certain plants.
• It helps in the elongation of particular plant parts.
• It is especially important in grasses and plants that can regrow after cutting or grazing.

C. LATERAL MERISTEM
• Present along the sides of stems and roots.
• Responsible for increase in thickness or girth.
• Examples include vascular cambium and cork cambium.
• It is responsible for secondary growth.

6. PERMANENT TISSUES

• Permanent tissues develop from meristematic tissues.
• Their cells generally lose the ability to divide.
• They become specialised for particular functions.
• Permanent tissues may be simple or complex.

7. SIMPLE PERMANENT TISSUES

• Simple permanent tissues consist of only one type of cell.
• The three important simple permanent tissues are:
  → Parenchyma
  → Collenchyma
  → Sclerenchyma

8. PARENCHYMA

• Parenchyma consists of living cells.
• Cells usually have thin cell walls.
• Intercellular spaces are commonly present.
• It performs functions such as storage and photosynthesis.
• When parenchyma contains chlorophyll, it is called chlorenchyma.
• Parenchyma containing large air spaces is called aerenchyma.
• Aerenchyma is commonly found in aquatic plants and helps in buoyancy and gas exchange.

9. COLLENCHYMA

• Collenchyma consists of living cells.
• The cells have unevenly thickened walls, particularly at the corners.
• It provides mechanical support while allowing flexibility.
• It is commonly present in young stems and leaf stalks.
• It allows growing plant parts to bend without easily breaking.

10. SCLERENCHYMA

• Sclerenchyma provides strength and mechanical support.
• Its cells generally have thick, lignified walls.
• Mature sclerenchymatous cells are usually dead.
• The cells have very little internal space.
• Sclerenchyma occurs in parts of plants that require strong support.
• Fibres and sclereids are important forms of sclerenchyma.

11. COMPLEX PERMANENT TISSUES

• Complex tissues consist of more than one type of cell.
• Different cell types work together to perform a common function.
• The two major complex tissues are:
  → Xylem
  → Phloem

12. XYLEM

• Xylem conducts water and dissolved mineral salts mainly from roots towards the aerial parts of the plant.
• It also provides mechanical support.
• Important components of xylem include:
  → Tracheids
  → Vessels
  → Xylem fibres
  → Xylem parenchyma

13. PHLOEM

• Phloem transports prepared food from photosynthetic regions to other parts of the plant.
• This movement is called translocation.
• Important components include:
  → Sieve tubes
  → Companion cells
  → Phloem parenchyma
  → Phloem fibres

14. DIFFERENCE BETWEEN XYLEM AND PHLOEM

• Xylem mainly transports water and minerals.
• Phloem transports organic food materials.
• Xylem transport is mainly upward from roots to shoots.
• Phloem can transport food to different parts according to the source and sink relationship.
• Xylem also contributes considerably to mechanical support.

15. GROWTH OF PLANTS

• Plant growth occurs mainly because of cell division, cell enlargement and cell differentiation.
• Meristematic tissues are responsible for producing new cells.
• Primary growth increases the length of roots and shoots.
• Secondary growth increases the thickness or girth of stems and roots.

16. TUNICA-CORPUS THEORY

• The tunica-corpus theory explains the organisation of the shoot apical meristem.
• The shoot apex is divided into two main regions:
  → Tunica
  → Corpus
• Tunica consists of one or more outer layers.
• Corpus lies beneath the tunica and contains cells that contribute to the internal tissues of the growing shoot.

17. HISTOGEN THEORY

• Histogen theory was proposed to explain the organisation of the shoot apex.
• It describes different regions or histogens of the growing shoot.
• These regions contribute to the formation of different tissues of the plant body.

18. ANIMAL TISSUES

Animal tissues are broadly classified into four major types:

• Epithelial tissue
• Connective tissue
• Muscular tissue
• Nervous tissue

19. EPITHELIAL TISSUE

• Epithelial tissue forms the covering or lining of body surfaces and organs.
• Its cells are closely packed with very little intercellular space.
• It provides protection.
• It can also perform functions such as absorption, secretion and excretion.

20. TYPES OF EPITHELIAL TISSUE

A. SIMPLE SQUAMOUS EPITHELIUM
• Consists of a single layer of thin, flat cells.
• It is suited for diffusion and filtration.
• It occurs where a thin covering is required.

B. CUBOIDAL EPITHELIUM
• Cells are approximately cube-shaped.
• It commonly performs absorption and secretion.
• It occurs in structures such as kidney tubules and certain glands.

C. COLUMNAR EPITHELIUM
• Cells are taller than they are wide.
• It is commonly involved in absorption and secretion.
• It occurs in parts of the digestive tract.

D. CILIATED EPITHELIUM
• Cells possess hair-like cilia on their free surface.
• Cilia help move materials along the epithelial surface.
• It occurs in parts of the respiratory tract and female reproductive tract.

E. STRATIFIED EPITHELIUM
• Consists of several layers of cells.
• It provides protection against mechanical stress and damage.
• It is found in areas such as the skin.

21. CONNECTIVE TISSUE

• Connective tissue connects, supports and protects different parts of the body.
• Its cells are generally separated by an extracellular matrix.
• The matrix may be fluid, semi-solid or solid depending on the tissue.
• Blood, bone, cartilage, adipose tissue and areolar tissue are examples.

22. AREOLAR CONNECTIVE TISSUE
• Areolar tissue acts as packing material between organs and tissues.
• It supports and connects different structures.
• It is commonly found beneath epithelial tissues.

23. ADIPOSE TISSUE
• Adipose tissue stores fat.
• It provides energy storage.
• It also provides insulation and helps protect organs.
• Adipose cells contain large fat droplets.

24. TENDON
• Tendons connect muscles to bones.
• They are strong and relatively inelastic.
• Their strength is mainly due to collagen fibres.

25. LIGAMENT
• Ligaments connect bone to bone.
• They are strong but more flexible than tendons.
• They help stabilise joints.

26. CARTILAGE
• Cartilage is a supportive connective tissue.
• It is firm but flexible.
• It provides support and cushioning.
• It occurs in places such as the nose, external ear and at certain joints.

27. BONE
• Bone is a hard connective tissue.
• It provides support and protection.
• It forms the major framework of the body.
• Bones also provide attachment points for muscles.
• Bone tissue contains a hard mineralised matrix.

28. BLOOD
• Blood is a fluid connective tissue.
• Its fluid matrix is called plasma.
• Blood contains red blood cells, white blood cells and platelets.
• It transports gases, nutrients, hormones and waste materials.
• White blood cells participate in defence.
• Platelets help in blood clotting.

29. MUSCULAR TISSUE

• Muscular tissue is specialised for contraction.
• Contraction produces movement of body parts and internal organs.
• The major types are:
  → Skeletal muscle
  → Smooth muscle
  → Cardiac muscle

30. SKELETAL MUSCLE
• Skeletal muscles are generally attached to bones.
• They help produce voluntary movements.
• Their cells are long and cylindrical.
• They show striations.
• They are commonly called voluntary muscles.

31. SMOOTH MUSCLE
• Smooth muscles do not show visible striations.
• They occur in the walls of many internal organs.
• Their action is generally involuntary.
• They help move substances through internal organs.

32. CARDIAC MUSCLE
• Cardiac muscle is found in the heart.
• It contracts rhythmically and involuntarily.
• Its cells are branched and interconnected.
• Cardiac muscle helps pump blood throughout the body.

33. NERVOUS TISSUE

• Nervous tissue is specialised for receiving and transmitting information.
• The main functional cells are neurons.
• Neurons receive and conduct nerve impulses.
• Nervous tissue helps coordinate and control body activities.
• Supporting cells called neuroglia provide support and other functions.

34. IMPORTANT COMPARISONS

MERISTEMATIC VS PERMANENT TISSUE
• Meristematic → actively dividing cells.
• Permanent → generally specialised cells that have lost the ability to divide.

SIMPLE VS COMPLEX TISSUE
• Simple → one main type of cell.
• Complex → more than one type of cell working together.

XYLEM VS PHLOEM
• Xylem → water and minerals.
• Phloem → prepared food.

TENDON VS LIGAMENT
• Tendon → muscle to bone.
• Ligament → bone to bone.

SKELETAL VS SMOOTH VS CARDIAC
• Skeletal → voluntary, striated, attached to bones.
• Smooth → involuntary, non-striated, internal organs.
• Cardiac → involuntary, striated, heart.

35. KEY TERMS TO REMEMBER

• Tissue = group of cells with common origin, structure and function.
• Histology = study of tissues.
• Meristem = actively dividing plant tissue.
• Apical meristem = increases length.
• Lateral meristem = increases thickness.
• Parenchyma = storage/photosynthesis.
• Collenchyma = flexible support.
• Sclerenchyma = strong mechanical support.
• Xylem = water and mineral conduction.
• Phloem = food conduction.
• Epithelial tissue = covering and lining.
• Connective tissue = support and connection.
• Muscle tissue = contraction and movement.
• Nervous tissue = coordination and control.
`,

  summary: `
CHAPTER 5 — SIMPLE SUMMARY

Tissues and Other Levels of Organisation explains how cells become organised into tissues, organs and organ systems.

A tissue is a group of cells with a common origin, similar structure and a specific function. The study of tissues is called histology. In multicellular organisms, the organisation proceeds from cell to tissue, tissue to organ, organ to organ system and finally to the complete organism.

Plant tissues are mainly divided into meristematic and permanent tissues. Meristematic tissues contain actively dividing cells and are responsible for plant growth. Apical meristem increases the length of roots and shoots, intercalary meristem helps in elongation of certain plant parts, and lateral meristem increases the thickness or girth of stems and roots.

Permanent tissues develop from meristematic tissues and generally lose their ability to divide. Simple permanent tissues contain one main type of cell and include parenchyma, collenchyma and sclerenchyma. Parenchyma is mainly involved in storage and, when it contains chlorophyll, photosynthesis. Collenchyma provides flexible support, while sclerenchyma provides strong mechanical support.

Complex permanent tissues contain different types of cells working together. Xylem conducts water and minerals, while phloem transports prepared food through the plant.

Animal tissues are divided into four major groups: epithelial, connective, muscular and nervous tissue. Epithelial tissue covers and lines surfaces and can perform protection, absorption and secretion. Connective tissue supports, connects and protects body structures and includes tissues such as areolar tissue, adipose tissue, cartilage, bone and blood.

Muscular tissue is specialised for contraction. Skeletal muscle helps in voluntary movement, smooth muscle controls movements of many internal organs, and cardiac muscle forms the muscular wall of the heart and contracts involuntarily.

Nervous tissue is specialised for receiving and transmitting information. Neurons conduct nerve impulses and help coordinate and control body activities.

The central idea of this chapter is that living organisms are organised systems. Cells specialise, form tissues, tissues combine to form organs, and organs work together as organ systems to perform the functions necessary for life.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+5+Tissues+Other+Levels+of+Organisation"
},
    {
  title: "Root System",

  notes: `
CHAPTER 6 — SHORT NOTES

1. WHAT IS A ROOT?
• The root is generally the underground, non-green part of a plant body.
• It usually develops from the radicle of the embryo.
• The main functions of roots are anchorage, absorption of water and minerals, conduction and storage of food.
• Roots generally grow towards gravity and away from light.
• Unlike shoots, roots normally do not bear leaves, flowers or fruits.

2. MAIN CHARACTERISTICS OF ROOTS
• Roots are generally cylindrical and non-green.
• They normally do not have nodes and internodes.
• Root branches arise internally from the pericycle.
• The growing root tip is protected by a root cap.
• Root hairs are present near the region of maturation.
• Roots absorb water and mineral salts from the soil.
• Roots anchor the plant firmly in the soil.

3. TYPES OF ROOT SYSTEM

There are mainly two types of root systems:

A. TAP ROOT SYSTEM
• A tap root develops from the radicle.
• The primary root continues to grow and produces secondary and tertiary roots.
• The main root is usually larger and more prominent than its branches.
• Tap roots are characteristic of many dicot plants.
• Example: mustard, gram, pea and carrot.

B. FIBROUS ROOT SYSTEM
• The primary root does not remain prominent for long.
• A number of roots arise from the base of the stem.
• These roots are generally similar in size and form a tuft.
• Fibrous roots are common in monocot plants.
• Example: wheat, maize and grasses.

4. ADVENTITIOUS ROOTS
• Roots that arise from parts of the plant other than the radicle are called adventitious roots.
• They may arise from stems, leaves or other plant parts.
• Adventitious roots may perform normal functions such as absorption and anchorage.
• Some become specialised for particular functions.

5. REGIONS OF A ROOT

A root tip can be divided into several regions:

• Root cap
• Region of cell division
• Region of elongation
• Region of maturation

6. ROOT CAP
• The root cap is present at the extreme tip of the root.
• It protects the delicate growing region of the root.
• It helps the root move through the soil.
• Cells of the root cap are continuously replaced because the outer cells are worn away.
• The root cap also helps the root perceive gravity.

7. REGION OF CELL DIVISION
• This region lies just behind the root cap.
• It contains actively dividing meristematic cells.
• New cells are produced by cell division.
• These cells later undergo elongation and differentiation.
• The apical meristem is located in this region.

8. REGION OF ELONGATION
• Cells produced in the region of division increase in size.
• This causes elongation of the root.
• The region contributes significantly to the increase in root length.
• Cells gradually become specialised as they move away from the meristem.

9. REGION OF MATURATION
• Cells in this region become fully differentiated.
• Root hairs develop in this region.
• Root hairs greatly increase the surface area available for absorption.
• Different tissues of the root become clearly differentiated.

10. ROOT HAIRS
• Root hairs are thin, tubular extensions of epidermal cells.
• They are found mainly in the region of maturation.
• Their main function is absorption of water and mineral salts.
• They increase the surface area of the root in contact with soil particles.
• Root hairs are delicate and short-lived.
• New root hairs continuously develop as the root grows.

11. INTERNAL STRUCTURE OF A ROOT

The main tissues of a root from outside towards inside are:

• Epidermis
• Cortex
• Endodermis
• Pericycle
• Vascular tissues
• Pith

12. EPIDERMIS
• The outermost layer of the root is called the epidermis.
• It is also called the piliferous layer or epiblema.
• Root hairs arise from epidermal cells.
• The epidermis helps in absorption of water and minerals.
• It generally lacks a thick cuticle because absorption is its major function.

13. CORTEX
• The cortex lies below the epidermis.
• It is mainly composed of parenchymatous cells.
• Intercellular spaces are generally present.
• The cortex stores food and allows movement of water towards the inner tissues.
• The innermost layer of the cortex is the endodermis.

14. ENDODERMIS
• Endodermis is the innermost layer of the cortex.
• It forms a distinct boundary around the vascular region.
• Endodermal cells possess Casparian strips.
• Casparian strips contain a water-resistant substance and help regulate movement of water and dissolved substances into the vascular tissues.

15. PERICYCLE
• The pericycle lies just inside the endodermis.
• It surrounds the vascular tissues.
• Lateral roots arise from the pericycle.
• In many roots, parts of the vascular cambium and cork cambium develop from tissues associated with the pericycle during secondary growth.

16. VASCULAR TISSUES
• The vascular tissues are located inside the pericycle.
• Xylem conducts water and minerals.
• Phloem transports prepared food.
• In roots, xylem and phloem occur in separate groups.
• The xylem is usually centrally located.
• In a typical dicot root, the xylem forms a star-shaped structure in cross-section.

17. PITH
• The pith is the central region of the root.
• It consists mainly of parenchymatous cells.
• In dicot roots, the pith is generally small.
• In monocot roots, the pith is generally large and well developed.

18. MONOCOT ROOT VS DICOT ROOT

DICOT ROOT:
• Usually has a prominent tap root system.
• Xylem groups are comparatively fewer.
• Xylem is usually star-shaped.
• Pith is generally small.
• Secondary growth may occur.

MONOCOT ROOT:
• Usually has a fibrous root system.
• Xylem groups are numerous.
• Pith is large and well developed.
• Secondary growth is generally absent.

19. FUNCTIONS OF ROOTS

A. ABSORPTION
• Roots absorb water and mineral salts from the soil.
• Root hairs are especially important in absorption.

B. ANCHORAGE
• Roots hold the plant firmly in the soil.
• Strong roots prevent the plant from being easily uprooted.

C. CONDUCTION
• Water and minerals absorbed by roots are transported upward through xylem.

D. STORAGE
• Some roots store reserve food.
• Examples include carrot, radish, turnip and sweet potato.

20. MODIFIED ROOTS

Roots may become modified to perform special functions.

A. STORAGE ROOTS
• Roots become swollen because of food storage.
• Examples: carrot, radish, turnip and sweet potato.

B. SUPPORTING ROOTS
• Some roots provide additional mechanical support.
• Prop roots develop from branches and reach the ground.
• Example: banyan.
• Stilt roots arise from lower nodes of stems.
• Example: maize.

C. RESPIRATORY ROOTS
• Plants growing in waterlogged soils may develop specialised roots for gaseous exchange.
• These roots are called pneumatophores.
• They project above the soil or water surface.
• Example: mangrove plants.

D. CLIMBING ROOTS
• Some climbing plants develop roots that help them attach to supporting structures.
• Example: money plant.

21. ROOT PRESSURE
• Root pressure is a positive pressure developed in the root due to the accumulation of water and dissolved substances.
• It can contribute to the upward movement of water through xylem.
• Root pressure is especially noticeable when transpiration is low.
• It can sometimes result in guttation, where water droplets appear at leaf margins.

22. IMPORTANT TERMS

• Radicle = embryonic root.
• Tap root = main root with lateral branches.
• Fibrous root = cluster of similar-sized roots.
• Adventitious root = root arising from a part other than the radicle.
• Root cap = protective structure at the root tip.
• Root hair = epidermal extension involved in absorption.
• Pericycle = tissue inside the endodermis from which lateral roots arise.
• Xylem = conducts water and minerals.
• Phloem = transports food.
• Pneumatophore = specialised respiratory root.
`,

  summary: `
CHAPTER 6 — SIMPLE SUMMARY

The root is generally the underground part of a plant and develops from the radicle of the embryo. It provides anchorage, absorbs water and mineral salts, conducts materials and may store food.

There are two major types of root systems. In a tap root system, the primary root continues to grow and produces secondary and tertiary branches. It is common in dicot plants such as mustard and gram. In a fibrous root system, the primary root becomes less prominent and many roots arise from the base of the stem. This type is common in monocots such as wheat and grasses.

Roots that arise from plant parts other than the radicle are called adventitious roots. They may be normal roots or may become specialised for functions such as support, storage or climbing.

The root tip has different regions. The root cap protects the growing tip. Behind it is the region of cell division where new cells are produced. The cells then enter the region of elongation, where they increase in size and contribute to root growth. In the region of maturation, cells become differentiated and root hairs develop.

Root hairs are delicate extensions of epidermal cells. They increase the surface area of the root and help absorb water and mineral salts from the soil.

Internally, the root contains epidermis, cortex, endodermis, pericycle, vascular tissues and pith. The endodermis forms the inner boundary of the cortex and contains Casparian strips. The pericycle lies inside the endodermis and gives rise to lateral roots. Xylem conducts water and minerals, while phloem transports food.

Roots can become modified for special functions. Storage roots store reserve food, supporting roots provide additional mechanical support, pneumatophores help plants in waterlogged environments obtain gases, and climbing roots help plants attach to supports.

The root therefore performs much more than simply holding a plant in the soil. It is an important organ involved in absorption, transport, storage, support and interaction with the soil environment.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+6+Root+System"
},

{
  title: "Shoot System",

  notes: `
CHAPTER 7 — SHORT NOTES

1. WHAT IS THE SHOOT SYSTEM?
• The shoot system is the above-ground part of a plant.
• It develops mainly from the plumule of the embryo.
• The shoot system includes the stem, branches, leaves, flowers, fruits and buds.
• It performs functions such as support, photosynthesis, transport, reproduction and storage.

2. MAIN PARTS OF THE SHOOT SYSTEM

The major parts are:

• Stem
• Leaves
• Buds
• Flowers
• Fruits
• Branches

3. STEM

• The stem is the main axis of the shoot system.
• It develops from the plumule.
• It usually grows upward and away from gravity.
• It bears leaves, branches, buds, flowers and fruits.
• It conducts water, minerals and food between roots and aerial parts.
• It provides mechanical support to leaves and reproductive structures.

4. NODES AND INTERNODES

• The points on the stem from which leaves or branches arise are called nodes.
• The regions between two successive nodes are called internodes.
• Nodes are important because leaves and axillary buds develop there.
• Internodes help separate successive nodes and contribute to elongation of the shoot.

5. TERMINAL AND AXILLARY BUDS

A. TERMINAL BUD
• The terminal or apical bud occurs at the tip of the stem or branch.
• It contains actively dividing cells.
• It contributes to the increase in length of the shoot.
• It is associated with primary growth.

B. AXILLARY BUD
• An axillary bud develops in the angle between a leaf and the stem.
• It can develop into a branch or sometimes a flower/inflorescence.
• Axillary buds contribute to branching.

6. FUNCTIONS OF THE STEM

• Supports leaves and reproductive structures.
• Conducts water and minerals from roots to aerial parts.
• Transports prepared food from leaves to other regions.
• Produces branches and bears leaves.
• May perform photosynthesis when green.
• May store food or water in specialised plants.
• Helps in vegetative propagation in some plants.

7. MODIFIED STEMS

Stems may become modified to perform special functions.

A. UNDERGROUND STEMS
• Underground stems remain below the soil.
• They often store food and help plants survive unfavourable conditions.
• They may also help in vegetative reproduction.

RHIZOME:
• A rhizome is a horizontal underground stem.
• It has nodes and internodes.
• Scale leaves and buds may be present.
• Example: ginger.

TUBER:
• A tuber is a swollen underground stem used for storage.
• Potato is an important example.
• The eyes of potato are buds.
• The presence of eyes shows that potato is a modified stem rather than a root.

BULB:
• A bulb has a short underground stem surrounded by fleshy storage leaves.
• Example: onion.

CORM:
• A corm is a short, swollen underground stem.
• It stores food.
• Example: Colocasia.

8. SUB-AERIAL STEMS

• Some stems grow partly above the ground and produce new plants.
• They help in vegetative propagation.

RUNNER:
• A runner is a slender stem that grows horizontally along the ground.
• New plants develop at nodes.
• Example: grass and strawberry.

STOLON:
• A stolon grows horizontally and may bend down to the soil.
• It can produce roots and new plants at certain points.

SUCKER:
• A sucker arises from the underground part of the stem.
• It grows upward and may develop into an independent plant.
• Example: mint.

9. AERIAL STEM MODIFICATIONS

Some aerial stems become modified for special functions.

TENDRILS:
• Stem tendrils are slender structures that help climbing plants attach to support.
• They may arise from axillary buds.
• Example: grapevine.

THORNS:
• Some thorns are modified stems or branches.
• They provide protection against herbivores.
• Example: Citrus and Bougainvillea.

PHYLLOCLADE:
• A phylloclade is a flattened or cylindrical green stem that performs photosynthesis.
• Leaves may be reduced to scales or spines.
• Example: Opuntia.

10. LEAF

• A leaf is a lateral, generally flattened structure borne on the stem.
• Leaves usually arise at nodes.
• The main function of leaves is photosynthesis.
• Leaves also participate in transpiration and gaseous exchange.
• A typical leaf has a leaf base, petiole and lamina.

11. PARTS OF A TYPICAL LEAF

A. LEAF BASE
• The leaf base connects the leaf to the stem.
• In some plants, the leaf base may be swollen.
• It may also bear structures such as stipules.

B. PETIOLE
• The petiole is the stalk connecting the leaf blade to the stem.
• It positions the lamina so that it can receive sufficient light.
• It also contains vascular tissues.

C. LAMINA
• The lamina or leaf blade is the broad, flattened part of the leaf.
• It contains veins and veinlets.
• It is the major region for photosynthesis.
• It also contains stomata for gaseous exchange and transpiration.

12. VENATION

• Venation refers to the arrangement of veins and veinlets in the leaf lamina.

RETICULATE VENATION:
• Veins form a network.
• It is commonly found in dicot leaves.
• Example: mango and guava.

PARALLEL VENATION:
• Veins run approximately parallel to one another.
• It is common in monocot leaves.
• Example: grass and banana.

13. SIMPLE AND COMPOUND LEAVES

SIMPLE LEAF:
• The leaf has a single undivided lamina.
• Incisions, if present, do not reach the midrib in a way that divides the lamina into separate leaflets.

COMPOUND LEAF:
• The lamina is divided into distinct leaflets.
• The entire structure develops from a single leaf bud.
• Leaflets are arranged along a common axis or attached at a common point.

14. TYPES OF COMPOUND LEAVES

A. PINNATELY COMPOUND LEAF
• Leaflets are arranged along a common axis called the rachis.
• Example: neem.

B. PALMATELY COMPOUND LEAF
• Leaflets arise from a common point.
• Example: silk cotton.

15. LEAF PHYLLOTAXY

• Phyllotaxy is the arrangement of leaves on the stem or branch.

A. ALTERNATE
• One leaf arises at each node.
• Example: China rose and mustard.

B. OPPOSITE
• Two leaves arise at each node.
• Example: guava and Calotropis.

C. WHORLED
• More than two leaves arise at a node.
• Example: Nerium.

16. LEAF MODIFICATIONS

Leaves can become modified for special functions.

A. LEAF TENDRILS
• Leaves or parts of leaves may become tendrils.
• They help climbing plants attach to support.
• Example: pea.

B. LEAF SPINES
• Leaves may be modified into spines.
• They provide protection and reduce water loss.
• Example: cactus.

C. STORAGE LEAVES
• Leaves may become thick and fleshy and store food or water.
• Example: onion and some succulent plants.

D. INSECTIVOROUS LEAVES
• Some plants have modified leaves that trap insects.
• These plants obtain nutrients, especially nitrogen, from captured insects.
• Examples include pitcher plant and Venus flytrap.

17. INFLORESCENCE

• The arrangement of flowers on the floral axis is called inflorescence.
• The floral axis may be specialised for bearing flowers.
• Inflorescence helps organise flowers for effective pollination and reproduction.

18. FLOWER

• A flower is a specialised reproductive structure of flowering plants.
• It is involved in sexual reproduction.
• A typical flower consists of four main whorls:

→ Calyx
→ Corolla
→ Androecium
→ Gynoecium

19. CALYX
• The calyx is the outermost floral whorl.
• Its individual members are called sepals.
• Sepals are usually green.
• They protect the developing flower bud.

20. COROLLA
• The corolla consists of petals.
• Petals are usually brightly coloured and may be scented.
• They help attract pollinators.
• The individual members are called petals.

21. ANDROECIUM

• Androecium is the male reproductive whorl of a flower.
• It consists of stamens.
• Each stamen generally has:
  → Filament
  → Anther
• The anther produces pollen grains.
• Pollen grains contain the male reproductive cells or their precursors.

22. GYNOECIUM

• Gynoecium is the female reproductive whorl.
• It consists of one or more carpels.
• A carpel generally has:
  → Stigma
  → Style
  → Ovary

STIGMA:
• Receives pollen grains.

STYLE:
• Connects stigma to ovary.

OVARY:
• Contains ovules.
• After fertilisation, the ovary generally develops into a fruit.

23. FRUIT

• A fruit generally develops from the ovary after fertilisation.
• It protects the developing seeds.
• Fruits help in seed dispersal.
• Fruits may be fleshy or dry.

24. SEED

• A seed develops from an ovule after fertilisation.
• It contains an embryo.
• Seeds may also contain stored food.
• Under favourable conditions, seeds germinate and produce new plants.

25. SHOOT SYSTEM AND PHOTOSYNTHESIS

• Leaves are the major photosynthetic organs of most plants.
• Chlorophyll captures light energy.
• Carbon dioxide enters mainly through stomata.
• Water required for photosynthesis reaches leaves through xylem.
• Sugars produced during photosynthesis are transported through phloem.

26. TRANSPIRATION

• Transpiration is the loss of water in the form of water vapour from aerial parts of plants.
• Leaves are the major sites of transpiration.
• Most transpiration occurs through stomata.
• Transpiration helps in the movement of water and minerals through the plant.
• It also helps cool plant surfaces.

27. STOMATA

• Stomata are tiny pores mainly present in the epidermis of leaves.
• Each stoma is surrounded by guard cells.
• Guard cells regulate opening and closing of the pore.
• Stomata allow gaseous exchange.
• They also provide the main pathway for transpiration.

28. VEGETATIVE PROPAGATION BY SHOOT PARTS

• Plants can reproduce vegetatively through stems and leaves.
• New plants may arise from buds, nodes or modified stems.
• Examples include potato tubers, ginger rhizomes, runners and suckers.
• Vegetative propagation produces genetically similar offspring in many cases.

29. IMPORTANT DIFFERENCES

ROOT VS SHOOT:
• Root → generally underground; absorbs water and minerals.
• Shoot → generally above ground; bears leaves and reproductive structures.

TAP ROOT VS FIBROUS ROOT:
• Tap root → one prominent primary root.
• Fibrous root → many similar-sized roots.

SIMPLE VS COMPOUND LEAF:
• Simple → single undivided lamina.
• Compound → lamina divided into leaflets.

RETICULATE VS PARALLEL VENATION:
• Reticulate → network of veins.
• Parallel → veins run approximately parallel.

CALYX VS COROLLA:
• Calyx → sepals; protects flower bud.
• Corolla → petals; often attracts pollinators.

ANDROECIUM VS GYNOECIUM:
• Androecium → male reproductive whorl.
• Gynoecium → female reproductive whorl.

30. IMPORTANT TERMS

• Node = point on stem where leaves or branches arise.
• Internode = region between two nodes.
• Bud = undeveloped shoot or reproductive structure.
• Petiole = leaf stalk.
• Lamina = leaf blade.
• Venation = arrangement of veins.
• Phyllotaxy = arrangement of leaves on stem.
• Inflorescence = arrangement of flowers.
• Stamen = male reproductive structure.
• Carpel = female reproductive structure.
• Stigma = pollen-receiving part.
• Ovary = part containing ovules.
• Fruit = generally mature ovary.
• Seed = mature ovule containing embryo.
`,
  
  summary: `
CHAPTER 7 — SIMPLE SUMMARY

The shoot system is the above-ground part of a plant and develops mainly from the plumule of the embryo. It includes the stem, branches, leaves, buds, flowers and fruits. The shoot system supports the plant, transports materials, performs photosynthesis and takes part in reproduction.

The stem is the main axis of the shoot. It bears leaves, branches, buds, flowers and fruits. The points from which leaves arise are called nodes, while the regions between two nodes are called internodes. The terminal bud is present at the tip of the shoot and contributes to its growth. Axillary buds occur in the angle between leaves and the stem and can develop into branches or reproductive structures.

Stems may become modified for special functions. Underground stems such as rhizomes, tubers, bulbs and corms commonly store food and may help in vegetative propagation. Sub-aerial stems such as runners and suckers help produce new plants. Aerial stem modifications include tendrils for climbing, thorns for protection and phylloclades that perform photosynthesis.

Leaves are generally flattened structures arising from the stem. A typical leaf has a leaf base, petiole and lamina. The lamina contains veins and veinlets and is usually the main site of photosynthesis. Venation may be reticulate, in which veins form a network, or parallel, in which veins run approximately parallel. Leaves may be simple or compound.

The arrangement of leaves on the stem is called phyllotaxy. It may be alternate, opposite or whorled. Leaves can also become modified for special functions. Leaf tendrils help climbing, leaf spines provide protection and reduce water loss, fleshy leaves may store food or water, and insectivorous leaves trap insects to obtain nutrients.

Flowers are specialised reproductive structures of flowering plants. A typical flower has four main whorls: calyx, corolla, androecium and gynoecium. The calyx consists of sepals and protects the flower bud. The corolla consists of petals and often attracts pollinators. The androecium is the male reproductive whorl and consists of stamens. The gynoecium is the female reproductive whorl and consists of carpels.

A typical carpel has stigma, style and ovary. The stigma receives pollen, the style connects the stigma to the ovary, and the ovary contains ovules. After fertilisation, the ovary generally develops into a fruit and the ovules develop into seeds.

The shoot system is therefore important not only for supporting the plant but also for photosynthesis, gaseous exchange, transport, vegetative propagation and sexual reproduction.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+7+Shoot+System"
},
    {
  title: "Absorption, Transport and Water Loss in Plants",

  notes: `
CHAPTER 8 — SHORT NOTES

1. ABSORPTION OF WATER
• Plants absorb water mainly through their roots.
• The young regions of roots, especially root hairs, are mainly responsible for water absorption.
• Root hairs are thin extensions of epidermal cells and provide a large surface area for absorption.
• Water enters root hairs mainly by osmosis.
• Osmosis is the movement of water through a selectively permeable membrane from a region of higher water potential to a region of lower water potential.

2. ROOT HAIRS
• Root hairs are delicate and unicellular structures.
• They are in close contact with the thin film of water surrounding soil particles.
• Their large surface area helps the plant absorb sufficient water and minerals.
• Root hairs are short-lived and are continuously replaced as the root grows.

3. PATHWAY OF WATER THROUGH THE ROOT
• After entering the root hair, water moves through the root tissues towards the xylem.
• Water can move through the cell walls and intercellular spaces.
• This pathway is called the apoplast pathway.
• Water can also move through the cytoplasm of cells connected by plasmodesmata.
• This pathway is called the symplast pathway.
• The Casparian strips in the endodermis regulate the movement of water and dissolved substances into the vascular tissue.

4. ROOT PRESSURE
• Root pressure is the positive pressure that develops inside the root due to the accumulation of water and solutes.
• Active absorption of minerals can contribute to the development of root pressure.
• Root pressure may cause water to rise through the xylem.
• Guttation is one visible effect associated with root pressure.

5. TRANSPIRATION
• Transpiration is the loss of water in the form of water vapour from the aerial parts of plants.
• Most transpiration occurs through stomata.
• Smaller amounts may occur through the cuticle and lenticels.
• Transpiration helps in the movement of water and minerals from roots to leaves.
• It also helps cool the plant.

6. STOMATA
• Stomata are tiny pores mainly present on the epidermis of leaves.
• Each stoma is surrounded by two guard cells.
• Guard cells regulate the opening and closing of stomata.
• When guard cells become turgid, the stomatal pore generally opens.
• When guard cells lose water and become flaccid, the pore generally closes.

7. FACTORS AFFECTING TRANSPIRATION

A. Temperature
• Increase in temperature generally increases the rate of evaporation and transpiration.

B. Humidity
• High humidity reduces the difference in water vapour concentration between the leaf and atmosphere.
• Therefore, high humidity generally decreases transpiration.

C. Wind
• Moving air removes water vapour around the leaf.
• Moderate wind can increase transpiration.
• Very strong wind may cause stomata to close.

D. Light
• Light generally promotes stomatal opening.
• Therefore, transpiration is usually greater in light than in darkness.

E. Leaf area
• Larger leaf area generally provides a greater surface for water loss.

8. TRANSPIRATION PULL
• Water evaporating from leaf surfaces creates tension in the water column of xylem.
• This tension helps pull water upward from the roots.
• This mechanism is called transpiration pull.
• Cohesion between water molecules helps maintain a continuous water column in the xylem.
• Adhesion between water and xylem walls also helps water movement.

9. ASCENT OF SAP
• The upward movement of water and dissolved minerals through the xylem is called ascent of sap.
• Transpiration pull is considered an important force responsible for this movement.
• Root pressure may also contribute, particularly when transpiration is low.

10. GUTTATION
• Guttation is the loss of liquid water droplets from the margins or tips of leaves.
• It usually occurs when soil water is abundant and transpiration is low.
• Water is commonly forced out through specialised structures called hydathodes.
• Guttation should not be confused with transpiration because transpiration involves water vapour.

11. IMPORTANCE OF TRANSPIRATION
• Helps in the upward transport of water.
• Helps transport dissolved mineral salts.
• Maintains the water movement through the plant.
• Helps regulate plant temperature.
• Provides water to photosynthetic tissues.
• Excessive transpiration, however, can cause water stress and wilting.

12. IMPORTANT TERMS
• Absorption = uptake of water and minerals by roots.
• Osmosis = movement of water through a selectively permeable membrane.
• Transpiration = loss of water vapour from aerial parts of plants.
• Transpiration pull = pulling force generated mainly by water loss from leaves.
• Xylem = tissue responsible mainly for conduction of water and minerals.
• Guttation = loss of liquid water droplets from leaf margins or tips.
`,

  summary: `
CHAPTER 8 — SIMPLE SUMMARY

Plants need a continuous supply of water for photosynthesis, transport, growth and maintenance of their cells. Water is absorbed mainly by the root hairs. Because root hairs have thin walls and a large surface area, they are well suited for absorbing water from the soil.

Water enters root hairs mainly by osmosis and then moves through the different tissues of the root towards the xylem. It can move through cell walls and spaces by the apoplast pathway or through the living parts of cells by the symplast pathway. The endodermis regulates the movement of water into the vascular tissues.

Water can also be pushed upward by root pressure. However, the major force responsible for the upward movement of water in tall plants is associated with transpiration. Transpiration is the loss of water vapour from the aerial parts of a plant, mainly through stomata.

Stomata are controlled by guard cells. Their opening and closing regulate both gas exchange and water loss. Temperature, humidity, wind, light and leaf area all influence the rate of transpiration.

When water evaporates from the leaf, tension develops in the xylem. Because water molecules show cohesion and water also adheres to the xylem walls, a continuous water column can be maintained. This produces transpiration pull, which helps draw water upward from the roots.

The upward movement of water and minerals through xylem is called ascent of sap. Transpiration is therefore important for transport and cooling, although excessive water loss can cause wilting.

Guttation is different from transpiration. In guttation, liquid water droplets are released from leaf margins or tips, usually through hydathodes when soil water is abundant and transpiration is low.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+8+Absorption+Transport+Water+Loss+Plants"
},

{
  title: "Nutrition in Plants – Mineral Nutrition",

  notes: `
CHAPTER 9 — SHORT NOTES

1. MINERAL NUTRITION
• Plants require a number of mineral elements for normal growth and development.
• These elements are obtained mainly from the soil.
• Mineral nutrients are absorbed mostly in the form of inorganic ions through the roots.
• Carbon, hydrogen and oxygen are mainly obtained from carbon dioxide and water.
• Other essential elements are generally obtained from the soil.

2. ESSENTIAL ELEMENTS
• An element is considered essential when a plant cannot complete its life cycle properly without it.
• Essential elements have specific physiological or structural functions in plants.
• Deficiency of an essential element produces characteristic symptoms.

3. MACRONUTRIENTS
• Macronutrients are required by plants in relatively large quantities.
• Important macronutrients include nitrogen, phosphorus, potassium, calcium, magnesium and sulphur.
• Carbon, hydrogen and oxygen are also required in large quantities.

4. MICRONUTRIENTS
• Micronutrients are required only in very small quantities.
• Important micronutrients include iron, manganese, zinc, copper, boron, molybdenum, chlorine and nickel.
• Although required in small amounts, micronutrients are essential for normal plant growth.

5. NITROGEN
• Nitrogen is an important component of amino acids and proteins.
• It is also present in nucleic acids and several other important compounds.
• Nitrogen deficiency commonly causes poor growth and yellowing of older leaves.
• Plants cannot generally use atmospheric nitrogen directly.
• Nitrogen must be converted into usable forms through biological or industrial processes.

6. PHOSPHORUS
• Phosphorus is an important component of nucleic acids and phospholipids.
• It is also associated with ATP and energy transfer.
• Phosphorus is important for cell division and development.
• Deficiency can result in poor growth and abnormal development.

7. POTASSIUM
• Potassium helps regulate several physiological processes.
• It is important in maintaining cell turgidity and stomatal functioning.
• It activates several enzymes.
• Potassium deficiency may cause yellowing or scorching of leaf margins and poor growth.

8. CALCIUM
• Calcium is important for cell wall formation and membrane stability.
• It plays a role in cell division and growth.
• Calcium is particularly important in growing tissues.
• Deficiency symptoms often appear in young tissues.

9. MAGNESIUM
• Magnesium is a central component of the chlorophyll molecule.
• It is therefore essential for photosynthesis.
• Magnesium also activates several enzymes.
• Its deficiency can cause chlorosis, particularly in older leaves.

10. SULPHUR
• Sulphur is a component of certain amino acids and proteins.
• It is required for the synthesis of several important compounds.
• Sulphur deficiency may cause yellowing of leaves and reduced growth.

11. IRON
• Iron is important in chlorophyll formation and electron-transfer reactions.
• It is associated with several enzymes and electron carriers.
• Iron deficiency commonly causes chlorosis in younger leaves.

12. MANGANESE
• Manganese is involved in photosynthesis and enzyme activity.
• It is required for certain oxidation-reduction reactions.
• Deficiency may cause chlorosis and other disturbances in leaves.

13. ZINC
• Zinc is required for the functioning of several enzymes.
• It is also involved in growth regulation.
• Zinc deficiency can result in shortened internodes and abnormal leaf development.

14. COPPER
• Copper participates in enzyme activity and electron-transfer processes.
• It is important in photosynthesis and other metabolic reactions.
• Copper deficiency can affect young growth and reproductive development.

15. BORON
• Boron is important for cell division and growth.
• It is especially important in growing points and reproductive tissues.
• Deficiency affects young leaves, roots and growing regions.

16. MOLYBDENUM
• Molybdenum is required in very small quantities.
• It is important in nitrogen metabolism.
• It is involved in the functioning of enzymes associated with nitrogen utilisation.

17. CHLORINE
• Chlorine is required in small amounts.
• It participates in osmotic and ionic balance.
• It also has roles associated with photosynthesis.

18. NICKEL
• Nickel is a micronutrient required in very small quantities.
• It is associated with the enzyme urease.
• It therefore has a role in nitrogen metabolism.

19. DEFICIENCY SYMPTOMS
• Mineral deficiency can cause visible symptoms in plants.
• Common symptoms include chlorosis, necrosis, stunted growth and premature leaf fall.
• Chlorosis means yellowing of normally green tissues.
• Necrosis means death of cells or tissues.
• Symptoms depend on the nutrient and its mobility within the plant.

20. HYDROPONICS
• Hydroponics is the cultivation of plants without soil using a nutrient solution.
• It can be used to determine which mineral elements are essential.
• In a controlled nutrient solution, one element can be omitted at a time.
• The appearance of deficiency symptoms helps identify the role of that element.

21. IMPORTANT POINT
• Mineral nutrients do not simply provide food to plants.
• They participate in structural components, enzyme activity, energy transfer, photosynthesis, genetic material and many other physiological processes.
`,

  summary: `
CHAPTER 9 — SIMPLE SUMMARY

Plants require several mineral elements for normal growth, development and reproduction. These elements are mainly obtained from the soil in the form of ions. Carbon, hydrogen and oxygen are obtained largely from carbon dioxide and water, while many other nutrients are absorbed through the roots.

Mineral nutrients are divided into macronutrients and micronutrients according to the quantity required by plants. Macronutrients are required in relatively large amounts, whereas micronutrients are needed only in very small quantities. Both groups are essential.

Nitrogen is required for proteins and nucleic acids. Phosphorus is important in nucleic acids, phospholipids and energy transfer. Potassium helps with enzyme activity, cell turgidity and stomatal regulation. Calcium is important for cell walls, membranes and growing tissues. Magnesium forms the central part of chlorophyll and is therefore essential for photosynthesis. Sulphur is a component of certain amino acids and proteins.

Micronutrients such as iron, manganese, zinc, copper, boron, molybdenum, chlorine and nickel are also essential. They participate in enzyme activity, photosynthesis, nitrogen metabolism, electron transfer and growth regulation.

When a plant does not receive enough of an essential nutrient, characteristic deficiency symptoms may appear. These include chlorosis, necrosis, stunted growth and poor development. The location of symptoms can also depend on whether the nutrient can be moved from older tissues to younger tissues.

Hydroponics is a useful method for studying mineral nutrition. Plants are grown in nutrient solutions instead of soil, allowing scientists to remove or control individual elements and observe their effects.

Thus, mineral nutrients are not simply sources of food. They form parts of important molecules and participate in almost every major physiological process of the plant.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+9+Mineral+Nutrition+Plants"
},

{
  title: "Nitrogen Metabolism",

  notes: `
CHAPTER 10 — SHORT NOTES

1. IMPORTANCE OF NITROGEN
• Nitrogen is one of the most important mineral nutrients required by plants.
• It is an essential component of amino acids and proteins.
• Nitrogen is also present in nucleic acids such as DNA and RNA.
• It is found in chlorophyll and several other important plant compounds.
• Adequate nitrogen is therefore necessary for healthy vegetative growth.

2. ATMOSPHERIC NITROGEN
• The atmosphere contains a large amount of nitrogen gas.
• Atmospheric nitrogen exists mainly as molecular nitrogen (N₂).
• Most plants cannot directly use atmospheric nitrogen because the nitrogen molecule is very stable.
• Nitrogen must first be converted into usable forms.

3. NITROGEN FIXATION
• Nitrogen fixation is the conversion of atmospheric nitrogen into forms that can enter biological systems.
• Biological nitrogen fixation is carried out by certain microorganisms.
• Some nitrogen-fixing microorganisms live freely in soil.
• Others live in association with plants.

4. RHIZOBIUM
• Rhizobium is a group of nitrogen-fixing bacteria associated with leguminous plants.
• These bacteria live inside root nodules.
• Root nodules are specialised structures formed on the roots of legumes.
• The bacteria convert atmospheric nitrogen into nitrogen compounds usable by the plant.
• In return, the bacteria receive food and a suitable environment from the plant.

5. ROOT NODULES
• Root nodules are visible swellings on the roots of many leguminous plants.
• They contain nitrogen-fixing bacteria.
• The formation of nodules involves interaction between the plant roots and bacteria.
• Nitrogen fixation inside nodules is an important natural source of nitrogen for plants.

6. NITROGEN CYCLE
• Nitrogen continuously moves between the atmosphere, soil, organisms and decomposing matter.
• This movement is called the nitrogen cycle.
• Important processes include nitrogen fixation, nitrification, assimilation, ammonification and denitrification.

7. NITROGEN FIXATION
• Atmospheric nitrogen is converted into biologically useful nitrogen compounds.
• Biological nitrogen fixation is performed by specific microorganisms.
• This process makes nitrogen available to plants and other organisms.

8. NITRIFICATION
• Nitrification is the conversion of ammonia or ammonium compounds into nitrites and then nitrates.
• It is carried out by specialised soil microorganisms.
• Nitrates can be readily absorbed by plant roots.

9. ASSIMILATION
• Plants absorb nitrogen mainly as nitrate ions and, in some conditions, ammonium ions.
• The absorbed nitrogen is incorporated into organic compounds.
• It is used to synthesise amino acids, proteins, nucleic acids and other nitrogen-containing substances.
• This incorporation of inorganic nitrogen into organic compounds is called assimilation.

10. AMMONIFICATION
• Dead organisms and wastes contain organic nitrogen compounds.
• Decomposing microorganisms break these compounds down.
• Ammonia or ammonium compounds are released during this process.
• This process is called ammonification.

11. DENITRIFICATION
• Denitrification is the conversion of nitrates into gaseous nitrogen compounds.
• It is carried out by certain microorganisms, particularly under oxygen-deficient conditions.
• The process returns nitrogen to the atmosphere.
• Denitrification completes an important part of the nitrogen cycle.

12. NITRATE REDUCTION
• Plants reduce absorbed nitrate before nitrogen can be incorporated into amino acids.
• Nitrate is first reduced to nitrite.
• Nitrite is then reduced to ammonium.
• Ammonium nitrogen can be incorporated into amino acids and other organic molecules.

13. AMINO ACID FORMATION
• Ammonium ions are incorporated into organic compounds through metabolic pathways.
• Amino acids are formed and then used to synthesise proteins and other nitrogen-containing compounds.
• Proteins are essential components of cells and enzymes.

14. NITROGEN AND PROTEINS
• Proteins are polymers made from amino acids.
• Nitrogen is present in the amino groups of amino acids.
• Enzymes are mostly proteins and control many metabolic reactions.
• Nitrogen nutrition therefore directly affects plant growth and metabolism.

15. NITROGEN AND NUCLEIC ACIDS
• DNA and RNA contain nitrogenous bases.
• Nitrogen is therefore essential for genetic material.
• Adequate nitrogen is necessary for cell division and growth.

16. NITROGEN AND CHLOROPHYLL
• Nitrogen is a component of chlorophyll.
• Nitrogen deficiency can reduce chlorophyll formation.
• As a result, leaves may become pale or yellow.
• Nitrogen deficiency generally affects older leaves first because nitrogen can be moved from older tissues to younger growing tissues.

17. NITROGEN DEFICIENCY
• Nitrogen deficiency causes poor plant growth.
• Plants may become pale green or yellow.
• Older leaves commonly show symptoms first.
• Leaves may become small and growth may be stunted.
• Severe deficiency can greatly reduce crop productivity.

18. BIOLOGICAL IMPORTANCE
• Nitrogen metabolism connects the absorption of inorganic nitrogen with the formation of organic nitrogen compounds.
• It supports synthesis of proteins, nucleic acids, chlorophyll and many other compounds.
• The nitrogen cycle maintains the movement of nitrogen through ecosystems.

19. IMPORTANT TERMS
• Nitrogen fixation = conversion of atmospheric nitrogen into biologically useful forms.
• Nitrification = conversion of ammonia/ammonium into nitrite and nitrate.
• Assimilation = incorporation of inorganic nitrogen into organic compounds.
• Ammonification = formation of ammonia/ammonium from organic nitrogen during decomposition.
• Denitrification = conversion of nitrate into gaseous nitrogen compounds.
• Nitrogen cycle = continuous circulation of nitrogen between atmosphere, soil and living organisms.
`,

  summary: `
CHAPTER 10 — SIMPLE SUMMARY

Nitrogen is an essential nutrient for plants because it forms part of proteins, amino acids, nucleic acids, chlorophyll and many other important compounds. Although the atmosphere contains a large quantity of nitrogen gas, most plants cannot directly use atmospheric nitrogen.

Nitrogen must therefore be converted into usable forms. Certain microorganisms are capable of nitrogen fixation. Rhizobium bacteria are particularly important because they live in root nodules of leguminous plants and convert atmospheric nitrogen into forms that can enter biological systems.

Nitrogen is continuously circulated through the environment in the nitrogen cycle. Major processes of this cycle include nitrogen fixation, nitrification, assimilation, ammonification and denitrification.

During nitrification, ammonia or ammonium compounds are converted into nitrites and then nitrates by microorganisms. Plants can absorb nitrogen mainly in the form of nitrate and, under suitable conditions, ammonium. The absorbed nitrogen is assimilated into organic compounds such as amino acids.

Ammonification occurs when microorganisms decompose organic matter and release ammonia or ammonium compounds. Denitrification converts nitrates back into gaseous nitrogen compounds and returns nitrogen to the atmosphere.

Inside plants, nitrogen is incorporated into amino acids, which are used to form proteins. Nitrogen is also essential for DNA and RNA because these molecules contain nitrogenous bases. It is also a component of chlorophyll, making nitrogen important for photosynthesis.

A shortage of nitrogen causes poor growth and yellowing of leaves. Older leaves usually show deficiency symptoms first because nitrogen can be transported from older tissues to younger growing regions.

Therefore, nitrogen metabolism is important because it links the availability of nitrogen in the environment with the synthesis of essential nitrogen-containing compounds inside living organisms.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+10+Nitrogen+Metabolism"
},
   {
  title: "Photosynthesis",

  notes: `
CHAPTER 11 — SHORT NOTES

1. PHOTOSYNTHESIS
• Photosynthesis is the process by which green plants prepare organic food from carbon dioxide and water using light energy.
• Oxygen is released as a by-product of the process.
• Photosynthesis mainly takes place in green leaves.
• Chlorophyll is the major photosynthetic pigment responsible for absorbing light energy.
• Photosynthesis is one of the most important processes on Earth because it converts light energy into chemical energy.

2. RAW MATERIALS REQUIRED
• The main raw materials for photosynthesis are carbon dioxide and water.
• Carbon dioxide enters the leaf mainly through stomata.
• Water is absorbed from the soil by roots and transported to leaves through xylem.
• Light provides the energy required for the reactions.
• Chlorophyll absorbs the light energy.

3. GENERAL EQUATION
• The overall process can be represented as:

  6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

• Light energy and chlorophyll are required.
• The equation represents the overall result of several interconnected reactions.

4. CHLOROPLAST
• Photosynthesis occurs inside chloroplasts.
• Chloroplasts are found mainly in the mesophyll cells of leaves.
• Chloroplasts contain chlorophyll and other pigments.
• The internal membrane system of chloroplasts contains structures called thylakoids.
• Stacks of thylakoids are called grana.
• The fluid-filled region surrounding the grana is called the stroma.

5. PHOTOSYNTHETIC PIGMENTS
• Chlorophyll a is the primary photosynthetic pigment.
• Chlorophyll b and other pigments act as accessory pigments.
• Carotenoids are accessory pigments that absorb light wavelengths not efficiently absorbed by chlorophyll.
• Accessory pigments transfer absorbed energy to the reaction centres.

6. LIGHT REACTION
• The light-dependent reactions occur on the thylakoid membranes.
• Light energy is absorbed by photosynthetic pigments.
• Water is split during the light reactions.
• This splitting of water is called photolysis.
• Oxygen is released during photolysis.
• ATP is produced during the light reactions.
• NADPH is also formed and carries reducing power to the reactions occurring in the stroma.

7. PHOTOLYSIS OF WATER
• Water molecules are split using light energy.
• The products include electrons, hydrogen ions and oxygen.
• The oxygen released during photosynthesis comes from water.
• The electrons replace those lost by chlorophyll during light absorption.

8. PHOTOSYSTEMS
• Photosynthetic pigments are organised into functional units called photosystems.
• Photosystem II and Photosystem I participate in the light reactions.
• Their reaction centres absorb light energy and initiate electron transfer.
• Electron transport contributes to ATP formation.

9. ATP FORMATION
• Light energy drives the movement of electrons through electron carriers.
• This movement helps establish a proton gradient.
• The proton gradient is used to produce ATP.
• ATP stores chemical energy that can be used in subsequent reactions.

10. DARK REACTION / BIOSYNTHETIC PHASE
• The reactions that use ATP and NADPH to fix carbon dioxide occur in the stroma.
• These reactions do not directly require light at every step.
• They are therefore traditionally called dark reactions.
• Carbon dioxide is incorporated into organic compounds.
• The Calvin cycle is the major pathway of carbon fixation in C3 plants.

11. CALVIN CYCLE
• The Calvin cycle occurs in the chloroplast stroma.
• Carbon dioxide combines with a five-carbon acceptor molecule.
• The first stable product in C3 plants is a three-carbon compound.
• ATP and NADPH produced during the light reactions are used.
• Carbohydrates are ultimately formed from the products of the cycle.
• The carbon acceptor molecule is regenerated so that the cycle can continue.

12. C3 PLANTS
• Plants in which the first stable product of carbon fixation is a three-carbon compound are called C3 plants.
• Most plants follow the C3 pathway.
• The Calvin cycle is the main carbon fixation pathway in these plants.

13. C4 PLANTS
• Some plants have an additional mechanism for carbon fixation.
• In C4 plants, carbon dioxide is initially fixed into a four-carbon compound.
• C4 plants are generally well adapted to high light intensity and high temperatures.
• They show a mechanism that helps reduce photorespiration.

14. FACTORS AFFECTING PHOTOSYNTHESIS

A. Light
• Increasing light intensity generally increases photosynthesis up to a certain limit.
• Beyond the optimum intensity, further increase may not increase the rate.

B. Carbon dioxide
• Carbon dioxide concentration affects the rate of carbon fixation.
• Increasing CO₂ concentration can increase photosynthesis up to a limiting level.

C. Temperature
• Photosynthetic reactions are affected by temperature.
• Each plant has an optimum temperature range.
• Very high or very low temperatures can reduce photosynthesis.

D. Water
• Water is a raw material for photosynthesis.
• Water shortage can cause stomata to close and reduce carbon dioxide entry.

E. Chlorophyll
• Adequate chlorophyll and healthy chloroplasts are essential for efficient photosynthesis.

15. IMPORTANCE OF PHOTOSYNTHESIS
• Produces organic food for plants.
• Provides the primary source of food for most ecosystems.
• Converts solar energy into chemical energy.
• Releases oxygen into the atmosphere.
• Helps maintain the balance of atmospheric carbon dioxide and oxygen.
• Provides organic matter that forms the basis of food chains.

16. IMPORTANT TERMS
• Photosynthesis = formation of organic food using light energy.
• Chlorophyll = main photosynthetic pigment.
• Chloroplast = organelle where photosynthesis occurs.
• Photolysis = splitting of water using light energy.
• Grana = stacks of thylakoids.
• Stroma = fluid region of chloroplast.
• Carbon fixation = incorporation of inorganic carbon dioxide into organic compounds.
`,

  summary: `
CHAPTER 11 — SIMPLE SUMMARY

Photosynthesis is the process by which green plants use light energy to convert carbon dioxide and water into organic food. Oxygen is released as a by-product. The process mainly occurs in the chloroplasts of green plant cells, where chlorophyll captures light energy.

Carbon dioxide enters leaves mainly through stomata, while water is absorbed by roots and transported to leaves through xylem. Chlorophyll and other pigments absorb light energy required for photosynthesis.

Photosynthesis involves two major stages. The light reactions occur on the thylakoid membranes of chloroplasts. Light energy is used to excite electrons, water is split by photolysis, oxygen is released, and energy-rich molecules such as ATP and NADPH are produced.

The second stage consists of carbon-fixation reactions that occur mainly in the chloroplast stroma. The Calvin cycle uses ATP and NADPH to incorporate carbon dioxide into organic compounds and ultimately produce carbohydrates.

Most plants are C3 plants, in which the first stable product of carbon fixation is a three-carbon compound. C4 plants initially fix carbon dioxide into a four-carbon compound and have adaptations that make them efficient under high light and temperature conditions.

The rate of photosynthesis is influenced by light intensity, carbon dioxide concentration, temperature, water availability and the condition of the photosynthetic apparatus.

Photosynthesis is essential because it produces food, stores solar energy as chemical energy, releases oxygen and forms the foundation of most food chains.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+11+Photosynthesis"
},

{
  title: "Respiration in Plants",

  notes: `
CHAPTER 12 — SHORT NOTES

1. RESPIRATION
• Respiration is the process by which cells obtain usable energy from organic food molecules.
• The energy released during respiration is captured mainly in the form of ATP.
• ATP provides energy for cellular activities.
• Respiration occurs in all living cells, including plant cells.
• Glucose and other organic compounds can serve as respiratory substrates.

2. AEROBIC RESPIRATION
• Aerobic respiration takes place in the presence of oxygen.
• Organic molecules are broken down and their energy is released gradually.
• Carbon dioxide and water are formed as major end products when glucose is completely oxidised.
• A large amount of ATP can be produced through aerobic respiration.

3. GENERAL EQUATION
• The overall reaction can be represented as:

  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy

• The actual process occurs through several enzyme-controlled steps.

4. GLYCOLYSIS
• Glycolysis is the first major stage of glucose breakdown.
• It occurs in the cytoplasm.
• One molecule of glucose is converted into two molecules of pyruvate.
• ATP is used during the initial steps.
• ATP is also produced during later steps.
• NADH is generated during glycolysis.
• Glycolysis does not directly require oxygen.

5. PYRUVATE
• Pyruvate is the end product of glycolysis.
• Under aerobic conditions, pyruvate enters mitochondria and is further oxidised.
• Under anaerobic conditions, pyruvate may undergo fermentation.

6. LINK REACTION
• In aerobic respiration, pyruvate is converted into acetyl-CoA.
• Carbon dioxide is released during this conversion.
• NADH is also produced.
• Acetyl-CoA enters the Krebs cycle.

7. KREBS CYCLE
• The Krebs cycle occurs mainly in the mitochondrial matrix.
• Acetyl-CoA enters the cycle.
• Carbon dioxide is released.
• Reduced electron carriers such as NADH and FADH₂ are produced.
• A small amount of ATP or an equivalent energy-rich molecule is formed.
• The cycle provides high-energy electrons to the electron transport chain.

8. ELECTRON TRANSPORT CHAIN
• The electron transport chain is located on the inner mitochondrial membrane.
• Electrons from NADH and FADH₂ pass through a series of electron carriers.
• Energy released during electron transfer is used to pump protons.
• A proton gradient is established across the inner mitochondrial membrane.
• ATP synthase uses this gradient to produce ATP.

9. OXIDATIVE PHOSPHORYLATION
• ATP formation linked with electron transport is called oxidative phosphorylation.
• Oxygen acts as the final electron acceptor.
• Oxygen combines with electrons and hydrogen ions to form water.
• This allows the electron transport chain to continue functioning.

10. ANAEROBIC RESPIRATION
• Respiration without oxygen is called anaerobic respiration.
• In plants and microorganisms, fermentation can occur under oxygen-deficient conditions.
• It produces much less ATP than aerobic respiration.

11. ALCOHOLIC FERMENTATION
• In alcoholic fermentation, pyruvate is converted into ethanol and carbon dioxide.
• This process occurs in yeast and some plant tissues under anaerobic conditions.
• Only a small amount of ATP is obtained because glucose is incompletely broken down.

12. RESPIRATORY SUBSTRATES
• Carbohydrates are common respiratory substrates.
• Fats can also be broken down and used for energy production.
• Proteins can be converted into compounds that enter respiratory pathways after removal of amino groups.

13. RESPIRATORY QUOTIENT
• Respiratory quotient (RQ) is the ratio of carbon dioxide released to oxygen consumed during respiration.

  RQ = CO₂ evolved / O₂ consumed

• For carbohydrates, the RQ is generally about 1.
• The RQ differs for fats and proteins because their oxidation requires different amounts of oxygen.

14. RESPIRATION AND TEMPERATURE
• Respiration is controlled by enzymes.
• Temperature therefore affects the rate of respiration.
• Very high temperatures can damage enzymes and reduce respiration.

15. IMPORTANCE OF RESPIRATION
• Provides ATP for cellular activities.
• Supplies energy for growth and development.
• Supports active transport.
• Provides energy for synthesis of cellular materials.
• Supports cell division and other metabolic activities.

16. IMPORTANT TERMS
• Respiration = controlled release of energy from organic molecules.
• Glycolysis = breakdown of glucose to pyruvate.
• Krebs cycle = cyclic pathway that oxidises acetyl-CoA.
• Electron transport chain = system of electron carriers involved in ATP production.
• Fermentation = anaerobic breakdown of organic molecules.
• ATP = major immediate energy currency of the cell.
`,

  summary: `
CHAPTER 12 — SIMPLE SUMMARY

Respiration is the controlled process through which cells release energy from organic food molecules. The released energy is captured mainly in ATP, which powers cellular activities.

In aerobic respiration, glucose is completely oxidised in the presence of oxygen. The overall products are carbon dioxide, water and energy. The process takes place through several stages.

Glycolysis occurs in the cytoplasm and converts one glucose molecule into two pyruvate molecules. It produces ATP and NADH. Under aerobic conditions, pyruvate enters the mitochondria and is converted into acetyl-CoA.

Acetyl-CoA enters the Krebs cycle in the mitochondrial matrix. Carbon dioxide is released and reduced electron carriers such as NADH and FADH₂ are produced. These carriers transfer high-energy electrons to the electron transport chain.

The electron transport chain is located on the inner mitochondrial membrane. Electron movement produces a proton gradient, which is used by ATP synthase to generate ATP. Oxygen acts as the final electron acceptor and water is formed.

When oxygen is unavailable, anaerobic processes such as alcoholic fermentation can occur. In this process, pyruvate is converted into ethanol and carbon dioxide. Much less energy is obtained because glucose is not completely oxidised.

Plants can use carbohydrates, fats and proteins as respiratory substrates. The respiratory quotient is used to compare carbon dioxide production with oxygen consumption.

Respiration is essential because the ATP produced provides energy for growth, active transport, synthesis, movement of substances and many other cellular processes.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+12+Respiration+Plants"
},

{
  title: "Nutrition and Digestion",

  notes: `
CHAPTER 13 — SHORT NOTES

1. NUTRITION
• Nutrition is the process by which organisms obtain and utilise food.
• Food supplies energy and materials required for growth, repair and maintenance.
• Animals generally obtain ready-made organic food from other organisms.
• Human nutrition involves ingestion, digestion, absorption, assimilation and egestion.

2. TYPES OF NUTRITION
• Autotrophic nutrition occurs when organisms prepare their own organic food.
• Heterotrophic nutrition occurs when organisms obtain organic food from external sources.
• Humans show heterotrophic nutrition.

3. COMPONENTS OF FOOD
• Major nutrients include carbohydrates, proteins and fats.
• Vitamins and minerals are required in smaller quantities but are essential for normal functioning.
• Water is essential for metabolic reactions and transport.
• Dietary fibre helps maintain normal functioning of the digestive system.

4. CARBOHYDRATES
• Carbohydrates are an important source of energy.
• Simple sugars such as glucose can be directly used by cells.
• Complex carbohydrates are broken down into simpler sugars during digestion.
• Starch is an important dietary carbohydrate.

5. PROTEINS
• Proteins are made up of amino acids.
• They are needed for growth, tissue repair, enzymes and many structural functions.
• During digestion, proteins are broken down into amino acids.

6. FATS
• Fats are concentrated sources of energy.
• They also form important components of cell membranes.
• Fats help in absorption of fat-soluble vitamins.
• During digestion, fats are broken down into fatty acids and glycerol or related products.

7. HUMAN DIGESTIVE SYSTEM
• The human alimentary canal includes:
  Mouth → pharynx → oesophagus → stomach → small intestine → large intestine → rectum → anus.
• Accessory digestive organs include salivary glands, liver and pancreas.

8. MOUTH
• Digestion begins in the mouth.
• Teeth mechanically break food into smaller pieces.
• The tongue mixes food with saliva and helps swallowing.
• Salivary glands produce saliva.
• Salivary amylase begins the digestion of starch.

9. SWALLOWING AND OESOPHAGUS
• The chewed food mixed with saliva forms a bolus.
• The bolus is swallowed and enters the oesophagus.
• Peristaltic movements push food towards the stomach.
• Peristalsis is a wave-like contraction of the muscular wall of the alimentary canal.

10. STOMACH
• The stomach is a muscular organ that temporarily stores food.
• Gastric glands produce gastric juice.
• Hydrochloric acid provides an acidic environment.
• Pepsin begins protein digestion.
• The acidic environment also helps destroy many microorganisms present in food.
• Mucus protects the stomach lining from digestive secretions.

11. SMALL INTESTINE
• Most chemical digestion and absorption occur in the small intestine.
• The small intestine receives bile from the liver and pancreatic juice from the pancreas.
• Intestinal glands also contribute digestive enzymes.
• Carbohydrates, proteins and fats are broken down into absorbable molecules.

12. BILE
• Bile is produced by the liver and stored in the gall bladder.
• Bile does not contain digestive enzymes.
• Bile salts help emulsify fats into smaller droplets.
• Emulsification increases the surface area available for lipase action.
• Bile also helps provide a suitable alkaline environment in the small intestine.

13. PANCREAS
• The pancreas produces pancreatic juice.
• Pancreatic enzymes act on carbohydrates, proteins and fats.
• Pancreatic amylase helps digest carbohydrates.
• Proteases digest proteins.
• Lipase digests fats.

14. INTESTINAL DIGESTION
• Enzymes present in intestinal secretions complete digestion.
• Complex carbohydrates are converted into simple sugars.
• Proteins and peptides are broken down into amino acids.
• Fats are converted into fatty acids and glycerol or related products.

15. ABSORPTION
• Digested nutrients are absorbed mainly through the wall of the small intestine.
• The inner surface of the small intestine contains numerous finger-like projections called villi.
• Villi greatly increase the surface area for absorption.
• Blood capillaries inside villi absorb many water-soluble nutrients.
• Lacteals help absorb products of fat digestion.

16. ASSIMILATION
• Assimilation is the utilisation of absorbed nutrients by body cells.
• Glucose may be used for energy or stored.
• Amino acids are used to build proteins.
• Fatty acids and glycerol can be used in fat synthesis and energy metabolism.

17. LARGE INTESTINE
• The large intestine absorbs water and some electrolytes.
• Undigested material becomes more solid as water is removed.
• Bacteria present in the large intestine contribute to several processes.
• Faeces are stored in the rectum before elimination.

18. EGESTION
• Egestion is the removal of undigested and unabsorbed material from the digestive tract.
• It occurs through the anus.
• Egestion is different from excretion, which refers to removal of metabolic wastes produced by cells.

19. IMPORTANCE OF DIGESTION
• Converts complex food molecules into simpler molecules.
• Makes nutrients small enough to be absorbed.
• Supplies materials required for energy, growth and repair.
• Helps maintain normal body functions.

20. IMPORTANT TERMS
• Ingestion = taking food into the body.
• Digestion = breakdown of complex food into simpler substances.
• Absorption = movement of digested nutrients into blood or lymph.
• Assimilation = utilisation of absorbed nutrients by cells.
• Egestion = removal of undigested food.
• Peristalsis = wave-like muscular movement of the alimentary canal.
`,

  summary: `
CHAPTER 13 — SIMPLE SUMMARY

Nutrition provides organisms with the materials and energy required for life. Humans obtain food through heterotrophic nutrition. The major nutrients in the diet include carbohydrates, proteins and fats, along with vitamins, minerals, water and dietary fibre.

Human digestion begins in the mouth. Teeth break food mechanically and saliva mixes with it. Salivary amylase begins the digestion of starch. The food is swallowed and moved through the oesophagus to the stomach by peristaltic movements.

In the stomach, gastric juice contains hydrochloric acid and enzymes such as pepsin. Protein digestion begins here. Mucus protects the stomach lining from the acidic digestive contents.

Most digestion and absorption take place in the small intestine. Bile produced by the liver helps emulsify fats, while pancreatic and intestinal enzymes digest carbohydrates, proteins and fats into simpler molecules.

The inner surface of the small intestine contains villi, which greatly increase the surface area for absorption. Nutrients enter blood capillaries or lymphatic vessels and are transported to different parts of the body.

After absorption, nutrients are assimilated by cells. Glucose can be used for energy, amino acids can be used to build proteins, and products of fat digestion can be used in energy storage and other metabolic processes.

The large intestine mainly absorbs water and electrolytes. Undigested material is stored as faeces and finally eliminated through the anus. This process is called egestion.

Thus, digestion changes complex food into simpler absorbable substances, while absorption and assimilation make these nutrients available for the body's energy, growth, repair and maintenance.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+13+Nutrition+Digestion"
},

{
  title: "Respiration and Elimination of Nitrogenous Wastes",

  notes: `
CHAPTER 14 — SHORT NOTES

1. RESPIRATION IN HUMANS
• Respiration is essential for releasing energy from food.
• Human cells require oxygen for efficient aerobic respiration.
• Carbon dioxide produced during cellular respiration must also be removed.
• The respiratory system is responsible for gaseous exchange between the body and environment.

2. HUMAN RESPIRATORY SYSTEM
• The major parts include:
  Nose → nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → lungs.
• The lungs contain numerous microscopic air sacs called alveoli.
• Alveoli are the major sites of gaseous exchange.

3. NASAL CAVITY
• Air enters mainly through the nose.
• Nasal hairs help filter dust particles.
• The nasal passage warms and moistens incoming air.
• Mucus helps trap foreign particles.

4. TRACHEA AND BRONCHI
• The trachea carries air towards the lungs.
• It divides into two main bronchi.
• Each bronchus enters a lung.
• Bronchi branch repeatedly into smaller bronchioles.
• Cartilaginous support helps prevent collapse of the trachea.

5. ALVEOLI
• Alveoli are tiny air sacs surrounded by blood capillaries.
• Their walls are extremely thin.
• They provide a large surface area for gaseous exchange.
• Oxygen diffuses from alveolar air into blood.
• Carbon dioxide diffuses from blood into alveolar air.

6. MECHANISM OF BREATHING
• Breathing consists of inspiration and expiration.
• During inspiration, the diaphragm contracts and moves downward.
• The ribs move upward and outward.
• The volume of the thoracic cavity increases.
• Pressure inside the lungs decreases and air enters.
• During expiration, the diaphragm relaxes and moves upward.
• Thoracic volume decreases and air moves out.

7. TRANSPORT OF OXYGEN
• Oxygen is transported mainly by haemoglobin in red blood cells.
• Haemoglobin combines reversibly with oxygen.
• In the lungs, oxygen binds with haemoglobin.
• In tissues, oxygen is released where it is required.

8. TRANSPORT OF CARBON DIOXIDE
• Carbon dioxide produced by cells is transported to the lungs.
• A major portion is transported in the form of bicarbonate ions in blood.
• Some carbon dioxide is transported dissolved in plasma.
• Some is bound to haemoglobin.
• Carbon dioxide eventually diffuses into alveoli and is exhaled.

9. CELLULAR RESPIRATION
• Oxygen delivered to tissues is used in aerobic respiration.
• Food molecules are oxidised to release energy.
• ATP produced during respiration powers cellular activities.
• Carbon dioxide and water are major end products of glucose oxidation.

10. EXCRETION
• Excretion is the removal of metabolic waste products from the body.
• Nitrogenous wastes are produced mainly from the metabolism of proteins and nucleic acids.
• Major nitrogenous wastes include ammonia, urea and uric acid.

11. AMMONIA
• Ammonia is highly toxic.
• It is highly soluble in water.
• Aquatic animals can often excrete ammonia directly because water is readily available.
• Terrestrial animals generally convert ammonia into less toxic substances.

12. UREA
• Urea is less toxic than ammonia.
• It is produced mainly in the liver from ammonia.
• Humans are ureotelic because urea is the principal nitrogenous waste excreted by humans.
• Urea is transported by blood to the kidneys.

13. URIC ACID
• Uric acid is relatively insoluble and less toxic.
• It requires less water for elimination.
• Many birds and reptiles are uricotelic.
• Uric acid is particularly useful for animals that conserve water.

14. HUMAN EXCRETORY SYSTEM
• The major organs are kidneys, ureters, urinary bladder and urethra.
• Kidneys filter blood and form urine.
• Ureters carry urine from kidneys to the urinary bladder.
• The urinary bladder temporarily stores urine.
• The urethra carries urine outside the body.

15. NEPHRON
• The nephron is the structural and functional unit of the kidney.
• It consists of a renal corpuscle and a renal tubule.
• The renal corpuscle includes the glomerulus and Bowman's capsule.
• The renal tubule includes the proximal tubule, loop of Henle, distal tubule and collecting duct.

16. URINE FORMATION
• Urine formation involves filtration, reabsorption and secretion.
• Blood is filtered at the glomerulus.
• Useful substances such as glucose, amino acids and much of the water are reabsorbed.
• Additional wastes and ions may be secreted into the tubule.
• The final urine contains substances that the body needs to eliminate.

17. IMPORTANCE OF KIDNEYS
• Remove nitrogenous wastes.
• Maintain water balance.
• Help maintain ionic balance.
• Contribute to acid-base regulation.
• Help maintain the internal environment of the body.

18. OTHER EXCRETORY ORGANS
• Lungs remove carbon dioxide and water vapour.
• Skin removes some water, salts and small amounts of nitrogenous waste through sweat.
• The liver participates in detoxification and nitrogen metabolism.

19. IMPORTANT TERMS
• Respiration = process of obtaining energy from food.
• Breathing = physical movement of air into and out of lungs.
• Excretion = removal of metabolic wastes.
• Alveoli = sites of gaseous exchange.
• Nephron = functional unit of kidney.
• Ureotelic = organisms that mainly excrete urea.
• Uricotelic = organisms that mainly excrete uric acid.
`,

  summary: `
CHAPTER 14 — SIMPLE SUMMARY

The human body needs oxygen for aerobic respiration and must remove carbon dioxide produced by cells. The respiratory system carries out gaseous exchange. Air enters through the nose and passes through the respiratory passages into the lungs.

The lungs contain millions of alveoli. These tiny air sacs have thin walls and are surrounded by capillaries, making them highly efficient sites for gaseous exchange. Oxygen diffuses from the alveoli into the blood, while carbon dioxide diffuses from the blood into the alveoli.

Breathing involves inspiration and expiration. During inspiration, the diaphragm contracts, the thoracic cavity expands and air enters the lungs. During expiration, the diaphragm relaxes, the thoracic cavity becomes smaller and air is expelled.

Oxygen is transported mainly by haemoglobin in red blood cells. Carbon dioxide is transported in several forms, with a major proportion carried as bicarbonate ions.

Metabolism also produces nitrogenous wastes, especially from protein and nucleic acid breakdown. Ammonia is highly toxic, so many terrestrial animals convert it into less toxic substances such as urea or uric acid.

Humans are ureotelic because urea is their principal nitrogenous waste. Urea is produced mainly in the liver and removed from the blood by the kidneys.

The kidney contains millions of nephrons, which are its functional units. Urine formation involves filtration of blood, selective reabsorption of useful substances and secretion of certain substances into the renal tubules.

The lungs, skin and liver also contribute to the removal or processing of waste materials. Excretion is important for maintaining the internal chemical balance of the body.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+14+Respiration+Elimination+Nitrogenous+Wastes"
},

{
  title: "Circulation of Body Fluids",

  notes: `
CHAPTER 15 — SHORT NOTES

1. CIRCULATION
• Circulation is the movement of materials from one part of the body to another.
• The circulatory system transports oxygen, nutrients, hormones and metabolic wastes.
• It also helps maintain the internal environment of the body.
• In humans, circulation is mainly carried out by blood and the lymphatic system.

2. COMPONENTS OF BLOOD
• Blood is a fluid connective tissue.
• It consists of plasma and formed elements.
• The formed elements include red blood cells, white blood cells and platelets.

3. PLASMA
• Plasma is the liquid portion of blood.
• It contains water, proteins, salts, nutrients, hormones, gases and waste products.
• Plasma provides a medium for transporting substances throughout the body.
• Important plasma proteins include albumin, globulins and fibrinogen.

4. RED BLOOD CELLS
• Red blood cells are also called erythrocytes.
• They contain haemoglobin.
• Haemoglobin transports oxygen from lungs to tissues.
• Red blood cells also contribute to carbon dioxide transport.
• Mature human red blood cells lack a nucleus.
• Their biconcave shape provides a large surface area for gas exchange.

5. WHITE BLOOD CELLS
• White blood cells are also called leucocytes.
• They are involved in body defence and immunity.
• They can move out of blood vessels into tissues.
• Different types of white blood cells perform different defensive functions.

6. PLATELETS
• Platelets are small cell fragments.
• They play an important role in blood clotting.
• When a blood vessel is damaged, platelets help initiate the formation of a clot.
• Clotting prevents excessive blood loss.

7. BLOOD GROUPS
• Human blood groups include the ABO system and Rh system.
• In the ABO system, blood groups are A, B, AB and O.
• Blood group depends on specific antigens present on red blood cells.
• Corresponding antibodies occur in plasma.
• Compatibility is important during blood transfusion.

8. HEART
• The human heart is a muscular organ that pumps blood.
• It is located in the thoracic cavity.
• The heart has four chambers:
  Right atrium, right ventricle, left atrium and left ventricle.
• The right side mainly handles deoxygenated blood.
• The left side mainly handles oxygenated blood.

9. HEART VALVES
• Valves prevent backward flow of blood.
• The atrioventricular valves lie between atria and ventricles.
• The semilunar valves occur at the exits of the ventricles.
• Proper functioning of valves ensures one-way movement of blood.

10. BLOOD VESSELS

A. Arteries
• Arteries carry blood away from the heart.
• Their walls are thick and elastic.
• They usually carry oxygenated blood.
• The pulmonary artery is an important exception because it carries deoxygenated blood.

B. Veins
• Veins carry blood towards the heart.
• Their walls are thinner than those of arteries.
• Many veins contain valves.
• They usually carry deoxygenated blood.
• Pulmonary veins are an important exception because they carry oxygenated blood.

C. Capillaries
• Capillaries are microscopic blood vessels.
• Their walls are extremely thin.
• They connect arterioles and venules.
• Exchange of gases, nutrients and wastes occurs across capillary walls.

11. PULMONARY CIRCULATION
• Pulmonary circulation carries blood between the heart and lungs.
• Deoxygenated blood is pumped from the right ventricle to the lungs through pulmonary arteries.
• Oxygenated blood returns to the left atrium through pulmonary veins.

12. SYSTEMIC CIRCULATION
• Systemic circulation carries blood between the heart and the rest of the body.
• Oxygenated blood leaves the left ventricle through the aorta.
• It travels to tissues through arteries and capillaries.
• Deoxygenated blood returns to the right atrium through veins.

13. DOUBLE CIRCULATION
• Humans have a double circulatory system.
• Blood passes through the heart twice during one complete circulation.
• The two circuits are pulmonary circulation and systemic circulation.
• Double circulation helps maintain efficient separation of oxygenated and deoxygenated blood.

14. CARDIAC CYCLE
• The cardiac cycle consists of a sequence of contraction and relaxation of the heart chambers.
• Contraction is called systole.
• Relaxation is called diastole.
• The coordinated cycle allows the heart to fill and pump blood efficiently.

15. HEARTBEAT
• The rhythmic contraction of the heart is called the heartbeat.
• The normal heartbeat is controlled by specialised cardiac tissues.
• The sinoatrial node acts as the natural pacemaker of the heart.
• Electrical impulses spread through the heart and coordinate contraction.

16. BLOOD PRESSURE
• Blood pressure is the force exerted by blood against the walls of blood vessels.
• It is generally measured in arteries.
• Systolic pressure occurs during ventricular contraction.
• Diastolic pressure occurs during ventricular relaxation.
• Persistent abnormal blood pressure can affect health.

17. LYMPH
• Lymph is a fluid associated with the lymphatic system.
• It is formed from tissue fluid.
• Lymph vessels return excess tissue fluid to the bloodstream.
• Lymph also participates in immune defence.
• Lymphatic vessels help transport absorbed fats from the intestine.

18. FUNCTIONS OF CIRCULATION
• Transport of oxygen.
• Transport of nutrients.
• Transport of hormones.
• Removal of carbon dioxide and other wastes.
• Distribution of heat.
• Defence against pathogens.
• Maintenance of internal chemical balance.

19. IMPORTANT TERMS
• Plasma = liquid part of blood.
• Erythrocytes = red blood cells.
• Leucocytes = white blood cells.
• Platelets = blood-clotting cell fragments.
• Artery = vessel carrying blood away from heart.
• Vein = vessel carrying blood towards heart.
• Capillary = thin vessel where exchange occurs.
• Systole = contraction phase of heart.
• Diastole = relaxation phase of heart.
• Double circulation = circulation in which blood passes through the heart twice in one complete circuit.
`,

  summary: `
CHAPTER 15 — SIMPLE SUMMARY

The circulatory system transports materials throughout the human body. It carries oxygen, nutrients, hormones and wastes and helps maintain the internal environment. Blood is the major circulating fluid and consists of plasma and formed elements.

Plasma is the liquid component of blood and carries dissolved substances. Red blood cells contain haemoglobin and mainly transport oxygen. White blood cells participate in defence and immunity, while platelets are involved in blood clotting.

The human heart is a muscular pump with four chambers: right atrium, right ventricle, left atrium and left ventricle. Valves ensure that blood moves in one direction.

Blood travels through three main types of vessels. Arteries carry blood away from the heart and have thick elastic walls. Veins carry blood towards the heart and often contain valves. Capillaries have very thin walls and are the major sites of exchange between blood and tissues.

Humans have double circulation. Pulmonary circulation carries blood between the heart and lungs, while systemic circulation carries blood between the heart and the rest of the body. This arrangement keeps oxygenated and deoxygenated blood largely separated and makes oxygen delivery efficient.

The cardiac cycle consists of systole and diastole. During systole the heart contracts and pumps blood, while during diastole the chambers relax and fill with blood. The sinoatrial node acts as the natural pacemaker and helps maintain the rhythmic heartbeat.

Blood pressure is the force exerted by blood against vessel walls. It has systolic and diastolic components.

The lymphatic system collects excess tissue fluid and returns it to the blood. It also participates in immunity and helps transport absorbed fats.

Overall, circulation connects all parts of the body and ensures that cells receive essential substances while metabolic wastes are carried away.
`,

  video:
    "https://www.youtube.com/results?search_query=NIOS+Biology+314+Lesson+15+Circulation+Body+Fluids"
},
    {
  title: "Locomotion and Movement",

  notes: `
CHAPTER 16 — SHORT NOTES

1. LOCOMOTION AND MOVEMENT
• Movement is a change in position of the whole body or a body part.
• Locomotion is movement of the whole organism from one place to another.
• All locomotion involves movement, but every movement does not result in locomotion.
• Examples of movement include movement of limbs, beating of the heart and movement of the alimentary canal.
• Animals show different types of locomotion such as walking, running, swimming, flying and crawling.

2. TYPES OF MOVEMENT
• Amoeboid movement occurs by formation of pseudopodia.
• Ciliary movement occurs through coordinated beating of cilia.
• Muscular movement occurs due to contraction and relaxation of muscles.
• Flagellar movement is produced by the beating of flagella.
• Different organisms use different structures for locomotion depending upon their habitat.

3. MOVEMENT IN UNICELLULAR ORGANISMS
• Amoeba moves by forming temporary cytoplasmic projections called pseudopodia.
• Pseudopodia are produced by changes in the cytoplasm.
• Cilia help organisms such as Paramecium move through water.
• Flagella help organisms such as Euglena move through water.

4. SKELETAL SYSTEM
• The skeleton provides support and shape to the body.
• It protects delicate internal organs.
• It provides attachment sites for muscles.
• The skeleton also helps in movement by providing a system of levers.
• The human skeleton consists of bones, cartilage and associated structures.

5. TYPES OF SKELETON
• Exoskeleton is present outside the body and provides protection and support.
• Endoskeleton occurs inside the body.
• Vertebrates possess an internal skeleton made mainly of bones and cartilage.
• The human skeleton is divided into the axial skeleton and appendicular skeleton.

6. AXIAL SKELETON
• The axial skeleton forms the main supporting axis of the body.
• It includes the skull, vertebral column, ribs and sternum.
• The skull protects the brain.
• The vertebral column protects the spinal cord.
• Ribs together with the sternum form the rib cage and protect the heart and lungs.

7. APPENDICULAR SKELETON
• The appendicular skeleton includes the bones of limbs and their supporting girdles.
• The pectoral girdle supports the forelimbs.
• The pelvic girdle supports the hind limbs.
• Limbs are attached to the body through these girdles.

8. JOINTS
• A joint is the place where two or more bones meet.
• Joints provide movement while maintaining the connection between bones.
• Fibrous joints are generally immovable.
• Cartilaginous joints allow limited movement.
• Synovial joints allow considerable movement.

9. TYPES OF SYNOVIAL JOINTS
• Ball-and-socket joint allows movement in many directions.
• Example: shoulder and hip.
• Hinge joint allows movement mainly in one plane.
• Examples: elbow and knee.
• Pivot joint permits rotation around an axis.
• Example: joint between the first two vertebrae.
• Gliding joints allow bones to slide over one another.

10. MUSCLES
• Muscles are specialized tissues capable of contraction.
• Muscular contraction produces movement.
• The three major types are skeletal, smooth and cardiac muscles.

A. Skeletal muscles
• They are attached to bones.
• They are generally voluntary.
• They help in movement and locomotion.

B. Smooth muscles
• They occur in the walls of internal organs.
• They are involuntary.
• They help move substances through organs such as the intestine.

C. Cardiac muscle
• It is found only in the heart.
• It contracts rhythmically and involuntarily.
• Its continuous activity helps pump blood throughout the body.

11. MUSCLE CONTRACTION
• Skeletal muscle fibres contain myofibrils.
• Myofibrils contain actin and myosin filaments.
• Muscle contraction occurs through interaction between actin and myosin.
• The sliding filament mechanism explains how muscles shorten during contraction.
• ATP provides energy required for muscular contraction.
• Calcium ions play an important role in initiating contraction.

12. ANTAGONISTIC MUSCLES
• Muscles can only pull when they contract.
• Therefore, many movements are produced by pairs of muscles acting in opposite directions.
• Such pairs are called antagonistic muscles.
• In the arm, biceps and triceps act as an antagonistic pair.
• When the biceps contracts, the forearm bends.
• When the triceps contracts, the forearm is extended.

13. IMPORTANT POINTS
• Movement is essential for survival and adaptation.
• Locomotion helps animals obtain food, escape predators and find suitable habitats.
• The skeleton, joints and muscles work together to produce coordinated movement.
• Nervous control and energy supply are also essential for normal movement.
`,

  summary: `
CHAPTER 16 — SIMPLE SUMMARY

Locomotion is the movement of an organism from one place to another, while movement can involve only a body part. Organisms show different forms of movement depending on their structure and habitat. Amoeba uses pseudopodia, Paramecium uses cilia and organisms such as Euglena use flagella.

In humans, locomotion depends mainly on the skeletal and muscular systems. The skeleton provides support, protects internal organs and provides attachment sites for muscles. The human skeleton is divided into the axial and appendicular skeleton. Bones meet at joints, and different types of joints allow different kinds of movement.

Muscles are specialized tissues that contract to produce movement. Skeletal muscles are generally voluntary and attached to bones, smooth muscles are involuntary and occur in internal organs, while cardiac muscle forms the heart.

Skeletal muscle contraction involves the interaction of actin and myosin filaments. ATP provides energy and calcium ions help initiate contraction. Muscles often work in antagonistic pairs, such as the biceps and triceps, because muscles can pull but cannot push.

Thus, locomotion and movement depend on the coordinated action of muscles, bones, joints, nerves and energy-producing processes.
`,

  video: ""
},

{
  title: "Coordination and Control – The Nervous and Endocrine Systems",

  notes: `
CHAPTER 17 — SHORT NOTES

1. COORDINATION AND CONTROL
• Coordination allows different parts of an organism to work together.
• Control systems help an organism respond appropriately to changes in its internal and external environment.
• In animals, coordination is mainly achieved through the nervous system and endocrine system.
• The nervous system produces rapid and usually short-lasting responses.
• The endocrine system produces chemical signals called hormones that generally act more slowly and for longer periods.

2. NERVOUS SYSTEM
• The nervous system receives information, processes it and produces appropriate responses.
• The basic structural and functional unit of the nervous system is the neuron.
• The nervous system consists broadly of the central nervous system and peripheral nervous system.

3. NEURON
• A neuron is a specialized cell that transmits nerve impulses.
• Main parts of a neuron are the cell body, dendrites and axon.
• Dendrites generally receive signals.
• The cell body contains the nucleus and other cell organelles.
• The axon carries nerve impulses away from the cell body.
• Some axons are covered by a myelin sheath that helps rapid transmission of impulses.

4. NERVE IMPULSE
• A nerve impulse is an electrical signal that travels along a neuron.
• Changes in electrical potential across the neuron membrane are responsible for impulse transmission.
• The impulse travels from the receiving region towards the transmitting region of the neuron.

5. SYNAPSE
• A synapse is the functional junction between two neurons or between a neuron and another cell.
• At many synapses, chemical substances called neurotransmitters transmit the signal.
• Neurotransmitters are released from the end of one neuron.
• They cross the synaptic gap and affect the next cell.
• Synaptic transmission usually allows impulses to travel in one direction.

6. CENTRAL NERVOUS SYSTEM
• The central nervous system consists of the brain and spinal cord.
• The brain is the main centre for processing and coordinating information.
• The spinal cord connects the brain with many parts of the body.
• It also acts as an important centre for reflex actions.

7. BRAIN
• The cerebrum is involved in conscious activities, sensory perception, memory, learning and voluntary actions.
• The cerebellum helps coordinate muscular activity and maintains posture and balance.
• The medulla oblongata controls important involuntary activities such as breathing and heartbeat.
• Other regions of the brain participate in regulation and coordination of different body functions.

8. REFLEX ACTION
• A reflex action is a rapid, automatic response to a stimulus.
• It usually occurs without conscious decision.
• A reflex arc generally involves a receptor, sensory neuron, central nervous system, motor neuron and effector.
• Reflex actions help protect the body from harmful stimuli.
• Pulling the hand away from a hot object is a common example.

9. PERIPHERAL NERVOUS SYSTEM
• The peripheral nervous system consists of nerves connecting the central nervous system with the rest of the body.
• Sensory nerves carry information towards the central nervous system.
• Motor nerves carry commands towards muscles or glands.

10. AUTONOMIC NERVOUS SYSTEM
• The autonomic nervous system controls many involuntary activities.
• It regulates organs such as the heart, digestive tract and glands.
• The sympathetic and parasympathetic divisions generally have opposing effects on many organs.
• Their coordinated action helps maintain normal body functions.

11. ENDOCRINE SYSTEM
• The endocrine system consists of glands that release hormones into the blood.
• Hormones are chemical messengers.
• They travel through the blood and act on specific target cells or organs.
• Hormonal effects are generally slower than nervous responses but may last longer.

12. MAJOR ENDOCRINE GLANDS AND HORMONES

A. Pituitary gland
• Often called the master gland because it influences several other endocrine glands.
• It secretes hormones involved in growth, reproduction and regulation of other glands.

B. Thyroid gland
• Produces thyroid hormones.
• Thyroid hormones influence metabolic activity and growth.
• Iodine is required for normal thyroid hormone production.

C. Parathyroid glands
• Produce parathyroid hormone.
• It helps regulate calcium levels in the blood.

D. Adrenal glands
• Produce hormones including adrenaline and cortisol.
• Adrenaline helps prepare the body for emergency or stressful situations.

E. Pancreas
• Produces insulin and glucagon.
• Insulin helps lower blood glucose levels.
• Glucagon helps increase blood glucose levels.

F. Testes
• Produce male sex hormones, mainly testosterone.
• Testosterone is involved in development of male reproductive characteristics.

G. Ovaries
• Produce female sex hormones such as oestrogen and progesterone.
• These hormones regulate reproductive functions and female secondary sexual characteristics.

13. NERVOUS VS ENDOCRINE CONTROL
• Nervous control is generally rapid, precise and short-lasting.
• Endocrine control is generally slower and may have longer-lasting effects.
• Nervous control uses electrical impulses and neurotransmitters.
• Endocrine control uses hormones carried through the blood.
• Both systems work together to coordinate body activities.

14. IMPORTANT POINT
• Proper coordination and control allow an organism to maintain internal stability and respond effectively to environmental changes.
`,

  summary: `
CHAPTER 17 — SIMPLE SUMMARY

Coordination and control allow different parts of the body to work together and respond to changes. In humans, coordination is mainly controlled by the nervous system and endocrine system.

The nervous system receives information, processes it and produces rapid responses. Its basic unit is the neuron. Dendrites receive signals, while the axon carries nerve impulses away from the cell body. Signals can pass from one neuron to another through synapses using neurotransmitters.

The central nervous system consists of the brain and spinal cord. Different parts of the brain perform different functions. The cerebrum is associated with conscious activities and higher mental functions, the cerebellum coordinates movement and balance, and the medulla helps control important involuntary activities.

Reflex actions are rapid automatic responses that help protect the body. They are carried through a reflex arc involving sensory and motor pathways.

The endocrine system controls body functions using hormones. Important endocrine glands include the pituitary, thyroid, parathyroids, adrenals, pancreas, testes and ovaries. Hormones travel through the blood and act on specific target tissues.

The nervous and endocrine systems differ in the speed and duration of their effects, but both work together to maintain coordination and proper functioning of the body.
`,

  video: ""
},

{
  title: "Homeostasis: The Steady State",

  notes: `
CHAPTER 18 — SHORT NOTES

1. HOMEOSTASIS
• Homeostasis is the maintenance of a relatively stable internal environment despite changes in the external environment.
• The internal environment includes factors such as temperature, water content, pH, salt concentration and glucose concentration.
• Cells function properly only when these conditions remain within suitable limits.
• Homeostasis does not mean that conditions remain absolutely constant.
• Instead, body conditions fluctuate around suitable set points.

2. IMPORTANCE OF HOMEOSTASIS
• Enzymes work efficiently only within suitable ranges of temperature and pH.
• Cells require appropriate concentrations of water and dissolved substances.
• Changes beyond normal limits can disturb cellular processes.
• Homeostasis therefore helps maintain the conditions necessary for life.

3. FEEDBACK MECHANISMS
• Homeostatic regulation commonly operates through feedback mechanisms.
• Negative feedback reverses or reduces the initial change.
• It is the major mechanism involved in maintaining internal stability.
• Positive feedback increases or reinforces a change and is less common in homeostatic regulation.

4. COMPONENTS OF HOMEOSTATIC CONTROL
• A receptor detects a change in the internal or external environment.
• A control centre receives information and determines an appropriate response.
• An effector carries out the response.
• The response helps restore the internal condition towards the normal range.

5. BODY TEMPERATURE
• Human body temperature is maintained within a narrow range.
• The hypothalamus plays an important role in regulating body temperature.
• When body temperature rises, mechanisms such as sweating and increased blood flow to the skin help remove heat.
• When body temperature falls, mechanisms such as shivering and reduced blood flow to the skin help conserve and generate heat.

6. WATER BALANCE
• The body must maintain an appropriate amount of water.
• Water is gained through drinking and food and is also produced during metabolism.
• Water is lost through urine, sweat, faeces and breathing.
• The kidneys play a major role in regulating water balance.

7. OSMOREGULATION
• Osmoregulation is the regulation of water and dissolved substances in body fluids.
• The concentration of salts and water must remain within suitable limits.
• The kidneys adjust the amount of water and salts excreted in urine.
• Hormones such as antidiuretic hormone (ADH) help regulate water balance.

8. EXCRETION
• Excretion is the removal of metabolic waste products from the body.
• In humans, the kidneys are major excretory organs.
• Nitrogenous wastes such as urea are removed mainly through urine.
• The lungs remove carbon dioxide and water vapour.
• The skin removes some water, salts and small amounts of nitrogenous waste through sweat.

9. KIDNEYS AND HOMEOSTASIS
• Kidneys help regulate water, salts and acid-base balance.
• The functional unit of the kidney is the nephron.
• Blood is filtered in the nephron.
• Useful substances may be reabsorbed.
• Additional substances can be secreted into the filtrate.
• The final urine contains substances that the body needs to eliminate.

10. BLOOD GLUCOSE REGULATION
• Blood glucose concentration must remain within a suitable range.
• The pancreas plays a major role in regulating blood glucose.
• Insulin promotes uptake and storage of glucose, thereby lowering blood glucose.
• Glucagon promotes processes that increase blood glucose when it falls.
• These hormones work together through negative feedback.

11. pH REGULATION
• Normal cell activity requires maintenance of appropriate pH.
• The lungs help regulate carbon dioxide levels.
• The kidneys help regulate hydrogen ions and bicarbonate ions.
• Together they help maintain acid-base balance.

12. HOMEOSTASIS AND DISEASE
• Failure of homeostatic mechanisms can disturb normal body functions.
• Severe disturbances in temperature, water balance, blood glucose or pH can be harmful.
• Many physiological disorders are associated with failure of normal regulatory mechanisms.

13. IMPORTANT POINT
• Homeostasis is achieved through continuous monitoring and adjustment.
• The nervous system, endocrine system, kidneys, lungs, skin and other organs cooperate to maintain the steady state.
`,

  summary: `
CHAPTER 18 — SIMPLE SUMMARY

Homeostasis is the ability of an organism to maintain a relatively stable internal environment even when external conditions change. It is essential because cells and enzymes function properly only within suitable ranges of temperature, pH, water concentration and other conditions.

Homeostatic control commonly works through negative feedback. A receptor detects a change, a control centre processes the information and an effector produces a response that reduces the original disturbance.

The human body regulates temperature through mechanisms such as sweating, changes in blood flow and shivering. Water and salt balance are regulated mainly by the kidneys. The kidneys filter blood and adjust the amount of water and dissolved substances excreted in urine.

Hormones also have an important role in homeostasis. ADH helps regulate water balance, while insulin and glucagon maintain blood glucose concentration. The lungs and kidneys cooperate in maintaining acid-base balance.

Thus, homeostasis is not a completely fixed condition. It is a dynamic steady state maintained by continuous adjustment of body processes.
`,

  video: ""
},

{
  title: "Reproduction in Plants",

  notes: `
CHAPTER 19 — SHORT NOTES

1. REPRODUCTION
• Reproduction is the biological process by which organisms produce new individuals.
• It ensures continuity of a species.
• Plants reproduce by asexual as well as sexual methods.
• Asexual reproduction generally produces offspring genetically similar to the parent.
• Sexual reproduction involves formation and fusion of gametes and usually produces genetic variation.

2. ASEXUAL REPRODUCTION IN PLANTS
• Asexual reproduction occurs without fusion of male and female gametes.
• It commonly involves vegetative parts of the plant.
• New plants can develop from roots, stems or leaves.
• Asexual reproduction is usually rapid and produces genetically similar offspring.

3. VEGETATIVE PROPAGATION
• Vegetative propagation is reproduction through vegetative plant parts.
• Natural vegetative propagation occurs through structures such as runners, rhizomes, bulbs, tubers and suckers.
• Examples include potato through tubers, onion through bulbs and ginger through rhizomes.
• Artificial methods include cutting, layering and grafting.
• Vegetative propagation is useful in agriculture and horticulture for multiplying desirable plants.

4. SEXUAL REPRODUCTION
• Sexual reproduction involves formation of male and female gametes.
• In flowering plants, the flower is the main reproductive structure.
• Sexual reproduction involves pollination, fertilization, embryo development and seed formation.

5. STRUCTURE OF A FLOWER
• A typical flower has four main whorls: sepals, petals, stamens and carpels.
• Sepals collectively form the calyx and generally protect the developing flower bud.
• Petals collectively form the corolla and often attract pollinators.
• Stamens are the male reproductive structures.
• A stamen consists of a filament and anther.
• Carpels are the female reproductive structures.
• A carpel consists of stigma, style and ovary.
• Ovules occur inside the ovary.

6. POLLEN GRAINS
• Pollen grains are produced in the anthers.
• They represent the male reproductive units of flowering plants.
• A pollen grain contains cells that ultimately give rise to the male gametes.
• Pollen grains may be transferred from one flower to another through different agents.

7. POLLINATION
• Pollination is the transfer of pollen grains from anther to stigma.
• Self-pollination occurs when pollen reaches the stigma of the same flower or another flower of the same plant.
• Cross-pollination occurs when pollen is transferred between flowers of different plants of the same species.
• Agents of pollination include wind, water, insects, birds and other animals.

8. ADAPTATIONS FOR POLLINATION
• Wind-pollinated flowers often produce large quantities of light pollen.
• Their stigmas may be large or feathery to trap pollen.
• Insect-pollinated flowers may have attractive colours, scents and nectar.
• These characteristics increase the chances of successful pollen transfer.

9. FERTILIZATION
• Fertilization is the fusion of male and female gametes.
• In flowering plants, the male gamete reaches the ovule through the pollen tube.
• Fusion produces a diploid zygote.
• The zygote develops into the embryo.

10. DOUBLE FERTILIZATION
• Double fertilization is a characteristic feature of flowering plants.
• One male gamete fuses with the egg to form the zygote.
• The second male gamete fuses with the polar nuclei to form the primary endosperm nucleus.
• Thus, one fertilization event produces the embryo while the other contributes to formation of endosperm.
• Endosperm provides nourishment to the developing embryo.

11. DEVELOPMENT OF SEED AND FRUIT
• After fertilization, the ovule develops into a seed.
• The ovary generally develops into the fruit.
• The embryo develops inside the seed.
• Seeds contain a young plant and stored food or tissues that help nourish the embryo.
• Fruits help protect seeds and aid their dispersal.

12. SEED DISPERSAL
• Seeds may be dispersed by wind, water, animals or explosive mechanisms.
• Dispersal reduces competition between seedlings and parent plants.
• It also helps plants colonize new areas.

13. GERMINATION
• Germination is the development of a seed into a seedling under suitable conditions.
• Water, oxygen and an appropriate temperature are generally necessary.
• During germination, the embryo resumes growth.
• The radicle generally develops into the young root.
• The plumule develops into the young shoot.

14. IMPORTANCE OF SEXUAL REPRODUCTION
• Sexual reproduction produces genetic variation.
• Variation can improve the ability of populations to adapt to changing environments.
• It also contributes to evolution and diversity among plants.
`,

  summary: `
CHAPTER 19 — SIMPLE SUMMARY

Plants reproduce both asexually and sexually. Asexual reproduction does not involve fusion of gametes and usually produces offspring genetically similar to the parent. Vegetative propagation is an important form of asexual reproduction and may occur naturally through structures such as tubers, bulbs and rhizomes or artificially through cutting, layering and grafting.

Sexual reproduction in flowering plants occurs through flowers. Stamens are the male reproductive structures and produce pollen grains, while carpels are the female reproductive structures and contain ovules.

Pollination is the transfer of pollen from anther to stigma. It may be self-pollination or cross-pollination. Wind, water, insects, birds and other animals may act as pollinating agents.

After pollination, a pollen tube develops and carries male gametes towards the ovule. Fertilization produces a zygote. Flowering plants show double fertilization: one male gamete fuses with the egg, while the other contributes to formation of the endosperm.

After fertilization, the ovule develops into a seed and the ovary generally develops into a fruit. Seeds are dispersed by various agents and germinate under suitable conditions to produce new plants.

Sexual reproduction is important because it produces genetic variation and contributes to adaptation and evolution.
`,

  video: ""
},

{
  title: "Growth and Development of Plants",

  notes: `
CHAPTER 20 — SHORT NOTES

1. GROWTH
• Growth is a permanent and irreversible increase in size, volume, dry mass or cell number.
• Plant growth results mainly from cell division, cell enlargement and differentiation.
• Unlike animals, plants continue to grow throughout much of their life.
• This is called indeterminate or continuous growth.

2. MERISTEMATIC TISSUES
• Plant growth occurs mainly in regions containing actively dividing cells called meristems.
• Meristematic cells are capable of repeated cell division.
• Apical meristems occur at the tips of roots and shoots.
• They are responsible mainly for primary growth and increase in length.
• Lateral meristems are involved mainly in secondary growth and increase in thickness.
• Intercalary meristems occur in some plants between mature tissues and can contribute to growth of internodes.

3. PRIMARY AND SECONDARY GROWTH
• Primary growth increases the length of roots and shoots.
• It is associated mainly with apical meristems.
• Secondary growth increases the thickness or girth of stems and roots.
• Lateral meristems such as vascular cambium and cork cambium contribute to secondary growth.

4. CELL DIVISION AND CELL ENLARGEMENT
• Growth begins with cell division in meristematic regions.
• Newly formed cells enlarge.
• Cell enlargement involves uptake of water and development of cellular structures.
• After enlargement, cells may differentiate into specialized tissues.

5. CELL DIFFERENTIATION
• Differentiation is the process by which unspecialized cells develop specialized structures and functions.
• Different plant cells become adapted for particular functions.
• Examples include xylem cells for water conduction and phloem cells for food transport.
• Differentiation contributes to formation of complex tissues and organs.

6. DEVELOPMENT
• Development includes all changes that occur during the life of an organism.
• It includes growth, differentiation and maturation.
• Development is influenced by both genetic information and environmental conditions.
• Plant development is controlled by interactions between hormones, genes and environmental factors.

7. PLANT HORMONES
• Plant hormones or phytohormones are chemical substances produced in small amounts that regulate plant growth and development.
• Major plant growth regulators include auxins, gibberellins, cytokinins, abscisic acid and ethylene.

8. AUXINS
• Auxins promote cell elongation, especially in shoots.
• They influence apical dominance.
• They promote formation of adventitious roots in suitable conditions.
• Auxins are involved in tropic responses.
• They can also influence fruit development.

9. GIBBERELLINS
• Gibberellins promote stem elongation.
• They can break seed dormancy in some plants.
• They promote germination and mobilization of stored food in suitable seeds.
• They may promote flowering and fruit growth in certain plants.

10. CYTOKININS
• Cytokinins promote cell division.
• They work together with auxins in regulating growth and differentiation.
• Cytokinins can delay ageing of leaves.
• They are important in formation and development of plant tissues.

11. ABSCISIC ACID
• Abscisic acid (ABA) generally acts as a growth-inhibiting hormone.
• It promotes seed and bud dormancy.
• It helps plants respond to water stress.
• ABA promotes closure of stomata during water deficiency.
• It is often associated with stress responses.

12. ETHYLENE
• Ethylene is a gaseous plant hormone.
• It promotes fruit ripening in many plants.
• It is involved in leaf and fruit abscission.
• It can influence ageing and other developmental processes.

13. PHOTOPERIODISM
• Photoperiodism is the response of plants to the relative lengths of day and night.
• Some plants flower only under particular day-length conditions.
• Plants may be classified as short-day, long-day or day-neutral plants based on their flowering response.
• The duration of darkness can be especially important in flowering responses.

14. VERNALIZATION
• Vernalization is the promotion of flowering by exposure to a suitable period of low temperature.
• It is important in some plants that require a cold period before flowering.
• Vernalization can help synchronize flowering with favourable seasons.

15. TROPIC MOVEMENTS
• Tropic movements are directional growth responses to external stimuli.
• Phototropism is growth response to light.
• Geotropism or gravitropism is response to gravity.
• Roots generally show positive gravitropism by growing towards gravity.
• Shoots generally show negative gravitropism by growing away from gravity.
• Chemotropism is growth response to chemicals.
• Thigmotropism is growth response to touch.

16. PHOTOTROPISM
• Shoots generally bend towards light.
• Auxin distribution contributes to this bending.
• Unequal growth on the two sides of the shoot causes curvature.
• Phototropism helps plants position leaves for better light absorption.

17. SEED DORMANCY AND GERMINATION
• Seed dormancy is a period during which a viable seed does not germinate even when some conditions appear favourable.
• Dormancy helps seeds survive unfavourable periods.
• Suitable temperature, water and oxygen are important for germination.
• Hormonal changes help regulate the transition from dormancy to active growth.

18. IMPORTANCE OF PLANT GROWTH REGULATION
• Plant hormones coordinate growth and development.
• They regulate germination, root and shoot growth, flowering, fruit development, ripening, dormancy and responses to environmental stress.
• Understanding plant growth regulators is useful in agriculture and horticulture.
`,

  summary: `
CHAPTER 20 — SIMPLE SUMMARY

Plant growth is a permanent increase in size, volume, dry mass or cell number. Plants can continue growing throughout much of their life because they possess meristematic tissues containing actively dividing cells.

Apical meristems increase the length of roots and shoots and are responsible mainly for primary growth. Lateral meristems contribute to secondary growth, which increases the thickness of stems and roots. Growth involves cell division, cell enlargement and differentiation.

Development includes growth as well as differentiation and maturation. Plant development is controlled by genes, hormones and environmental conditions.

Plant hormones, or phytohormones, are chemical regulators of growth. Auxins promote cell elongation and influence tropic responses. Gibberellins promote stem elongation and can help break seed dormancy. Cytokinins promote cell division and can delay ageing. Abscisic acid promotes dormancy and helps plants respond to water stress. Ethylene is a gaseous hormone involved in fruit ripening and other developmental processes.

Plants also respond to environmental factors. Photoperiodism refers to responses to day and night duration, especially flowering. Vernalization involves promotion of flowering by a suitable period of low temperature.

Tropic movements are directional growth responses. Phototropism is a response to light, gravitropism is a response to gravity, chemotropism is a response to chemicals and thigmotropism is a response to touch.

Overall, plant growth and development result from coordinated cell division, enlargement, differentiation, hormonal regulation and responses to environmental conditions.
`,

  video: ""
},
    {
  title: "Reproduction and Population Control",

  notes: `
CHAPTER 21 — SHORT NOTES

1. REPRODUCTION
• Reproduction is the biological process by which organisms produce new individuals of their own kind.
• It is essential for the continuity and survival of a species.
• Reproduction does not increase the life span of an individual, but it ensures continuation of the species.

2. TYPES OF REPRODUCTION
• Reproduction is broadly divided into asexual and sexual reproduction.
• Asexual reproduction generally involves a single parent.
• Sexual reproduction generally involves two parents and the formation/fusion of gametes.

3. ASEXUAL REPRODUCTION
• In asexual reproduction, offspring are produced from a single parent without fusion of male and female gametes.
• The offspring are usually genetically very similar to the parent.
• Common methods include binary fission, budding, fragmentation and spore formation.

4. SEXUAL REPRODUCTION
• Sexual reproduction involves the formation of male and female gametes.
• Fusion of gametes produces a zygote.
• The zygote develops into a new individual.
• Sexual reproduction produces genetic variation among offspring.

5. REPRODUCTION IN HUMAN BEINGS
• Humans reproduce sexually.
• The male reproductive system produces sperm.
• The female reproductive system produces ova.
• Fertilisation normally occurs when a sperm fuses with an ovum.
• The resulting zygote undergoes repeated cell division and develops into an embryo.

6. MALE REPRODUCTIVE SYSTEM
• The testes are the primary male reproductive organs.
• Testes produce sperm and the male sex hormone testosterone.
• Sperm pass through ducts and are mixed with secretions of accessory glands.
• The resulting semen is released through the reproductive tract.

7. FEMALE REPRODUCTIVE SYSTEM
• The ovaries are the primary female reproductive organs.
• Ovaries produce ova and female sex hormones.
• The fallopian tubes receive the ovum released from the ovary.
• The uterus is the organ where the embryo develops.
• The vagina forms the passage connecting the uterus with the outside.

8. MENSTRUAL CYCLE
• The menstrual cycle is a series of changes occurring in the female reproductive system.
• It prepares the reproductive system for possible pregnancy.
• Ovulation is the release of an ovum from an ovary.
• If fertilisation does not occur, the uterine lining is shed during menstruation.

9. FERTILISATION AND PREGNANCY
• Fertilisation is the fusion of sperm and ovum.
• It produces a diploid zygote.
• The zygote divides repeatedly and forms an embryo.
• The embryo becomes attached to the uterine wall.
• The placenta develops an important connection between mother and developing embryo.
• Pregnancy continues until the developing baby is ready for birth.

10. POPULATION
• A population is a group of individuals of the same species living in a particular area.
• Population size changes because of births, deaths, immigration and emigration.
• Population growth depends on the balance between these factors.

11. POPULATION CONTROL
• Human population can increase rapidly when birth rates remain high and death rates decrease.
• Rapid population growth can put pressure on food, water, housing, healthcare and natural resources.
• Population control aims to maintain a balance between population size and available resources.

12. FAMILY PLANNING
• Family planning allows individuals and couples to decide the number and spacing of children.
• Contraceptive methods can prevent unwanted pregnancy.
• Common methods include natural methods, barrier methods, intrauterine devices, hormonal methods and permanent surgical methods.
• Responsible family planning can improve the health and well-being of families.

13. IMPORTANCE OF REPRODUCTIVE HEALTH
• Reproductive health involves physical, mental and social well-being related to reproduction.
• Knowledge about reproductive organs, hygiene, contraception and sexually transmitted infections is important.
• Awareness helps people make responsible decisions regarding reproduction.

14. IMPORTANT TERMS
• Gamete = reproductive cell such as sperm or ovum.
• Fertilisation = fusion of male and female gametes.
• Zygote = cell formed after fertilisation.
• Embryo = early developing stage of an organism.
• Ovulation = release of an ovum from the ovary.
• Contraception = prevention of pregnancy.
• Population control = measures used to regulate population growth.
`,

  summary: `
CHAPTER 21 — SIMPLE SUMMARY

Reproduction is the process by which organisms produce new individuals and ensure continuity of their species. It may be asexual or sexual. Asexual reproduction generally involves one parent and does not involve fusion of gametes, whereas sexual reproduction involves male and female gametes and produces genetic variation.

In humans, reproduction is sexual. The male reproductive system produces sperm and the female reproductive system produces ova. The testes produce sperm and testosterone, while the ovaries produce ova and female sex hormones. Fertilisation occurs when a sperm fuses with an ovum and forms a zygote.

The zygote undergoes repeated divisions and develops into an embryo. The embryo becomes attached to the wall of the uterus, where it receives nourishment and oxygen through the placenta during development.

The menstrual cycle prepares the female reproductive system for possible pregnancy. Ovulation is the release of an ovum from the ovary. If fertilisation does not occur, the uterine lining breaks down and is removed during menstruation.

Population size is affected by births, deaths, immigration and emigration. Rapid human population growth can create pressure on natural resources and public services. Family planning and contraception help individuals control the number and spacing of children and can contribute to responsible population management.

Reproductive health education is important because it provides knowledge about reproduction, hygiene, contraception and reproductive health problems.
`,

  video: ""
},

{
  title: "Principles of Genetics",

  notes: `
CHAPTER 22 — SHORT NOTES

1. GENETICS
• Genetics is the branch of biology concerned with heredity and variation.
• Heredity is the transmission of characteristics from parents to offspring.
• Variation refers to differences observed among individuals of the same species.
• Genetics helps explain why offspring resemble their parents but are not always identical to them.

2. HEREDITARY MATERIAL
• Hereditary information is carried by genes.
• Genes are located on chromosomes.
• DNA is the principal genetic material in organisms.
• The sequence of bases in DNA carries biological information.

3. CHROMOSOMES
• Chromosomes are thread-like structures present in the nucleus of eukaryotic cells.
• They contain DNA and associated proteins.
• Genes are arranged linearly on chromosomes.
• Different organisms have characteristic chromosome numbers.

4. MENDEL AND THE STUDY OF HEREDITY
• Gregor Johann Mendel is known as the father of genetics.
• He studied inheritance in garden pea plants.
• Mendel selected pea plants because they had clear contrasting characteristics and could be easily crossed.
• His experiments established important principles of inheritance.

5. MENDEL'S MONOHYBRID CROSS
• A monohybrid cross studies inheritance of one pair of contrasting characters.
• Mendel crossed plants having contrasting traits.
• The first generation showed one dominant characteristic.
• When the first-generation plants were crossed, the recessive characteristic reappeared in the next generation.

6. LAW OF DOMINANCE
• When two contrasting alleles occur together, one may express itself while the other remains unexpressed.
• The expressed allele is called dominant.
• The allele that is masked is called recessive.
• Dominance does not mean that the recessive allele has disappeared.

7. LAW OF SEGREGATION
• The two alleles of a gene pair separate during gamete formation.
• Each gamete receives only one allele of the pair.
• During fertilisation, alleles from the two parents come together again.

8. GENOTYPE AND PHENOTYPE
• Genotype refers to the genetic constitution of an organism.
• Phenotype refers to the observable characteristics of an organism.
• Phenotype is influenced by genotype and environmental conditions.

9. HOMOZYGOUS AND HETEROZYGOUS
• An individual having two identical alleles is homozygous.
• An individual having two different alleles is heterozygous.
• Homozygous individuals may be homozygous dominant or homozygous recessive.

10. DIHYBRID INHERITANCE
• A dihybrid cross studies the inheritance of two pairs of contrasting characters.
• Mendel's experiments with two characters helped establish the principle of independent assortment.
• The inheritance of one pair of alleles can occur independently of another pair when the genes are independently assorting.

11. LAW OF INDEPENDENT ASSORTMENT
• Alleles of different gene pairs may assort independently during gamete formation.
• This produces different combinations of characteristics in offspring.
• The law applies when the genes involved assort independently.

12. VARIATION
• Variation is necessary for evolutionary change.
• Variations may arise through mutation and recombination.
• Sexual reproduction produces new combinations of genes.

13. IMPORTANT TERMS
• Gene = unit of hereditary information.
• Allele = alternative form of a gene.
• Dominant = allele expressed in a heterozygous condition.
• Recessive = allele that is masked by a dominant allele in a heterozygous condition.
• Genotype = genetic constitution.
• Phenotype = observable characteristics.
• Homozygous = having identical alleles.
• Heterozygous = having different alleles.
• Heredity = transmission of characteristics from parents to offspring.
`,

  summary: `
CHAPTER 22 — SIMPLE SUMMARY

Genetics is the study of heredity and variation. Heredity explains how characteristics are passed from parents to offspring, while variation explains why individuals of the same species can differ from one another.

Genes are units of hereditary information located on chromosomes. DNA forms the principal genetic material and contains the information required for the development and functioning of an organism.

Gregor Mendel carried out important experiments on garden pea plants and established basic principles of inheritance. His experiments involved characteristics with clear contrasting forms.

In a monohybrid cross, Mendel studied one pair of contrasting characteristics. The first generation generally showed the dominant characteristic, while the recessive characteristic reappeared in the next generation.

The law of dominance explains the relationship between dominant and recessive alleles. The law of segregation states that the two alleles of a gene pair separate during gamete formation, so each gamete receives one allele.

Genotype is the genetic constitution of an organism, whereas phenotype is the observable expression of its characteristics. An organism may be homozygous when its two alleles are identical or heterozygous when they are different.

Mendel also studied two pairs of characteristics through dihybrid crosses. These experiments contributed to the principle of independent assortment, in which alleles of different gene pairs may assort independently during gamete formation.

Genetic variation is important because it creates differences among individuals and provides the raw material for evolution.
`,

  video: ""
},

{
  title: "Molecular Inheritance and Gene Expression",

  notes: `
CHAPTER 23 — SHORT NOTES

1. MOLECULAR BASIS OF HEREDITY
• DNA is the main hereditary material in most organisms.
• DNA stores genetic information and allows this information to be transmitted from one generation to the next.
• Genes are specific segments of DNA that contain information related to particular products or functions.

2. STRUCTURE OF DNA
• DNA stands for deoxyribonucleic acid.
• DNA is made up of nucleotides.
• Each nucleotide contains a sugar, a phosphate group and a nitrogenous base.
• The four bases in DNA are adenine, thymine, guanine and cytosine.
• Adenine pairs with thymine.
• Guanine pairs with cytosine.
• The complementary base pairing helps DNA maintain and copy genetic information.

3. DNA DOUBLE HELIX
• DNA consists of two complementary strands arranged in a double-helical structure.
• The two strands are held together by hydrogen bonds between complementary bases.
• The sequence of bases carries genetic information.

4. DNA REPLICATION
• DNA must be copied before a cell divides.
• DNA replication produces two DNA molecules from one original DNA molecule.
• Each new DNA molecule contains one original strand and one newly formed strand.
• This is called semiconservative replication.
• Complementary base pairing allows accurate copying of genetic information.

5. RNA
• RNA stands for ribonucleic acid.
• RNA generally contains ribose sugar and uses uracil instead of thymine.
• RNA is usually single-stranded.
• Different types of RNA perform different functions in gene expression.

6. TYPES OF RNA
• Messenger RNA (mRNA) carries information from DNA for protein synthesis.
• Transfer RNA (tRNA) carries amino acids to the ribosome.
• Ribosomal RNA (rRNA) forms an important part of ribosomes and participates in protein synthesis.

7. GENE EXPRESSION
• Gene expression is the process by which information in a gene is used to produce a functional product.
• In protein-producing genes, information is expressed through RNA and protein synthesis.
• Gene expression allows cells with the same DNA to perform different functions.

8. TRANSCRIPTION
• Transcription is the formation of RNA using DNA as a template.
• During transcription, a complementary RNA strand is produced.
• In eukaryotic cells, transcription occurs mainly in the nucleus.
• The resulting mRNA carries information for protein synthesis.

9. TRANSLATION
• Translation is the process of forming a protein using information present in mRNA.
• It occurs on ribosomes.
• tRNA molecules bring appropriate amino acids to the ribosome.
• Amino acids are joined together in the sequence specified by the mRNA.

10. GENETIC CODE
• The genetic code is the relationship between nucleotide sequences and amino acids.
• A codon consists of three nucleotides in mRNA.
• Each codon generally specifies an amino acid or a signal for termination.
• The genetic code is nearly universal among organisms.

11. CENTRAL DOGMA
• The central dogma describes the flow of genetic information.
• Genetic information generally flows from DNA → RNA → Protein.
• DNA can replicate to transmit genetic information.
• DNA is transcribed into RNA, and RNA can be translated into protein.

12. MUTATION
• Mutation is a change in genetic material.
• Mutations can occur spontaneously or as a result of environmental factors.
• Mutations can sometimes alter the structure or function of a protein.
• Mutations contribute to genetic variation.

13. IMPORTANCE OF GENE EXPRESSION
• Gene expression controls the production of proteins and other functional products.
• Proteins perform structural, enzymatic, transport, regulatory and many other functions.
• Regulation of gene expression allows cells to respond to changing conditions.

14. IMPORTANT TERMS
• DNA = deoxyribonucleic acid.
• RNA = ribonucleic acid.
• Replication = copying of DNA.
• Transcription = formation of RNA using DNA information.
• Translation = formation of protein using mRNA information.
• Codon = three-base sequence on mRNA.
• Mutation = change in genetic material.
• Gene expression = use of genetic information to produce a functional product.
`,

  summary: `
CHAPTER 23 — SIMPLE SUMMARY

Molecular inheritance explains how genetic information is stored, copied and expressed at the molecular level. DNA is the main hereditary material in most organisms. It stores information in the sequence of its nitrogenous bases.

DNA consists of nucleotides containing sugar, phosphate and a nitrogenous base. Its four bases are adenine, thymine, guanine and cytosine. Adenine pairs with thymine and guanine pairs with cytosine. These complementary relationships are important for accurate DNA replication.

Before a cell divides, DNA is replicated. The two strands separate and each serves as a template for a new complementary strand. As a result, each new DNA molecule contains one old strand and one new strand.

RNA plays an important role in gene expression. Messenger RNA carries genetic information, transfer RNA brings amino acids and ribosomal RNA forms part of the ribosome.

Gene expression involves transcription and translation. During transcription, information in DNA is copied into RNA. During translation, the information carried by mRNA is read by ribosomes and used to arrange amino acids into a protein.

The central dogma represents the general flow of information as DNA → RNA → Protein. Mutations are changes in genetic material and can produce variations in organisms. Some mutations may have little effect, while others can affect gene products and biological characteristics.

Gene expression is essential because it allows genetic information to be converted into functional products that control the structure and activities of cells.
`,

  video: ""
},

{
  title: "Genetics and Society",

  notes: `
CHAPTER 24 — SHORT NOTES

1. GENETICS AND HUMAN LIFE
• Genetics has become important in medicine, agriculture, biotechnology and many other areas.
• Understanding genes helps scientists study inherited characteristics and genetic disorders.
• Modern genetic technology can be used to identify, study and sometimes modify genetic material.

2. HUMAN GENETIC DISORDERS
• Genetic disorders are conditions caused by changes or abnormalities in genetic material.
• Some disorders are caused by mutations in individual genes.
• Others may result from changes in chromosome number or structure.
• Genetic disorders may be inherited from parents or may arise due to new mutations.

3. CHROMOSOMAL DISORDERS
• Abnormalities in chromosome number can affect development and health.
• Such abnormalities may occur because chromosomes fail to separate properly during cell division.
• Examples include conditions associated with abnormal numbers of autosomes or sex chromosomes.

4. GENETIC COUNSELLING
• Genetic counselling provides information about genetic conditions and their possible inheritance.
• It helps individuals and families understand genetic risks.
• Counselling may be useful when there is a family history of inherited disorders.
• It can help people make informed reproductive and health decisions.

5. PRENATAL DIAGNOSIS
• Prenatal diagnosis refers to methods used to obtain information about the health or genetic condition of a developing foetus.
• It can help identify certain genetic or developmental abnormalities before birth.
• Genetic information obtained through such methods must be handled carefully and responsibly.

6. DNA TECHNOLOGY
• Modern biotechnology allows scientists to isolate, analyse and manipulate DNA.
• DNA analysis can be used in medical research, diagnosis and identification.
• Recombinant DNA technology allows DNA from different sources to be combined under controlled laboratory conditions.

7. GENETIC ENGINEERING
• Genetic engineering involves deliberate modification or manipulation of genetic material.
• Genes can be transferred into cells to introduce particular characteristics.
• Genetically modified organisms may be developed for research, agriculture or industrial purposes.

8. GENETICALLY MODIFIED CROPS
• Genetic technology can be used to introduce useful traits into crop plants.
• Desired characteristics may include resistance to pests, tolerance to environmental conditions or improved nutritional properties.
• Genetically modified crops can have potential benefits as well as environmental and social concerns.

9. GENE THERAPY
• Gene therapy aims to treat certain disorders by introducing, replacing or modifying genetic material in cells.
• The goal is to correct or compensate for the effects of defective genes.
• Gene therapy is an important area of modern medical research.

10. DNA FINGERPRINTING
• DNA fingerprinting is a technique used to identify individuals based on patterns in their DNA.
• DNA profiles can be useful in forensic investigations.
• They may also be used in establishing biological relationships.

11. HUMAN GENOME
• The human genome contains the complete genetic information of a human being.
• Genome studies have helped scientists understand the organisation and function of human genes.
• Knowledge of the human genome contributes to medical research.

12. ETHICAL ISSUES
• Genetic technologies can provide important benefits but also raise ethical questions.
• Privacy of genetic information is important.
• Genetic information should not be misused to discriminate against individuals.
• Questions can arise regarding genetic testing, modification of embryos, reproductive choices and ownership of genetic information.

13. IMPORTANT TERMS
• Genetic disorder = disorder caused by abnormalities in genetic material.
• Genetic counselling = guidance concerning genetic conditions and inheritance.
• Genetic engineering = deliberate manipulation of genetic material.
• Gene therapy = treatment involving modification or introduction of genetic material.
• DNA fingerprinting = identification using patterns in DNA.
• Genome = complete genetic material of an organism.
• Genetically modified organism = organism whose genetic material has been altered using biotechnology.
`,

  summary: `
CHAPTER 24 — SIMPLE SUMMARY

Genetics has applications in medicine, agriculture, biotechnology and society. Understanding genes helps scientists study inherited characteristics and genetic disorders.

Genetic disorders can result from mutations in individual genes or abnormalities involving chromosomes. Some disorders are inherited from parents, while others may result from new genetic changes. Genetic counselling helps individuals and families understand the possible inheritance of genetic conditions and make informed decisions.

Modern genetic technologies allow DNA to be analysed and manipulated. Genetic engineering can be used to introduce specific genes or modify genetic material. These technologies have applications in agriculture, medicine and research.

Genetically modified crops can be developed with useful characteristics such as pest resistance or improved nutritional properties. However, their use also raises environmental, economic and social questions.

Gene therapy is an approach in which genetic material is introduced, replaced or modified in an attempt to treat certain genetic disorders. DNA fingerprinting can be used to identify individuals and establish biological relationships.

The study of the human genome has provided extensive information about human genetic material and has contributed to medical research.

Genetic technology also creates ethical responsibilities. Genetic information must be protected, and genetic testing and genetic modification should be used responsibly. Issues such as privacy, discrimination, reproductive choices and the use of genetic information need careful consideration.
`,

  video: ""
},

{
  title: "Principles of Ecology",

  notes: `
CHAPTER 25 — SHORT NOTES

1. ECOLOGY
• Ecology is the study of relationships between organisms and their environment.
• Organisms interact with both living and non-living components of their surroundings.
• Ecology helps us understand how organisms survive and how ecosystems function.

2. ENVIRONMENT
• The environment includes all external conditions that affect an organism.
• Biotic components are living components such as plants, animals and microorganisms.
• Abiotic components are non-living factors such as temperature, light, water, air, soil and minerals.

3. LEVELS OF ORGANISATION
• Individual organism → population → community → ecosystem → biosphere.
• An individual is a single organism.
• A population consists of individuals of the same species living in an area.
• A community consists of populations of different species living together.
• An ecosystem includes organisms and their physical environment.

4. HABITAT
• Habitat is the place or environment in which an organism normally lives.
• Different organisms are adapted to different habitats.
• Habitat provides the resources required for survival and reproduction.

5. POPULATION
• A population consists of individuals of the same species living in a particular area.
• Population size is affected by birth rate, death rate, immigration and emigration.
• Population density refers to the number of individuals present per unit area or volume.

6. COMMUNITY
• A community is made up of populations of different species living and interacting in an area.
• Species in a community may compete, cooperate or have predator-prey relationships.
• The structure of a community depends on interactions among its organisms and environmental conditions.

7. ECOSYSTEM
• An ecosystem consists of biotic and abiotic components interacting with one another.
• Producers, consumers and decomposers are important biological components.
• Energy enters most ecosystems through sunlight.

8. PRODUCERS
• Producers are organisms capable of producing organic food from inorganic substances.
• Green plants are the major producers in most ecosystems.
• Photosynthesis converts light energy into chemical energy stored in food.

9. CONSUMERS
• Consumers obtain food by eating other organisms.
• Herbivores feed mainly on plants.
• Carnivores feed mainly on other animals.
• Omnivores can feed on both plants and animals.

10. DECOMPOSERS
• Decomposers break down dead organic matter.
• Bacteria and fungi are important decomposers.
• Decomposition returns nutrients to the environment.
• Decomposers therefore play an important role in nutrient cycling.

11. FOOD CHAIN
• A food chain shows a sequence through which food and energy pass from one organism to another.
• A typical food chain begins with a producer.
• Example: Grass → Grasshopper → Frog → Snake.
• Each step in a food chain is called a trophic level.

12. FOOD WEB
• Several interconnected food chains form a food web.
• Food webs represent the complex feeding relationships within an ecosystem.
• Food webs generally provide greater stability than individual food chains.

13. ENERGY FLOW
• Energy flows through an ecosystem in one direction.
• Solar energy is captured by producers.
• Energy passes from producers to consumers and eventually to decomposers.
• A large amount of energy is lost as heat at each trophic level.
• Therefore, the amount of energy available decreases at higher trophic levels.

14. ECOLOGICAL PYRAMIDS
• Ecological pyramids represent relationships between trophic levels.
• They may represent number of organisms, biomass or energy.
• The energy pyramid is generally upright because energy decreases at successive trophic levels.

15. BIOMAGNIFICATION
• Certain harmful chemicals can become increasingly concentrated at higher trophic levels.
• This process is called biomagnification.
• Top consumers can therefore accumulate higher concentrations of certain pollutants.

16. NUTRIENT CYCLING
• Matter is continuously recycled between organisms and the environment.
• Important cycles include the carbon cycle and nitrogen cycle.
• Decomposers play an important role in returning nutrients to the environment.

17. ECOLOGICAL BALANCE
• Ecosystems depend on interactions among organisms and environmental factors.
• Disturbance of one component can affect other components.
• Conservation and responsible use of resources help maintain ecological balance.

18. IMPORTANT TERMS
• Ecology = study of relationships between organisms and environment.
• Habitat = place where an organism normally lives.
• Population = group of organisms of the same species in an area.
• Community = populations of different species living together.
• Ecosystem = organisms interacting with their physical environment.
• Producer = organism that produces food.
• Consumer = organism that obtains food from other organisms.
• Decomposer = organism that breaks down dead organic matter.
• Trophic level = position of an organism in a food chain.
• Food web = network of interconnected food chains.
`,

  summary: `
CHAPTER 25 — SIMPLE SUMMARY

Ecology is the study of relationships between organisms and their environment. The environment contains both biotic components, such as plants, animals and microorganisms, and abiotic components, such as light, temperature, water, air and soil.

Ecological organisation can be understood through levels such as organism, population, community, ecosystem and biosphere. A population consists of organisms of the same species living in an area, while a community consists of populations of different species. An ecosystem includes both living organisms and their physical environment.

Plants and other producers form the base of most ecosystems because they convert solar energy into chemical energy through photosynthesis. Consumers obtain energy by feeding on producers or other consumers. Decomposers such as bacteria and fungi break down dead organic matter and return nutrients to the environment.

A food chain shows the transfer of food and energy from one organism to another. Several interconnected food chains form a food web. Energy flows in one direction through an ecosystem and decreases at successive trophic levels because much energy is lost as heat.

Ecological pyramids represent relationships between different trophic levels and may be based on numbers, biomass or energy. The energy pyramid is generally upright.

Nutrients are continuously recycled through processes such as the carbon and nitrogen cycles. Ecosystems can be disturbed when environmental conditions or biological relationships change significantly. Maintaining ecological balance requires responsible use and conservation of natural resources.
`,

  video: ""
},
    {
  title: "Conservation and Use of Natural Resources",

  notes: `
CHAPTER 26 — SHORT NOTES

1. NATURAL RESOURCES
• Natural resources are materials and components obtained from nature and used by humans and other organisms.
• Examples include air, water, soil, forests, wildlife, minerals and fossil fuels.
• Natural resources may be renewable or non-renewable.

2. RENEWABLE AND NON-RENEWABLE RESOURCES
• Renewable resources can be naturally replenished within a relatively short period.
• Examples: sunlight, wind, water and forests when properly managed.
• Non-renewable resources are available in limited quantities and take very long periods to form.
• Examples: coal, petroleum, natural gas and many minerals.

3. WATER RESOURCES
• Water is essential for all living organisms.
• Major sources include rivers, lakes, groundwater, glaciers and rainfall.
• Fresh water is limited compared with the total amount of water on Earth.
• Excessive withdrawal of groundwater can lower the water table.
• Water pollution reduces the availability of safe water.

4. WATER CONSERVATION
• Water should be used carefully and wastage should be prevented.
• Rainwater harvesting helps collect and store rainwater.
• Watershed management helps conserve soil and water in a drainage area.
• Reuse and recycling of water can reduce pressure on freshwater resources.

5. FOREST RESOURCES
• Forests provide timber, fuel, food, medicines and many other useful products.
• Forests provide habitat for numerous plants and animals.
• They help maintain soil fertility and reduce soil erosion.
• Forests also influence climate and the water cycle.
• Excessive cutting of forests causes deforestation.

6. DEFORESTATION
• Deforestation means large-scale removal of forests.
• Major causes include agriculture, urbanisation, industries, roads, mining and excessive use of forest products.
• Deforestation can cause soil erosion, loss of biodiversity, disturbance of the water cycle and climate-related problems.

7. AFFORESTATION AND REFORESTATION
• Afforestation means establishing forests on land that was not previously forested.
• Reforestation means restoring forests in areas where forests have been removed.
• Planting and protecting trees are important methods of forest conservation.

8. WILDLIFE RESOURCES
• Wildlife includes wild plants, animals and microorganisms.
• Wildlife maintains ecological balance and contributes to biodiversity.
• Habitat destruction, hunting, pollution and overexploitation threaten wildlife.

9. BIODIVERSITY CONSERVATION
• Biodiversity means the variety of living organisms.
• Conservation aims to protect species, habitats and genetic diversity.
• National parks, wildlife sanctuaries and biosphere reserves are important protected areas.

10. MINERAL RESOURCES
• Minerals are naturally occurring inorganic substances found in Earth's crust.
• They are important raw materials for industries and construction.
• Mining can disturb land, vegetation and water resources.
• Mineral resources should therefore be used efficiently.

11. ENERGY RESOURCES
• Energy is required for domestic activities, transport, agriculture and industries.
• Fossil fuels such as coal, petroleum and natural gas are major conventional energy sources.
• Burning fossil fuels releases pollutants and greenhouse gases.
• Solar, wind, hydroelectric and other renewable sources can reduce dependence on fossil fuels.

12. SUSTAINABLE USE OF RESOURCES
• Sustainable use means using resources in a way that satisfies present needs without destroying their availability for future generations.
• Conservation involves reducing wastage, recycling materials and using alternatives where possible.
• Public participation is essential for successful conservation.

13. IMPORTANT IDEA
• Natural resources are interconnected.
• Damage to one resource can affect many other components of the environment.
• Conservation therefore requires planned and responsible use of natural resources.
`,

  summary: `
CHAPTER 26 — SIMPLE SUMMARY

Natural resources are materials and components obtained from nature and used by living organisms. They include air, water, soil, forests, wildlife, minerals and energy resources.

Resources may be renewable or non-renewable. Renewable resources can be replenished naturally, while non-renewable resources such as coal, petroleum and many minerals take extremely long periods to form.

Water is essential for life, but usable freshwater is limited. Excessive groundwater extraction, pollution and wastage create serious problems. Rainwater harvesting, watershed management, reuse and careful consumption help conserve water.

Forests are important because they provide useful products, habitats for wildlife, help prevent soil erosion and influence the water cycle. Deforestation causes loss of biodiversity, soil erosion and ecological imbalance. Afforestation and reforestation help restore forest cover.

Wildlife conservation is necessary for maintaining biodiversity and ecological balance. Protected areas such as national parks, wildlife sanctuaries and biosphere reserves help conserve species and their habitats.

Minerals and fossil fuels are important for human development but are limited and their extraction can damage the environment. Renewable energy sources such as solar and wind energy can reduce pressure on non-renewable resources.

The main message of the chapter is that natural resources must be used carefully and sustainably. Conservation requires efficient use, prevention of wastage, recycling, restoration of damaged ecosystems and participation of society.
`,

  video: ""
},

{
  title: "Pollution",

  notes: `
CHAPTER 27 — SHORT NOTES

1. ENVIRONMENTAL POLLUTION
• Pollution is an undesirable change in the physical, chemical or biological characteristics of the environment.
• Pollutants are substances or forms of energy that cause pollution.
• Pollution may affect air, water, soil and living organisms.

2. AIR POLLUTION
• Air pollution occurs when harmful gases, particles or other substances enter the atmosphere in excessive amounts.
• Major sources include industries, automobiles, burning of fuels, construction and forest fires.
• Common pollutants include particulate matter, carbon monoxide, sulphur dioxide, nitrogen oxides and hydrocarbons.

3. EFFECTS OF AIR POLLUTION
• Air pollution can cause respiratory and cardiovascular problems.
• It may damage plants and reduce visibility.
• Some pollutants contribute to acid rain and climate change.
• Particulate matter can enter deep into the respiratory system.

4. WATER POLLUTION
• Water pollution occurs when harmful substances enter rivers, lakes, groundwater or other water bodies.
• Major sources include domestic sewage, industrial wastes, agricultural runoff and oil pollution.
• Polluted water can spread diseases and harm aquatic organisms.

5. EUTROPHICATION
• Eutrophication occurs when excessive nutrients enter a water body.
• Nitrogen and phosphorus compounds may promote excessive growth of algae.
• When algae die and decompose, oxygen levels may fall.
• Low dissolved oxygen can cause death of aquatic organisms.

6. SOIL POLLUTION
• Soil pollution occurs when harmful chemicals, wastes or other contaminants accumulate in soil.
• Pesticides, industrial waste, plastics and improper disposal of solid waste can contribute to soil pollution.
• Polluted soil can affect plants, microorganisms, animals and humans.

7. NOISE POLLUTION
• Noise pollution is unwanted or excessive sound that causes discomfort or harmful effects.
• Major sources include traffic, industries, construction and loudspeakers.
• Excessive noise can cause stress, sleep disturbance and hearing problems.

8. RADIOACTIVE POLLUTION
• Radioactive pollution results from harmful radioactive substances entering the environment.
• Sources may include nuclear activities, radioactive wastes and accidents.
• Exposure can damage cells and genetic material.

9. SOLID WASTE
• Solid waste includes household garbage, industrial waste, plastics and other discarded materials.
• Improper disposal can pollute soil and water and provide breeding places for disease-causing organisms.
• Waste management should focus on reduction, reuse and recycling.

10. BIODEGRADABLE AND NON-BIODEGRADABLE WASTE
• Biodegradable wastes can be decomposed by microorganisms.
• Examples include food waste and many natural organic materials.
• Non-biodegradable wastes resist natural decomposition.
• Plastics are important examples of persistent non-biodegradable waste.

11. GREENHOUSE EFFECT
• Certain gases absorb and re-radiate heat in the atmosphere.
• This natural process is called the greenhouse effect.
• An enhanced greenhouse effect contributes to global warming.
• Important greenhouse gases include carbon dioxide, methane and nitrous oxide.

12. GLOBAL WARMING
• Global warming refers to the long-term increase in Earth's average temperature.
• Human activities that increase greenhouse gas concentrations are major contributors.
• Effects may include changes in climate, melting of ice and changes in ecosystems.

13. OZONE DEPLETION
• Ozone in the stratosphere absorbs harmful ultraviolet radiation.
• Certain chemicals, particularly chlorofluorocarbons, can contribute to ozone depletion.
• Increased ultraviolet radiation can damage living organisms and increase risks such as skin and eye damage.

14. ACID RAIN
• Acid rain is precipitation made unusually acidic by atmospheric pollutants.
• Sulphur dioxide and nitrogen oxides are major contributors.
• Acid deposition can damage forests, aquatic ecosystems, soil and buildings.

15. POLLUTION CONTROL
• Pollution can be reduced by controlling emissions at their sources.
• Public transport, cleaner fuels and renewable energy can reduce air pollution.
• Sewage and industrial wastes should be properly treated before discharge.
• Recycling and responsible waste disposal reduce solid-waste problems.
• Environmental laws and public awareness are important for pollution control.
`,

  summary: `
CHAPTER 27 — SIMPLE SUMMARY

Pollution is an undesirable change in the environment caused by pollutants. Pollution can affect air, water, soil and living organisms.

Air pollution is caused by pollutants released from vehicles, industries, fuel burning and other sources. It can cause respiratory problems and contribute to acid rain and climate change.

Water pollution results from sewage, industrial waste, agricultural chemicals and other contaminants entering water bodies. Excess nutrients can cause eutrophication, leading to excessive algal growth and reduced oxygen levels.

Soil pollution can result from pesticides, plastics, industrial wastes and improper disposal of garbage. Noise pollution is caused by excessive unwanted sound and can affect hearing, sleep and general health.

Solid waste should be managed properly. Biodegradable materials can be decomposed naturally, while non-biodegradable materials such as many plastics persist for long periods.

The chapter also explains major global environmental problems. Increased greenhouse gases can enhance the greenhouse effect and contribute to global warming. Ozone depletion allows more harmful ultraviolet radiation to reach Earth. Sulphur dioxide and nitrogen oxides can contribute to acid rain.

Pollution control requires prevention at the source, treatment of wastes, recycling, cleaner technologies, responsible resource use, environmental regulations and public participation.
`,

  video: ""
},

{
  title: "Nutrition and Health",

  notes: `
CHAPTER 28 — SHORT NOTES

1. NUTRITION
• Nutrition is the process by which organisms obtain and use nutrients.
• Nutrients are substances required for energy, growth, repair and maintenance of the body.
• Major nutrients include carbohydrates, proteins, fats, vitamins, minerals and water.

2. CARBOHYDRATES
• Carbohydrates are an important source of energy.
• They include sugars, starch and dietary fibre.
• Glucose is an important respiratory substrate.
• Excess carbohydrate may be stored in the body in the form of glycogen.

3. PROTEINS
• Proteins are essential for growth, tissue repair and maintenance.
• They are made up of amino acids.
• Proteins are also components of enzymes, hormones and antibodies.
• Dietary proteins are especially important during growth.

4. FATS
• Fats are concentrated sources of energy.
• They help in the absorption of fat-soluble vitamins.
• They also provide insulation and help protect internal organs.
• Excessive intake of unhealthy fats can contribute to health problems.

5. VITAMINS
• Vitamins are organic substances required in small quantities.
• They generally do not provide energy directly but are essential for normal metabolism and body functions.
• Fat-soluble vitamins include A, D, E and K.
• Water-soluble vitamins include B-group vitamins and vitamin C.

6. MINERALS
• Minerals are inorganic nutrients required for different body functions.
• Calcium and phosphorus are important for bones and teeth.
• Iron is essential for haemoglobin formation.
• Iodine is required for normal thyroid function.
• Deficiency of minerals can cause specific disorders.

7. WATER
• Water forms a major component of the human body.
• It is required for transport of substances, chemical reactions and temperature regulation.
• Water loss must be balanced by adequate intake.

8. BALANCED DIET
• A balanced diet contains appropriate amounts of carbohydrates, proteins, fats, vitamins, minerals, water and fibre.
• Nutritional requirements vary with age, sex, activity level and physiological condition.
• A balanced diet helps maintain normal growth and health.

9. MALNUTRITION
• Malnutrition occurs when the body receives inadequate, excessive or imbalanced nutrition.
• Undernutrition may cause deficiency diseases and poor growth.
• Overnutrition can contribute to obesity and metabolic disorders.

10. DEFICIENCY DISEASES
• Vitamin A deficiency may affect vision.
• Vitamin D deficiency can affect bones.
• Vitamin C deficiency can cause scurvy.
• Iron deficiency can cause anaemia.
• Iodine deficiency can cause disorders of the thyroid gland.

11. HEALTH
• Health is a state of physical, mental and social well-being.
• Good health depends on proper nutrition, hygiene, exercise, rest and a healthy environment.

12. PERSONAL HYGIENE
• Regular bathing, hand washing, dental care and clean food and water help prevent infections.
• Proper sanitation reduces the spread of disease-causing organisms.

13. FOOD HYGIENE
• Food should be stored and prepared safely.
• Contaminated food can transmit microorganisms and cause disease.
• Clean water and proper cooking are important for food safety.

14. LIFESTYLE AND HEALTH
• Regular physical activity helps maintain physical fitness.
• Adequate sleep and rest are important for health.
• Tobacco, excessive alcohol and other harmful habits can damage health.
• Stress management is also important for overall well-being.

15. PREVENTION
• Many health problems can be reduced through balanced nutrition, hygiene, exercise, vaccination, safe drinking water and early medical attention.
• Prevention is an important part of maintaining good health.
`,

  summary: `
CHAPTER 28 — SIMPLE SUMMARY

Nutrition provides the body with substances required for energy, growth, repair and maintenance. The major nutrients are carbohydrates, proteins, fats, vitamins, minerals and water.

Carbohydrates are important energy sources, proteins are required for growth and tissue repair, and fats provide concentrated energy and help absorb fat-soluble vitamins. Vitamins and minerals are needed in smaller amounts but are essential for normal body functions.

Water is necessary for transport, metabolism and temperature regulation. A balanced diet provides nutrients in appropriate amounts according to the individual's needs.

Malnutrition includes both undernutrition and overnutrition. Deficiencies of nutrients can cause specific diseases, such as anaemia due to iron deficiency and scurvy due to vitamin C deficiency.

Good health depends not only on nutrition but also on hygiene, sanitation, physical activity, adequate rest and a healthy environment. Safe food and water help prevent infections.

The main idea of the chapter is that proper nutrition and healthy habits work together to maintain normal growth, body functions and overall health.
`,

  video: ""
},

{
  title: "Some Common Human Diseases",

  notes: `
CHAPTER 29 — SHORT NOTES

1. HUMAN DISEASE
• A disease is a condition that interferes with normal functioning of the body.
• Diseases may be infectious or non-infectious.
• Infectious diseases are caused by pathogens and can spread between individuals or through vectors.
• Non-infectious diseases generally do not spread from person to person.

2. PATHOGENS
• Pathogens are disease-causing organisms or agents.
• They include bacteria, viruses, protozoans, fungi and parasitic worms.
• Different pathogens cause different diseases.

3. BACTERIAL DISEASES
• Bacteria are microscopic organisms, some of which cause human diseases.
• Tuberculosis is caused by Mycobacterium tuberculosis.
• Typhoid is caused by Salmonella Typhi.
• Cholera is caused by Vibrio cholerae.
• Bacterial diseases may spread through air, contaminated food, water or contact depending on the disease.

4. VIRAL DISEASES
• Viruses reproduce inside living host cells.
• Common viral diseases include influenza, measles, polio and hepatitis.
• Some viral diseases spread through respiratory droplets, contaminated food or water, blood or vectors.

5. PROTOZOAN DISEASES
• Protozoans are single-celled organisms.
• Malaria is caused by Plasmodium.
• The female Anopheles mosquito acts as the vector for malaria.
• Malaria commonly causes recurring fever and chills.

6. WORM INFECTIONS
• Parasitic worms can live inside the human body and obtain nutrients from their hosts.
• Examples include roundworms and tapeworms.
• Poor sanitation and contaminated food or water can increase the risk of some worm infections.

7. FUNGAL DISEASES
• Some fungi cause infections of the skin and other tissues.
• Ringworm is a common fungal infection.
• Warm and moist conditions can favour the growth of some disease-causing fungi.

8. TRANSMISSION OF DISEASE
• Diseases may spread through air, contaminated food and water, direct contact, blood, sexual contact or vectors.
• Mosquitoes and other organisms can transmit certain pathogens from one host to another.

9. NON-INFECTIOUS DISEASES
• Non-infectious diseases are not caused by transmissible pathogens.
• Examples include diabetes, hypertension, certain cancers and nutritional deficiency diseases.
• Genetic factors, lifestyle and environmental conditions may contribute to some non-infectious diseases.

10. DIABETES
• Diabetes is associated with abnormal regulation of blood glucose.
• It may occur because of inadequate insulin production, reduced response to insulin, or both.
• Proper diet, physical activity, monitoring and medical treatment help manage diabetes.

11. CANCER
• Cancer involves uncontrolled growth and division of abnormal cells.
• Cancer cells can invade surrounding tissues and may spread to other parts of the body.
• Causes and risk factors vary among different cancers.

12. PREVENTION OF INFECTIOUS DISEASES
• Personal hygiene reduces the spread of pathogens.
• Safe drinking water and proper sanitation are important.
• Proper cooking and food storage reduce food-borne infections.
• Vaccination can provide protection against several infectious diseases.
• Vector control helps reduce diseases transmitted by mosquitoes and other vectors.

13. IMMUNISATION
• Vaccination exposes the immune system to material that stimulates an immune response.
• It can produce immune memory and help protect against specific diseases.
• Immunisation is an important public-health measure.

14. ANTIBIOTICS
• Antibiotics are medicines used against susceptible bacterial infections.
• They do not work against viruses.
• Misuse and overuse of antibiotics can contribute to antibiotic resistance.

15. HEALTH AND PREVENTION
• Early diagnosis can improve management of many diseases.
• Healthy diet, exercise, hygiene and avoidance of harmful habits reduce several health risks.
• Public health measures are essential for controlling communicable diseases.
`,

  summary: `
CHAPTER 29 — SIMPLE SUMMARY

Human diseases may be infectious or non-infectious. Infectious diseases are caused by pathogens such as bacteria, viruses, protozoans, fungi and parasitic worms and may spread through air, food, water, contact or vectors.

Examples of bacterial diseases include tuberculosis, typhoid and cholera. Malaria is a protozoan disease caused by Plasmodium and transmitted by the female Anopheles mosquito. Viruses cause diseases such as influenza, measles and polio.

Non-infectious diseases do not spread from person to person. They include conditions such as diabetes, hypertension, certain cancers and deficiency diseases. Their causes may include genetic factors, lifestyle and environmental conditions.

Prevention of disease includes personal hygiene, safe water, sanitation, safe food, vaccination and vector control. Early diagnosis and appropriate treatment are also important.

Antibiotics are useful against susceptible bacterial infections but do not treat viral infections. Their inappropriate use can contribute to antibiotic resistance.

Overall, the chapter emphasises understanding the causes and transmission of diseases and using preventive health measures to protect individuals and communities.
`,

  video: ""
},

{
  title: "Biotechnology",

  notes: `
CHAPTER 30 — SHORT NOTES

1. BIOTECHNOLOGY
• Biotechnology is the use of living organisms, cells or biological processes to develop useful products and processes.
• Traditional biotechnology includes processes such as fermentation.
• Modern biotechnology uses techniques involving cells, enzymes and genetic material.

2. TRADITIONAL BIOTECHNOLOGY
• Humans have used microorganisms for thousands of years.
• Fermentation is used in producing products such as curd, bread and alcoholic beverages.
• Microorganisms can convert substrates into useful products through biochemical processes.

3. GENETIC ENGINEERING
• Genetic engineering involves deliberate modification or manipulation of genetic material.
• A desired gene can be isolated and introduced into another organism using suitable techniques.
• Recombinant DNA technology allows DNA from different sources to be combined.

4. RECOMBINANT DNA
• Recombinant DNA contains DNA molecules formed by joining DNA from different sources.
• Restriction enzymes can cut DNA at specific sites.
• DNA ligase joins DNA fragments.
• A vector can carry foreign DNA into a host cell.

5. CLONING VECTORS
• Vectors are DNA molecules used to carry foreign genetic material into host cells.
• Plasmids are commonly used as vectors in bacterial systems.
• A suitable vector should be capable of replication and should allow identification or selection of transformed cells.

6. GENE TRANSFER
• A desired gene can be introduced into a host cell.
• The host cell may then express the introduced gene and produce the desired protein.
• Selection and screening help identify cells containing the desired recombinant DNA.

7. INSULIN PRODUCTION
• Biotechnology can be used to produce human insulin using genetically modified microorganisms.
• The human insulin gene can be introduced into suitable host cells.
• The host cells produce insulin-related protein that can be processed to obtain usable insulin.

8. TRANSGENIC ORGANISMS
• Transgenic organisms contain a gene introduced from another source.
• Transgenic plants and animals can be used in research, agriculture and medicine.
• Genetically modified crops may be developed for useful traits such as pest resistance.

9. TISSUE CULTURE
• Plant tissue culture involves growing plant cells or tissues under controlled laboratory conditions.
• Under suitable conditions, plant cells can develop into complete plants.
• Tissue culture can help produce many genetically similar plants rapidly.

10. APPLICATIONS IN AGRICULTURE
• Biotechnology can help develop crops with desirable characteristics.
• Examples include pest resistance, disease resistance and improved nutritional or agronomic traits.
• Biotechnology may also help improve crop propagation.

11. MEDICAL APPLICATIONS
• Biotechnology is used to produce medicines, vaccines, hormones and diagnostic products.
• Recombinant DNA technology can produce therapeutic proteins.
• Molecular techniques can help detect genetic and infectious diseases.

12. GENE THERAPY
• Gene therapy aims to treat certain disorders by introducing, removing or modifying genetic material.
• The objective is to correct or compensate for a defective genetic function.
• It is an important area of modern biomedical biotechnology.

13. DNA FINGERPRINTING
• DNA fingerprinting uses differences in DNA sequences to identify individuals.
• It can be used in forensic investigations and identification of biological relationships.
• DNA profiles are highly useful because individuals generally have characteristic patterns of DNA variation.

14. BIOREMEDIATION
• Bioremediation uses organisms or biological processes to help remove or reduce pollutants.
• Certain microorganisms can degrade harmful substances.
• Biotechnology can therefore contribute to environmental protection.

15. BIOETHICS
• Biotechnology raises ethical, social and environmental questions.
• Issues include genetic modification, safety, privacy, ownership of genetic information and possible ecological effects.
• Biotechnology should be developed and used responsibly.
`,

  summary: `
CHAPTER 30 — SIMPLE SUMMARY

Biotechnology uses living organisms, cells or biological processes to produce useful products and services. Traditional biotechnology includes fermentation, while modern biotechnology makes extensive use of genetic engineering and recombinant DNA technology.

Genetic engineering allows scientists to manipulate DNA and introduce desired genes into suitable host cells. Restriction enzymes cut DNA, DNA ligase joins DNA fragments, and vectors such as plasmids can carry foreign DNA into host cells.

Biotechnology has applications in agriculture, medicine, industry and environmental protection. Genetically modified crops can be developed for useful characteristics, while plant tissue culture can rapidly produce plants under controlled conditions.

In medicine, biotechnology is used to produce substances such as insulin and other therapeutic proteins. It also contributes to vaccines, diagnostic methods and gene therapy research.

DNA fingerprinting can identify individuals using patterns of DNA variation. Biotechnology can also assist environmental protection through bioremediation, where organisms help reduce pollutants.

The chapter also highlights ethical and social concerns. Biotechnology can provide major benefits, but safety, environmental effects, privacy and responsible use must be considered.
`,

  video: ""
},

{
  title: "Immunobiology: An Introduction",

  notes: `
CHAPTER 31 — SHORT NOTES

1. IMMUNITY
• Immunity is the ability of the body to resist or fight harmful organisms and foreign substances.
• The immune system protects the body from pathogens and abnormal cells.
• Immunity involves coordinated actions of cells, tissues, organs and molecules.

2. PATHOGENS AND DEFENCE
• Pathogens include bacteria, viruses, fungi, protozoans and parasites.
• The body has several levels of defence against pathogens.
• Physical barriers provide the first line of protection.

3. INNATE IMMUNITY
• Innate immunity is present from birth.
• It provides a general, non-specific defence against invading organisms.
• Skin and mucous membranes form important physical barriers.
• Secretions such as tears and saliva contain substances that can help destroy or inhibit microorganisms.

4. INFLAMMATION
• Inflammation is a protective response to injury or infection.
• It may cause redness, heat, swelling and pain.
• Blood flow to the affected area increases.
• Immune cells are recruited to the site of infection or injury.

5. PHAGOCYTOSIS
• Certain white blood cells engulf and destroy pathogens or foreign particles.
• This process is called phagocytosis.
• Phagocytic cells form an important part of innate defence.

6. LYMPHOCYTES
• Lymphocytes are important cells of the adaptive immune system.
• Major types include B lymphocytes and T lymphocytes.
• B cells are associated with antibody production.
• T cells perform several functions including helping other immune cells and destroying infected cells.

7. ADAPTIVE IMMUNITY
• Adaptive immunity develops in response to particular foreign substances.
• It is specific to particular antigens.
• It can produce immunological memory.
• Memory cells allow a faster and stronger response when the same antigen is encountered again.

8. ANTIGENS
• An antigen is a substance that can be recognised by the immune system and stimulate an immune response.
• Pathogens contain many molecules that can act as antigens.

9. ANTIBODIES
• Antibodies are specialised proteins produced by B lymphocytes and their descendants.
• They bind specifically to particular antigens.
• Antibody binding can help neutralise pathogens or mark them for destruction.

10. HUMORAL AND CELL-MEDIATED IMMUNITY
• Humoral immunity mainly involves antibodies produced by B cells.
• Cell-mediated immunity mainly involves T cells.
• T cells can help coordinate immune responses or destroy infected cells.

11. PRIMARY AND SECONDARY RESPONSE
• The first exposure to an antigen produces a primary immune response.
• Memory cells formed during this response remain in the body.
• A later exposure to the same antigen produces a faster and stronger secondary response.

12. ACTIVE IMMUNITY
• Active immunity develops when the person's own immune system responds to an antigen.
• It may occur naturally after infection.
• It may also be induced through vaccination.

13. PASSIVE IMMUNITY
• Passive immunity occurs when ready-made antibodies are received from another source.
• It provides immediate but generally temporary protection.
• Maternal antibodies transferred to a developing baby are an example of natural passive immunity.

14. VACCINATION
• Vaccination stimulates the immune system to develop protection against a specific pathogen or antigen.
• Vaccines may contain weakened, inactivated or otherwise prepared components of pathogens or their antigens.
• Vaccination can create immune memory without causing the full disease.

15. AUTOIMMUNITY
• Autoimmunity occurs when the immune system reacts against the body's own components.
• Such inappropriate immune responses can damage tissues.
• Examples include autoimmune disorders such as rheumatoid arthritis and systemic lupus erythematosus.

16. ALLERGY
• Allergy is an exaggerated or inappropriate immune response to substances that are usually harmless.
• Common allergens include pollen, dust and certain foods.
• Allergic reactions may involve substances such as histamine.

17. IMMUNODEFICIENCY
• Immunodeficiency occurs when one or more components of the immune system do not function adequately.
• It can increase susceptibility to infections.
• Immunodeficiency may be inherited or acquired.

18. HIV AND AIDS
• HIV is a virus that attacks important cells of the immune system.
• Progressive loss of immune function can lead to AIDS.
• HIV can be transmitted through infected blood, sexual transmission and from an infected mother to her child under certain circumstances.
• Prevention and safe practices are important for reducing transmission.

19. TRANSPLANTATION
• The immune system can recognise transplanted tissues as foreign.
• This can lead to rejection of a transplanted organ.
• Tissue compatibility and immunosuppressive treatment can help manage rejection.

20. IMPORTANCE OF IMMUNE SYSTEM
• The immune system protects the body from infectious organisms.
• It also helps remove damaged or abnormal cells.
• Proper immune function is essential for maintaining health.
`,

  summary: `
CHAPTER 31 — SIMPLE SUMMARY

Immunobiology deals with the immune system and the body's defence against pathogens and foreign substances.

The body has innate and adaptive immunity. Innate immunity is present from birth and provides general protection through barriers such as skin and mucous membranes, as well as processes such as inflammation and phagocytosis.

Adaptive immunity is specific to particular antigens. B lymphocytes are involved mainly in antibody-mediated immunity, while T lymphocytes play important roles in cell-mediated immunity and regulation of immune responses.

Antibodies are proteins that bind specifically to antigens. After the first exposure to an antigen, memory cells can remain in the body. A second exposure can therefore produce a faster and stronger immune response.

Active immunity develops when the body's own immune system responds to an antigen. Vaccination produces artificial active immunity by stimulating immune memory. Passive immunity occurs when ready-made antibodies are received from another source and generally provides temporary protection.

The immune system can sometimes respond abnormally. Autoimmunity occurs when immune responses attack the body's own tissues, while allergies are exaggerated responses to generally harmless substances. Immunodeficiency occurs when immune defence is impaired.

HIV attacks important immune cells and can lead to AIDS when immune function becomes severely weakened. Prevention and safe practices are important in reducing transmission.

Overall, the immune system is a complex defence network that protects the body from infections while maintaining the ability to distinguish harmful foreign substances from the body's own tissues.
`,

  video: ""
}
  ];

   const [view, setView] = useState("menu");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [completed, setCompleted] = useState(() => {
  const saved = localStorage.getItem("biology_completed");
  return saved ? JSON.parse(saved) : [];
});

const [unsure, setUnsure] = useState(() => {
  const saved = localStorage.getItem("biology_unsure");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("biology_completed", JSON.stringify(completed));
}, [completed]);

useEffect(() => {
  localStorage.setItem("biology_unsure", JSON.stringify(unsure));
}, [unsure]);
  const [resourceView, setResourceView] = useState(null);

  // ================= QUIZ STATE =================
  
  const [practiceChapter, setPracticeChapter] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [quizScore, setQuizScore] = useState(0);
const [quizFinished, setQuizFinished] = useState(false);

const [practiceResults, setPracticeResults] = useState(() => {
  const saved = localStorage.getItem("biology_practice_results");
  return saved ? JSON.parse(saved) : {};
});

useEffect(() => {
  localStorage.setItem(
    "biology_practice_results",
    JSON.stringify(practiceResults)
  );
}, [practiceResults]);

  // ================= QUIZ QUESTIONS =================

  const biologyQuiz =
  practiceChapter !== null
    ? biologyQuestions[practiceChapter] || []
    : [];

  // ================= COUNTERS =================

  const completedCount = completed.length;
  const unsureCount = unsure.length;

  const progress =
    chapters.length === 0
      ? 0
      : Math.round((completedCount / chapters.length) * 100);

  // ================= CHAPTER FUNCTIONS =================

  const openChapter = (index) => {
    setSelectedIndex(index);
    setResourceView(null);
    setView("detail");
  };

  const markCompleted = () => {
  if (selectedIndex === null) return;

  if (!completed.includes(selectedIndex)) {
    setCompleted([...completed, selectedIndex]);
  }

  setUnsure(unsure.filter((item) => item !== selectedIndex));

  setResourceView(null);
  setView("progress");
};

  const markUnsure = () => {
    if (selectedIndex === null) return;

    if (!unsure.includes(selectedIndex)) {
      setUnsure([...unsure, selectedIndex]);
    }

    setCompleted(
      completed.filter((item) => item !== selectedIndex)
    );
  };

  const nextChapter = () => {
    if (selectedIndex === null) return;

    setResourceView(null);

    if (selectedIndex < chapters.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setView("detail");
    } else {
      setView("chapters");
    }
  };

  // ================= QUIZ FUNCTIONS =================

  const startChapterQuiz = (chapterNumber) => {
  const saved = localStorage.getItem("biology_quiz_progress");


  if (saved) {
    const progress = JSON.parse(saved);

    if (progress.practiceChapter === chapterNumber) {
      setPracticeChapter(progress.practiceChapter);
      setQuizIndex(progress.quizIndex);
      setSelectedAnswer(progress.selectedAnswer);
      setQuizScore(progress.quizScore);
      setQuizFinished(false);

      setView("practice");
      return;
    }
  }

  setPracticeChapter(chapterNumber);
  setQuizIndex(0);
  setSelectedAnswer(null);
  setQuizScore(0);
  setQuizFinished(false);

  setView("practice");
};

  const saveQuizProgress = () => {
  if (practiceChapter === null) return;

  const progress = {
    practiceChapter,
    quizIndex,
    selectedAnswer,
    quizScore
  };

  localStorage.setItem(
    "biology_quiz_progress",
    JSON.stringify(progress)
  );

  setView("menu");
};

  const chooseAnswer = (option, optionIndex) => {
  if (selectedAnswer !== null) return;

  setSelectedAnswer(option);

  if (optionIndex === biologyQuiz[quizIndex].answer) {
    setQuizScore((prev) => prev + 1);
  }
};

  const nextQuestion = () => {
  if (quizIndex < biologyQuiz.length - 1) {
    setQuizIndex((prev) => prev + 1);
    setSelectedAnswer(null);
  } else {
    const finalScore = quizScore;

    setPracticeResults((prev) => {
      const oldResult = prev[practiceChapter] || {
        bestScore: 0,
        attempts: 0,
        lastScore: 0
      };

      return {
        ...prev,
        [practiceChapter]: {
          bestScore: Math.max(
            oldResult.bestScore,
            finalScore
          ),
          attempts: oldResult.attempts + 1,
          lastScore: finalScore
        }
      };
    });

    localStorage.removeItem("biology_quiz_progress");
    setQuizFinished(true);
  }
};

  const retryQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="subject-page">

      {/* ================================================= */}
      {/* ===================== MENU ====================== */}
      {/* ================================================= */}

      {view === "menu" && (
        <div className="subject-overlay">

          <div className="subject-header">

            <div>

              <div className="eyebrow">
                YOUR STUDY SPACE
              </div>

              <h1>
                Biology 🧬
              </h1>

              <p>
                Take it one chapter at a time. You've got this. 💙
              </p>

            </div>

          </div>

          <div className="progress-card">

            <div className="progress-top">

              <div>

                <p>
                  Your progress
                </p>

                <h2>
                  {progress}%
                </h2>

              </div>

              <div className="progress-stats">

                <span>
                  ✅ {completedCount} completed
                </span>

                <span>
                  🤔 {unsureCount} unsure
                </span>

              </div>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>

            <p className="progress-message">
              Keep going — every chapter you finish is one step closer. ✨
            </p>

          </div>

          <div className="dashboard-grid">

            <button
              className="dashboard-card"
              onClick={() => setView("chapters")}
            >

              <div className="dashboard-icon">
                🧬
              </div>

              <div>
                <h3>
                  Chapters
                </h3>

                <p>
                  Browse all your Biology chapters
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => {
  setPracticeChapter(null);
  setView("practice");
}}
            >

              <div className="dashboard-icon">
                📝
              </div>

              <div>
                <h3>
                  Practice
                </h3>

                <p>
                  Test yourself with Biology questions
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => setView("overall")}
            >

              <div className="dashboard-icon">
                🎯
              </div>

              <div>
                <h3>
                  Overall Practice
                </h3>

                <p>
                  Review everything you've studied
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => setView("timer")}
            >

              <div className="dashboard-icon">
                ⏱️
              </div>

              <div>
                <h3>
                  Study Timer
                </h3>

                <p>
                  Focus for a study session
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => setView("syllabus")}
            >

              <div className="dashboard-icon">
                📖
              </div>

              <div>
                <h3>
                  Syllabus
                </h3>

                <p>
                  See your complete Biology syllabus
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => setView("progress")}
            >

              <div className="dashboard-icon">
                📊
              </div>

              <div>
                <h3>
                  Progress
                </h3>

                <p>
                  See how much you've completed
                </p>
              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

          </div>

          <div className="start-card">

            <div>

              <div className="eyebrow">
                START HERE
              </div>

              <h2>
                Ready to study?
              </h2>

              <p>
                Pick a Biology chapter and start learning.
              </p>

            </div>

            <button
              className="primary-button"
              onClick={() => openChapter(0)}
            >
              Start Chapter →
            </button>

          </div>

        </div>
      )}

      {/* ================================================= */}
      {/* =================== CHAPTERS ==================== */}
      {/* ================================================= */}

      {view === "chapters" && (
        <div className="subject-overlay">

          <button
            className="back-button"
            onClick={() => setView("menu")}
          >
            ← Back
          </button>

          <div className="page-heading">

            <div className="eyebrow">
              BIOLOGY SYLLABUS
            </div>

            <h2>
              All Chapters 🧬
            </h2>

            <p>
              Choose a chapter to start studying.
            </p>

          </div>

          <div className="chapter-list">

            {chapters.map((chapter, index) => {

              const isCompleted =
                completed.includes(index);

              const isUnsure =
                unsure.includes(index);

              return (
                <button
                  key={index}
                  className="chapter-card"
                  onClick={() => openChapter(index)}
                >

                  <div className="chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="chapter-info">

                    <h3>
                      {chapter.title}
                    </h3>

                    <p>
                      {isCompleted
                        ? "✅ Completed"
                        : isUnsure
                        ? "🤔 Needs revision"
                        : "Open chapter →"}
                    </p>

                  </div>

                  <span className="card-arrow">
                    →
                  </span>

                </button>
              );
            })}

          </div>

        </div>
      )}

      {/* ================================================= */}
      {/* ===================== DETAIL ==================== */}
      {/* ================================================= */}

      {view === "detail" &&
        selectedIndex !== null && (
          <div className="subject-overlay">

            <button
              className="back-button"
              onClick={() => {
                setResourceView(null);
                setView("chapters");
              }}
            >
              ← Back to chapters
            </button>

            <div className="chapter-detail">

              <div className="eyebrow">
                BIOLOGY CHAPTER{" "}
                {String(selectedIndex + 1).padStart(2, "0")}
              </div>

              <h2>
                {chapters[selectedIndex].title}
              </h2>

              <div className="resource-grid">

                {/* SHORT NOTES */}

                <button
                  className="resource-card"
                  onClick={() =>
                    setResourceView("notes")
                  }
                >

                  <div className="resource-icon">
                    📝
                  </div>

                  <div>

                    <h3>
                      Short Notes
                    </h3>

                    <p>
                      Open important notes and key points
                    </p>

                  </div>

                  <span>
                    →
                  </span>

                </button>

                {/* SUMMARY */}

                <button
                  className="resource-card"
                  onClick={() =>
                    setResourceView("summary")
                  }
                >

                  <div className="resource-icon">
                    📖
                  </div>

                  <div>

                    <h3>
                      Summary
                    </h3>

                    <p>
                      Read a simple explanation of this chapter
                    </p>

                  </div>

                  <span>
                    →
                  </span>

                </button>

                {/* VIDEO */}

                <a
                  className="resource-card"
                  href={
                    chapters[selectedIndex].video ||
                    `https://www.youtube.com/results?search_query=NIOS+Biology+314+${encodeURIComponent(
                      chapters[selectedIndex].title
                    )}`
                  }
                  target="_blank"
                  rel="noreferrer"
                >

                  <div className="resource-icon">
                    📺
                  </div>

                  <div>

                    <h3>
                      Video Explanation
                    </h3>

                    <p>
                      Watch a video explanation
                    </p>

                  </div>

                  <span>
                    →
                  </span>

                </a>

              </div>

              <div className="chapter-actions">

                <button
                  className="primary-button"
                  onClick={markCompleted}
                >
                  ✅ I understand this
                </button>

                <button
                  className="secondary-button"
                  onClick={markUnsure}
                >
                  🤔 I need to revise this
                </button>

              </div>

              <button
                className="next-button"
                onClick={nextChapter}
              >
                {selectedIndex <
                chapters.length - 1
                  ? "Next Chapter →"
                  : "Finish Biology →"}
              </button>

            </div>

            {/* RESOURCE WINDOW */}

            {resourceView && (
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  background:
                    "rgba(20, 35, 70, 0.45)",
                  backdropFilter: "blur(5px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "25px",
                  zIndex: 9999
                }}
              >

                <div
                  style={{
                    width: "min(850px, 100%)",
                    maxHeight: "85vh",
                    overflowY: "auto",
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "35px",
                    boxShadow:
                      "0 25px 70px rgba(0,0,0,0.25)",
                    position: "relative"
                  }}
                >

                  <button
                    onClick={() =>
                      setResourceView(null)
                    }
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "20px",
                      border: "none",
                      background: "#eef3ff",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "18px",
                      cursor: "pointer"
                    }}
                  >
                    ✕
                  </button>

                  <div className="eyebrow">
                    BIOLOGY CHAPTER{" "}
                    {String(selectedIndex + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <h2
                    style={{
                      marginTop: "8px",
                      marginBottom: "25px",
                      paddingRight: "45px"
                    }}
                  >
                    {resourceView === "notes"
                      ? "Short Notes 📝"
                      : "Chapter Summary 📖"}
                  </h2>

                  <div
                    style={{
                      whiteSpace: "pre-line",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      color: "#30466d"
                    }}
                  >
                    {resourceView === "notes"
                      ? chapters[selectedIndex].notes ||
                        "Notes for this chapter will be added soon."
                      : chapters[selectedIndex].summary ||
                        "Summary for this chapter will be added soon."}
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

      {/* ================================================= */}
      {/* =================== SYLLABUS ==================== */}
      {/* ================================================= */}

      {view === "syllabus" && (
        <div className="subject-overlay">

          <button
            className="back-button"
            onClick={() => setView("menu")}
          >
            ← Back
          </button>

          <div className="page-heading">

            <div className="eyebrow">
              BIOLOGY
            </div>

            <h2>
              Complete Syllabus 📖
            </h2>

            <p>
              These are all {chapters.length} Biology chapters.
            </p>

          </div>

          <div className="syllabus-list">

            {chapters.map((chapter, index) => (

              <div
                className="syllabus-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {chapter.title}
                </p>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* ================================================= */}
      {/* ==================== PROGRESS =================== */}
      {/* ================================================= */}

      {view === "progress" && (
        <div className="subject-overlay">

          <button
            className="back-button"
            onClick={() => setView("menu")}
          >
            ← Back
          </button>

          <div className="page-heading">

            <div className="eyebrow">
              YOUR PROGRESS
            </div>

            <h2>
              Biology Progress 📊
            </h2>

          </div>

          <div className="progress-card">

            <div className="progress-top">

              <div>

                <p>
                  Your progress
                </p>

                <h2>
                  {progress}%
                </h2>

              </div>

              <div className="progress-stats">

                <span>
                  ✅ {completedCount} completed
                </span>

                <span>
                  🤔 {unsureCount} unsure
                </span>

              </div>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>

            <p className="progress-message">
              {completedCount} out of{" "}
              {chapters.length} chapters completed.
            </p>

          </div>

          <div className="chapter-list">

            {chapters.map((chapter, index) => (

              <button
                key={index}
                className="chapter-card"
                onClick={() => openChapter(index)}
              >

                <div className="chapter-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="chapter-info">

                  <h3>
                    {chapter.title}
                  </h3>

                  <p>
                    {completed.includes(index)
                      ? "✅ Completed"
                      : unsure.includes(index)
                      ? "🤔 Needs revision"
                      : "Not completed yet"}
                  </p>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </button>

            ))}

          </div>

        </div>
      )}

      {/* ================================================= */}
      {/* ====================== QUIZ ===================== */}
      {/* ================================================= */}

{/* ================================================= */}
{/* ====================== QUIZ ===================== */}
{/* ================================================= */}

{view === "practice" && (
  <div className="subject-overlay">

    {practiceChapter === null ? (

      <>
        <button
          className="back-button"
          onClick={() => setView("menu")}
        >
          ← Back
        </button>

        <div className="page-heading">

          <div className="eyebrow">
            BIOLOGY PRACTICE
          </div>

          <h2>
            Choose a Chapter 🧠
          </h2>

          <p>
            Select a chapter to start practicing.
          </p>

        </div>

        <div className="chapter-list">

          {chapters.map((chapter, index) => (

            <button
              key={index}
              className="chapter-card"
              onClick={() => startChapterQuiz(index + 1)}
            >

              <div className="chapter-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="chapter-info">

                <h3>
                  {chapter.title}
                </h3>

                <p>
                  {biologyQuestions[index + 1]
                    ? `${biologyQuestions[index + 1].length} questions available`
                    : "Question bank coming soon"}
                </p>

              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

          ))}

        </div>
      </>

    ) : (

      /* YOUR EXISTING QUIZ UI GOES HERE */

      !quizFinished ? (

        <div className="chapter-detail">

          <button
            className="back-button"
            onClick={() => {
              setPracticeChapter(null);
              setQuizIndex(0);
              setSelectedAnswer(null);
              setQuizScore(0);
              setQuizFinished(false);
            }}
          >
            ← Choose Another Chapter
          </button>

          <button
  className="secondary-button"
  onClick={saveQuizProgress}
>
  💾 Save & Exit
</button>

          <div className="page-heading">

            <div className="eyebrow">
              BIOLOGY • CHAPTER {practiceChapter}
            </div>

            <h2>
              {chapters[practiceChapter - 1].title} 🧠
            </h2>

            <p>
              Question {quizIndex + 1} of {biologyQuiz.length}
            </p>

          </div>

          <div className="progress-card">

            <div className="progress-top">

              <div>
                <p>Practice Progress</p>

                <h2>
                  {quizIndex + 1}/{biologyQuiz.length}
                </h2>
              </div>

              <div className="progress-stats">

                <span>
                  ⭐ Score: {quizScore}
                </span>

              </div>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${
                    ((quizIndex + 1) /
                      biologyQuiz.length) *
                    100
                  }%`
                }}
              ></div>

            </div>

          </div>

          <div className="practice-question">

            <div className="eyebrow">
              QUESTION {quizIndex + 1}
            </div>

            <h2>
              {biologyQuiz[quizIndex].question}
            </h2>

          </div>

          <div className="quiz-options">

            {biologyQuiz[quizIndex].options.map(
              (option, index) => {

                const isSelected =
                  selectedAnswer === option;

                const isCorrect =
                  index ===
                  biologyQuiz[quizIndex].answer;

                let optionClass =
                  "quiz-option";

                if (selectedAnswer !== null) {

                  if (isCorrect) {
                    optionClass += " correct";
                  } else if (isSelected) {
                    optionClass += " wrong";
                  }

                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    onClick={() =>
                      chooseAnswer(option, index)
                    }
                  >

                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span>
                      {option}
                    </span>

                  </button>
                );
              }
            )}

          </div>

          {selectedAnswer !== null && (

            <div className="quiz-feedback">

              {selectedAnswer ===
              biologyQuiz[quizIndex].options[
                biologyQuiz[quizIndex].answer
              ] ? (

                <p>
                  🎉 Correct! Great job.
                </p>

              ) : (

                <p>
                  ❌ Not quite. The correct answer is{" "}
                  <strong>
                    {
                      biologyQuiz[quizIndex].options[
                        biologyQuiz[quizIndex].answer
                      ]
                    }
                  </strong>
                </p>

              )}

            </div>

          )}

          {selectedAnswer !== null && (

            <button
              className="next-button"
              onClick={nextQuestion}
            >
              {quizIndex <
              biologyQuiz.length - 1
                ? "Next Question →"
                : "See My Result →"}
            </button>

          )}

        </div>

      ) : (

        <div className="chapter-detail">

          <div className="page-heading">

            <div className="eyebrow">
              PRACTICE COMPLETE 🎉
            </div>

            <h2>
              Chapter {practiceChapter} Result
            </h2>

            <p>
              You finished all{" "}
              {biologyQuiz.length} questions.
            </p>

          </div>

          <div className="progress-card">

            <div
              style={{
                textAlign: "center",
                padding: "20px"
              }}
            >

              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "10px"
                }}
              >
                {quizScore >=
                biologyQuiz.length * 0.8
                  ? "🏆"
                  : quizScore >=
                    biologyQuiz.length * 0.5
                  ? "⭐"
                  : "💙"}
              </div>

              <h2>
                {quizScore} / {biologyQuiz.length}
              </h2>
              <p>
  Best Score:{" "}
  {practiceResults[practiceChapter]?.bestScore || quizScore}
  / {biologyQuiz.length}
</p>

<p>
  Attempts:{" "}
  {practiceResults[practiceChapter]?.attempts || 1}
</p>

              <p>
                You scored{" "}
                {Math.round(
                  (quizScore /
                    biologyQuiz.length) *
                    100
                )}
                %
              </p>

            </div>

          </div>

          <div className="chapter-actions">

            <button
              className="primary-button"
              onClick={() =>
                startChapterQuiz(practiceChapter)
              }
            >
              🔄 Try Again
            </button>

            <button
              className="secondary-button"
              onClick={() => {
                setPracticeChapter(null);
                setQuizIndex(0);
                setSelectedAnswer(null);
                setQuizScore(0);
                setQuizFinished(false);
              }}
            >
              📚 Choose Another Chapter
            </button>

            <button
              className="secondary-button"
              onClick={() => setView("menu")}
            >
              ← Back to Biology
            </button>

          </div>

        </div>

      )

    )}

  </div>
)}

      {/* ================= OVERALL PRACTICE ================= */}
      {view === "overall" && (
        <div className="subject-overlay">

          <button
            className="back-button"
            onClick={() => setView("menu")}
          >
            ← Back
          </button>

          <div className="page-heading">

            <div className="eyebrow">
              REVISION
            </div>

            <h2>
              Overall Practice 🎯
            </h2>

            <p>
              Review your progress across all {chapters.length} Biology chapters.
            </p>

          </div>

          {/* OVERALL PROGRESS */}

          <div className="progress-card">

            <div className="progress-top">

              <div>
                <p>Overall completion</p>

                <h2>
                  {progress}%
                </h2>
              </div>

              <div className="progress-stats">

                <span>
                  ✅ {completedCount} completed
                </span>

                <span>
                  🤔 {unsureCount} to revise
                </span>

                <span>
                  ⬜ {chapters.length - completedCount - unsureCount} not started
                </span>

              </div>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>

            <p className="progress-message">

              {completedCount === chapters.length
                ? "Amazing! You've completed the entire Biology syllabus! 🎉💙"
                : completedCount === 0
                ? "You haven't completed any chapters yet. Start with Chapter 1! 🌱"
                : `You've completed ${completedCount} out of ${chapters.length} chapters. Keep going! ✨`}

            </p>

          </div>


          {/* QUICK STATS */}

          <div className="dashboard-grid">

            <div className="dashboard-card">

              <div className="dashboard-icon">
                ✅
              </div>

              <div>
                <h3>
                  Completed
                </h3>

                <p>
                  {completedCount} chapters finished
                </p>
              </div>

            </div>


            <div className="dashboard-card">

              <div className="dashboard-icon">
                🤔
              </div>

              <div>
                <h3>
                  Needs Revision
                </h3>

                <p>
                  {unsureCount} chapters to revise
                </p>
              </div>

            </div>


            <div className="dashboard-card">

              <div className="dashboard-icon">
                📚
              </div>

              <div>
                <h3>
                  Remaining
                </h3>

                <p>
                  {chapters.length - completedCount - unsureCount} chapters left
                </p>
              </div>

            </div>

          </div>


          {/* REVISION CHECKLIST */}

          <div className="progress-card">

            <h3 style={{ marginBottom: "20px" }}>
              Biology Revision Checklist 📋
            </h3>

            {chapters.map((chapter, index) => {

              const isCompleted = completed.includes(index);
              const isUnsure = unsure.includes(index);

              return (
                <button
                  key={index}
                  onClick={() => openChapter(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "14px 10px",
                    marginBottom: "8px",
                    border: "none",
                    borderRadius: "12px",
                    background: isCompleted
                      ? "rgba(76, 175, 80, 0.10)"
                      : isUnsure
                      ? "rgba(255, 152, 0, 0.10)"
                      : "rgba(100, 130, 180, 0.06)",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "inherit"
                  }}
                >

                  {/* STATUS */}

                  <span
                    style={{
                      fontSize: "20px",
                      minWidth: "30px"
                    }}
                  >
                    {isCompleted
                      ? "✅"
                      : isUnsure
                      ? "🤔"
                      : "⬜"}
                  </span>


                  {/* CHAPTER NUMBER */}

                  <span
                    style={{
                      fontWeight: "600",
                      minWidth: "35px"
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* CHAPTER NAME */}

                  <span
                    style={{
                      flex: 1,
                      fontSize: "15px",
                      lineHeight: "1.4"
                    }}
                  >
                    {chapter.title}
                  </span>


                  {/* STATUS TEXT */}

                  <span
                    style={{
                      fontSize: "13px",
                      opacity: 0.75,
                      whiteSpace: "nowrap"
                    }}
                  >
                    {isCompleted
                      ? "Completed"
                      : isUnsure
                      ? "Revise"
                      : "Study →"}
                  </span>

                </button>
              );

            })}

          </div>


          {/* REVISION BUTTON */}

          {unsureCount > 0 && (

            <button
              className="secondary-button"
              style={{
                marginTop: "20px",
                width: "100%"
              }}
              onClick={() => openChapter(unsure[0])}
            >
              🤔 Start Revising Chapters →
            </button>

          )}


          {/* START / CONTINUE BUTTON */}

          {completedCount < chapters.length && (

            <button
              className="primary-button"
              style={{
                marginTop: "15px",
                width: "100%"
              }}
              onClick={() => {

                const nextChapterIndex = chapters.findIndex(
                  (_, index) => !completed.includes(index)
                );

                if (nextChapterIndex !== -1) {
                  openChapter(nextChapterIndex);
                }

              }}
            >
              📖 Continue Studying →
            </button>

          )}

        </div>
      )}
            {/* ================= TIMER ================= */}

{view === "timer" && (
  <div className="subject-overlay">

    <button
      className="back-button"
      onClick={() => setView("menu")}
    >
      ← Back
    </button>

    <div className="page-heading">

      <div className="eyebrow">
        FOCUS
      </div>

      <h2>
        Study Timer ⏱️
      </h2>

      <p>
        Focus on Biology with a simple study timer.
      </p>

    </div>

    <div className="timer-card">

      <div className="timer-display">
        25:00
      </div>

      <p>
        25 minutes of focused study.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >

        <button
          className="primary-button"
          onClick={() => alert("Timer will start here!")}
        >
          ▶ Start
        </button>

        <button
          className="secondary-button"
          onClick={() => alert("Timer paused!")}
        >
          ⏸ Pause
        </button>

        <button
          className="secondary-button"
          onClick={() => alert("Timer reset!")}
        >
          🔄 Reset
        </button>

      </div>

      <p className="timer-note">
        Use this session to study one Biology chapter without distractions. 💙
      </p>

    </div>

  </div>
)}

    </div>
  );
}

export default Biology;