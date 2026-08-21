import { useState, useEffect } from "react";
import chemistryQuestions from "./data/chemistryQuestions";

function Chemistry() {
  /*
   * NIOS Chemistry (313)
   * 32 chapters
   *
   * Chapter content is intentionally empty for now.
   * We will add notes, summaries, videos and chapter content
   * one chapter at a time without changing this structure.
   */

  const chapters = [
    // ================= CHAPTER 1 =================

{
  title: "Atoms, Molecules and Chemical Arithmetic",

  notes: `ATOMS, MOLECULES AND CHEMICAL ARITHMETIC

1. ATOMS

An atom is the smallest unit of an element that takes part in a chemical reaction.

Atoms are extremely small and cannot normally be seen directly.

An element consists of only one kind of atom.

Examples:

Hydrogen → H
Oxygen → O
Carbon → C
Sodium → Na

2. MOLECULES

A molecule is the smallest independent particle of a substance that can exist independently and retain the chemical properties of that substance.

Examples:

H₂ → Hydrogen molecule
O₂ → Oxygen molecule
H₂O → Water molecule
CO₂ → Carbon dioxide molecule

3. ATOMIC MASS

Atomic mass represents the relative mass of an atom compared with a standard reference.

The atomic mass of an element is usually expressed in atomic mass units (u).

4. MOLECULAR MASS

Molecular mass is the sum of the atomic masses of all atoms present in one molecule.

Example:

H₂O

= 2 × 1 + 16
= 18 u

Therefore, molecular mass of water = 18 u.

5. MOLAR MASS

Molar mass is the mass of one mole of a substance.

It is generally expressed in g mol⁻¹.

Example:

Molar mass of H₂O = 18 g mol⁻¹

6. MOLE CONCEPT

A mole is the amount of substance containing a fixed number of particles.

One mole contains:

6.022 × 10²³ particles

This number is called the Avogadro constant.

Nₐ = 6.022 × 10²³ mol⁻¹

The particles may be:

• Atoms
• Molecules
• Ions
• Electrons

7. MOLES AND MASS

Number of moles can be calculated using:

n = mass / molar mass

Therefore:

Mass = number of moles × molar mass

Example:

18 g of H₂O contains:

18 / 18 = 1 mole

8. MOLES AND NUMBER OF PARTICLES

Number of particles:

N = n × Nₐ

where:

N = number of particles
n = number of moles
Nₐ = Avogadro constant

9. EMPIRICAL FORMULA

The empirical formula gives the simplest whole-number ratio of atoms in a compound.

Example:

Molecular formula = C₆H₁₂O₆

Empirical formula = CH₂O

10. MOLECULAR FORMULA

The molecular formula shows the actual number of atoms of each element in one molecule.

Molecular formula can be related to empirical formula by:

Molecular formula = n × empirical formula

11. PERCENTAGE COMPOSITION

Percentage of an element in a compound:

Percentage composition
=
(mass of element in one mole of compound / molar mass of compound) × 100

12. CHEMICAL EQUATIONS

A chemical equation represents a chemical reaction using chemical formulae.

Example:

H₂ + O₂ → H₂O

This equation is not balanced.

Balanced equation:

2H₂ + O₂ → 2H₂O

13. LAW OF CONSERVATION OF MASS

Matter is neither created nor destroyed during a chemical reaction.

Therefore, the number of atoms of each element must be the same on both sides of a balanced equation.

14. STOICHIOMETRY

Stoichiometry deals with quantitative relationships between reactants and products in a chemical reaction.

For:

2H₂ + O₂ → 2H₂O

The mole ratio is:

H₂ : O₂ : H₂O

2 : 1 : 2

15. LIMITING REAGENT

The limiting reagent is the reactant that is completely consumed first.

It determines the maximum amount of product that can be formed.

16. IMPORTANT FORMULAS

Number of moles:

n = mass / molar mass

Number of particles:

N = nNₐ

Molar mass:

M = mass / moles

Percentage composition:

% = (mass of element / molar mass of compound) × 100

17. QUICK REVISION

• Atom → basic unit of an element.
• Molecule → independent particle of a molecular substance.
• One mole = 6.022 × 10²³ particles.
• Nₐ = 6.022 × 10²³ mol⁻¹.
• Moles = mass / molar mass.
• Particles = moles × Avogadro constant.
• Empirical formula gives the simplest ratio.
• Molecular formula gives the actual number of atoms.
• Chemical equations must be balanced.
• Stoichiometry uses mole ratios.
• Limiting reagent determines the maximum product.`,

  summary: `Chapter 1 introduces the basic quantitative language of chemistry.

Atoms are the basic units of elements, while molecules are groups of atoms joined together.

Because individual atoms and molecules are extremely small, chemists use the mole as a counting unit.

One mole contains 6.022 × 10²³ particles.

The most important relationship is:

MOLES = MASS / MOLAR MASS

Once the number of moles is known, the number of particles can be calculated using Avogadro's constant.

The chapter also explains empirical formulae, molecular formulae, percentage composition, balancing chemical equations and stoichiometry.

For a balanced equation, the coefficients give the mole ratio between reactants and products.

The limiting reagent is the reactant that gets completely consumed first and therefore limits the amount of product formed.

EXAM FOCUS:

• Mole concept
• Avogadro constant
• Molar mass
• Empirical and molecular formula
• Percentage composition
• Balancing equations
• Mole ratios
• Stoichiometry
• Limiting reagent`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 2 =================

{
  title: "Atomic Structure",

  notes: `ATOMIC STRUCTURE

1. INTRODUCTION

An atom consists mainly of:

• Electrons
• Protons
• Neutrons

The central part of the atom is called the nucleus.

The nucleus contains protons and neutrons.

Electrons occupy the region around the nucleus.

2. ELECTRON

Electron:

Charge = −1

Relative mass ≈ 1/1836 of a proton

Electrons are negatively charged particles.

3. PROTON

Proton:

Charge = +1

Relative mass ≈ 1 u

Protons are present inside the nucleus.

4. NEUTRON

Neutron:

Charge = 0

Relative mass ≈ 1 u

Neutrons are present inside the nucleus.

5. THOMSON'S MODEL

J.J. Thomson proposed the plum-pudding model.

According to this model:

• Atom is a positively charged sphere.
• Electrons are embedded in the positive charge.
• The atom as a whole is electrically neutral.

6. RUTHERFORD'S MODEL

Rutherford performed the alpha-particle scattering experiment.

Important observations:

• Most alpha particles passed straight through.
• Some were deflected.
• A very small number were strongly deflected.

Conclusions:

• Most of the atom is empty space.
• Positive charge is concentrated in a tiny nucleus.
• Most of the mass is concentrated in the nucleus.

7. LIMITATIONS OF RUTHERFORD MODEL

The model could not explain:

• Stability of the atom.
• Arrangement of electrons.
• Atomic spectra.

8. BOHR'S MODEL

Bohr proposed that electrons move around the nucleus in specific energy levels or shells.

Electrons in allowed energy levels do not continuously lose energy.

When an electron moves between energy levels, energy is absorbed or emitted.

9. ENERGY LEVELS

Shells are represented as:

K → n = 1
L → n = 2
M → n = 3
N → n = 4

Maximum number of electrons in a shell:

2n²

Therefore:

K shell → 2
L shell → 8
M shell → 18
N shell → 32

10. ATOMIC NUMBER

Atomic number is the number of protons in the nucleus.

Z = number of protons

For a neutral atom:

Number of protons = number of electrons

11. MASS NUMBER

Mass number is the total number of protons and neutrons.

A = protons + neutrons

Therefore:

Number of neutrons = A − Z

12. ISOTOPES

Isotopes are atoms of the same element having:

• Same atomic number
• Different mass numbers

The difference is due to different numbers of neutrons.

Example:

¹H
²H
³H

All are isotopes of hydrogen.

13. ISOBARS

Isobars are atoms of different elements having the same mass number but different atomic numbers.

14. ORBITALS

An orbital is a region around the nucleus where there is a high probability of finding an electron.

Types of orbitals:

s
p
d
f

15. s ORBITAL

s orbital is approximately spherical.

One s orbital can hold a maximum of 2 electrons.

16. p ORBITALS

There are three p orbitals:

pₓ
pᵧ
p_z

Each can contain 2 electrons.

Therefore p subshell can contain 6 electrons.

17. d AND f SUBSHELLS

d subshell:

5 orbitals
Maximum 10 electrons

f subshell:

7 orbitals
Maximum 14 electrons

18. ELECTRONIC CONFIGURATION

Electrons are arranged in shells and orbitals according to energy.

Example:

Hydrogen:

1s¹

Helium:

1s²

Carbon:

1s² 2s² 2p²

Oxygen:

1s² 2s² 2p⁴

19. VALENCE ELECTRONS

Valence electrons are electrons present in the outermost shell.

They strongly influence:

• Chemical properties
• Bond formation
• Reactivity

20. IMPORTANT FORMULAS

Atomic number:

Z = number of protons

For neutral atom:

protons = electrons

Mass number:

A = protons + neutrons

Neutrons:

N = A − Z

Maximum electrons in shell:

2n²

21. QUICK REVISION

• Electron → negative.
• Proton → positive.
• Neutron → neutral.
• Nucleus contains protons and neutrons.
• Most of an atom is empty space.
• Atomic number = number of protons.
• Mass number = protons + neutrons.
• Isotopes have the same atomic number but different mass numbers.
• s subshell → 2 electrons.
• p subshell → 6 electrons.
• d subshell → 10 electrons.
• f subshell → 14 electrons.
• Valence electrons influence chemical behaviour.`,

  summary: `Chapter 2 explains the internal structure of an atom.

An atom contains electrons, protons and neutrons.

Protons and neutrons are present in the nucleus, while electrons occupy regions around the nucleus.

Rutherford's experiment established that the atom contains a tiny, dense, positively charged nucleus and is mostly empty space.

Bohr proposed that electrons occupy specific energy levels.

The atomic number tells us the number of protons, while the mass number gives the total number of protons and neutrons.

The chapter also introduces isotopes, orbitals and electronic configuration.

The most important formulas are:

ATOMIC NUMBER = PROTONS

MASS NUMBER = PROTONS + NEUTRONS

NEUTRONS = MASS NUMBER − ATOMIC NUMBER

EXAM FOCUS:

• Atomic models
• Rutherford experiment
• Bohr model
• Atomic number
• Mass number
• Isotopes
• Electronic configuration
• Orbitals
• Valence electrons`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 3 =================

{
  title: "Periodic Table and Periodicity in Properties",

  notes: `PERIODIC TABLE AND PERIODICITY IN PROPERTIES

1. INTRODUCTION

The periodic table arranges elements in an organised manner according to their atomic numbers and electronic configurations.

Elements with similar outer electronic configurations often show similar chemical properties.

2. MODERN PERIODIC LAW

The physical and chemical properties of elements are periodic functions of their atomic numbers.

In other words:

Properties repeat periodically when elements are arranged according to increasing atomic number.

3. PERIODS

The modern periodic table contains 7 periods.

Period numbers correspond broadly to the highest occupied principal energy level.

4. GROUPS

The modern periodic table contains 18 groups.

Elements in the same group often have similar valence-electron configurations and similar chemical behaviour.

5. BLOCKS

The periodic table is divided into:

• s-block
• p-block
• d-block
• f-block

6. s-BLOCK ELEMENTS

The last electron enters an s orbital.

Groups 1 and 2 mainly belong to the s-block.

Examples:

Na
K
Mg
Ca

7. p-BLOCK ELEMENTS

The last electron enters a p orbital.

The p-block includes groups 13 to 18.

Examples:

B
C
N
O
F
Ne

8. d-BLOCK ELEMENTS

The last electron enters a d orbital.

They are commonly called transition elements.

They occupy the middle portion of the periodic table.

9. f-BLOCK ELEMENTS

The last electron enters an f orbital.

They include:

• Lanthanides
• Actinides

They are generally shown separately at the bottom of the periodic table.

10. ATOMIC RADIUS

Atomic radius is a measure of the size of an atom.

Across a period:

Atomic radius generally decreases.

Down a group:

Atomic radius generally increases.

Reason:

Across a period, effective nuclear attraction increases.

Down a group, additional electron shells are added.

11. IONIZATION ENERGY

Ionization energy is the energy required to remove an electron from an isolated gaseous atom.

Across a period:

Ionization energy generally increases.

Down a group:

Ionization energy generally decreases.

12. ELECTRON AFFINITY

Electron affinity describes the energy change associated with addition of an electron to a gaseous atom.

The trend is not perfectly uniform for all elements because of electronic configurations.

13. ELECTRONEGATIVITY

Electronegativity is the tendency of an atom in a molecule to attract the shared electron pair toward itself.

Across a period:

Electronegativity generally increases.

Down a group:

Electronegativity generally decreases.

Fluorine has the highest electronegativity.

14. METALLIC CHARACTER

Metallic character describes the tendency of an element to show metallic behaviour.

Across a period:

Metallic character generally decreases.

Down a group:

Metallic character generally increases.

15. NON-METALLIC CHARACTER

Non-metallic character generally:

Increases from left to right.

Decreases from top to bottom.

16. VALENCY

Valency is the combining capacity of an element.

For many main-group elements, valency is related to the number of valence electrons.

17. EFFECTIVE NUCLEAR CHARGE

Effective nuclear charge is the net positive attraction experienced by an electron after considering shielding by other electrons.

Across a period, effective nuclear attraction generally increases.

18. SHIELDING EFFECT

Inner electrons partially shield outer electrons from the attraction of the nucleus.

Down a group:

Number of shells increases.

Shielding effect generally increases.

19. PERIODIC TRENDS

Across a period:

Atomic radius ↓

Ionization energy ↑

Electronegativity ↑

Metallic character ↓

Down a group:

Atomic radius ↑

Ionization energy ↓

Electronegativity ↓

Metallic character ↑

20. NOBLE GASES

Group 18 contains noble gases.

Examples:

He
Ne
Ar
Kr
Xe

They generally have stable valence-shell configurations and low chemical reactivity.

21. QUICK REVISION

• Modern periodic table is based on atomic number.
• There are 7 periods.
• There are 18 groups.
• Blocks: s, p, d and f.
• Across a period atomic radius generally decreases.
• Down a group atomic radius generally increases.
• Ionization energy generally increases across a period.
• Ionization energy generally decreases down a group.
• Electronegativity increases across a period.
• Electronegativity decreases down a group.
• Metallic character decreases across a period.
• Metallic character increases down a group.
• Fluorine is the most electronegative element.`,

  summary: `Chapter 3 explains how the periodic table is organised and why element properties show regular patterns.

The modern periodic table is based on atomic number.

There are 7 periods and 18 groups.

The elements are also divided into s, p, d and f blocks according to the subshell receiving the last electron.

The most important part of the chapter is periodic trends.

ACROSS A PERIOD:

Atomic radius generally decreases.

Ionization energy generally increases.

Electronegativity generally increases.

Metallic character generally decreases.

DOWN A GROUP:

Atomic radius generally increases.

Ionization energy generally decreases.

Electronegativity generally decreases.

Metallic character generally increases.

These trends are mainly explained using nuclear charge, electron shells and shielding effect.

EXAM FOCUS:

• Modern periodic law
• Groups and periods
• s, p, d and f blocks
• Atomic radius
• Ionization energy
• Electron affinity
• Electronegativity
• Metallic character
• Valency
• Shielding effect
• Periodic trends`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 4 =================

{
  title: "Chemical Bonding",

  notes: `CHEMICAL BONDING

1. INTRODUCTION

Chemical bonding is the attractive force that holds atoms or ions together in a chemical substance.

Atoms form bonds because bonded arrangements are generally more stable than isolated atoms.

2. OCTET RULE

Many atoms tend to achieve eight electrons in their valence shell.

This stable arrangement resembles the electronic configuration of noble gases.

Hydrogen and helium follow the duet arrangement because their first shell can hold a maximum of two electrons.

3. TYPES OF CHEMICAL BONDS

Important types include:

• Ionic bond
• Covalent bond
• Coordinate bond
• Metallic bond

4. IONIC BOND

An ionic bond forms mainly through transfer of electrons from one atom to another.

The atom losing electrons becomes a cation.

The atom gaining electrons becomes an anion.

The electrostatic attraction between oppositely charged ions produces the ionic bond.

Example:

Na → Na⁺ + e⁻

Cl + e⁻ → Cl⁻

Na⁺ + Cl⁻ → NaCl

5. CHARACTERISTICS OF IONIC COMPOUNDS

Ionic compounds generally:

• Are crystalline solids.
• Have high melting points.
• Have high boiling points.
• Are hard and brittle.
• Conduct electricity when molten.
• Conduct electricity when dissolved in water.
• Usually do not conduct electricity in the solid state.

6. COVALENT BOND

A covalent bond forms through sharing of electron pairs between atoms.

Examples:

H₂
Cl₂
O₂
N₂
CH₄

7. SINGLE BOND

A single covalent bond contains one shared pair of electrons.

Example:

H–H

8. DOUBLE BOND

A double bond contains two shared electron pairs.

Example:

O=O

9. TRIPLE BOND

A triple bond contains three shared electron pairs.

Example:

N≡N

10. LEWIS STRUCTURES

Lewis structures represent valence electrons using dots and bonds.

They help show:

• Bond formation
• Lone pairs
• Shared electron pairs

Examples:

H₂
H–H

H₂O
H–O–H

NH₃

CH₄

11. COORDINATE BOND

A coordinate bond is a covalent bond in which both electrons of the shared pair are donated by the same atom.

Example:

NH₃ + H⁺ → NH₄⁺

Nitrogen donates its lone pair to H⁺.

12. ELECTRONEGATIVITY

Electronegativity is the ability of an atom in a molecule to attract the shared electron pair toward itself.

Greater electronegativity difference generally produces greater bond polarity.

13. POLAR COVALENT BOND

In a polar covalent bond, electrons are shared unequally.

Example:

H–Cl

Chlorine attracts the shared electron pair more strongly.

14. NON-POLAR COVALENT BOND

In a non-polar covalent bond, electrons are shared approximately equally.

Examples:

H₂
Cl₂

15. DIPOLE MOMENT

Dipole moment is a measure of charge separation in a bond or molecule.

It depends on:

• Magnitude of charge
• Distance between charges

16. VSEPR THEORY

VSEPR means:

Valence Shell Electron Pair Repulsion.

According to VSEPR theory, electron pairs around a central atom repel each other and arrange themselves as far apart as possible.

17. COMMON MOLECULAR SHAPES

2 electron domains:

Linear

3 electron domains:

Trigonal planar

4 electron domains:

Tetrahedral

5 electron domains:

Trigonal bipyramidal

6 electron domains:

Octahedral

18. IMPORTANT MOLECULAR SHAPES

BeCl₂ → Linear

BF₃ → Trigonal planar

CH₄ → Tetrahedral

NH₃ → Trigonal pyramidal

H₂O → Bent

19. HYBRIDIZATION

Hybridization is the mixing of atomic orbitals of comparable energy to form equivalent hybrid orbitals.

Important types:

sp
sp²
sp³

20. sp HYBRIDIZATION

Geometry:

Linear

Example:

BeCl₂

Bond angle:

180°

21. sp² HYBRIDIZATION

Geometry:

Trigonal planar

Example:

BF₃

Bond angle:

120°

22. sp³ HYBRIDIZATION

Electron-pair geometry:

Tetrahedral

Example:

CH₄

Bond angle:

109.5°

23. HYDROGEN BONDING

Hydrogen bonding is an attractive interaction involving hydrogen attached to a highly electronegative atom such as:

F
O
N

Examples:

H₂O
HF
NH₃

Hydrogen bonding strongly affects properties such as boiling point.

24. METALLIC BOND

In metals, positive metal ions are associated with delocalized electrons.

This helps explain:

• Electrical conductivity
• Thermal conductivity
• Malleability
• Ductility
• Metallic lustre

25. BOND ENERGY

Bond energy is the energy required to break a chemical bond.

Stronger bonds generally require more energy to break.

26. BOND LENGTH

Bond length is the average distance between the nuclei of two bonded atoms.

Generally:

Stronger bond → shorter bond length

27. IMPORTANT COMPARISON

Ionic bond:

Electron transfer.

Covalent bond:

Electron sharing.

Coordinate bond:

Both shared electrons donated by one atom.

Metallic bond:

Metal ions associated with delocalized electrons.

28. QUICK REVISION

• Chemical bonds hold atoms or ions together.
• Octet rule explains the tendency toward stable valence configurations.
• Ionic bond → electron transfer.
• Covalent bond → electron sharing.
• Coordinate bond → both shared electrons donated by one atom.
• Electronegativity affects bond polarity.
• VSEPR explains molecular shape.
• sp → linear.
• sp² → trigonal planar.
• sp³ → tetrahedral electron-pair geometry.
• Hydrogen bonding is an important intermolecular attraction.
• Stronger bonds generally have higher bond energy.`,

  summary: `Chapter 4 explains why atoms combine and how different types of chemical bonds are formed.

The main types of bonding are ionic, covalent, coordinate and metallic bonding.

Ionic bonding involves electron transfer.

Covalent bonding involves electron sharing.

A coordinate bond is formed when both electrons of the shared pair are donated by one atom.

VSEPR theory explains molecular shapes using repulsion between electron pairs.

Important shapes include:

BeCl₂ → linear

BF₃ → trigonal planar

CH₄ → tetrahedral

NH₃ → trigonal pyramidal

H₂O → bent

Hybridization is another important topic:

sp → linear

sp² → trigonal planar

sp³ → tetrahedral electron-pair geometry

EXAM FOCUS:

• Octet rule
• Ionic bonding
• Covalent bonding
• Coordinate bonds
• Lewis structures
• Electronegativity
• Bond polarity
• Dipole moment
• VSEPR theory
• Molecular shapes
• Hybridization
• Hydrogen bonding
• Metallic bonding`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 5 =================

{
  title: "The Gaseous and Liquid State",

  notes: `THE GASEOUS AND LIQUID STATE

1. STATES OF MATTER

Matter commonly exists as:

• Solid
• Liquid
• Gas

In gases, particles are far apart and move freely.

2. CHARACTERISTICS OF GASES

Gases:

• Have no fixed shape.
• Have no fixed volume.
• Fill the entire container.
• Are highly compressible.
• Have relatively low density.
• Mix readily with other gases.
• Exert pressure on container walls.

3. GAS PRESSURE

Gas pressure is produced by collisions of gas particles with the walls of the container.

Pressure is force per unit area.

Common units:

Pa
atm
bar
mm Hg
torr

Important conversion:

1 atm = 101325 Pa

Approximately:

1 atm = 760 mm Hg

4. BOYLE'S LAW

At constant temperature, pressure of a fixed amount of gas is inversely proportional to its volume.

P ∝ 1/V

Therefore:

PV = constant

For two conditions:

P₁V₁ = P₂V₂

If volume decreases:

Pressure increases.

5. CHARLES' LAW

At constant pressure, volume of a fixed amount of gas is directly proportional to absolute temperature.

V ∝ T

Therefore:

V/T = constant

For two conditions:

V₁/T₁ = V₂/T₂

Temperature must be in kelvin.

K = °C + 273.15

6. GAY-LUSSAC'S LAW

At constant volume, pressure of a fixed amount of gas is directly proportional to absolute temperature.

P ∝ T

Therefore:

P₁/T₁ = P₂/T₂

7. AVOGADRO'S LAW

At constant temperature and pressure, volume is directly proportional to the number of moles.

V ∝ n

Therefore:

V/n = constant

8. COMBINED GAS LAW

For a fixed amount of gas:

P₁V₁/T₁ = P₂V₂/T₂

Temperature must be expressed in kelvin.

9. IDEAL GAS EQUATION

The gas laws combine to give:

PV = nRT

where:

P = pressure
V = volume
n = number of moles
R = gas constant
T = absolute temperature

10. GAS CONSTANT

Common values of R include:

R = 8.314 J mol⁻¹ K⁻¹

or approximately:

R = 0.0821 L atm mol⁻¹ K⁻¹

The value used depends on the units of pressure and volume.

11. IDEAL GAS

An ideal gas is a theoretical gas that obeys gas laws perfectly.

Assumptions include:

• Gas particles have negligible volume.
• Intermolecular forces are negligible.
• Collisions are perfectly elastic.
• Particles are in continuous random motion.

Real gases can behave approximately ideally under suitable conditions.

12. DALTON'S LAW OF PARTIAL PRESSURES

For a mixture of non-reacting gases:

Ptotal = P₁ + P₂ + P₃ + ...

The total pressure is the sum of the partial pressures.

13. KINETIC MOLECULAR THEORY

According to kinetic molecular theory:

• Gas particles are continuously moving.
• Their motion is random.
• Collisions are elastic.
• Individual particle volume is negligible for an ideal gas.
• Intermolecular attraction is negligible for an ideal gas.
• Average kinetic energy depends on absolute temperature.

14. TEMPERATURE AND KINETIC ENERGY

When temperature increases:

• Average kinetic energy increases.
• Gas particles move faster.

When temperature decreases:

• Average kinetic energy decreases.

15. DIFFUSION

Diffusion is the spontaneous mixing of particles because of their random motion.

Gases diffuse rapidly because their particles are far apart and move freely.

16. GRAHAM'S LAW

The rate of diffusion or effusion of a gas is inversely proportional to the square root of its molar mass.

r₁/r₂ = √(M₂/M₁)

Therefore:

Lighter gases generally diffuse faster.

17. LIQUID STATE

Liquids have:

• Definite volume.
• No definite shape.
• Particles closer together than gases.
• Stronger intermolecular attractions than gases.
• Particles that can move past one another.

18. VAPOUR PRESSURE

Vapour pressure is the pressure exerted by vapour above a liquid when the liquid and vapour are in equilibrium at a given temperature.

As temperature increases:

Vapour pressure generally increases.

19. BOILING

A liquid boils when its vapour pressure becomes equal to the external pressure.

If external pressure increases:

Boiling point increases.

If external pressure decreases:

Boiling point decreases.

20. SURFACE TENSION

Surface tension is the tendency of a liquid surface to behave like a stretched elastic surface.

It results from intermolecular forces.

Stronger intermolecular attraction generally means higher surface tension.

21. VISCOSITY

Viscosity is the resistance of a liquid to flow.

High viscosity:

Liquid flows slowly.

Example:

Honey has relatively high viscosity.

Water has relatively low viscosity.

For most liquids:

Temperature increases → viscosity decreases.

22. EVAPORATION

Evaporation is the escape of molecules from the surface of a liquid.

It can occur below the boiling point.

Factors affecting evaporation include:

• Temperature
• Surface area
• Nature of liquid
• Wind speed

Higher temperature generally increases evaporation.

Larger surface area generally increases evaporation.

23. INTERMOLECULAR FORCES

Important intermolecular forces include:

• London dispersion forces
• Dipole-dipole forces
• Hydrogen bonding

These influence:

• Boiling point
• Vapour pressure
• Viscosity
• Surface tension
• Physical state

24. IMPORTANT GAS-LAW FORMULAS

Boyle's law:

P₁V₁ = P₂V₂

Charles' law:

V₁/T₁ = V₂/T₂

Gay-Lussac's law:

P₁/T₁ = P₂/T₂

Combined gas law:

P₁V₁/T₁ = P₂V₂/T₂

Ideal gas equation:

PV = nRT

Graham's law:

r₁/r₂ = √(M₂/M₁)

25. QUICK REVISION

• Gases have no fixed shape or volume.
• Gas pressure comes from collisions with container walls.
• Boyle's law → P and V are inversely proportional.
• Charles' law → V and T are directly proportional.
• Gay-Lussac's law → P and T are directly proportional.
• Avogadro's law → V and n are directly proportional.
• Ideal gas equation → PV = nRT.
• Gas temperature must be in kelvin for gas-law calculations.
• Dalton's law → total pressure is the sum of partial pressures.
• Lighter gases generally diffuse faster.
• Liquids have definite volume but no fixed shape.
• Boiling occurs when vapour pressure equals external pressure.
• Surface tension is related to intermolecular forces.
• Viscosity is resistance to flow.
• Evaporation occurs at the liquid surface.`,

  summary: `Chapter 5 explains the behaviour of gases and liquids.

Gases have no fixed shape or volume because their particles are far apart and move freely.

The most important part of this chapter is the gas laws.

BOYLE'S LAW:

P₁V₁ = P₂V₂

CHARLES' LAW:

V₁/T₁ = V₂/T₂

GAY-LUSSAC'S LAW:

P₁/T₁ = P₂/T₂

COMBINED GAS LAW:

P₁V₁/T₁ = P₂V₂/T₂

IDEAL GAS EQUATION:

PV = nRT

Temperature must be expressed in kelvin in gas-law calculations.

The chapter also covers Dalton's law of partial pressures, kinetic molecular theory and Graham's law of diffusion.

The liquid state includes important concepts such as vapour pressure, boiling point, surface tension, viscosity and evaporation.

A liquid boils when its vapour pressure becomes equal to the external pressure.

EXAM FOCUS:

• Boyle's law
• Charles' law
• Gay-Lussac's law
• Avogadro's law
• Combined gas law
• PV = nRT
• Dalton's law
• Graham's law
• Kinetic molecular theory
• Vapour pressure
• Boiling
• Surface tension
• Viscosity
• Evaporation`,

  video: "",
  quiz: ""
},
    // CHAPTER 6
{
  title: "Solid State",
  notes: `THE SOLID STATE

1. INTRODUCTION

Solids have a definite shape and definite volume.

Their particles are closely packed and held together by relatively strong forces of attraction.

2. CHARACTERISTICS OF SOLIDS

Solids generally:

• Have definite shape.
• Have definite volume.
• Are nearly incompressible.
• Have relatively high density.
• Have particles that vibrate about fixed positions.
• Have strong interparticle forces.

3. CLASSIFICATION OF SOLIDS

Solids are broadly classified into:

• Crystalline solids
• Amorphous solids

4. CRYSTALLINE SOLIDS

Crystalline solids have a regular and repeating arrangement of particles.

Examples:

• NaCl
• Quartz
• Diamond
• Ice

Important characteristics:

• Long-range order
• Definite geometrical shape
• Sharp melting point
• Definite heat of fusion
• Often anisotropic

5. AMORPHOUS SOLIDS

Amorphous solids do not have a regular long-range arrangement.

Examples:

• Glass
• Rubber
• Plastics

Characteristics:

• Irregular arrangement
• No sharp melting point
• Soften over a range of temperature
• Generally isotropic

6. CRYSTAL LATTICE

A crystal lattice is a regular three-dimensional arrangement of points representing the positions of particles in a crystal.

7. UNIT CELL

A unit cell is the smallest repeating structural unit of a crystal lattice.

Repeating unit cells in three dimensions produces the complete crystal structure.

8. TYPES OF CUBIC UNIT CELLS

Important cubic unit cells are:

• Simple cubic (SC)
• Body-centred cubic (BCC)
• Face-centred cubic (FCC)

9. SIMPLE CUBIC

Particles are present at the eight corners.

Each corner particle contributes 1/8 to one unit cell.

Number of particles:

8 × 1/8 = 1

Therefore:

SC = 1 particle per unit cell

Coordination number = 6

Packing efficiency ≈ 52.4%

10. BODY-CENTRED CUBIC

BCC contains:

• Eight corner particles
• One particle at the body centre

Number of particles:

8 × 1/8 + 1 = 2

Therefore:

BCC = 2 particles per unit cell

Coordination number = 8

Packing efficiency ≈ 68%

11. FACE-CENTRED CUBIC

FCC contains:

• Eight corner particles
• One particle at the centre of each of six faces

Number of particles:

8 × 1/8 + 6 × 1/2

= 1 + 3

= 4

Therefore:

FCC = 4 particles per unit cell

Coordination number = 12

Packing efficiency ≈ 74%

12. TYPES OF CRYSTALLINE SOLIDS

Crystalline solids can be classified as:

• Ionic solids
• Molecular solids
• Covalent/network solids
• Metallic solids

13. IONIC SOLIDS

Ionic solids contain positive and negative ions arranged in a crystal lattice.

Examples:

NaCl
KCl
MgO

Properties:

• High melting points
• Hard and brittle
• Conduct electricity when molten
• Conduct electricity in aqueous solution
• Usually do not conduct electricity in solid state

14. MOLECULAR SOLIDS

Molecular solids consist of molecules held together by intermolecular forces.

Examples:

• Ice
• Dry ice
• Iodine

They generally have lower melting points than ionic and network solids.

15. COVALENT OR NETWORK SOLIDS

Atoms are connected through strong covalent bonds throughout the structure.

Examples:

• Diamond
• Silicon carbide
• Quartz

They are generally very hard and have high melting points.

16. METALLIC SOLIDS

Metallic solids contain metal atoms or ions associated with delocalized electrons.

Properties:

• Good electrical conductivity
• Good thermal conductivity
• Malleability
• Ductility
• Metallic lustre

17. CRYSTAL DEFECTS

Real crystals may contain imperfections called crystal defects.

Important defects include:

• Vacancy defect
• Interstitial defect
• Substitutional defect

18. SCHOTTKY DEFECT

Equal numbers of cations and anions are missing from their normal lattice positions.

This maintains electrical neutrality.

19. FRENKEL DEFECT

A smaller ion leaves its normal lattice position and occupies an interstitial position.

The density of the crystal remains essentially unchanged because no ion leaves the crystal.

20. QUICK REVISION

• Solids have definite shape and volume.
• Crystalline solids have long-range order.
• Amorphous solids lack long-range order.
• Unit cell is the repeating structural unit.
• SC = 1 particle per unit cell.
• BCC = 2 particles per unit cell.
• FCC = 4 particles per unit cell.
• SC coordination number = 6.
• BCC coordination number = 8.
• FCC coordination number = 12.
• SC packing efficiency ≈ 52.4%.
• BCC packing efficiency ≈ 68%.
• FCC packing efficiency ≈ 74%.
• Schottky defect involves missing ions.
• Frenkel defect involves displacement of an ion to an interstitial position.`,

  summary: `Chapter 6 explains the structure and properties of solids.

Solids have a definite shape and volume because their particles are closely packed and strongly attracted to one another.

There are two major types of solids:

Crystalline solids have a regular repeating arrangement of particles.

Amorphous solids do not have long-range regular order.

The basic repeating unit of a crystal is called a unit cell.

The three important cubic unit cells are:

SC → 1 particle per unit cell

BCC → 2 particles per unit cell

FCC → 4 particles per unit cell

Their coordination numbers are:

SC → 6

BCC → 8

FCC → 12

Their approximate packing efficiencies are:

SC → 52.4%

BCC → 68%

FCC → 74%

The chapter also discusses ionic, molecular, covalent/network and metallic solids.

Crystal defects are imperfections in crystal structures.

The two important defects to remember are:

Schottky defect → ions are missing from lattice positions.

Frenkel defect → an ion moves from its normal position to an interstitial position.

For exams, focus especially on unit cells, coordination number, packing efficiency, types of solids and crystal defects.`,

  video: "",
  quiz: ""
},

// CHAPTER 7
{
  title: "Solutions",
  notes: `SOLUTIONS

1. INTRODUCTION

A solution is a homogeneous mixture of two or more components.

The component present in larger amount is generally called the solvent.

The component dissolved in the solvent is called the solute.

Example:

In a salt-water solution:

Salt → solute

Water → solvent

2. TYPES OF SOLUTIONS

Solutions can exist in different physical states.

Examples:

• Gas in gas → air
• Gas in liquid → carbon dioxide in water
• Liquid in liquid → ethanol in water
• Solid in liquid → salt in water
• Solid in solid → alloys

3. CONCENTRATION

Concentration describes the amount of solute present in a given amount of solution or solvent.

Common ways of expressing concentration include:

• Mass percentage
• Volume percentage
• Molarity
• Molality
• Mole fraction

4. MASS PERCENTAGE

Mass percentage is:

Mass % = (mass of solute / mass of solution) × 100

5. VOLUME PERCENTAGE

Volume percentage is:

Volume % = (volume of solute / volume of solution) × 100

6. MOLE FRACTION

Mole fraction of a component is the ratio of the number of moles of that component to the total number of moles.

For component A:

X_A = n_A / (n_A + n_B)

For a binary solution:

X_A + X_B = 1

7. MOLARITY

Molarity is the number of moles of solute present in one litre of solution.

M = moles of solute / volume of solution in litres

Unit:

mol L⁻¹

Molarity depends on temperature because solution volume can change with temperature.

8. MOLALITY

Molality is the number of moles of solute present in one kilogram of solvent.

m = moles of solute / mass of solvent in kg

Unit:

mol kg⁻¹

Molality does not depend significantly on temperature because mass does not change with temperature.

9. SOLUBILITY

Solubility is the maximum amount of a substance that can dissolve in a given amount of solvent under specified conditions.

10. FACTORS AFFECTING SOLUBILITY

Important factors include:

• Nature of solute
• Nature of solvent
• Temperature
• Pressure, especially for gases

11. SOLUBILITY OF SOLIDS

For many solid solutes, solubility increases with increase in temperature.

However, the exact effect depends on the substance and whether the dissolution is exothermic or endothermic.

12. SOLUBILITY OF GASES

The solubility of a gas in a liquid generally:

• Increases with pressure.
• Decreases with increase in temperature.

13. HENRY'S LAW

At constant temperature, the solubility of a gas in a liquid is related to the pressure of the gas above the solution.

Increasing pressure generally increases the amount of gas dissolved in the liquid.

14. VAPOUR PRESSURE OF SOLUTIONS

When a non-volatile solute is dissolved in a solvent, the vapour pressure of the solvent generally decreases.

15. RAOULT'S LAW

For an ideal solution, the partial vapour pressure of a component is proportional to its mole fraction.

For component A:

P_A = X_A P_A°

where:

P_A = partial vapour pressure of A

X_A = mole fraction of A

P_A° = vapour pressure of pure A

16. IDEAL SOLUTIONS

An ideal solution obeys Raoult's law over the entire range of composition.

For an ideal solution:

• Enthalpy of mixing is approximately zero.
• Volume change on mixing is approximately zero.
• Intermolecular interactions between unlike molecules are similar to those between like molecules.

17. NON-IDEAL SOLUTIONS

Real solutions may deviate from Raoult's law.

They may show:

• Positive deviation
• Negative deviation

18. COLLIGATIVE PROPERTIES

Colligative properties depend mainly on the number of dissolved particles rather than their chemical identity.

Important colligative properties include:

• Relative lowering of vapour pressure
• Elevation of boiling point
• Depression of freezing point
• Osmotic pressure

19. ELEVATION OF BOILING POINT

Addition of a non-volatile solute generally increases the boiling point of a solution.

20. DEPRESSION OF FREEZING POINT

Addition of a solute generally lowers the freezing point of a solution.

21. OSMOSIS

Osmosis is the movement of solvent molecules through a semipermeable membrane from a region of lower solute concentration to a region of higher solute concentration.

22. OSMOTIC PRESSURE

Osmotic pressure is the pressure required to stop osmosis.

For dilute solutions:

π = CRT

where:

π = osmotic pressure

C = molar concentration

R = gas constant

T = absolute temperature

23. QUICK REVISION

• Solution = homogeneous mixture.
• Solute is dissolved in solvent.
• Molarity uses volume of solution.
• Molality uses mass of solvent.
• Mole fraction = moles of component / total moles.
• Molarity changes with temperature.
• Molality is temperature independent.
• Gas solubility generally increases with pressure.
• Gas solubility generally decreases with temperature.
• Colligative properties depend on number of solute particles.
• Important colligative properties include boiling-point elevation, freezing-point depression and osmotic pressure.
• Osmosis involves movement of solvent through a semipermeable membrane.`,

  summary: `Chapter 7 explains solutions and how their concentration and properties are described.

A solution is a homogeneous mixture of a solute and a solvent.

The important ways of expressing concentration are:

• Mass percentage
• Volume percentage
• Mole fraction
• Molarity
• Molality

Molarity is based on the volume of the solution, while molality is based on the mass of the solvent.

Molarity can change with temperature because volume can change, whereas molality does not depend on temperature.

The chapter also covers solubility. Gases generally become more soluble in liquids when pressure increases and less soluble when temperature increases.

Another important topic is Raoult's law, which describes vapour pressure behaviour of ideal solutions.

Finally, the chapter introduces colligative properties. These depend on the number of dissolved particles.

Important examples are:

Elevation of boiling point

Depression of freezing point

Osmotic pressure

For exams, focus especially on concentration terms, molarity, molality, mole fraction, Raoult's law, colligative properties and osmosis.`,

  video: "",
  quiz: ""
},

// CHAPTER 8
{
  title: "Colloids",
  notes: `COLLOIDS

1. INTRODUCTION

A colloid is a heterogeneous system in which particles of one substance are dispersed throughout another substance.

Colloidal particles are larger than ordinary solution particles but smaller than particles in a suspension.

2. COMPONENTS OF A COLLOID

A colloidal system has two main components:

• Dispersed phase
• Dispersion medium

The dispersed phase consists of colloidal particles.

The dispersion medium is the substance in which these particles are distributed.

3. PARTICLE SIZE

Colloidal particles generally have sizes between those of true solutions and suspensions.

They are small enough to remain dispersed but large enough to show characteristic colloidal behaviour.

4. EXAMPLES OF COLLOIDS

Common examples include:

• Milk
• Fog
• Smoke
• Clouds
• Butter
• Jelly
• Paint
• Blood

5. CLASSIFICATION ACCORDING TO PHYSICAL STATE

Colloids can be classified according to the physical states of the dispersed phase and dispersion medium.

Examples:

Solid in liquid → sol

Liquid in liquid → emulsion

Gas in liquid → foam

Liquid in gas → aerosol

Solid in gas → aerosol

Gas in solid → solid foam

6. SOL

A sol is a colloid in which a solid is dispersed in a liquid.

Examples:

• Paint
• Starch sol

7. EMULSION

An emulsion contains one liquid dispersed in another liquid.

Examples:

• Milk
• Cream

8. FOAM

A foam contains gas dispersed in a liquid or solid.

Examples:

• Soap foam
• Sponge

9. AEROSOL

An aerosol contains fine solid or liquid particles dispersed in a gas.

Examples:

• Smoke
• Fog

10. TYNDALL EFFECT

The Tyndall effect is the scattering of light by colloidal particles.

Because of this scattering, the path of a light beam becomes visible when it passes through a colloidal system.

Examples:

• A beam of light through fog.
• Sunlight entering a dusty room.

11. BROWNIAN MOVEMENT

Brownian movement is the continuous random movement of colloidal particles.

It occurs because colloidal particles are continuously bombarded by molecules of the dispersion medium.

Brownian movement helps prevent colloidal particles from settling rapidly.

12. ELECTRICAL PROPERTIES

Colloidal particles often carry electrical charges.

Particles with similar charges repel one another.

This repulsion can help maintain the stability of a colloidal system.

13. ELECTROPHORESIS

Electrophoresis is the movement of charged colloidal particles under the influence of an electric field.

It can be used to study or separate charged colloidal particles.

14. COAGULATION

Coagulation is the process in which colloidal particles lose their stability and come together to form larger particles.

The particles may eventually settle out.

15. PEPTIZATION

Peptization is the process of converting a freshly precipitated substance into a colloidal sol by adding a suitable electrolyte.

16. PROTECTIVE COLLOIDS

Some colloids can protect another colloidal system from coagulation.

These are called protective colloids.

17. LYOPHILIC AND LYOPHOBIC COLLOIDS

Lyophilic colloids have a strong attraction between the dispersed phase and dispersion medium.

Lyophobic colloids have relatively little attraction between the dispersed phase and dispersion medium.

18. IMPORTANT DIFFERENCE

True solution:

• Very small particles
• Homogeneous
• Does not show Tyndall effect

Colloid:

• Intermediate particle size
• Appears homogeneous but is actually heterogeneous
• Shows Tyndall effect

Suspension:

• Large particles
• Particles may settle on standing
• Can generally be separated by filtration

19. QUICK REVISION

• Colloid = dispersed phase + dispersion medium.
• Sol = solid in liquid.
• Emulsion = liquid in liquid.
• Foam = gas in liquid or solid.
• Aerosol = solid or liquid in gas.
• Tyndall effect = scattering of light.
• Brownian movement = random motion of colloidal particles.
• Electrophoresis = movement of charged colloidal particles in an electric field.
• Coagulation = loss of colloidal stability and aggregation.
• Peptization = formation of a colloidal sol from a fresh precipitate.
• Protective colloids help prevent coagulation.`,

  summary: `Chapter 8 is about colloids, which are systems where very small particles of one substance are dispersed throughout another substance.

A colloid contains:

Dispersed phase → the particles being distributed.

Dispersion medium → the medium in which the particles are distributed.

Examples include milk, fog, smoke, clouds, paint and jelly.

Depending on the physical states involved, colloids can be called sols, emulsions, foams and aerosols.

Three important properties of colloids are:

Tyndall effect → scattering of light by colloidal particles.

Brownian movement → continuous random movement of colloidal particles.

Electrophoresis → movement of charged colloidal particles in an electric field.

Colloids can become unstable through coagulation, where particles aggregate and may settle.

For exams, focus especially on the components of colloids, types of colloids, Tyndall effect, Brownian movement, electrophoresis, coagulation and the difference between true solutions, colloids and suspensions.`,

  video: "",
  quiz: ""
},

// CHAPTER 9
{
  title: "Chemical Thermodynamics",
  notes: `CHEMICAL THERMODYNAMICS

1. INTRODUCTION

Thermodynamics is the study of energy changes associated with physical and chemical processes.

Chemical thermodynamics mainly deals with heat, work and energy changes during chemical reactions.

2. SYSTEM AND SURROUNDINGS

System:

The part of the universe selected for study.

Surroundings:

Everything outside the system that can interact with it.

Universe:

System + surroundings

3. TYPES OF SYSTEMS

Open system:

Both matter and energy can be exchanged with surroundings.

Closed system:

Energy can be exchanged but matter cannot.

Isolated system:

Neither matter nor energy can be exchanged with surroundings.

4. STATE OF A SYSTEM

The state of a system is described by measurable properties such as:

• Temperature
• Pressure
• Volume
• Composition

5. EXTENSIVE AND INTENSIVE PROPERTIES

Extensive properties depend on the amount of matter.

Examples:

• Mass
• Volume
• Internal energy

Intensive properties do not depend on the amount of matter.

Examples:

• Temperature
• Pressure
• Density

6. INTERNAL ENERGY

Internal energy is the total energy contained within a system.

It includes microscopic forms of kinetic and potential energy associated with the particles.

Internal energy is represented by U.

Change in internal energy:

ΔU = U₂ − U₁

7. HEAT

Heat is energy transferred between a system and its surroundings because of a temperature difference.

Heat is represented by q.

8. WORK

Work is energy transferred when a force causes displacement or when energy transfer occurs through other generalized processes.

In chemistry, expansion or compression work is especially important.

For expansion work:

w = −Pext ΔV

The sign convention means:

Expansion → work done by the system → w is negative.

Compression → work done on the system → w is positive.

9. FIRST LAW OF THERMODYNAMICS

The first law is the law of conservation of energy.

Energy cannot be created or destroyed; it can only be transferred or transformed.

The change in internal energy is related to heat and work:

ΔU = q + w

10. SIGN CONVENTION

For the system:

q > 0 → heat enters the system.

q < 0 → heat leaves the system.

w > 0 → work is done on the system.

w < 0 → work is done by the system.

11. ENTHALPY

Enthalpy is a thermodynamic quantity represented by H.

At constant pressure, the heat absorbed or released by a system is related to its enthalpy change.

ΔH = Hproducts − Hreactants

12. EXOTHERMIC REACTION

An exothermic reaction releases heat to the surroundings.

For an exothermic reaction:

ΔH < 0

Example:

Combustion reactions generally release heat.

13. ENDOTHERMIC REACTION

An endothermic reaction absorbs heat from the surroundings.

For an endothermic reaction:

ΔH > 0

14. HESS'S LAW

Hess's law states that the total enthalpy change of a reaction is independent of the path taken.

If a reaction occurs through several steps, the overall enthalpy change is the sum of the enthalpy changes of the individual steps.

15. BOND ENERGY

Chemical reactions involve breaking old bonds and forming new bonds.

Breaking bonds requires energy.

Forming bonds releases energy.

An approximate reaction enthalpy can be estimated using bond energies:

ΔH ≈ Σ bond energies of bonds broken − Σ bond energies of bonds formed

16. HEAT CAPACITY

Heat capacity is the amount of heat required to raise the temperature of a substance by one degree.

Specific heat capacity is the heat required to raise the temperature of unit mass of a substance by one degree.

17. CALORIMETRY

Calorimetry is the measurement of heat changes during physical or chemical processes.

A calorimeter is used to measure heat transfer.

18. STANDARD ENTHALPY CHANGE

Standard enthalpy changes are measured under specified standard conditions.

Examples include:

• Standard enthalpy of formation
• Standard enthalpy of combustion
• Standard enthalpy of neutralization

19. QUICK REVISION

• Thermodynamics deals with energy changes.
• System = part being studied.
• Surroundings = everything outside the system.
• Open system exchanges matter and energy.
• Closed system exchanges energy but not matter.
• Isolated system exchanges neither.
• Internal energy is represented by U.
• First law: ΔU = q + w.
• Expansion work is negative under the chemistry sign convention.
• Enthalpy is represented by H.
• Exothermic reaction → ΔH < 0.
• Endothermic reaction → ΔH > 0.
• Hess's law allows enthalpy changes of reaction steps to be added.
• Breaking bonds requires energy.
• Forming bonds releases energy.`,

  summary: `Chapter 9 explains the relationship between heat, work and energy in chemical processes.

Thermodynamics studies energy changes in a system.

A system is the part being studied, while everything outside it is the surroundings.

Systems may be open, closed or isolated depending on whether matter and energy can cross the boundary.

The central idea is the conservation of energy.

The first law of thermodynamics is:

ΔU = q + w

where ΔU is the change in internal energy, q is heat transferred to the system and w is work done on the system.

Enthalpy is another important quantity.

For a reaction:

ΔH = Hproducts − Hreactants

Exothermic reactions release heat and have negative ΔH.

Endothermic reactions absorb heat and have positive ΔH.

Hess's law states that the total enthalpy change depends only on the initial and final states, not on the path taken.

The chapter also covers heat capacity, calorimetry, bond energy and standard enthalpy changes.

For exams, focus especially on the first law, sign conventions, enthalpy, exothermic and endothermic reactions, Hess's law and bond-energy calculations.`,

  video: "",
  quiz: ""
},

// CHAPTER 10
{
  title: "Spontaneity of Chemical Reactions",
  notes: `SPONTANEITY OF CHEMICAL REACTIONS

1. INTRODUCTION

A spontaneous process is a process that can proceed in a particular direction under given conditions without requiring continuous external intervention to make it proceed in that direction.

Spontaneous does not necessarily mean fast.

A spontaneous reaction may occur very slowly.

2. EXAMPLES OF SPONTANEOUS PROCESSES

Examples include:

• Heat flowing from a hotter body to a colder body.
• Diffusion of gases.
• Expansion of a gas into an available space.
• Some oxidation processes.

3. SPONTANEOUS AND NON-SPONTANEOUS PROCESSES

Spontaneous process:

Can occur naturally in the specified direction under given conditions.

Non-spontaneous process:

Requires continuous external energy or intervention to proceed in that direction.

4. IMPORTANT POINT

Spontaneity and reaction rate are different concepts.

A reaction can be:

• Spontaneous and fast.
• Spontaneous and slow.
• Non-spontaneous under particular conditions.

5. ENTROPY

Entropy is a thermodynamic quantity related to the dispersal of energy and the number of possible microscopic arrangements of a system.

It is represented by S.

Change in entropy:

ΔS = Sproducts − Sreactants

6. GENERAL TREND OF ENTROPY

Entropy generally increases when:

• A solid changes to a liquid.
• A liquid changes to a gas.
• The number of gas molecules increases.
• A substance becomes more dispersed.

Entropy generally decreases when:

• A gas changes to a liquid.
• A liquid changes to a solid.
• The number of gas molecules decreases.
• A system becomes more ordered.

7. SECOND LAW OF THERMODYNAMICS

The second law of thermodynamics provides the basis for understanding the direction of spontaneous processes.

For a spontaneous process, the entropy change of the universe is positive:

ΔSuniverse > 0

At equilibrium:

ΔSuniverse = 0

8. GIBBS FREE ENERGY

Gibbs free energy is a thermodynamic quantity used to predict spontaneity at constant temperature and pressure.

It is represented by G.

The Gibbs free energy change is:

ΔG = ΔH − TΔS

where:

ΔG = Gibbs free energy change

ΔH = enthalpy change

T = absolute temperature

ΔS = entropy change

9. SPONTANEITY USING ΔG

At constant temperature and pressure:

ΔG < 0 → spontaneous process

ΔG > 0 → non-spontaneous process in the forward direction

ΔG = 0 → equilibrium

10. EXOTHERMIC AND ENTROPY EFFECTS

A process is especially favourable when:

• Enthalpy change is negative.
• Entropy change is positive.

If ΔH < 0 and ΔS > 0:

ΔG is negative at all positive temperatures.

11. EFFECT OF TEMPERATURE

Temperature can affect spontaneity when enthalpy and entropy changes have competing effects.

For example:

If ΔH > 0 and ΔS > 0, increasing temperature can make ΔG negative.

If ΔH < 0 and ΔS < 0, decreasing temperature can favour spontaneity.

12. FREE ENERGY AND EQUILIBRIUM

At equilibrium:

ΔG = 0

The system has no net tendency to move in either direction.

13. THIRD LAW OF THERMODYNAMICS

The third law relates the entropy of a perfectly ordered crystalline substance to absolute zero.

The entropy of a perfect crystal approaches zero as temperature approaches 0 K.

14. IMPORTANT DIFFERENCE

Spontaneity:

Describes whether a process is thermodynamically favourable in a particular direction.

Rate:

Describes how quickly the process occurs.

A spontaneous reaction can still have a very slow rate.

15. QUICK REVISION

• Spontaneous does not mean fast.
• Entropy is represented by S.
• Entropy generally increases when disorder or dispersal increases.
• ΔSuniverse > 0 indicates a spontaneous process.
• Gibbs free energy is represented by G.
• ΔG = ΔH − TΔS.
• ΔG < 0 → spontaneous.
• ΔG > 0 → non-spontaneous in the forward direction.
• ΔG = 0 → equilibrium.
• Temperature can affect spontaneity.
• A catalyst changes reaction rate but does not determine whether the overall reaction is thermodynamically spontaneous.`,

  summary: `Chapter 10 explains why some chemical and physical processes occur naturally in one direction.

A spontaneous process can proceed in a particular direction under given conditions without continuous external intervention.

An important point is that spontaneous does not mean fast.

Entropy is represented by S and is associated with the dispersal of energy and the number of possible microscopic arrangements.

Entropy generally increases when matter becomes more dispersed, such as during melting or vaporization.

The second law of thermodynamics helps explain spontaneity. For a spontaneous process, the entropy change of the universe is positive.

The most useful quantity for predicting spontaneity at constant temperature and pressure is Gibbs free energy.

The relationship is:

ΔG = ΔH − TΔS

The sign of ΔG tells us the direction:

ΔG < 0 → spontaneous

ΔG > 0 → non-spontaneous in the forward direction

ΔG = 0 → equilibrium

Temperature is important because it affects the TΔS term.

For exams, focus especially on spontaneity, entropy, the second law, Gibbs free energy, the ΔG equation and the effect of temperature.`,

  video: "",
  quiz: ""
},
    // CHAPTER 11
{
  title: "Chemical Equilibrium",
  notes: `CHEMICAL EQUILIBRIUM

1. INTRODUCTION

A reversible chemical reaction can proceed in both forward and backward directions.

For example:

A + B ⇌ C + D

In a closed system, the reaction may reach a state in which the forward and reverse reactions continue at equal rates.

This state is called chemical equilibrium.

2. DYNAMIC EQUILIBRIUM

Chemical equilibrium is dynamic because the forward and reverse reactions continue to occur.

At equilibrium:

Rate of forward reaction = Rate of reverse reaction

The concentrations of reactants and products remain constant with time.

They do not necessarily become equal.

3. CHARACTERISTICS OF EQUILIBRIUM

Chemical equilibrium:

• Is established in a closed system.
• Is dynamic in nature.
• Can be reached from either direction.
• Has equal forward and reverse reaction rates.
• Has constant concentrations of reactants and products.
• Does not mean equal concentrations of reactants and products.

4. LAW OF MASS ACTION

For a general reaction:

aA + bB ⇌ cC + dD

The equilibrium constant in terms of concentration is:

Kc = [C]^c[D]^d / [A]^a[B]^b

The concentrations are those of the species at equilibrium.

5. EQUILIBRIUM CONSTANT

The equilibrium constant indicates the relative amounts of products and reactants present at equilibrium.

Large K:

Products are favoured.

Small K:

Reactants are favoured.

6. HOMOGENEOUS EQUILIBRIUM

All reacting species are in the same physical state.

Example:

H₂(g) + I₂(g) ⇌ 2HI(g)

7. HETEROGENEOUS EQUILIBRIUM

Reacting species are present in different physical states.

Pure solids and pure liquids are generally not included in the equilibrium expression.

8. EQUILIBRIUM CONSTANT AND REACTION EQUATION

If the chemical equation is reversed:

Knew = 1/K

If the equation is multiplied by a factor n:

Knew = K^n

9. LE CHATELIER'S PRINCIPLE

If a system at equilibrium is disturbed, it shifts in a direction that tends to oppose the disturbance.

10. EFFECT OF CONCENTRATION

If the concentration of a reactant is increased, equilibrium generally shifts toward products.

If the concentration of a product is increased, equilibrium generally shifts toward reactants.

11. EFFECT OF PRESSURE

Pressure mainly affects equilibria involving gases.

Increasing pressure favours the side with fewer moles of gas.

Decreasing pressure favours the side with more moles of gas.

If both sides have the same number of gaseous moles, pressure has no effect on equilibrium position.

12. EFFECT OF TEMPERATURE

Temperature can change the equilibrium constant.

For an exothermic reaction:

Heat behaves like a product.

Increasing temperature favours the reverse direction.

For an endothermic reaction:

Heat behaves like a reactant.

Increasing temperature favours the forward direction.

13. EFFECT OF CATALYST

A catalyst speeds up both the forward and reverse reactions.

It does not change the equilibrium constant.

It does not change the equilibrium composition.

It only helps the system reach equilibrium faster.

14. REACTION QUOTIENT

The reaction quotient Q has the same mathematical form as the equilibrium constant but uses concentrations at any instant.

Comparison:

Q < K → reaction tends toward products.

Q > K → reaction tends toward reactants.

Q = K → system is at equilibrium.

15. QUICK REVISION

• Equilibrium is dynamic.
• Forward rate = reverse rate at equilibrium.
• Concentrations remain constant but are not necessarily equal.
• Kc represents equilibrium in terms of concentration.
• Large K → products favoured.
• Small K → reactants favoured.
• Le Chatelier's principle predicts equilibrium shifts.
• Increasing pressure favours fewer gaseous moles.
• Temperature changes can change K.
• Catalyst does not change K.
• Q = K means equilibrium.`,

  summary: `Chapter 11 explains chemical equilibrium and how reversible reactions behave.

A reversible reaction can proceed in both directions.

At equilibrium, the forward and reverse reactions continue but occur at equal rates.

Therefore, equilibrium is called dynamic.

The concentrations of reactants and products remain constant, but they do not necessarily become equal.

For a general reaction:

aA + bB ⇌ cC + dD

the equilibrium constant is expressed using the equilibrium concentrations of the reacting species.

A large equilibrium constant generally means products are favoured, while a small equilibrium constant means reactants are favoured.

Le Chatelier's principle explains how an equilibrium system responds to changes in concentration, pressure and temperature.

Increasing pressure favours the side containing fewer gaseous moles.

Temperature changes can alter the equilibrium constant, unlike concentration and pressure changes.

A catalyst speeds up the attainment of equilibrium but does not change the equilibrium constant.

For exams, focus especially on dynamic equilibrium, Kc, Le Chatelier's principle, effects of concentration/pressure/temperature and the effect of catalysts.`,

  video: "",
  quiz: ""
},

// CHAPTER 12
{
  title: "Ionic Equilibrium",
  notes: `IONIC EQUILIBRIUM

1. INTRODUCTION

Ionic equilibrium deals with the equilibrium established between ions and undissociated molecules in solutions of weak electrolytes.

It is especially important in aqueous solutions.

2. ELECTROLYTES

Electrolytes are substances that produce ions in aqueous solution or in molten state and therefore conduct electricity.

They are broadly classified as:

• Strong electrolytes
• Weak electrolytes

3. STRONG ELECTROLYTES

Strong electrolytes ionize almost completely in aqueous solution.

Examples:

• HCl
• HNO₃
• NaOH
• KOH
• NaCl

4. WEAK ELECTROLYTES

Weak electrolytes ionize only partially and establish an equilibrium between ions and undissociated molecules.

Examples:

• CH₃COOH
• NH₃ in water

5. ACIDS AND BASES

According to the Arrhenius concept:

Acid → produces H⁺ ions in water.

Base → produces OH⁻ ions in water.

6. BRØNSTED-LOWRY CONCEPT

A Brønsted-Lowry acid is a proton donor.

A Brønsted-Lowry base is a proton acceptor.

Example:

NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

NH₃ accepts a proton, so it acts as a base.

H₂O donates a proton, so it acts as an acid.

7. CONJUGATE ACID-BASE PAIRS

When an acid loses a proton, it forms its conjugate base.

When a base gains a proton, it forms its conjugate acid.

8. IONIZATION CONSTANT

For a weak acid:

HA ⇌ H⁺ + A⁻

Ka = [H⁺][A⁻] / [HA]

For a weak base:

BOH ⇌ B⁺ + OH⁻

The corresponding equilibrium constant is the base ionization constant, Kb.

9. pH

pH is a measure of the hydrogen-ion concentration of a solution.

pH = −log[H⁺]

At 25°C:

pH + pOH = 14

10. pOH

pOH is related to hydroxide-ion concentration.

pOH = −log[OH⁻]

11. ACIDIC, NEUTRAL AND BASIC SOLUTIONS

At 25°C:

pH < 7 → acidic

pH = 7 → neutral

pH > 7 → basic

12. IONIC PRODUCT OF WATER

Water undergoes slight self-ionization:

H₂O ⇌ H⁺ + OH⁻

At 25°C:

Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴

13. COMMON ION EFFECT

The common ion effect is the suppression of ionization of a weak electrolyte when a strong electrolyte containing a common ion is added.

14. BUFFER SOLUTIONS

A buffer solution resists large changes in pH when small amounts of acid or base are added.

An acidic buffer generally contains:

• A weak acid
• Its salt with a strong base

Example:

CH₃COOH + CH₃COONa

15. BASIC BUFFER

A basic buffer generally contains:

• A weak base
• Its salt with a strong acid

Example:

NH₃ + NH₄Cl

16. SALT HYDROLYSIS

Some salts react with water and produce acidic or basic solutions.

The nature of the solution depends on the strengths of the acid and base from which the salt is formed.

17. SOLUBILITY PRODUCT

For a sparingly soluble ionic compound, the equilibrium constant associated with its dissolution is called the solubility product, Ksp.

For:

AB(s) ⇌ A⁺ + B⁻

Ksp = [A⁺][B⁻]

18. PRECIPITATION

When the ionic product exceeds the solubility condition of a sparingly soluble salt, precipitation can occur.

19. QUICK REVISION

• Strong electrolytes ionize almost completely.
• Weak electrolytes ionize partially.
• Brønsted acid = proton donor.
• Brønsted base = proton acceptor.
• Ka measures acid ionization.
• Kb measures base ionization.
• pH = −log[H⁺].
• pOH = −log[OH⁻].
• At 25°C, pH + pOH = 14.
• Kw = [H⁺][OH⁻].
• Buffer solutions resist pH changes.
• Common ion effect suppresses ionization.
• Ksp describes equilibrium involving sparingly soluble salts.`,

  summary: `Chapter 12 deals with ionic equilibrium in aqueous solutions.

Strong electrolytes ionize almost completely, while weak electrolytes ionize only partially and establish equilibrium.

The chapter introduces acid-base theories, including the Brønsted-Lowry concept.

A Brønsted acid donates a proton, while a Brønsted base accepts a proton.

The important quantities are Ka, Kb, pH, pOH and Kw.

The most important formulas to remember are:

pH = −log[H⁺]

pOH = −log[OH⁻]

At 25°C:

pH + pOH = 14

The chapter also covers the common ion effect and buffer solutions.

Buffers resist sudden changes in pH when small amounts of acid or base are added.

Finally, the chapter introduces solubility product and precipitation of sparingly soluble salts.

For exams, focus especially on acid-base concepts, Ka, Kb, pH, pOH, Kw, buffer solutions, common ion effect and Ksp.`,

  video: "",
  quiz: ""
},

// CHAPTER 13
{
  title: "Electrochemistry",
  notes: `ELECTROCHEMISTRY

1. INTRODUCTION

Electrochemistry deals with the relationship between chemical reactions and electrical energy.

It includes:

• Production of electricity from chemical reactions.
• Use of electricity to drive chemical reactions.

2. OXIDATION AND REDUCTION

Oxidation involves loss of electrons.

Reduction involves gain of electrons.

A useful memory aid is:

OIL → Oxidation Is Loss

RIG → Reduction Is Gain

3. OXIDIZING AND REDUCING AGENTS

An oxidizing agent causes oxidation and itself undergoes reduction.

A reducing agent causes reduction and itself undergoes oxidation.

4. ELECTROCHEMICAL CELLS

An electrochemical cell converts chemical energy into electrical energy or electrical energy into chemical energy.

Two important types are:

• Galvanic/voltaic cells
• Electrolytic cells

5. GALVANIC CELL

A galvanic cell produces electrical energy from a spontaneous redox reaction.

Example:

Daniell cell

Zn | Zn²⁺ || Cu²⁺ | Cu

6. ANODE AND CATHODE

Oxidation always occurs at the anode.

Reduction always occurs at the cathode.

This rule applies to both galvanic and electrolytic cells.

Remember:

Anode → Oxidation

Cathode → Reduction

7. ELECTRON FLOW

In a galvanic cell, electrons flow through the external circuit from the anode to the cathode.

8. SALT BRIDGE

A salt bridge connects the two half-cells in a galvanic cell.

Its functions include:

• Completing the electrical circuit.
• Maintaining electrical neutrality.
• Allowing ion migration between half-cells.
• Minimizing direct mixing of the solutions.

9. ELECTRODE POTENTIAL

The tendency of an electrode to undergo reduction or oxidation is represented by electrode potential.

Standard electrode potentials are measured under standard conditions.

10. STANDARD ELECTRODE POTENTIAL

The standard hydrogen electrode is used as the reference electrode.

Its standard electrode potential is assigned:

E° = 0.00 V

11. CELL POTENTIAL

For a galvanic cell:

E°cell = E°cathode − E°anode

A positive standard cell potential indicates that the overall cell reaction is thermodynamically favourable under standard conditions.

12. ELECTROCHEMICAL SERIES

The electrochemical series arranges electrodes according to their standard reduction potentials.

A more positive reduction potential indicates a greater tendency to undergo reduction under standard conditions.

13. NERNST EQUATION

The Nernst equation relates electrode or cell potential to the reaction conditions.

At 25°C, a common form is:

E = E° − (0.0591/n) log Q

where:

E = electrode or cell potential

E° = standard potential

n = number of electrons transferred

Q = reaction quotient

14. ELECTROLYSIS

Electrolysis uses electrical energy to drive a non-spontaneous chemical reaction.

It takes place in an electrolytic cell.

15. FARADAY'S LAWS

Faraday's laws relate the amount of substance produced at an electrode to the quantity of electricity passed through the electrolyte.

The amount of substance deposited is proportional to the quantity of electricity passed.

16. CORROSION

Corrosion is the gradual deterioration of a metal due to chemical or electrochemical reactions with its environment.

Rusting of iron is a common example.

17. PREVENTION OF CORROSION

Methods include:

• Painting
• Oiling
• Galvanization
• Alloying
• Cathodic protection

18. QUICK REVISION

• Electrochemistry connects chemical reactions and electricity.
• Oxidation = loss of electrons.
• Reduction = gain of electrons.
• Oxidation occurs at anode.
• Reduction occurs at cathode.
• Galvanic cell produces electrical energy from a spontaneous reaction.
• Electrolytic cell uses electrical energy to drive a reaction.
• Salt bridge maintains electrical neutrality and completes the circuit.
• Standard hydrogen electrode has E° = 0.00 V.
• E°cell = E°cathode − E°anode.
• Nernst equation relates potential to reaction conditions.
• Electrolysis uses external electrical energy.
• Corrosion is an electrochemical process in many cases.`,

  summary: `Chapter 13 explains the relationship between chemical reactions and electricity.

Electrochemistry mainly deals with redox reactions.

Oxidation is loss of electrons, while reduction is gain of electrons.

In every electrochemical cell:

Oxidation → anode

Reduction → cathode

A galvanic cell converts chemical energy into electrical energy through a spontaneous redox reaction.

An electrolytic cell uses electrical energy to drive a non-spontaneous reaction.

The salt bridge in a galvanic cell completes the electrical circuit and maintains electrical neutrality.

The standard hydrogen electrode is used as a reference electrode with a standard potential of 0.00 V.

Cell potential can be calculated from the electrode potentials.

The chapter also introduces the Nernst equation, electrolysis, Faraday's laws and corrosion.

For exams, focus especially on oxidation/reduction, anode and cathode, galvanic cells, salt bridges, electrode potential, cell potential, Nernst equation, electrolysis and corrosion.`,

  video: "",
  quiz: ""
},

// CHAPTER 14
{
  title: "Chemical Kinetics",
  notes: `CHEMICAL KINETICS

1. INTRODUCTION

Chemical kinetics is the study of the rate of chemical reactions and the factors that affect reaction rates.

2. RATE OF REACTION

The rate of a reaction describes how quickly the concentration of reactants or products changes with time.

For a reactant:

Rate = decrease in concentration / time

For a product:

Rate = increase in concentration / time

3. FACTORS AFFECTING REACTION RATE

Important factors include:

• Concentration of reactants
• Temperature
• Surface area
• Pressure for gases
• Nature of reactants
• Catalysts

4. EFFECT OF CONCENTRATION

Increasing the concentration of reactants generally increases the frequency of collisions between reacting particles.

This can increase the reaction rate.

5. EFFECT OF TEMPERATURE

Increasing temperature generally increases reaction rate.

Particles move faster and a greater fraction of collisions can have enough energy to overcome the activation-energy barrier.

6. COLLISION THEORY

According to collision theory, particles must collide with suitable energy and appropriate orientation for an effective reaction to occur.

Not every collision produces a reaction.

7. ACTIVATION ENERGY

Activation energy is the minimum energy required for reacting particles to reach the activated state.

A lower activation energy generally allows a reaction to occur more rapidly under the same conditions.

8. RATE LAW

For a general reaction:

aA + bB → products

The rate may be expressed as:

Rate = k[A]^m[B]^n

where:

k = rate constant

m and n = reaction orders with respect to A and B

9. ORDER OF REACTION

The overall order of a reaction is the sum of the powers of concentration terms in the experimentally determined rate law.

10. ZERO-ORDER REACTION

For a zero-order reaction:

Rate = k

The rate is independent of reactant concentration within the conditions where the zero-order law applies.

11. FIRST-ORDER REACTION

For a first-order reaction:

Rate = k[A]

The rate is directly proportional to the concentration of A.

12. HALF-LIFE

Half-life is the time required for the concentration of a reactant to decrease to half its initial value.

For a first-order reaction:

t₁/₂ = 0.693/k

The half-life of a first-order reaction is independent of initial concentration.

13. RATE CONSTANT

The rate constant is represented by k.

Its units depend on the overall order of the reaction.

14. ARRHENIUS EQUATION

The Arrhenius equation relates the rate constant to temperature and activation energy.

k = A e^(−Ea/RT)

where:

k = rate constant

A = frequency factor

Ea = activation energy

R = gas constant

T = absolute temperature

15. CATALYST

A catalyst changes the rate of a chemical reaction without being consumed overall.

A catalyst provides an alternative reaction pathway with lower activation energy.

16. CATALYST AND EQUILIBRIUM

A catalyst speeds up both forward and reverse reactions.

It does not change the equilibrium constant.

It only helps equilibrium to be reached faster.

17. QUICK REVISION

• Chemical kinetics studies reaction rates.
• Reaction rate describes concentration change with time.
• Higher temperature generally increases reaction rate.
• Effective collisions require sufficient energy and suitable orientation.
• Activation energy is the minimum energy barrier.
• Rate law is determined experimentally.
• Overall reaction order is the sum of concentration powers.
• First-order reaction: Rate = k[A].
• First-order half-life: t₁/₂ = 0.693/k.
• Arrhenius equation relates k, temperature and activation energy.
• Catalyst lowers activation energy through an alternative pathway.
• Catalyst does not change equilibrium constant.`,

  summary: `Chapter 14 explains how quickly chemical reactions occur and what controls their rates.

Chemical kinetics is the study of reaction rates.

Reaction rate describes the change in concentration of reactants or products with time.

The rate can be affected by concentration, temperature, surface area, pressure for gases, the nature of reactants and catalysts.

Collision theory explains that reacting particles must collide with sufficient energy and suitable orientation.

The minimum energy required for effective reaction is called activation energy.

The rate law relates reaction rate to reactant concentrations.

For a first-order reaction:

Rate = k[A]

An important result for first-order reactions is:

t₁/₂ = 0.693/k

The Arrhenius equation relates the rate constant to temperature and activation energy.

A catalyst increases reaction rate by providing a pathway with lower activation energy.

For exams, focus especially on rate of reaction, factors affecting rate, collision theory, activation energy, rate law, reaction order, first-order reactions, half-life, Arrhenius equation and catalysts.`,

  video: "",
  quiz: ""
},

// CHAPTER 15
{
  title: "Adsorption and Catalysis",
  notes: `ADSORPTION AND CATALYSIS

1. INTRODUCTION

Adsorption is a surface phenomenon in which particles of one substance accumulate on the surface of another substance.

Catalysis is the change in the rate of a chemical reaction caused by a catalyst.

2. ADSORPTION

The substance that accumulates on the surface is called the adsorbate.

The substance on whose surface adsorption occurs is called the adsorbent.

Example:

When activated charcoal adsorbs gases, the gas is the adsorbate and charcoal is the adsorbent.

3. ADSORPTION VS ABSORPTION

Adsorption:

The substance accumulates mainly at the surface.

Absorption:

The substance penetrates throughout the bulk of another substance.

When both occur together, the process may be called sorption.

4. TYPES OF ADSORPTION

Two important types are:

• Physical adsorption
• Chemical adsorption

5. PHYSICAL ADSORPTION

Physical adsorption is also called physisorption.

It involves relatively weak intermolecular forces.

Characteristics:

• Usually reversible.
• Generally has low heat of adsorption.
• Can form multilayers.
• Favoured by lower temperatures in many cases.
• Does not usually require formation of chemical bonds.

6. CHEMICAL ADSORPTION

Chemical adsorption is also called chemisorption.

It involves stronger chemical interactions between adsorbate and adsorbent.

Characteristics:

• Often more specific.
• Usually involves formation of chemical bonds.
• Generally stronger than physisorption.
• Often forms a monolayer.

7. FACTORS AFFECTING ADSORPTION

Important factors include:

• Nature of adsorbent
• Nature of adsorbate
• Surface area
• Temperature
• Pressure

8. EFFECT OF SURFACE AREA

A finely divided solid generally has a larger surface area.

Larger surface area usually increases adsorption.

Activated charcoal is an important example of a substance with high surface area.

9. ADSORPTION ISOTHERM

An adsorption isotherm describes the relationship between the amount adsorbed and the pressure or concentration of the adsorbate at constant temperature.

10. APPLICATIONS OF ADSORPTION

Adsorption is used in:

• Gas masks
• Purification of water
• Decolourization
• Chromatography
• Removal of impurities
• Drying gases
• Separation of substances

11. CATALYSIS

A catalyst changes the rate of a chemical reaction without being consumed overall.

A catalyst provides an alternative pathway with a different, generally lower activation energy.

12. POSITIVE CATALYSIS

When a catalyst increases the rate of a reaction, it is called positive catalysis.

13. NEGATIVE CATALYSIS

When a substance decreases the rate of a reaction, it may be described as a negative catalyst or inhibitor.

14. HOMOGENEOUS CATALYSIS

The catalyst and reactants are in the same physical phase.

Example:

A catalyst and reactants all present in a gas phase.

15. HETEROGENEOUS CATALYSIS

The catalyst and reactants are in different phases.

A common example is a solid catalyst interacting with gaseous or liquid reactants.

16. ENZYME CATALYSIS

Enzymes are biological catalysts.

They are highly specific and can catalyse reactions under mild biological conditions.

17. CATALYTIC ACTIVITY

A catalyst provides an alternative reaction pathway and lowers the activation-energy barrier.

As a result, a greater fraction of collisions can lead to reaction.

18. CATALYST AND EQUILIBRIUM

A catalyst does not change:

• Equilibrium constant
• Equilibrium composition
• Overall enthalpy change

It accelerates both forward and reverse reactions so equilibrium is reached more quickly.

19. PROMOTERS AND CATALYTIC POISONS

A promoter can increase the effectiveness of a catalyst.

A catalytic poison decreases catalytic activity by interfering with the catalyst.

20. QUICK REVISION

• Adsorption is a surface phenomenon.
• Adsorbate = substance being adsorbed.
• Adsorbent = surface on which adsorption occurs.
• Adsorption differs from absorption.
• Physisorption involves weak intermolecular forces.
• Chemisorption involves stronger chemical interactions.
• Greater surface area generally increases adsorption.
• Adsorption has many purification and separation applications.
• Catalysts change reaction rate.
• Catalysts provide an alternative reaction pathway.
• Catalysts lower activation energy.
• Catalysts do not change equilibrium constant.
• Enzymes are biological catalysts.
• Promoters increase catalytic effectiveness.
• Catalytic poisons decrease catalytic activity.`,

  summary: `Chapter 15 explains adsorption and catalysis.

Adsorption is a surface phenomenon in which particles accumulate on the surface of another substance.

The substance being adsorbed is the adsorbate, while the surface is the adsorbent.

Adsorption is different from absorption because adsorption mainly occurs at the surface, whereas absorption involves penetration into the bulk.

There are two major types:

Physisorption → weak intermolecular forces.

Chemisorption → stronger chemical interactions and often chemical-bond formation.

Surface area is important because finely divided substances generally provide more surface for adsorption.

Adsorption is used in purification, gas masks, chromatography, decolourization and separation processes.

The second part of the chapter deals with catalysis.

A catalyst changes the reaction rate by providing an alternative pathway with a different activation-energy barrier.

Catalysts do not change the equilibrium constant or the final equilibrium composition.

Enzymes are biological catalysts.

For exams, focus especially on adsorption vs absorption, physisorption vs chemisorption, factors affecting adsorption, applications of adsorption, catalysts, homogeneous and heterogeneous catalysis, enzyme catalysis and the effect of catalysts on equilibrium.`
},
    // ================= CHAPTER 16 =================

{
  title: "Occurrence and Extraction of Metals",

  notes: `OCCURRENCE AND EXTRACTION OF METALS

1. INTRODUCTION

Metals occur in nature either in the free state or in the combined state.

Less reactive metals such as gold, platinum and sometimes silver may occur in the native or free state.

More reactive metals generally occur in the combined state as minerals.

2. MINERALS

A mineral is a naturally occurring substance containing a metal or its compounds.

Examples:

Bauxite → aluminium
Haematite → iron
Zinc blende → zinc
Galena → lead

3. ORES

An ore is a mineral from which a metal can be extracted economically and conveniently.

Therefore:

All ores are minerals, but all minerals are not ores.

4. GANGUE

Gangue refers to unwanted earthy or rocky impurities associated with an ore.

Examples include:

• Sand
• Clay
• Rock particles

5. CONCENTRATION OF ORES

The process of removing unwanted impurities from an ore is called concentration or dressing of the ore.

Important methods include:

• Hydraulic washing
• Magnetic separation
• Froth flotation
• Leaching

6. HYDRAULIC WASHING

Hydraulic washing is based on differences in densities.

The powdered ore is washed with a stream of water.

Heavier ore particles settle while lighter impurities are carried away.

7. MAGNETIC SEPARATION

Magnetic separation is used when either the ore or the impurity has magnetic properties.

A magnetic field separates the magnetic material from the non-magnetic material.

8. FROTH FLOATATION

Froth flotation is commonly used for the concentration of sulphide ores.

The powdered ore is mixed with water and suitable reagents.

Air is passed through the mixture.

Sulphide ore particles attach to the froth and are separated from the gangue.

9. LEACHING

Leaching involves treating the ore with a suitable reagent so that the desired component dissolves while impurities remain behind.

10. EXTRACTION OF METALS

Metal extraction generally involves three major stages:

• Concentration of ore
• Conversion of ore into a suitable compound
• Reduction to obtain the metal

11. CALCINATION

Calcination involves heating an ore strongly in the absence or limited supply of air.

It is commonly used for carbonate ores.

Example:

ZnCO₃ → ZnO + CO₂

12. ROASTING

Roasting involves heating an ore strongly in the presence of excess air.

It is commonly used for sulphide ores.

Example:

2ZnS + 3O₂ → 2ZnO + 2SO₂

13. REDUCTION

Reduction converts the metal compound into the free metal.

Common reducing agents include:

• Carbon
• Carbon monoxide
• Hydrogen
• More reactive metals

14. SMELTING

Smelting is the process of extracting a metal by heating the concentrated ore with a suitable reducing agent and flux.

15. FLUX AND SLAG

A flux is added to combine with unwanted impurities.

The product formed is called slag.

Flux + impurity → Slag

16. ELECTROLYTIC REDUCTION

Highly reactive metals cannot usually be extracted by ordinary chemical reducing agents.

They are commonly obtained by electrolysis.

Examples:

• Sodium
• Potassium
• Calcium
• Magnesium
• Aluminium

17. REFINING OF METALS

The impure metal obtained from extraction is purified by refining.

Important refining methods include:

• Electrolytic refining
• Distillation
• Liquation
• Zone refining

18. ELECTROLYTIC REFINING

In electrolytic refining:

• Impure metal → anode
• Pure metal → cathode
• Suitable metal salt solution → electrolyte

When electricity is passed, pure metal is deposited at the cathode.

19. IMPORTANT TERMS

Mineral:
Naturally occurring substance containing a metal or its compound.

Ore:
Mineral from which metal can be extracted economically.

Gangue:
Unwanted impurities associated with an ore.

Flux:
Substance added to remove impurities.

Slag:
Product formed by reaction of flux with impurities.

20. QUICK REVISION

• Metals may occur in free or combined states.
• Ore is a mineral from which metal can be extracted economically.
• Gangue consists of unwanted impurities.
• Concentration removes gangue.
• Hydraulic washing depends mainly on density differences.
• Magnetic separation uses magnetic properties.
• Froth flotation is commonly used for sulphide ores.
• Calcination is heating in limited or no air.
• Roasting is heating in excess air.
• Reduction produces the free metal.
• Flux reacts with impurities to form slag.
• Highly reactive metals are often extracted by electrolysis.
• Electrolytic refining is used to obtain highly pure metals.`,

  summary: `Chapter 16 explains where metals are found in nature and how they are extracted and purified.

Metals may occur in the free state or in the combined state.

A mineral contains a naturally occurring metal or its compound, while an ore is a mineral from which the metal can be extracted economically.

The unwanted earthy impurities associated with an ore are called gangue.

Before extraction, the ore is concentrated using methods such as hydraulic washing, magnetic separation, froth flotation and leaching.

The concentrated ore is then converted into a suitable compound.

Carbonate ores are commonly treated by calcination, while sulphide ores are commonly treated by roasting.

The metal compound is then reduced to obtain the metal.

Highly reactive metals such as sodium, potassium, calcium, magnesium and aluminium are generally obtained using electrolytic methods.

The crude metal may then be purified by refining.

Important terms to remember:

Mineral → naturally occurring metal-containing substance

Ore → economically useful mineral

Gangue → unwanted impurities

Flux → removes impurities

Slag → product formed from flux and impurities

For exams, focus especially on concentration methods, roasting, calcination, reduction, flux, slag, electrolytic extraction and refining.`,

  video: "",

  quiz: ""
},

// ================= CHAPTER 17 =================

{
  title: "Hydrogen and s-Block Elements",

  notes: `HYDROGEN AND s-BLOCK ELEMENTS

1. HYDROGEN

Hydrogen is the first element of the periodic table.

Its atomic number is 1.

Electronic configuration:

1s¹

Hydrogen has one electron in its only shell.

2. ISOTOPES OF HYDROGEN

Hydrogen has three important isotopes:

• Protium (¹H)
• Deuterium (²H or D)
• Tritium (³H or T)

Protium contains:

1 proton
0 neutrons

Deuterium contains:

1 proton
1 neutron

Tritium contains:

1 proton
2 neutrons

3. OCCURRENCE OF HYDROGEN

Hydrogen occurs in:

• Water
• Organic compounds
• Acids
• Hydrocarbons
• Living organisms

It is the most abundant element in the universe.

4. PREPARATION OF HYDROGEN

Hydrogen can be prepared by reactions involving metals and acids.

Example:

Zn + 2HCl → ZnCl₂ + H₂

It can also be obtained by electrolysis of water.

2H₂O → 2H₂ + O₂

5. PROPERTIES OF HYDROGEN

Hydrogen is:

• Colourless
• Odourless
• Very light
• Highly inflammable

Hydrogen burns in oxygen to form water.

2H₂ + O₂ → 2H₂O

6. USES OF HYDROGEN

Hydrogen is used in:

• Manufacture of ammonia
• Hydrogenation of vegetable oils
• Fuel cells
• Petroleum refining
• Production of chemicals

7. s-BLOCK ELEMENTS

The s-block contains elements whose differentiating electron enters an s-orbital.

The important groups are:

Group 1 → Alkali metals

Group 2 → Alkaline earth metals

8. ALKALI METALS

Group 1 elements include:

Li
Na
K
Rb
Cs
Fr

Their general valence-shell configuration is:

ns¹

9. PROPERTIES OF ALKALI METALS

Alkali metals are generally:

• Soft
• Highly reactive
• Good conductors of electricity
• Low in density compared with many other metals
• Easily oxidised

Their reactivity generally increases down the group.

10. REACTION WITH WATER

Alkali metals react with water to produce hydroxides and hydrogen.

Example:

2Na + 2H₂O → 2NaOH + H₂

Potassium reacts more vigorously than sodium.

11. REACTION WITH OXYGEN

Alkali metals react with oxygen to form different oxides depending on the metal.

Lithium mainly forms oxide.

Sodium commonly forms peroxide.

Potassium and heavier alkali metals can form superoxides.

12. ALKALI METAL HYDROXIDES

Hydroxides of alkali metals are generally strong bases.

Examples:

NaOH
KOH

13. ALKALINE EARTH METALS

Group 2 elements include:

Be
Mg
Ca
Sr
Ba
Ra

Their general valence-shell configuration is:

ns²

14. PROPERTIES OF ALKALINE EARTH METALS

They are generally:

• Harder than alkali metals
• Less reactive than alkali metals
• Good conductors
• Metallic in nature

Reactivity generally increases down the group.

15. REACTION WITH WATER

Calcium reacts with water:

Ca + 2H₂O → Ca(OH)₂ + H₂

Magnesium reacts slowly with cold water but more readily with hot water or steam.

16. IMPORTANT COMPOUNDS

Important compounds include:

NaOH
Na₂CO₃
NaHCO₃
CaO
Ca(OH)₂
CaCO₃

17. SODIUM HYDROXIDE

NaOH is commonly called caustic soda.

It is a strong base.

Uses include:

• Manufacture of soaps
• Paper industry
• Textile industry
• Preparation of chemicals

18. SODIUM CARBONATE

Na₂CO₃ is commonly called washing soda in its hydrated form.

It is used in:

• Glass manufacture
• Water softening
• Cleaning

19. SODIUM BICARBONATE

NaHCO₃ is baking soda.

On heating:

2NaHCO₃ → Na₂CO₃ + H₂O + CO₂

20. CALCIUM COMPOUNDS

Calcium oxide:

CaO

Commonly called quicklime.

Calcium hydroxide:

Ca(OH)₂

Commonly called slaked lime.

Calcium carbonate:

CaCO₃

Found in limestone, marble and chalk.

21. QUICK REVISION

• Hydrogen has atomic number 1.
• Hydrogen isotopes are protium, deuterium and tritium.
• Hydrogen burns in oxygen to form water.
• Group 1 elements are alkali metals.
• Group 2 elements are alkaline earth metals.
• Alkali metals have ns¹ configuration.
• Alkaline earth metals have ns² configuration.
• Reactivity generally increases down both groups.
• NaOH is caustic soda.
• Na₂CO₃ is sodium carbonate.
• NaHCO₃ is baking soda.
• CaO is quicklime.
• Ca(OH)₂ is slaked lime.
• CaCO₃ occurs in limestone, marble and chalk.`,

  summary: `Chapter 17 covers hydrogen and the s-block elements.

Hydrogen has atomic number 1 and an electronic configuration of 1s¹.

Its three important isotopes are protium, deuterium and tritium.

Hydrogen is found in water and many organic compounds. It is also widely used in ammonia production, hydrogenation, fuel cells and petroleum refining.

The s-block consists mainly of Group 1 and Group 2 elements.

Group 1 elements are called alkali metals and have a general valence-shell configuration of ns¹.

Group 2 elements are called alkaline earth metals and have a general valence-shell configuration of ns².

Alkali metals are highly reactive and their reactivity generally increases down the group.

Important compounds include sodium hydroxide, sodium carbonate, sodium bicarbonate, calcium oxide, calcium hydroxide and calcium carbonate.

Remember:

Group 1 → ns¹ → Alkali metals

Group 2 → ns² → Alkaline earth metals

NaOH → caustic soda

Na₂CO₃ → sodium carbonate

NaHCO₃ → baking soda

CaO → quicklime

Ca(OH)₂ → slaked lime

CaCO₃ → limestone/marble/chalk`,

  video: "",

  quiz: ""
},

// ================= CHAPTER 18 =================

{
  title: "General Characteristics of the p-Block Elements",

  notes: `GENERAL CHARACTERISTICS OF THE p-BLOCK ELEMENTS

1. INTRODUCTION

The p-block consists of elements in which the differentiating electron enters a p-orbital.

The p-block contains elements from Groups 13 to 18.

2. GENERAL ELECTRONIC CONFIGURATION

The general valence-shell configuration of p-block elements is:

ns² np¹–⁶

3. GROUPS OF THE p-BLOCK

The p-block includes:

Group 13 → Boron family

Group 14 → Carbon family

Group 15 → Nitrogen family

Group 16 → Oxygen family

Group 17 → Halogens

Group 18 → Noble gases

4. GENERAL CHARACTER

The p-block contains:

• Metals
• Non-metals
• Metalloids

Therefore, the p-block shows a wide variety of properties.

5. METALLIC CHARACTER

Metallic character generally decreases from left to right across a period.

It generally increases down a group.

6. ATOMIC SIZE

Across a period:

Atomic size generally decreases.

Down a group:

Atomic size generally increases.

7. IONIZATION ENERGY

Ionization energy generally increases across a period.

It generally decreases down a group.

8. ELECTRONEGATIVITY

Electronegativity generally increases across a period and decreases down a group.

Fluorine has the highest electronegativity among the elements.

9. OXIDATION STATES

p-block elements show several oxidation states.

The number of valence electrons strongly influences their common oxidation states.

10. INERT PAIR EFFECT

The tendency of the ns² electrons to remain less involved in bonding in heavier p-block elements is called the inert pair effect.

It becomes more important down the group.

11. COVALENCY

Many p-block elements form covalent compounds.

Examples:

CCl₄
NH₃
H₂O
PCl₃

12. Catenation

Catenation is the ability of an element to form bonds with atoms of the same element to produce chains or rings.

Carbon shows exceptionally strong catenation.

13. MULTIPLE BONDS

Several p-block elements can form multiple bonds.

Examples:

C=C
C≡C
C=O
N≡N

14. ALLOTROPY

Allotropy is the existence of an element in different structural forms in the same physical state.

Examples:

Carbon:

• Diamond
• Graphite

Oxygen:

• O₂
• O₃

15. OXIDES

p-block elements form different oxides.

Across a period, oxides generally change from basic to amphoteric and then acidic character.

Metallic oxides are generally more basic.

Non-metallic oxides are generally more acidic.

16. HYDRIDES

p-block elements form hydrides with hydrogen.

Examples:

CH₄
NH₃
H₂O
HF

17. HALOGENS

Group 17 elements are called halogens.

They include:

F
Cl
Br
I
At

They have seven valence electrons.

General configuration:

ns² np⁵

18. NOBLE GASES

Group 18 elements are noble gases.

Examples:

He
Ne
Ar
Kr
Xe
Rn

They have very stable electronic configurations and are generally chemically unreactive.

19. IMPORTANT TRENDS

Across a period:

Atomic size ↓

Ionization energy ↑

Electronegativity ↑

Metallic character ↓

Down a group:

Atomic size ↑

Ionization energy ↓

Electronegativity ↓

Metallic character ↑

20. QUICK REVISION

• p-block elements occupy Groups 13–18.
• General configuration = ns²np¹–⁶.
• p-block contains metals, non-metals and metalloids.
• Atomic size decreases across a period.
• Atomic size increases down a group.
• Ionization energy generally increases across a period.
• Electronegativity generally increases across a period.
• Inert pair effect becomes important in heavier elements.
• Carbon shows strong catenation.
• Carbon and oxygen show allotropy.
• Group 17 elements are halogens.
• Group 18 elements are noble gases.
• Metallic character decreases across a period and increases down a group.`,

  summary: `Chapter 18 introduces the general characteristics of the p-block elements.

The p-block consists of Groups 13 to 18 and has the general valence-shell configuration:

ns²np¹–⁶

It contains metals, non-metals and metalloids, making it one of the most diverse regions of the periodic table.

Across a period, atomic size generally decreases, while ionization energy and electronegativity increase.

Down a group, atomic size increases, while ionization energy and electronegativity generally decrease.

Important concepts include oxidation states, inert pair effect, catenation, multiple bonding and allotropy.

Carbon is especially important because it shows strong catenation and forms many compounds with multiple bonds.

Group 17 elements are halogens and Group 18 elements are noble gases.

For revision, remember the periodic trends and the general configuration of the p-block.`,

  video: "",

  quiz: ""
},

// ================= CHAPTER 19 =================

{
  title: "p-Block Elements and their Compounds – I",

  notes: `p-BLOCK ELEMENTS AND THEIR COMPOUNDS – I

1. GROUP 13 ELEMENTS

Group 13 is known as the boron family.

Important elements include:

B
Al
Ga
In
Tl

Their general electronic configuration is:

ns²np¹

2. BORON

Boron is a metalloid.

It is relatively hard and has several important compounds.

3. ALUMINIUM

Aluminium is a metal.

It is light, strong and a good conductor of electricity.

It develops a protective oxide layer on its surface.

4. BORIC ACID

Boric acid has the formula:

H₃BO₃

It is a weak acid.

5. BORAX

Borax is an important compound of boron.

It is used in:

• Glass manufacture
• Ceramics
• Metallurgy
• Laboratory work

6. ALUMINIUM OXIDE

Aluminium oxide:

Al₂O₃

It is amphoteric.

It can react with both acids and bases.

7. GROUP 14 ELEMENTS

Group 14 is known as the carbon family.

Important elements include:

C
Si
Ge
Sn
Pb

General configuration:

ns²np²

8. CARBON

Carbon is a non-metal.

It forms an enormous number of compounds.

Important allotropes include:

• Diamond
• Graphite

9. DIAMOND

Diamond has a three-dimensional network of carbon atoms.

Properties:

• Very hard
• High melting point
• Poor electrical conductor

10. GRAPHITE

Graphite has layers of carbon atoms.

It is:

• Soft
• Slippery
• A good electrical conductor

The conductivity is due to delocalized electrons.

11. CARBON MONOXIDE

Carbon monoxide:

CO

It is a colourless and poisonous gas.

It can combine strongly with haemoglobin and reduce the oxygen-carrying capacity of blood.

12. CARBON DIOXIDE

Carbon dioxide:

CO₂

It is a colourless gas.

It is produced during respiration and combustion.

It is used by plants during photosynthesis.

13. SILICON

Silicon is a metalloid.

It is important in:

• Electronics
• Semiconductors
• Glass
• Ceramics

14. SILICON DIOXIDE

Silicon dioxide:

SiO₂

It is found in:

• Quartz
• Sand

It has a giant covalent structure.

15. GROUP 15 ELEMENTS

Group 15 is known as the nitrogen family.

Important elements:

N
P
As
Sb
Bi

General configuration:

ns²np³

16. NITROGEN

Nitrogen is a colourless gas and forms a major part of Earth's atmosphere.

Molecular nitrogen exists as:

N₂

The N≡N bond is very strong.

17. AMMONIA

Ammonia:

NH₃

It is a colourless gas with a characteristic smell.

It is highly soluble in water.

Industrial ammonia is produced by the Haber process.

N₂ + 3H₂ ⇌ 2NH₃

18. NITRIC ACID

Nitric acid:

HNO₃

It is a strong acid and a powerful oxidising agent.

19. PHOSPHORUS

Phosphorus is a Group 15 element.

Important allotropes include:

• White phosphorus
• Red phosphorus

20. QUICK REVISION

• Group 13 → boron family → ns²np¹
• Group 14 → carbon family → ns²np²
• Group 15 → nitrogen family → ns²np³
• Aluminium oxide is amphoteric.
• Diamond is very hard and does not conduct electricity well.
• Graphite is soft and conducts electricity.
• CO is poisonous.
• CO₂ is used by plants in photosynthesis.
• Silicon is important as a semiconductor.
• Nitrogen exists mainly as N₂.
• Ammonia is NH₃.
• Haber process produces ammonia.
• Nitric acid is HNO₃.
• Phosphorus has important allotropes.`,

  summary: `Chapter 19 introduces important elements and compounds of the first part of the p-block.

Group 13 is the boron family with general configuration ns²np¹.

Group 14 is the carbon family with configuration ns²np².

Group 15 is the nitrogen family with configuration ns²np³.

Carbon is especially important because of its allotropy and ability to form a huge number of compounds.

Diamond is extremely hard and is a poor electrical conductor, while graphite is soft and conducts electricity.

Carbon monoxide is poisonous, while carbon dioxide is used by plants during photosynthesis.

Silicon is a metalloid and is important in semiconductor technology.

Nitrogen exists mainly as N₂ and has a very strong triple bond.

Ammonia is NH₃ and is manufactured industrially by the Haber process.

Nitric acid is HNO₃ and is a strong acid and oxidising agent.

For exams, focus on the Group 13–15 trends, important compounds, allotropes and properties of carbon, silicon, nitrogen and phosphorus.`,

  video: "",

  quiz: ""
},

// ================= CHAPTER 20 =================

{
  title: "p-Block Elements and their Compounds – II",

  notes: `p-BLOCK ELEMENTS AND THEIR COMPOUNDS – II

1. GROUP 16 ELEMENTS

Group 16 is known as the oxygen family or chalcogens.

Important elements include:

O
S
Se
Te
Po

General electronic configuration:

ns²np⁴

2. OXYGEN

Oxygen is a highly important non-metal.

Molecular oxygen exists as:

O₂

It supports combustion and is essential for respiration.

3. OZONE

Ozone:

O₃

It is an allotrope of oxygen.

Ozone in the upper atmosphere absorbs harmful ultraviolet radiation.

4. SULPHUR

Sulphur is a Group 16 element.

Important allotropes include:

• Rhombic sulphur
• Monoclinic sulphur

5. SULPHUR DIOXIDE

Sulphur dioxide:

SO₂

It is a colourless gas with a sharp smell.

It can act as a reducing agent and is involved in air pollution.

6. SULPHURIC ACID

Sulphuric acid:

H₂SO₄

It is a strong acid and an important industrial chemical.

Uses include:

• Fertiliser manufacture
• Petroleum refining
• Chemical industries
• Battery manufacture

7. GROUP 17 ELEMENTS

Group 17 elements are called halogens.

They include:

F
Cl
Br
I
At

General configuration:

ns²np⁵

8. PROPERTIES OF HALOGENS

Halogens are highly reactive non-metals.

Their reactivity generally decreases down the group.

Fluorine is the most reactive halogen.

9. HYDROGEN HALIDES

Halogens form hydrogen halides:

HF
HCl
HBr
HI

10. HYDROCHLORIC ACID

Hydrogen chloride dissolved in water forms hydrochloric acid.

HCl is a strong acid in aqueous solution.

11. BLEACHING ACTION OF CHLORINE

Chlorine can bleach substances because it can produce oxidising species in the presence of water.

12. INTERHALOGEN COMPOUNDS

Halogens can form compounds with one another.

Examples:

ClF
BrF₃
IF₅

These are called interhalogen compounds.

13. GROUP 18 ELEMENTS

Group 18 elements are noble gases.

Important members include:

He
Ne
Ar
Kr
Xe
Rn

14. ELECTRONIC CONFIGURATION

Noble gases have stable valence-shell configurations.

Helium:

1s²

Other noble gases generally have:

ns²np⁶

15. PROPERTIES OF NOBLE GASES

Noble gases are generally:

• Colourless
• Odourless
• Monoatomic
• Chemically unreactive
• Gases at room temperature

16. USES OF NOBLE GASES

Helium:

• Balloons
• Cryogenic applications

Neon:

• Advertising signs

Argon:

• Electric bulbs
• Welding atmospheres

Xenon:

• Special lamps

17. OXIDATION STATES

The oxidation states of p-block elements vary.

The availability of valence electrons and inert pair effect influence their chemistry.

18. ACIDIC AND BASIC CHARACTER OF OXIDES

Across a period, oxides generally become more acidic.

Metallic oxides are generally basic.

Non-metallic oxides are generally acidic.

Some oxides such as Al₂O₃ show amphoteric behaviour.

19. IMPORTANT COMPARISONS

Group 16:

ns²np⁴

Group 17:

ns²np⁵

Group 18:

ns²np⁶

Halogens:

High reactivity

Noble gases:

Very low reactivity

20. QUICK REVISION

• Group 16 → oxygen family → ns²np⁴
• Group 17 → halogens → ns²np⁵
• Group 18 → noble gases → ns²np⁶
• Oxygen exists mainly as O₂.
• Ozone is O₃.
• Sulphur has important allotropes.
• SO₂ is sulphur dioxide.
• H₂SO₄ is sulphuric acid.
• Halogen reactivity generally decreases down the group.
• Fluorine is the most reactive halogen.
• HCl dissolved in water forms hydrochloric acid.
• Interhalogen compounds contain two or more different halogens.
• Noble gases are generally monoatomic and chemically unreactive.
• Helium is used in balloons.
• Neon is used in advertising signs.
• Argon is used in bulbs and welding.`,

  summary: `Chapter 20 continues the p-block with Groups 16, 17 and 18.

Group 16 is the oxygen family and has the general configuration ns²np⁴.

Oxygen exists mainly as O₂, while ozone is O₃ and is an important allotrope of oxygen.

Sulphur is another important Group 16 element and has allotropes such as rhombic and monoclinic sulphur.

Sulphur dioxide and sulphuric acid are important compounds.

Group 17 elements are called halogens and have configuration ns²np⁵.

Their reactivity generally decreases down the group, with fluorine being the most reactive halogen.

Group 18 elements are noble gases. They have very stable electronic configurations and are generally chemically unreactive.

Important noble gases include helium, neon, argon, krypton, xenon and radon.

For revision, remember:

Group 16 → ns²np⁴

Group 17 → ns²np⁵

Group 18 → ns²np⁶

O₂ → oxygen

O₃ → ozone

SO₂ → sulphur dioxide

H₂SO₄ → sulphuric acid

HF, HCl, HBr, HI → hydrogen halides

He, Ne, Ar, Kr, Xe, Rn → noble gases`,

  video: "",

  quiz: ""
},

// ================= CHAPTER 21 =================

{
  title: "d-Block and f-Block Elements",

  notes: `d-BLOCK AND f-BLOCK ELEMENTS

1. INTRODUCTION

The d-block elements are placed in the middle of the periodic table.

They are also called transition elements when they form one or more ions with partially filled d-orbitals.

The f-block elements are placed separately at the bottom of the periodic table.

They include:

• Lanthanides
• Actinides

2. ELECTRONIC CONFIGURATION

The general electronic configuration of d-block elements is:

(n−1)d¹–¹⁰ ns⁰–²

The general electronic configuration of f-block elements is:

(n−2)f¹–¹⁴ (n−1)d⁰–¹ ns²

3. IMPORTANT PROPERTIES OF TRANSITION ELEMENTS

Transition elements generally show:

• Variable oxidation states.
• Formation of coloured ions.
• Formation of complex compounds.
• Catalytic activity.
• Formation of alloys.
• Magnetic properties.

4. VARIABLE OXIDATION STATES

Transition elements can show more than one oxidation state because the energies of the ns and (n−1)d electrons are relatively close.

Examples:

Fe → +2, +3

Cu → +1, +2

Mn → +2, +3, +4, +6, +7

5. COLOUR OF TRANSITION IONS

Many transition-metal ions are coloured.

The colour is generally associated with electronic transitions involving d-orbitals.

Ions with completely filled or empty d-subshells are often colourless.

6. MAGNETIC PROPERTIES

Transition-metal ions may be:

• Paramagnetic
• Diamagnetic

Paramagnetic substances contain one or more unpaired electrons.

Diamagnetic substances have all electrons paired.

More unpaired electrons generally means stronger paramagnetism.

7. CATALYTIC ACTIVITY

Many transition metals and their compounds act as catalysts.

Examples:

Iron → Haber process

Vanadium(V) oxide → Contact process

Nickel → Hydrogenation reactions

8. ALLOYS

Transition metals readily form alloys.

An alloy is a solid mixture of two or more elements in which at least one is a metal.

Examples:

Steel

Stainless steel

Brass

Bronze

9. COMPLEX COMPOUNDS

Transition metals form many coordination or complex compounds.

Examples:

[Cu(NH₃)₄]²⁺

[Fe(CN)₆]³⁻

10. LANTHANIDES

Lanthanides are the elements in which the 4f orbitals are progressively filled.

They commonly show the +3 oxidation state.

Many lanthanide ions are coloured and paramagnetic.

11. LANTHANIDE CONTRACTION

Lanthanide contraction is the gradual decrease in atomic and ionic size across the lanthanide series.

It occurs because 4f electrons do not shield the nuclear charge very effectively.

12. ACTINIDES

Actinides are the elements in which the 5f orbitals are progressively filled.

Most actinides are radioactive.

They commonly show variable oxidation states.

13. IMPORTANT COMPARISON

d-block:

• d-orbitals are progressively filled.
• Many elements are transition metals.
• Variable oxidation states are common.
• Complex formation is common.

f-block:

• f-orbitals are progressively filled.
• Includes lanthanides and actinides.
• Many elements show magnetic behaviour.
• Actinides are radioactive.

14. QUICK REVISION

• d-block elements occupy the middle of the periodic table.
• f-block elements are placed separately at the bottom.
• Transition metals commonly show variable oxidation states.
• Many transition-metal ions are coloured.
• Unpaired electrons cause paramagnetism.
• Transition metals often act as catalysts.
• Lanthanides involve filling of 4f orbitals.
• Actinides involve filling of 5f orbitals.
• Lanthanide contraction is the gradual decrease in size across the lanthanide series.`,

  summary: `Chapter 21 deals with the d-block and f-block elements.

d-block elements are found in the middle of the periodic table and commonly show variable oxidation states, coloured ions, complex formation, catalytic activity and magnetic properties.

Transition metals can have several oxidation states because the energies of their ns and d electrons are relatively close.

Many transition-metal ions are coloured because of electronic transitions involving d-orbitals.

Transition metals are also important catalysts. Examples include iron in the Haber process and vanadium(V) oxide in the Contact process.

The f-block contains the lanthanides and actinides.

Lanthanides involve filling of 4f orbitals and commonly show the +3 oxidation state.

Actinides involve filling of 5f orbitals and are generally radioactive.

A very important concept is lanthanide contraction, which is the gradual decrease in size across the lanthanide series.

Remember:

d-block → d-orbital filling

f-block → f-orbital filling

Variable oxidation states → common in transition metals

Unpaired electrons → paramagnetism

Lanthanide contraction → gradual decrease in size across lanthanides.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 22 =================

{
  title: "Coordination Compounds",

  notes: `COORDINATION COMPOUNDS

1. INTRODUCTION

Coordination compounds contain a central metal atom or ion surrounded by ions or molecules called ligands.

Example:

[Cu(NH₃)₄]²⁺

2. CENTRAL METAL ION

The central metal atom or ion accepts electron pairs from ligands.

Transition metals commonly form coordination compounds.

3. LIGANDS

A ligand is an ion or molecule that donates a lone pair of electrons to the central metal ion.

Examples:

NH₃

H₂O

Cl⁻

CN⁻

4. COORDINATION NUMBER

Coordination number is the number of donor atoms directly attached to the central metal ion.

For example:

[Cu(NH₃)₄]²⁺

Coordination number = 4

5. COORDINATION ENTITY

The central metal ion together with its attached ligands forms the coordination entity.

It is written inside square brackets.

Example:

[Co(NH₃)₆]³⁺

6. TYPES OF LIGANDS

Monodentate ligand:

Attaches through one donor atom.

Examples:

NH₃

Cl⁻

Bidentate ligand:

Attaches through two donor atoms.

Example:

ethylenediamine (en)

Polydentate ligands can attach through several donor atoms.

7. CHELATION

When a multidentate ligand attaches to a metal ion and forms one or more rings, the process is called chelation.

Chelating ligands generally form stable complexes.

8. OXIDATION STATE

The oxidation state of the central metal can be calculated from the charges of the ligands and the overall charge of the complex.

Example:

[Co(NH₃)₆]³⁺

NH₃ is neutral.

Therefore:

Oxidation state of Co = +3

9. NOMENCLATURE

Some basic rules:

• Name the ligands first.
• Name the central metal after the ligands.
• Use prefixes such as di-, tri-, tetra-, penta- and hexa- for ligand numbers.
• The oxidation state of the metal is written in Roman numerals.

10. IMPORTANT COMPLEXES

[Co(NH₃)₆]Cl₃

[Cu(NH₃)₄]SO₄

K₄[Fe(CN)₆]

11. ISOMERISM

Coordination compounds can show different types of isomerism.

Important types include:

• Ionisation isomerism
• Linkage isomerism
• Coordination isomerism
• Geometrical isomerism
• Optical isomerism

12. GEOMETRICAL ISOMERISM

Geometrical isomerism occurs when ligands can occupy different relative positions around the central metal ion.

cis form:

Similar ligands are adjacent.

trans form:

Similar ligands are opposite.

13. OPTICAL ISOMERISM

Some coordination compounds exist as non-superimposable mirror images.

Such forms are called optical isomers.

14. IMPORTANCE

Coordination compounds are important in:

• Biological systems
• Medicine
• Metallurgy
• Analytical chemistry
• Industrial chemistry

Examples include haemoglobin, chlorophyll and many medicinal complexes.

15. QUICK REVISION

• Central metal ion → accepts electron pairs.
• Ligand → donates electron pair.
• Coordination number → number of donor atoms attached to metal.
• Coordination entity → metal plus attached ligands.
• Chelating ligand → attaches through multiple donor atoms.
• Complexes can show different types of isomerism.
• Coordination compounds are important in biological and industrial systems.`,

  summary: `Coordination compounds contain a central metal atom or ion surrounded by ligands.

A ligand donates a lone pair of electrons to the central metal ion.

For example, in [Cu(NH₃)₄]²⁺, Cu²⁺ is the central metal ion and NH₃ molecules are ligands.

The number of donor atoms directly attached to the central metal is called the coordination number.

Ligands can be monodentate, bidentate or polydentate depending on how many donor atoms they use.

When a multidentate ligand forms rings with the metal ion, the process is called chelation.

Coordination compounds can also show isomerism, including geometrical and optical isomerism.

The most important ideas are:

Central metal → accepts electron pair

Ligand → donates electron pair

Coordination number → number of donor atoms attached

Chelation → multidentate ligand forming ring structures

Coordination compounds are important in biological systems, medicine, metallurgy and analytical chemistry.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 23 =================

{
  title: "Nomenclature and General Principles of Organic Chemistry",

  notes: `NOMENCLATURE AND GENERAL PRINCIPLES OF ORGANIC CHEMISTRY

1. INTRODUCTION

Organic chemistry is mainly the study of carbon compounds.

Carbon forms a very large number of compounds because of:

• Tetravalency
• Catenation
• Ability to form single, double and triple bonds

2. TETRAVALENCY OF CARBON

Carbon has four valence electrons.

It generally forms four covalent bonds.

This property is called tetravalency.

3. CATENATION

Catenation is the ability of carbon atoms to bond with one another to form:

• Chains
• Branched chains
• Rings

This is one major reason why carbon forms such a large number of compounds.

4. HYDROCARBONS

Hydrocarbons contain only carbon and hydrogen.

They can be:

• Alkanes
• Alkenes
• Alkynes
• Aromatic hydrocarbons

5. FUNCTIONAL GROUP

A functional group is an atom or group of atoms responsible for the characteristic chemical properties of an organic compound.

Important functional groups include:

–OH → alcohol

–CHO → aldehyde

>C=O → ketone

–COOH → carboxylic acid

–NH₂ → amine

–X → halo compound

6. HOMOLOGOUS SERIES

A homologous series is a group of organic compounds having:

• Same functional group
• Similar chemical properties
• Same general formula
• Successive members differing by –CH₂–

7. IUPAC NOMENCLATURE

IUPAC provides systematic rules for naming organic compounds.

The basic steps include:

• Select the longest carbon chain.
• Identify the principal functional group.
• Number the chain appropriately.
• Identify substituents.
• Write the name using appropriate prefixes and suffixes.

8. PREFIX

The prefix indicates the number of carbon atoms.

Examples:

1 → meth

2 → eth

3 → prop

4 → but

5 → pent

6 → hex

7 → hept

8 → oct

9 → non

10 → dec

9. IMPORTANT SUFFIXES

Alkane → –ane

Alkene → –ene

Alkyne → –yne

Alcohol → –ol

Aldehyde → –al

Ketone → –one

Carboxylic acid → –oic acid

10. ISOMERISM

Isomers are compounds having the same molecular formula but different arrangements or structures.

Important types include:

• Structural isomerism
• Chain isomerism
• Position isomerism
• Functional isomerism
• Stereoisomerism

11. ELECTRONIC EFFECTS

Important electronic effects in organic chemistry include:

• Inductive effect
• Resonance effect
• Electromeric effect
• Hyperconjugation

12. INDUCTIVE EFFECT

The inductive effect is the permanent displacement of sigma electrons along a carbon chain due to differences in electronegativity.

It can be:

+I effect

−I effect

13. RESONANCE

Resonance occurs when a molecule or ion can be represented by more than one contributing structure.

The actual structure is a resonance hybrid.

14. HOMOLYTIC FISSION

In homolytic bond cleavage, each bonded atom takes one electron.

Free radicals are formed.

15. HETEROLYTIC FISSION

In heterolytic bond cleavage, both bonding electrons go to one atom.

Ions are formed.

16. ELECTROPHILES

Electrophiles are electron-deficient species that accept electron pairs.

Examples:

H⁺

NO₂⁺

17. NUCLEOPHILES

Nucleophiles are electron-rich species that donate electron pairs.

Examples:

OH⁻

CN⁻

NH₃

18. CARBOCATIONS

A carbocation is a positively charged carbon species.

General stability:

3° > 2° > 1° > methyl

19. CARBANIONS

A carbanion is a negatively charged carbon species.

Its stability depends on the groups attached to the negatively charged carbon.

20. QUICK REVISION

• Carbon is tetravalent.
• Catenation allows carbon chains and rings.
• Functional groups determine characteristic reactions.
• Homologous series members differ by CH₂.
• IUPAC gives systematic names.
• Isomers have the same molecular formula but different arrangements.
• Electrophiles accept electron pairs.
• Nucleophiles donate electron pairs.
• Homolytic cleavage forms radicals.
• Heterolytic cleavage forms ions.
• Electronic effects influence stability and reactivity.`,

  summary: `Chapter 23 introduces the basic language and principles of organic chemistry.

Carbon forms millions of compounds because it is tetravalent and can bond strongly with other carbon atoms. The ability of carbon to form chains and rings is called catenation.

Organic compounds contain different functional groups, such as –OH, –CHO, >C=O, –COOH and –NH₂. Functional groups determine many of the chemical properties of compounds.

IUPAC nomenclature provides systematic rules for naming organic compounds.

Organic compounds can also show isomerism. Isomers have the same molecular formula but different structures or arrangements.

The chapter also introduces important concepts such as inductive effect, resonance, homolytic and heterolytic bond cleavage, electrophiles, nucleophiles, carbocations and carbanions.

Remember:

Carbon → tetravalent

Catenation → carbon-carbon bonding

Functional group → characteristic chemical behaviour

Electrophile → electron-pair acceptor

Nucleophile → electron-pair donor

Homolytic cleavage → radicals

Heterolytic cleavage → ions`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 24 =================

{
  title: "Hydrocarbons",

  notes: `HYDROCARBONS

1. INTRODUCTION

Hydrocarbons are organic compounds containing only carbon and hydrogen.

They are broadly classified into:

• Alkanes
• Alkenes
• Alkynes
• Aromatic hydrocarbons

2. ALKANES

Alkanes are saturated hydrocarbons containing only single carbon-carbon bonds.

General formula:

CₙH₂ₙ₊₂

Examples:

Methane → CH₄

Ethane → C₂H₆

Propane → C₃H₈

3. PROPERTIES OF ALKANES

Alkanes are generally relatively unreactive because C–C and C–H single bonds are strong.

Important reactions include:

• Combustion
• Substitution reactions

4. COMBUSTION OF ALKANES

Complete combustion produces carbon dioxide and water.

Example:

CH₄ + 2O₂ → CO₂ + 2H₂O

5. SUBSTITUTION REACTION

In substitution reactions, one atom or group is replaced by another.

Alkanes commonly undergo substitution with halogens in the presence of suitable conditions such as light.

6. ALKENES

Alkenes are unsaturated hydrocarbons containing at least one carbon-carbon double bond.

General formula for simple acyclic alkenes with one double bond:

CₙH₂ₙ

Example:

Ethene → C₂H₄

7. ADDITION REACTIONS OF ALKENES

The double bond allows alkenes to undergo addition reactions.

Examples include addition of:

• Hydrogen
• Halogens
• Hydrogen halides
• Water

8. HYDROGENATION

Hydrogen can add across a carbon-carbon double bond.

Alkene + H₂ → Alkane

Nickel or another suitable catalyst may be used.

9. ALKYNES

Alkynes are unsaturated hydrocarbons containing at least one carbon-carbon triple bond.

General formula for simple acyclic alkynes with one triple bond:

CₙH₂ₙ−₂

Example:

Ethyne → C₂H₂

10. ADDITION REACTIONS OF ALKYNES

Alkynes can undergo addition reactions because of their triple bond.

Hydrogen, halogens and hydrogen halides can add under suitable conditions.

11. AROMATIC HYDROCARBONS

Aromatic hydrocarbons contain aromatic ring systems.

Benzene is the most important example.

Formula:

C₆H₆

12. BENZENE

Benzene contains a six-membered ring with delocalized electrons.

It is represented using a hexagonal ring.

13. AROMATIC SUBSTITUTION

Benzene commonly undergoes substitution reactions rather than simple addition because aromatic stability is maintained.

Important reactions include:

• Nitration
• Halogenation
• Sulphonation
• Friedel-Crafts reactions

14. ISOMERISM IN HYDROCARBONS

Hydrocarbons can show different types of structural and stereoisomerism.

Examples include:

• Chain isomerism
• Position isomerism
• Geometrical isomerism

15. IMPORTANT COMPARISON

Alkanes:

Single bonds

Saturated

CₙH₂ₙ₊₂

Alkenes:

Double bond

Unsaturated

CₙH₂ₙ

Alkynes:

Triple bond

Unsaturated

CₙH₂ₙ−₂

16. QUICK REVISION

• Hydrocarbons contain only carbon and hydrogen.
• Alkanes are saturated.
• Alkenes contain C=C.
• Alkynes contain C≡C.
• Alkenes and alkynes readily undergo addition reactions.
• Alkanes commonly undergo substitution reactions.
• Benzene is an important aromatic hydrocarbon.
• Benzene generally undergoes substitution reactions.
• Combustion of hydrocarbons produces energy.
• Hydrocarbons can show structural and stereoisomerism.`,

  summary: `Chapter 24 deals with hydrocarbons, which are compounds containing only carbon and hydrogen.

Alkanes are saturated hydrocarbons containing only single bonds. Their general formula for simple acyclic members is CₙH₂ₙ₊₂.

Alkenes contain carbon-carbon double bonds and have the general formula CₙH₂ₙ for simple acyclic compounds with one double bond.

Alkynes contain carbon-carbon triple bonds and have the general formula CₙH₂ₙ−₂ for simple acyclic compounds with one triple bond.

Because alkenes and alkynes contain multiple bonds, they commonly undergo addition reactions.

Benzene is an important aromatic hydrocarbon. Its delocalized electron system gives it special stability, so benzene commonly undergoes substitution reactions.

For exams, remember:

Alkane → single bond → saturated

Alkene → double bond → unsaturated

Alkyne → triple bond → unsaturated

Benzene → aromatic hydrocarbon

Addition → common for alkenes and alkynes

Substitution → common for alkanes and aromatic hydrocarbons`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 25 =================

{
  title: "Compounds of Carbon Containing Halogens (Haloalkanes and Haloarenes)",

  notes: `COMPOUNDS OF CARBON CONTAINING HALOGENS

HALOALKANES AND HALOARENES

1. INTRODUCTION

Haloalkanes and haloarenes are organic compounds containing carbon-halogen bonds.

The halogens commonly involved are:

• Fluorine
• Chlorine
• Bromine
• Iodine

2. HALOALKANES

Haloalkanes are compounds in which a halogen atom is attached to an aliphatic carbon atom.

General representation:

R–X

where:

R = alkyl group

X = halogen

Examples:

CH₃Cl

C₂H₅Br

3. HALOARENES

Haloarenes are compounds in which a halogen atom is directly attached to an aromatic ring.

Example:

Chlorobenzene

C₆H₅Cl

4. CLASSIFICATION OF HALOALKANES

Haloalkanes can be classified according to the carbon attached to the halogen.

Primary haloalkane:

Halogen-bearing carbon attached to one other carbon.

Secondary haloalkane:

Halogen-bearing carbon attached to two other carbons.

Tertiary haloalkane:

Halogen-bearing carbon attached to three other carbons.

5. NATURE OF C–X BOND

The carbon-halogen bond is polar because halogens are more electronegative than carbon.

The carbon atom carries a partial positive charge.

The halogen carries a partial negative charge.

6. PREPARATION

Haloalkanes can be prepared by several methods.

Important methods include:

• From alcohols
• From hydrocarbons
• Halogen exchange reactions

7. REACTIONS OF HALOALKANES

Haloalkanes undergo several important reactions.

These include:

• Nucleophilic substitution
• Elimination
• Reactions with metals

8. NUCLEOPHILIC SUBSTITUTION

In a nucleophilic substitution reaction, a nucleophile replaces the halogen atom.

General form:

R–X + Nu⁻ → R–Nu + X⁻

Examples of nucleophiles include:

OH⁻

CN⁻

NH₃

9. ELIMINATION REACTION

In elimination reactions, atoms or groups are removed from the molecule and a double bond may form.

Haloalkanes can produce alkenes under suitable conditions.

10. REACTION WITH MAGNESIUM

Haloalkanes react with magnesium in dry ether to form Grignard reagents.

General form:

R–X + Mg → R–MgX

Grignard reagents are important in organic synthesis.

11. HALOARENES

Haloarenes contain halogen directly attached to an aromatic ring.

Example:

Chlorobenzene

12. DIFFERENCE BETWEEN HALOALKANES AND HALOARENES

Haloalkanes:

Halogen attached to an aliphatic carbon.

Example:

CH₃Cl

Haloarenes:

Halogen attached directly to an aromatic ring.

Example:

C₆H₅Cl

13. USES

Halogen-containing organic compounds have been used in:

• Solvents
• Refrigerants
• Pharmaceuticals
• Pesticides
• Organic synthesis

However, some halogen-containing compounds can have serious environmental or health impacts.

14. IMPORTANT POINT

The reactivity of haloalkanes depends on factors such as:

• Nature of the halogen
• Structure of the carbon skeleton
• Reaction mechanism
• Nature of the nucleophile
• Solvent

15. QUICK REVISION

• Haloalkanes contain halogen attached to an aliphatic carbon.
• Haloarenes contain halogen directly attached to an aromatic ring.
• C–X bonds are polar.
• Haloalkanes commonly undergo nucleophilic substitution.
• Elimination can produce alkenes.
• Haloalkanes react with Mg to form Grignard reagents.
• R–X + Mg → R–MgX.
• Primary, secondary and tertiary haloalkanes differ according to the carbon attached to the halogen.`,

  summary: `Chapter 25 deals with organic compounds containing halogens.

Haloalkanes have a halogen attached to an aliphatic carbon, while haloarenes have a halogen directly attached to an aromatic ring.

The carbon-halogen bond is polar because halogens are more electronegative than carbon.

Haloalkanes undergo important reactions such as nucleophilic substitution and elimination.

In nucleophilic substitution, a nucleophile replaces the halogen:

R–X + Nu⁻ → R–Nu + X⁻

Haloalkanes can also react with magnesium in dry ether to form Grignard reagents:

R–X + Mg → R–MgX

Haloalkanes can be classified as primary, secondary or tertiary depending on the number of carbon atoms attached to the carbon bearing the halogen.

Remember:

Haloalkane → halogen attached to aliphatic carbon

Haloarene → halogen attached directly to aromatic ring

C–X bond → polar

Substitution → nucleophile replaces halogen

Elimination → can form alkene

Grignard reagent → R–MgX`,

  video: "",
  quiz: ""
},

    // ================= CHAPTER 26 =================

{
  title: "Alcohols, Phenols and Ethers",

  notes: `ALCOHOLS, PHENOLS AND ETHERS

1. INTRODUCTION

Alcohols, phenols and ethers are important oxygen-containing organic compounds.

Alcohols contain a hydroxyl group (–OH) attached to a saturated carbon atom.

Phenols contain an –OH group directly attached to an aromatic ring.

Ethers contain an oxygen atom bonded to two carbon-containing groups.

2. ALCOHOLS

General structure:

R–OH

The functional group of alcohols is the hydroxyl group (–OH).

Examples:

CH₃OH → Methanol

C₂H₅OH → Ethanol

3. CLASSIFICATION OF ALCOHOLS

Alcohols may be classified as:

• Primary alcohol
• Secondary alcohol
• Tertiary alcohol

Primary alcohol:

The carbon attached to –OH is attached to one other carbon atom.

Example:

CH₃CH₂OH

Secondary alcohol:

The carbon attached to –OH is attached to two other carbon atoms.

Tertiary alcohol:

The carbon attached to –OH is attached to three other carbon atoms.

4. NOMENCLATURE

The suffix used for alcohols is:

-ol

Examples:

CH₃OH → Methanol

CH₃CH₂OH → Ethanol

CH₃CH₂CH₂OH → Propan-1-ol

CH₃CHOHCH₃ → Propan-2-ol

5. PROPERTIES OF ALCOHOLS

Alcohols can form hydrogen bonds because of the –OH group.

Therefore, lower alcohols are generally soluble in water.

As the hydrocarbon chain becomes longer, water solubility generally decreases.

Alcohols generally have higher boiling points than hydrocarbons of comparable molecular mass because of hydrogen bonding.

6. PREPARATION OF ALCOHOLS

Alcohols can be prepared by several methods.

Important methods include:

• Hydration of alkenes
• Hydrolysis of haloalkanes
• Fermentation of carbohydrates

Example:

C₂H₄ + H₂O → C₂H₅OH

7. OXIDATION OF ALCOHOLS

Primary alcohols can be oxidized to aldehydes and then to carboxylic acids.

Primary alcohol:

R–CH₂OH → R–CHO → R–COOH

Secondary alcohols generally give ketones on oxidation.

R₂CHOH → R₂CO

Tertiary alcohols are comparatively resistant to oxidation under ordinary conditions.

8. PHENOLS

Phenols contain an –OH group directly attached to an aromatic ring.

Example:

C₆H₅OH → Phenol

Phenol is weakly acidic compared with alcohols.

9. ACIDIC NATURE OF PHENOL

Phenol can lose a hydrogen ion from the hydroxyl group.

The resulting phenoxide ion is stabilized by resonance.

Therefore phenol is more acidic than ordinary alcohols.

10. REACTIONS OF PHENOL

Important reactions include:

• Reaction with sodium
• Reaction with sodium hydroxide
• Electrophilic substitution reactions

Phenol reacts with sodium hydroxide to form sodium phenoxide.

C₆H₅OH + NaOH → C₆H₅ONa + H₂O

11. ETHERS

General structure:

R–O–R′

The oxygen atom is bonded to two carbon-containing groups.

Example:

CH₃–O–CH₃ → Dimethyl ether

12. PROPERTIES OF ETHERS

Ethers generally have:

• Relatively low boiling points compared with alcohols of similar molecular mass.
• Ability to act as hydrogen-bond acceptors.
• Limited water solubility.

13. IMPORTANT COMPARISON

Alcohol:

R–OH

Phenol:

Ar–OH

Ether:

R–O–R′

14. QUICK REVISION

• Alcohols contain –OH attached to saturated carbon.
• Phenols contain –OH directly attached to an aromatic ring.
• Ethers contain R–O–R′.
• Alcohols can form hydrogen bonds.
• Primary alcohols oxidize to aldehydes and then acids.
• Secondary alcohols oxidize to ketones.
• Phenol is weakly acidic.
• Phenol reacts with NaOH.
• Ethers contain an oxygen atom between two carbon groups.`,

  summary: `Chapter 26 deals with three important classes of oxygen-containing organic compounds: alcohols, phenols and ethers.

Alcohols contain the hydroxyl group (–OH) attached to a saturated carbon atom.

They can be classified as primary, secondary or tertiary alcohols depending on the carbon attached to the –OH group.

Alcohols can form hydrogen bonds, which affects their boiling points and solubility.

Primary alcohols can be oxidized to aldehydes and then carboxylic acids, while secondary alcohols generally give ketones.

Phenols have an –OH group directly attached to an aromatic ring. Phenol is weakly acidic because the phenoxide ion formed after loss of H⁺ is stabilized by resonance.

Ethers have the general structure R–O–R′.

Remember:

Alcohol → R–OH

Phenol → Ar–OH

Ether → R–O–R′

For exams, focus on classification, nomenclature, preparation, oxidation of alcohols, acidic nature of phenol and properties of ethers.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 27 =================

{
  title: "Aldehydes, Ketones and Carboxylic Acids",

  notes: `ALDEHYDES, KETONES AND CARBOXYLIC ACIDS

1. INTRODUCTION

Aldehydes, ketones and carboxylic acids are important carbonyl-containing organic compounds.

The carbonyl group is:

>C=O

2. ALDEHYDES

An aldehyde contains a carbonyl group attached to at least one hydrogen atom.

General structure:

R–CHO

Example:

CH₃CHO → Ethanal

3. KETONES

A ketone contains a carbonyl group attached to two carbon-containing groups.

General structure:

R–CO–R′

Example:

CH₃COCH₃ → Propanone

4. DIFFERENCE BETWEEN ALDEHYDES AND KETONES

Aldehyde:

R–CHO

The carbonyl carbon is attached to hydrogen.

Ketone:

R–CO–R′

The carbonyl carbon is attached to two carbon-containing groups.

5. NOMENCLATURE

Aldehydes use the suffix:

-al

Examples:

HCHO → Methanal

CH₃CHO → Ethanal

Ketones use the suffix:

-one

Examples:

CH₃COCH₃ → Propanone

CH₃COCH₂CH₃ → Butanone

6. PREPARATION OF ALDEHYDES

Primary alcohols can be oxidized carefully to form aldehydes.

R–CH₂OH → R–CHO

Aldehydes can also be prepared by suitable reactions of acid derivatives.

7. PREPARATION OF KETONES

Secondary alcohols can be oxidized to ketones.

R₂CHOH → R₂CO

8. OXIDATION

Aldehydes are easily oxidized to carboxylic acids.

R–CHO → R–COOH

Ketones are generally more resistant to oxidation under mild conditions.

9. TESTS FOR ALDEHYDES

Aldehydes can reduce certain oxidizing reagents.

Tollens' reagent gives a silver mirror with many aldehydes.

Fehling's solution can give a characteristic positive test with many aliphatic aldehydes.

10. CARBOXYLIC ACIDS

Carboxylic acids contain the carboxyl group:

–COOH

General structure:

R–COOH

Examples:

HCOOH → Methanoic acid

CH₃COOH → Ethanoic acid

11. ACIDIC NATURE

Carboxylic acids can donate a proton from the –OH group.

The carboxylate ion formed is stabilized by resonance.

Therefore carboxylic acids are acidic.

12. PROPERTIES OF CARBOXYLIC ACIDS

Lower carboxylic acids are generally soluble in water.

They have relatively high boiling points because of strong hydrogen bonding.

13. REACTION WITH ACTIVE METALS

Carboxylic acids react with active metals to form salts and hydrogen gas.

Example:

2CH₃COOH + 2Na → 2CH₃COONa + H₂

14. REACTION WITH BASES

Carboxylic acids react with bases to form salts and water.

CH₃COOH + NaOH → CH₃COONa + H₂O

15. REACTION WITH CARBONATES

Carboxylic acids react with carbonates and bicarbonates to release carbon dioxide.

CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂

16. ESTERIFICATION

Carboxylic acids react with alcohols in the presence of an acid catalyst to form esters.

Example:

CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O

This reaction is called esterification.

17. IMPORTANT COMPARISON

Aldehyde:

R–CHO

Ketone:

R–CO–R′

Carboxylic acid:

R–COOH

18. QUICK REVISION

• Aldehydes contain –CHO.
• Ketones contain >C=O between carbon groups.
• Carboxylic acids contain –COOH.
• Aldehydes are readily oxidized to acids.
• Secondary alcohols can give ketones on oxidation.
• Tollens' reagent gives a silver mirror with many aldehydes.
• Carboxylic acids are acidic.
• Carboxylic acids react with NaHCO₃ to release CO₂.
• Esterification produces an ester and water.`,

  summary: `Chapter 27 covers aldehydes, ketones and carboxylic acids.

Aldehydes contain the –CHO group, while ketones contain a carbonyl group between two carbon-containing groups.

Aldehydes are generally easier to oxidize than ketones and can be converted into carboxylic acids.

Carboxylic acids contain the –COOH group and show acidic behaviour because they can release H⁺.

They react with bases, active metals and carbonates.

One important reaction is esterification, in which a carboxylic acid reacts with an alcohol to form an ester and water.

Remember:

Aldehyde → R–CHO

Ketone → R–CO–R′

Carboxylic acid → R–COOH

Focus on functional groups, nomenclature, oxidation, aldehyde tests, acidic properties and esterification.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 28 =================

{
  title: "Compounds of Carbon Containing Nitrogen (Amines)",

  notes: `COMPOUNDS OF CARBON CONTAINING NITROGEN — AMINES

1. INTRODUCTION

Amines are organic compounds derived conceptually from ammonia by replacing one or more hydrogen atoms with hydrocarbon groups.

The functional group contains nitrogen.

2. GENERAL STRUCTURES

Primary amine:

R–NH₂

Secondary amine:

R₂NH

Tertiary amine:

R₃N

3. CLASSIFICATION OF AMINES

Amines are classified according to the number of carbon groups attached to nitrogen.

Primary amine:

One carbon group attached to nitrogen.

Secondary amine:

Two carbon groups attached to nitrogen.

Tertiary amine:

Three carbon groups attached to nitrogen.

4. EXAMPLES

CH₃NH₂ → Methylamine

C₂H₅NH₂ → Ethylamine

(CH₃)₂NH → Dimethylamine

(CH₃)₃N → Trimethylamine

5. NOMENCLATURE

Amines can be named using the suffix:

-amine

Examples:

CH₃NH₂ → Methanamine

C₂H₅NH₂ → Ethanamine

6. BASIC NATURE OF AMINES

Amines generally behave as bases because nitrogen has a lone pair of electrons.

The lone pair can accept a proton.

Example:

R–NH₂ + H⁺ → R–NH₃⁺

7. REACTION WITH ACIDS

Amines react with acids to form ammonium salts.

Example:

CH₃NH₂ + HCl → CH₃NH₃Cl

8. PREPARATION OF AMINES

Amines can be prepared by several methods.

Important methods include:

• Reduction of nitro compounds
• Ammonolysis of haloalkanes
• Reduction of nitriles

9. REDUCTION OF NITRO COMPOUNDS

Nitro compounds can be reduced to primary amines.

Example:

R–NO₂ → R–NH₂

10. PHYSICAL PROPERTIES

Lower molecular mass amines are generally gases or volatile liquids.

Amines can form hydrogen bonds when N–H bonds are present.

Lower amines are generally soluble in water because they can interact with water molecules.

11. ANILINE

Aniline is an aromatic amine.

Formula:

C₆H₅NH₂

It is an important aromatic amine used in the preparation of many organic compounds.

12. BASICITY OF ANILINE

Aniline is less basic than many aliphatic amines because the nitrogen lone pair can become delocalized into the benzene ring.

13. DIAZONIUM SALTS

Aromatic primary amines can form diazonium salts under suitable conditions.

An important example is benzenediazonium chloride.

Diazonium compounds are useful intermediates in organic synthesis.

14. IMPORTANCE OF AMINES

Amines are found in many biologically important compounds.

They are also used in:

• Pharmaceuticals
• Dyes
• Polymers
• Industrial chemicals

15. IMPORTANT COMPARISON

Primary amine:

R–NH₂

Secondary amine:

R₂NH

Tertiary amine:

R₃N

16. QUICK REVISION

• Amines contain nitrogen.
• Primary amines have one carbon group attached to nitrogen.
• Secondary amines have two.
• Tertiary amines have three.
• Amines are generally basic because of the nitrogen lone pair.
• Amines react with acids to form salts.
• Nitro compounds can be reduced to amines.
• Aniline is C₆H₅NH₂.
• Aniline is an aromatic amine.
• Diazonium salts are important intermediates in organic chemistry.`,

  summary: `Chapter 28 introduces amines, which are nitrogen-containing organic compounds.

Amines can be classified as primary, secondary or tertiary depending on the number of carbon groups attached to nitrogen.

The nitrogen atom has a lone pair of electrons, so amines generally behave as bases.

They react with acids to form ammonium salts.

Amines can be prepared by methods such as reduction of nitro compounds and nitriles.

Aniline is an important aromatic amine with the formula C₆H₅NH₂.

Amines are important in medicines, dyes, polymers and many other industrial chemicals.

Remember:

Primary → R–NH₂

Secondary → R₂NH

Tertiary → R₃N

For exams, focus on classification, basicity, preparation, reactions and aniline.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 29 =================

{
  title: "Biomolecules",

  notes: `BIOMOLECULES

1. INTRODUCTION

Biomolecules are organic molecules produced by living organisms and are essential for life.

Important biomolecules include:

• Carbohydrates
• Proteins
• Lipids
• Nucleic acids
• Vitamins

2. CARBOHYDRATES

Carbohydrates are compounds containing carbon, hydrogen and oxygen.

Many carbohydrates approximately follow the general composition:

Cₓ(H₂O)ᵧ

Carbohydrates are an important source of energy.

3. CLASSIFICATION OF CARBOHYDRATES

Carbohydrates can be classified as:

• Monosaccharides
• Disaccharides
• Polysaccharides

4. MONOSACCHARIDES

Monosaccharides are simple sugars that cannot be hydrolysed into smaller carbohydrates.

Examples:

Glucose

Fructose

Galactose

5. GLUCOSE

Glucose is an important monosaccharide and an important source of energy in living organisms.

Its molecular formula is:

C₆H₁₂O₆

6. DISACCHARIDES

Disaccharides contain two monosaccharide units.

Examples:

Sucrose

Maltose

Lactose

Sucrose is made from glucose and fructose.

7. POLYSACCHARIDES

Polysaccharides contain many monosaccharide units.

Examples:

Starch

Cellulose

Glycogen

8. STARCH

Starch is an important storage carbohydrate in plants.

It is composed mainly of glucose units.

9. CELLULOSE

Cellulose is an important structural carbohydrate found in plant cell walls.

Humans cannot digest cellulose efficiently because they lack the necessary enzymes.

10. PROTEINS

Proteins are biological polymers made from amino acids.

They are essential for:

• Growth
• Repair
• Enzymes
• Transport
• Structure
• Regulation

11. AMINO ACIDS

Amino acids contain both amino and carboxyl groups.

General structure:

H₂N–CHR–COOH

The R group varies among different amino acids.

12. PEPTIDE BOND

Amino acids are linked by peptide bonds.

A peptide bond forms between the amino group of one amino acid and the carboxyl group of another.

13. LEVELS OF PROTEIN STRUCTURE

Protein structure can be described as:

• Primary structure
• Secondary structure
• Tertiary structure
• Quaternary structure

14. ENZYMES

Many enzymes are proteins that act as biological catalysts.

They increase the rate of biochemical reactions without being permanently consumed.

15. LIPIDS

Lipids are a broad group of water-insoluble biological molecules.

Examples include:

• Fats
• Oils
• Phospholipids

Lipids are important for:

• Energy storage
• Cell membranes
• Insulation

16. NUCLEIC ACIDS

Nucleic acids are biological molecules involved in storage and transmission of genetic information.

The two major nucleic acids are:

DNA

RNA

17. NUCLEOTIDES

Nucleic acids are made from nucleotide units.

A nucleotide contains:

• Nitrogenous base
• Pentose sugar
• Phosphate group

18. DNA

DNA stores genetic information.

Its structure is commonly described as a double helix.

19. RNA

RNA participates in several processes related to gene expression and protein synthesis.

20. VITAMINS

Vitamins are organic compounds required in small amounts for normal physiological functions.

They are generally classified as:

• Fat-soluble vitamins
• Water-soluble vitamins

21. QUICK REVISION

• Biomolecules are essential molecules of living organisms.
• Carbohydrates are important energy sources.
• Glucose is a monosaccharide.
• Sucrose is a disaccharide.
• Starch and glycogen are storage polysaccharides.
• Cellulose is a structural polysaccharide.
• Proteins are made from amino acids.
• Peptide bonds link amino acids.
• Lipids are important for energy storage and membranes.
• DNA and RNA are nucleic acids.
• Nucleotides are the building blocks of nucleic acids.
• Vitamins are required in small quantities for normal functions.`,

  summary: `Chapter 29 introduces biomolecules, the organic molecules essential for living organisms.

The major groups are carbohydrates, proteins, lipids and nucleic acids.

Carbohydrates include monosaccharides such as glucose, disaccharides such as sucrose and polysaccharides such as starch, glycogen and cellulose.

Proteins are polymers made from amino acids joined by peptide bonds. They perform many functions including growth, repair, transport and catalysis.

Lipids include fats, oils and phospholipids and are important for energy storage and cell membranes.

DNA and RNA are nucleic acids involved in genetic information.

Vitamins are organic compounds required in small quantities for normal physiological functions.

For exams, focus on classification of carbohydrates, amino acids, peptide bonds, protein structure, lipids, nucleotides, DNA, RNA and vitamins.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 30 =================

{
  title: "Drugs and Medicines",

  notes: `DRUGS AND MEDICINES

1. INTRODUCTION

Drugs are chemical substances that affect the functioning of living organisms.

Some drugs are used medically to prevent, diagnose or treat diseases.

Medicines are substances used for therapeutic purposes.

2. CLASSIFICATION OF DRUGS

Drugs can be classified according to their action or therapeutic use.

Important groups include:

• Analgesics
• Antibiotics
• Antiseptics
• Disinfectants
• Antacids
• Antihistamines
• Tranquilizers

3. ANALGESICS

Analgesics are drugs used to reduce or relieve pain.

Examples include:

Aspirin

Paracetamol

Analgesics may also have antipyretic effects depending on the drug.

4. ANTIBIOTICS

Antibiotics are substances that kill microorganisms or inhibit their growth.

They are mainly used against bacterial infections.

Examples include:

Penicillin

Streptomycin

5. PENICILLIN

Penicillin is an important antibiotic discovered through the work of Alexander Fleming.

It became one of the earliest widely used antibiotics.

6. ANTISEPTICS

Antiseptics are chemicals applied to living tissues to reduce or prevent the growth of microorganisms.

They may be used on skin or wounds.

7. DISINFECTANTS

Disinfectants are chemicals used on non-living surfaces to destroy or reduce harmful microorganisms.

Important distinction:

Antiseptic → used on living tissue

Disinfectant → generally used on non-living surfaces

8. ANTIACIDS

Antacids are substances used to neutralize excess stomach acid.

Examples include compounds containing:

• Magnesium hydroxide
• Aluminium hydroxide
• Sodium bicarbonate

9. ANTIHISTAMINES

Antihistamines reduce the effects of histamine.

They may be used to relieve symptoms associated with allergies.

10. TRANQUILIZERS

Tranquilizers are drugs that reduce anxiety or produce a calming effect.

Some tranquilizers act on the central nervous system.

They should be used only under appropriate medical guidance.

11. DRUG ADDICTION

Some drugs can cause dependence or addiction.

Drug dependence may lead to:

• Physical dependence
• Psychological dependence
• Withdrawal symptoms

12. DRUG ABUSE

Drug abuse means harmful or inappropriate use of drugs.

It can negatively affect:

• Physical health
• Mental health
• Family life
• Education or work
• Society

13. RESPONSIBLE USE OF MEDICINES

Medicines should be used according to appropriate medical advice.

Important principles include:

• Use the correct medicine.
• Follow the prescribed dose.
• Follow the recommended duration.
• Do not misuse prescription medicines.
• Do not share prescription medicines unnecessarily.

14. SIDE EFFECTS

Medicines can have unwanted effects in addition to their intended therapeutic effects.

The type and severity of side effects depend on the drug and the individual.

15. IMPORTANT DIFFERENCES

Analgesic:

Reduces pain.

Antibiotic:

Acts against susceptible microorganisms, especially bacteria.

Antiseptic:

Used on living tissue.

Disinfectant:

Used on non-living surfaces.

Antacid:

Neutralizes excess stomach acid.

Antihistamine:

Reduces effects of histamine.

16. QUICK REVISION

• Drugs are chemicals that affect living organisms.
• Medicines are used for therapeutic purposes.
• Analgesics relieve pain.
• Antibiotics act against bacteria and other susceptible microorganisms.
• Penicillin is an important antibiotic.
• Antiseptics are used on living tissues.
• Disinfectants are generally used on non-living surfaces.
• Antacids neutralize excess stomach acid.
• Antihistamines reduce effects of histamine.
• Some drugs can cause dependence and addiction.
• Medicines should be used responsibly and according to appropriate medical advice.`,

  summary: `Chapter 30 explains drugs and medicines and their different uses.

Drugs are chemical substances that affect living organisms, while medicines are used for therapeutic purposes.

Important classes include analgesics, antibiotics, antiseptics, disinfectants, antacids, antihistamines and tranquilizers.

Analgesics reduce pain.

Antibiotics are used against susceptible microorganisms, especially bacteria. Penicillin is an important example.

Antiseptics are used on living tissues, while disinfectants are generally used on non-living surfaces.

Antacids neutralize excess stomach acid.

Antihistamines reduce the effects of histamine and can be used for allergy-related symptoms.

The chapter also discusses drug dependence, addiction, abuse and responsible use of medicines.

Remember the differences between the major drug classes because these are useful for quick exam revision.`,

  video: "",
  quiz: ""
},
    // ================= CHAPTER 31 =================

{
  title: "Soaps, Detergents and Polymers",

  notes: `SOAPS, DETERGENTS AND POLYMERS

1. SOAPS

Soaps are sodium or potassium salts of higher fatty acids.

General structure:

R–COO⁻ Na⁺

where R represents a long hydrocarbon chain.

Common fatty acids used in soaps include:

• Stearic acid
• Palmitic acid
• Oleic acid

2. PREPARATION OF SOAP

Soap is prepared by the alkaline hydrolysis of fats or oils.

This process is called saponification.

Fat or oil + NaOH → Soap + Glycerol

Sodium hydroxide produces hard soaps.

Potassium hydroxide produces softer or liquid soaps.

3. STRUCTURE OF A SOAP MOLECULE

A soap molecule has two important parts:

• Hydrophobic hydrocarbon tail
• Hydrophilic ionic head

The hydrophobic tail is attracted to grease and oil.

The hydrophilic head interacts with water.

4. CLEANSING ACTION OF SOAP

Soap molecules arrange themselves around grease particles.

The hydrocarbon tails point towards the grease.

The ionic heads point towards water.

This produces a structure called a micelle.

The grease becomes suspended in water and can then be removed during washing.

5. MICELLES

A micelle is an aggregate of soap molecules formed in water.

In a micelle:

• Hydrophobic tails point inward.
• Hydrophilic heads point outward.

Micelle formation helps remove oily dirt.

6. LIMITATIONS OF SOAP

Soap does not work well in hard water.

Hard water contains Ca²⁺ and Mg²⁺ ions.

These ions react with soap to form insoluble substances called scum.

Example:

2RCOO⁻Na⁺ + Ca²⁺ → (RCOO)₂Ca + 2Na⁺

The insoluble calcium or magnesium salts reduce the cleansing efficiency of soap.

7. DETERGENTS

Synthetic detergents are cleansing agents that are generally sodium salts of long-chain alkyl benzene sulfonates or related compounds.

They contain:

• Hydrophobic hydrocarbon part
• Hydrophilic ionic part

8. CLEANSING ACTION OF DETERGENTS

Detergent molecules surround oily dirt in a manner similar to soap.

Their hydrophobic portion interacts with grease.

Their hydrophilic portion interacts with water.

The dirt is therefore dispersed in water and removed.

9. ADVANTAGE OF DETERGENTS

Detergents generally work well in hard water because their calcium and magnesium salts are usually more soluble than the corresponding soap scum.

10. SOAP VS DETERGENT

Soap:

• Usually salts of fatty acids.
• Prepared from fats or oils.
• Forms scum with Ca²⁺ and Mg²⁺.
• Less effective in hard water.

Detergent:

• Usually synthetic cleansing agents.
• Generally more effective in hard water.
• Does not form insoluble scum as readily as ordinary soaps.

11. POLYMERS

A polymer is a very large molecule formed by joining many smaller molecules called monomers.

Polymer:

Many repeating units joined together.

Monomer:

Small molecule that forms the repeating unit of a polymer.

12. POLYMERIZATION

Polymerization is the chemical process in which monomers combine to form polymers.

There are two major types:

• Addition polymerization
• Condensation polymerization

13. ADDITION POLYMERIZATION

Addition polymerization generally involves unsaturated monomers.

No small molecule is eliminated during the process.

Example:

Ethene → Polyethene

nCH₂=CH₂ → (–CH₂–CH₂–)ₙ

14. IMPORTANT ADDITION POLYMERS

Ethene → Polyethene

Propene → Polypropene

Vinyl chloride → PVC

Styrene → Polystyrene

Tetrafluoroethene → Teflon

15. CONDENSATION POLYMERIZATION

Condensation polymerization occurs when monomers combine with the elimination of small molecules such as water or HCl.

Examples:

• Nylon
• Terylene
• Bakelite

16. NATURAL POLYMERS

Naturally occurring polymers include:

• Cellulose
• Starch
• Proteins
• Natural rubber

17. SYNTHETIC POLYMERS

Synthetic polymers are produced artificially.

Examples:

• Polyethene
• PVC
• Nylon
• Teflon
• Bakelite
• Polystyrene

18. THERMOPLASTIC POLYMERS

Thermoplastics soften on heating and can generally be reshaped.

Examples:

• Polyethene
• PVC
• Polystyrene

19. THERMOSETTING POLYMERS

Thermosetting polymers form strong cross-linked structures and cannot generally be softened and reshaped after setting.

Examples:

• Bakelite
• Melamine

20. ELASTOMERS

Elastomers are polymers that can be stretched and return approximately to their original shape.

Example:

Natural rubber

21. FIBRES

Some polymers can be made into strong fibres.

Examples:

• Nylon
• Terylene

22. RUBBER

Natural rubber is a polymer of isoprene.

It has elastic properties.

Vulcanization improves the strength, elasticity and durability of rubber by introducing cross-links.

23. IMPORTANT POLYMERS

Polymer:

Polyethene
→ Monomer: Ethene

PVC
→ Monomer: Vinyl chloride

Polystyrene
→ Monomer: Styrene

Teflon
→ Monomer: Tetrafluoroethene

Nylon
→ Condensation polymer

Bakelite
→ Condensation polymer

24. ENVIRONMENTAL CONCERNS

Many synthetic polymers are resistant to natural decomposition.

Improper disposal of plastics can cause:

• Land pollution
• Water pollution
• Harm to animals
• Drain blockage
• Long-term accumulation of plastic waste

25. BIODEGRADABLE POLYMERS

Biodegradable polymers can be broken down by microorganisms under suitable conditions.

They can help reduce long-term environmental pollution.

26. QUICK REVISION

• Soap is generally a sodium or potassium salt of a fatty acid.
• Soap contains hydrophobic and hydrophilic parts.
• Soap removes grease through micelle formation.
• Hard water contains Ca²⁺ and Mg²⁺ ions.
• Soap forms insoluble scum with hard-water ions.
• Detergents are generally more effective in hard water.
• Polymer = large molecule made of repeating monomer units.
• Addition polymerization usually involves unsaturated monomers.
• Condensation polymerization involves elimination of a small molecule.
• Polyethene is formed from ethene.
• PVC is formed from vinyl chloride.
• Teflon is formed from tetrafluoroethene.
• Nylon and Bakelite are important condensation polymers.
• Thermoplastics can generally be reshaped on heating.
• Thermosetting polymers cannot generally be reshaped after setting.
• Natural rubber is a polymer of isoprene.`,

  summary: `Chapter 31 explains soaps, detergents and polymers.

Soap is generally a sodium or potassium salt of a higher fatty acid.

A soap molecule has a hydrophobic tail that interacts with grease and a hydrophilic head that interacts with water.

Soap molecules surround grease particles and form micelles. This allows oily dirt to be dispersed in water and removed.

The major problem with soap is hard water. Hard water contains calcium and magnesium ions that form insoluble scum with soap.

Detergents are synthetic cleansing agents. They generally work better than soaps in hard water because they do not form insoluble precipitates as readily.

The chapter also introduces polymers.

A polymer is a large molecule made by joining many smaller molecules called monomers.

Polymerization can mainly be:

• Addition polymerization
• Condensation polymerization

Addition polymerization generally occurs with unsaturated monomers and does not eliminate a small molecule.

Examples include:

Ethene → Polyethene

Vinyl chloride → PVC

Styrene → Polystyrene

Condensation polymerization involves elimination of small molecules and produces polymers such as nylon, terylene and Bakelite.

Polymers can also be classified as thermoplastics, thermosetting polymers and elastomers.

For exams, focus especially on:

• Structure and cleansing action of soap
• Micelle formation
• Hard water and scum
• Soap vs detergent
• Addition polymerization
• Condensation polymerization
• Important monomers and polymers
• Thermoplastics
• Thermosetting polymers
• Elastomers
• Natural and synthetic polymers
• Environmental problems caused by plastics.`,

  video: "",
  quiz: ""
},

// ================= CHAPTER 32 =================

{
  title: "Environmental Chemistry",

  notes: `ENVIRONMENTAL CHEMISTRY

1. INTRODUCTION

Environmental chemistry deals with chemical processes occurring in the environment and the effects of human activities on air, water and soil.

The major environmental components include:

• Atmosphere
• Hydrosphere
• Lithosphere
• Biosphere

2. ENVIRONMENTAL POLLUTION

Environmental pollution is the undesirable change in the physical, chemical or biological characteristics of the environment.

Major types include:

• Air pollution
• Water pollution
• Soil pollution
• Noise pollution

3. AIR POLLUTION

Air pollution occurs when harmful substances are present in the atmosphere at concentrations that can cause undesirable effects.

Important air pollutants include:

• Carbon monoxide
• Sulfur dioxide
• Nitrogen oxides
• Particulate matter
• Hydrocarbons
• Ozone
• Smoke and dust

4. CARBON MONOXIDE

Carbon monoxide (CO) is a poisonous gas produced mainly by incomplete combustion of carbon-containing fuels.

Sources include:

• Vehicle exhaust
• Burning of coal
• Burning of wood
• Industrial processes

Carbon monoxide can interfere with the oxygen-carrying capacity of blood because it binds strongly with haemoglobin.

5. SULFUR DIOXIDE

Sulfur dioxide (SO₂) is mainly produced by the combustion of sulfur-containing fuels.

Sources include:

• Coal combustion
• Petroleum products
• Industrial processes

Sulfur dioxide can contribute to respiratory problems and acid rain.

6. NITROGEN OXIDES

Nitrogen oxides such as NO and NO₂ are produced during high-temperature combustion processes.

Major sources include:

• Vehicles
• Power plants
• Industrial combustion

Nitrogen oxides contribute to air pollution, acid rain and photochemical smog.

7. PARTICULATE MATTER

Particulate matter consists of very small solid or liquid particles suspended in air.

Examples include:

• Dust
• Smoke
• Soot
• Fine particles

Fine particulate matter can enter the respiratory system and cause health problems.

8. PHOTOCHEMICAL SMOG

Photochemical smog forms when nitrogen oxides and hydrocarbons react in the presence of sunlight.

It can produce secondary pollutants such as ozone and other oxidizing substances.

Effects include:

• Eye irritation
• Respiratory problems
• Damage to plants
• Reduced visibility

9. ACID RAIN

Acid rain refers to precipitation that is more acidic than normal due to atmospheric pollutants.

Sulfur dioxide and nitrogen oxides are important contributors.

They undergo atmospheric reactions and form acids such as sulfuric acid and nitric acid.

Acid rain can:

• Damage plants
• Acidify lakes and rivers
• Corrode buildings and monuments
• Damage soil
• Affect aquatic organisms

10. GREENHOUSE EFFECT

The greenhouse effect is the warming of Earth's surface and lower atmosphere due to the absorption and re-emission of infrared radiation by greenhouse gases.

Important greenhouse gases include:

• Carbon dioxide
• Methane
• Water vapour
• Nitrous oxide

The natural greenhouse effect is important for maintaining Earth's temperature.

An enhanced greenhouse effect can contribute to global warming.

11. GLOBAL WARMING

Global warming refers to the long-term increase in Earth's average surface temperature.

Increased concentrations of greenhouse gases can enhance the greenhouse effect.

Possible effects include:

• Rising temperatures
• Melting of glaciers and ice
• Sea-level rise
• Changes in rainfall patterns
• Effects on ecosystems

12. OZONE LAYER

The ozone layer is a region of the stratosphere containing relatively high concentrations of ozone.

Ozone absorbs a large portion of harmful ultraviolet radiation from the Sun.

13. OZONE DEPLETION

Ozone depletion refers to the reduction of ozone concentration in the stratosphere.

Certain chemicals, especially chlorofluorocarbons (CFCs), can release chlorine radicals that participate in ozone-destroying reactions.

14. EFFECTS OF OZONE DEPLETION

Reduced ozone protection can increase the amount of ultraviolet radiation reaching Earth's surface.

Excessive UV exposure can contribute to:

• Skin damage
• Eye damage
• Increased risk of skin cancer
• Damage to plants and aquatic organisms

15. WATER POLLUTION

Water pollution occurs when harmful substances contaminate water bodies.

Pollutants may include:

• Sewage
• Industrial waste
• Fertilizers
• Pesticides
• Heavy metals
• Oil
• Plastics

16. SOURCES OF WATER POLLUTION

Major sources include:

• Domestic sewage
• Industrial discharge
• Agricultural runoff
• Oil spills
• Improper disposal of waste

17. BIOCHEMICAL OXYGEN DEMAND

Biochemical oxygen demand, or BOD, is a measure related to the amount of dissolved oxygen required by microorganisms to decompose biodegradable organic matter in water.

Higher BOD generally indicates a greater amount of biodegradable organic pollution.

18. EUTROPHICATION

Eutrophication is the excessive enrichment of a water body with nutrients, especially nitrogen and phosphorus compounds.

It can cause excessive growth of algae.

When algae and other organisms die and decompose, dissolved oxygen may decrease.

This can harm aquatic life.

19. WATER TREATMENT

Water treatment aims to remove unwanted substances and make water suitable for its intended use.

Common processes may include:

• Screening
• Sedimentation
• Filtration
• Disinfection

20. SOIL POLLUTION

Soil pollution occurs when harmful substances accumulate in soil.

Sources include:

• Pesticides
• Fertilizers
• Industrial waste
• Plastics
• Heavy metals
• Improper disposal of solid waste

21. PESTICIDES

Pesticides are chemicals used to control pests.

Excessive or improper use can cause environmental problems because some pesticides can persist in the environment and enter food chains.

22. HEAVY METALS

Certain heavy metals can be toxic even at relatively low concentrations.

Examples include:

• Lead
• Mercury
• Cadmium

They can enter the environment through industrial activities, mining and improper waste disposal.

23. BIOMAGNIFICATION

Biomagnification is the increase in concentration of certain persistent substances as they move to higher trophic levels in a food chain.

Persistent pollutants can therefore reach higher concentrations in organisms at higher trophic levels.

24. WASTE MANAGEMENT

Proper waste management helps reduce environmental pollution.

Important approaches include:

• Reduce
• Reuse
• Recycle
• Recover
• Proper disposal

25. PLASTIC POLLUTION

Many plastics degrade very slowly.

Plastic waste can accumulate in land and water and can harm wildlife.

Reducing unnecessary plastic use and improving recycling can help reduce plastic pollution.

26. SUSTAINABLE DEVELOPMENT

Sustainable development means meeting present needs while avoiding serious damage to the ability of future generations to meet their needs.

It involves balancing:

• Economic development
• Environmental protection
• Social well-being

27. GREEN CHEMISTRY

Green chemistry aims to design chemical products and processes that reduce or eliminate the use and generation of hazardous substances.

Important ideas include:

• Prevention of waste
• Safer chemical processes
• Efficient use of resources
• Use of renewable resources
• Reduction of hazardous substances

28. QUICK REVISION

• Environmental chemistry studies chemical processes in the environment.
• Air pollution is caused by harmful substances in the atmosphere.
• CO is mainly produced by incomplete combustion.
• SO₂ and nitrogen oxides contribute to acid rain.
• Photochemical smog forms in the presence of sunlight and pollutants such as nitrogen oxides and hydrocarbons.
• Greenhouse gases absorb and re-emit infrared radiation.
• Increased greenhouse gases can enhance global warming.
• Ozone protects Earth from harmful ultraviolet radiation.
• CFCs can contribute to ozone depletion.
• Water pollution can be caused by sewage, industrial waste, fertilizers and pesticides.
• BOD is related to oxygen required for decomposition of biodegradable organic matter.
• Eutrophication results from excessive nutrient enrichment of water.
• Soil pollution can result from pesticides, industrial waste and heavy metals.
• Biomagnification increases concentrations of persistent pollutants at higher trophic levels.
• Reduce, reuse and recycle help manage waste.
• Green chemistry aims to reduce hazardous substances and waste.
• Sustainable development considers present and future needs.`,

  summary: `Chapter 32 explains the chemical causes and effects of environmental pollution.

Environmental chemistry deals with chemical processes occurring in the atmosphere, water, soil and living systems.

The major forms of pollution discussed are:

• Air pollution
• Water pollution
• Soil pollution
• Other environmental problems

Important air pollutants include carbon monoxide, sulfur dioxide, nitrogen oxides and particulate matter.

Carbon monoxide is mainly produced by incomplete combustion and can interfere with oxygen transport in the body.

Sulfur dioxide and nitrogen oxides contribute to acid rain.

Photochemical smog forms when nitrogen oxides and hydrocarbons react in sunlight.

The chapter also explains the greenhouse effect.

Greenhouse gases such as carbon dioxide, methane and nitrous oxide absorb and re-emit infrared radiation. An increase in greenhouse gases can enhance the greenhouse effect and contribute to global warming.

The ozone layer protects Earth from harmful ultraviolet radiation. Certain chemicals such as CFCs can contribute to ozone depletion.

Water pollution can result from sewage, industrial waste, fertilizers, pesticides and other contaminants.

BOD is related to the amount of dissolved oxygen required by microorganisms to break down biodegradable organic matter. High BOD generally indicates greater biodegradable organic pollution.

Eutrophication occurs when excessive nutrients enter water bodies, causing excessive algal growth and potentially reducing dissolved oxygen.

Soil pollution can be caused by pesticides, industrial waste, plastics and heavy metals.

Biomagnification is the increase in concentration of persistent pollutants at higher trophic levels of a food chain.

The chapter also introduces waste management, sustainable development and green chemistry.

For exams, focus especially on:

• Air pollutants and their sources
• Acid rain
• Photochemical smog
• Greenhouse effect
• Global warming
• Ozone layer and ozone depletion
• Water pollution
• BOD
• Eutrophication
• Soil pollution
• Heavy-metal pollution
• Biomagnification
• Waste management
• Sustainable development
• Green chemistry.`,

  video: "",
  quiz: ""
},
  ];

  // ================= STATE =================

  const [view, setView] = useState("menu");

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("chemistry_completed");

    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [unsure, setUnsure] = useState(() => {
    const saved = localStorage.getItem("chemistry_unsure");

    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [resourceView, setResourceView] = useState(null);

  const [practiceChapter, setPracticeChapter] = useState(null);

  const [quizIndex, setQuizIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [quizScore, setQuizScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const [practiceResults, setPracticeResults] = useState(() => {
    const saved = localStorage.getItem(
      "chemistry_practice_results"
    );

    try {
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // ================= SAVE PROGRESS =================

  useEffect(() => {
    localStorage.setItem(
      "chemistry_completed",
      JSON.stringify(completed)
    );
  }, [completed]);

  useEffect(() => {
    localStorage.setItem(
      "chemistry_unsure",
      JSON.stringify(unsure)
    );
  }, [unsure]);

  useEffect(() => {
    localStorage.setItem(
      "chemistry_practice_results",
      JSON.stringify(practiceResults)
    );
  }, [practiceResults]);

  // ================= QUIZ DATA =================

  const chemistryQuiz =
    practiceChapter !== null
      ? chemistryQuestions[practiceChapter] || []
      : [];

  // ================= PROGRESS =================

  const completedCount = completed.length;

  const unsureCount = unsure.length;

  const progress =
    chapters.length === 0
      ? 0
      : Math.round(
          (completedCount / chapters.length) * 100
        );

  // ================= CHAPTER FUNCTIONS =================

  const openChapter = (index) => {
    setSelectedIndex(index);
    setResourceView(null);
    setView("detail");
  };

  const markCompleted = () => {
    if (selectedIndex === null) return;

    if (!completed.includes(selectedIndex)) {
      setCompleted((prev) => [...prev, selectedIndex]);
    }

    setUnsure((prev) =>
      prev.filter((item) => item !== selectedIndex)
    );

    setResourceView(null);
    setView("progress");
  };

  const markUnsure = () => {
    if (selectedIndex === null) return;

    if (!unsure.includes(selectedIndex)) {
      setUnsure((prev) => [...prev, selectedIndex]);
    }

    setCompleted((prev) =>
      prev.filter((item) => item !== selectedIndex)
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

  const startChemistryQuiz = (chapterNumber) => {
    const saved = localStorage.getItem(
      "chemistry_quiz_progress"
    );

    if (saved) {
      try {
        const savedProgress = JSON.parse(saved);

        if (
          savedProgress.practiceChapter === chapterNumber
        ) {
          setPracticeChapter(
            savedProgress.practiceChapter
          );

          setQuizIndex(
            savedProgress.quizIndex || 0
          );

          setSelectedAnswer(
            savedProgress.selectedAnswer ?? null
          );

          setQuizScore(
            savedProgress.quizScore || 0
          );

          setQuizFinished(false);
          setView("practice");

          return;
        }
      } catch {
        localStorage.removeItem(
          "chemistry_quiz_progress"
        );
      }
    }

    setPracticeChapter(chapterNumber);
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);

    setView("practice");
  };

  const saveChemistryQuizProgress = () => {
    if (practiceChapter === null) return;

    const progressData = {
      practiceChapter,
      quizIndex,
      selectedAnswer,
      quizScore
    };

    localStorage.setItem(
      "chemistry_quiz_progress",
      JSON.stringify(progressData)
    );

    setPracticeChapter(null);
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
    setView("menu");
  };

  const chooseChemistryAnswer = (
    option,
    optionIndex
  ) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option);

    if (
      chemistryQuiz[quizIndex] &&
      optionIndex === chemistryQuiz[quizIndex].answer
    ) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextChemistryQuestion = () => {
    if (!chemistryQuiz.length) return;

    if (quizIndex < chemistryQuiz.length - 1) {
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

      localStorage.removeItem(
        "chemistry_quiz_progress"
      );

      setQuizFinished(true);
    }
  };

  const closeResource = () => {
    setResourceView(null);
  };

  // ================= RESET QUIZ =================

  const resetQuizState = () => {
    setPracticeChapter(null);
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // ================= RETURN =================

  return (
    <div className="subject-page">

      {/* ================= MENU ================= */}

      {view === "menu" && (
        <div className="subject-overlay">

          <div className="subject-header">

            <div>

              <div className="eyebrow">
                YOUR STUDY SPACE
              </div>

              <h1>
                Chemistry 🧪
              </h1>

              <p>
                Take it one chapter at a time. You've got this. 💙
              </p>

            </div>

          </div>

          {/* PROGRESS CARD */}

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
              />

            </div>

            <p className="progress-message">
              Keep going — every chapter you finish is one step closer. ✨
            </p>

          </div>

          {/* DASHBOARD */}

          <div className="dashboard-grid">

            <button
              className="dashboard-card"
              onClick={() => setView("chapters")}
            >

              <div className="dashboard-icon">
                🧪
              </div>

              <div>

                <h3>
                  Chapters
                </h3>

                <p>
                  Browse all 32 Chemistry chapters
                </p>

              </div>

              <span className="card-arrow">
                →
              </span>

            </button>

            <button
              className="dashboard-card"
              onClick={() => {
                resetQuizState();
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
                  Revise chapter-by-chapter questions
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
                  See the complete Chemistry syllabus
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

          {/* START CARD */}

          <div className="start-card">

            <div>

              <div className="eyebrow">
                START HERE
              </div>

              <h2>
                Ready to study?
              </h2>

              <p>
                Pick a Chemistry chapter and start learning.
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

      {/* ================= CHAPTERS ================= */}

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
              CHEMISTRY SYLLABUS
            </div>

            <h2>
              All Chapters 🧪
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

      {/* ================= DETAIL ================= */}

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
                CHEMISTRY CHAPTER{" "}
                {String(selectedIndex + 1).padStart(
                  2,
                  "0"
                )}
              </div>

              <h2>
                {chapters[selectedIndex].title}
              </h2>

              {/* RESOURCE CARDS */}

              <div className="resource-grid">

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
                      Open detailed notes and key points
                    </p>

                  </div>

                  <span>
                    →
                  </span>

                </button>

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

                <button
                  className="resource-card"
                  onClick={() => {

                    const chapterName =
                      chapters[selectedIndex].title;

                    const searchQuery =
                      encodeURIComponent(
                        `NIOS Chemistry ${chapterName}`
                      );

                    window.open(
                      `https://www.youtube.com/results?search_query=${searchQuery}`,
                      "_blank",
                      "noopener,noreferrer"
                    );

                  }}
                >

                  <div className="resource-icon">
                    📺
                  </div>

                  <div>

                    <h3>
                      Video Explanation
                    </h3>

                    <p>
                      Watch a NIOS Chemistry video
                    </p>

                  </div>

                  <span>
                    →
                  </span>

                </button>

              </div>

              {/* CHAPTER ACTIONS */}

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

              {/* NEXT CHAPTER */}

              <button
                className="next-button"
                onClick={nextChapter}
              >
                {selectedIndex < chapters.length - 1
                  ? "Next Chapter →"
                  : "Finish Chemistry →"}
              </button>

            </div>

            {/* ================= RESOURCE WINDOW ================= */}

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
                    onClick={closeResource}
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

                    CHEMISTRY CHAPTER{" "}

                    {String(
                      selectedIndex + 1
                    ).padStart(2, "0")}

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
                      : resourceView === "summary"
                      ? "Chapter Summary 📖"
                      : resourceView === "quiz"
                      ? "Chapter Quiz ❓"
                      : "Video Explanation 📺"}

                  </h2>

                  <div
                    style={{
                      whiteSpace: "pre-line",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      color: "#30466d"
                    }}
                  >

                    {resourceView === "notes" &&
                      (chapters[selectedIndex].notes ||
                        "Notes will be added here.")}

                    {resourceView === "summary" &&
                      (chapters[selectedIndex].summary ||
                        "The chapter summary will be added here.")}

                    {resourceView === "quiz" &&
                      (chapters[selectedIndex].quiz ||
                        "Chapter practice questions will be added here.")}

                    {resourceView === "video" &&
                      (chapters[selectedIndex].video ||
                        "The video link will be added here.")}

                  </div>

                </div>

              </div>
            )}

          </div>
        )}

      {/* ================= SYLLABUS ================= */}

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
              CHEMISTRY 313
            </div>

            <h2>
              Complete Syllabus 📖
            </h2>

            <p>
              All {chapters.length} main NIOS Chemistry chapters.
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

      {/* ================= PROGRESS ================= */}

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
              Chemistry Progress 📊
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
              />

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

      {/* ================= PRACTICE ================= */}

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
                  CHEMISTRY PRACTICE
                </div>

                <h2>
                  Choose a Chapter 🧪
                </h2>

                <p>
                  Select a chapter to start practicing.
                </p>

              </div>

              <div className="chapter-list">

                {chapters.map(
                  (chapter, index) => {

                    const questionBank =
                      chemistryQuestions[index + 1];

                    return (
                      <button
                        key={index}
                        className="chapter-card"
                        onClick={() =>
                          startChemistryQuiz(index + 1)
                        }
                      >

                        <div className="chapter-number">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="chapter-info">

                          <h3>
                            {chapter.title}
                          </h3>

                          <p>
                            {questionBank
                              ? `${questionBank.length} questions available`
                              : "Question bank coming soon"}
                          </p>

                        </div>

                        <span className="card-arrow">
                          →
                        </span>

                      </button>
                    );
                  }
                )}

              </div>

            </>

          ) : (

            !quizFinished ? (

              <div className="chapter-detail">

                <button
                  className="back-button"
                  onClick={() => {
                    resetQuizState();
                    setView("practice");
                  }}
                >
                  ← Choose Another Chapter
                </button>

                <button
                  className="secondary-button"
                  onClick={saveChemistryQuizProgress}
                >
                  💾 Save & Exit
                </button>

                <div className="page-heading">

                  <div className="eyebrow">
                    CHEMISTRY • CHAPTER{" "}
                    {practiceChapter}
                  </div>

                  <h2>
                    {chapters[
                      practiceChapter - 1
                    ]?.title ||
                      "Chemistry Chapter"}{" "}
                    🧠
                  </h2>

                  <p>
                    {chemistryQuiz.length > 0
                      ? `Question ${
                          quizIndex + 1
                        } of ${
                          chemistryQuiz.length
                        }`
                      : "No questions available yet."}
                  </p>

                </div>

                {chemistryQuiz.length === 0 ? (

                  <div className="progress-card">

                    <div
                      style={{
                        textAlign: "center",
                        padding: "30px"
                      }}
                    >

                      <div
                        style={{
                          fontSize: "50px",
                          marginBottom: "15px"
                        }}
                      >
                        🧪
                      </div>

                      <h2>
                        Questions coming soon
                      </h2>

                      <p>
                        The question bank for this chapter has not been added yet.
                      </p>

                      <button
                        className="primary-button"
                        onClick={() => {
                          resetQuizState();
                          setView("practice");
                        }}
                      >
                        ← Choose Another Chapter
                      </button>

                    </div>

                  </div>

                ) : (

                  <>

                    <div className="progress-card">

                      <div className="progress-top">

                        <div>

                          <p>
                            Practice Progress
                          </p>

                          <h2>
                            {quizIndex + 1}/
                            {chemistryQuiz.length}
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
                                chemistryQuiz.length) *
                              100
                            }%`
                          }}
                        />

                      </div>

                    </div>

                    <div className="practice-question">

                      <div className="eyebrow">
                        QUESTION{" "}
                        {quizIndex + 1}
                      </div>

                      <h2>
                        {
                          chemistryQuiz[
                            quizIndex
                          ].question
                        }
                      </h2>

                    </div>

                    <div className="quiz-options">

                      {chemistryQuiz[
                        quizIndex
                      ].options.map(
                        (option, index) => {

                          const isSelected =
                            selectedAnswer === option;

                          const isCorrect =
                            index ===
                            chemistryQuiz[
                              quizIndex
                            ].answer;

                          let optionClass =
                            "quiz-option";

                          if (
                            selectedAnswer !== null
                          ) {

                            if (isCorrect) {
                              optionClass +=
                                " correct";
                            } else if (isSelected) {
                              optionClass +=
                                " wrong";
                            }

                          }

                          return (
                            <button
                              key={index}
                              className={optionClass}
                              onClick={() =>
                                chooseChemistryAnswer(
                                  option,
                                  index
                                )
                              }
                            >

                              <span className="quiz-option-letter">
                                {String.fromCharCode(
                                  65 + index
                                )}
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
                        chemistryQuiz[
                          quizIndex
                        ].options[
                          chemistryQuiz[
                            quizIndex
                          ].answer
                        ] ? (

                          <p>
                            🎉 Correct! Great job.
                          </p>

                        ) : (

                          <p>
                            ❌ Not quite. The correct answer is{" "}
                            <strong>
                              {
                                chemistryQuiz[
                                  quizIndex
                                ].options[
                                  chemistryQuiz[
                                    quizIndex
                                  ].answer
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
                        onClick={nextChemistryQuestion}
                      >

                        {quizIndex <
                        chemistryQuiz.length - 1
                          ? "Next Question →"
                          : "See My Result →"}

                      </button>

                    )}

                  </>

                )}

              </div>

            ) : (

              <div className="chapter-detail">

                <div className="page-heading">

                  <div className="eyebrow">
                    PRACTICE COMPLETE 🎉
                  </div>

                  <h2>
                    Chapter{" "}
                    {practiceChapter} Result
                  </h2>

                  <p>
                    You finished all{" "}
                    {chemistryQuiz.length} questions.
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
                      chemistryQuiz.length * 0.8
                        ? "🏆"
                        : quizScore >=
                          chemistryQuiz.length * 0.5
                        ? "⭐"
                        : "💙"}

                    </div>

                    <h2>
                      {quizScore} /{" "}
                      {chemistryQuiz.length}
                    </h2>

                    <p>
                      You scored{" "}
                      {Math.round(
                        (quizScore /
                          chemistryQuiz.length) *
                          100
                      )}
                      %
                    </p>

                    <p>
                      Best Score:{" "}
                      {
                        practiceResults[
                          practiceChapter
                        ]?.bestScore ?? quizScore
                      }
                      /{" "}
                      {chemistryQuiz.length}
                    </p>

                    <p>
                      Attempts:{" "}
                      {
                        practiceResults[
                          practiceChapter
                        ]?.attempts ?? 1
                      }
                    </p>

                    <p>
                      Last Score:{" "}
                      {
                        practiceResults[
                          practiceChapter
                        ]?.lastScore ?? quizScore
                      }
                      /{" "}
                      {chemistryQuiz.length}
                    </p>

                  </div>

                </div>

                <div className="chapter-actions">

                  <button
                    className="primary-button"
                    onClick={() =>
                      startChemistryQuiz(
                        practiceChapter
                      )
                    }
                  >
                    🔄 Try Again
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => {
                      resetQuizState();
                      setView("practice");
                    }}
                  >
                    📚 Choose Another Chapter
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => {
                      resetQuizState();
                      setView("menu");
                    }}
                  >
                    ← Back to Chemistry
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
              Review all 32 Chemistry chapters.
            </p>

          </div>

          <div className="progress-card">

            <h3>
              Revision Checklist
            </h3>

            {chapters.map(
              (chapter, index) => (

                <div
                  key={index}
                  className="checklist-row"
                >

                  <span>
                    {completed.includes(index)
                      ? "✅"
                      : unsure.includes(index)
                      ? "🤔"
                      : "⬜"}
                  </span>

                  <p>
                    {chapter.title}
                  </p>

                </div>

              )
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Chemistry;