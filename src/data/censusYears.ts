export interface CensusColumn {
  number: number | string;
  name: string;
  description: string;
  genealogicalSignificance: string;
}

export interface CensusYearGuide {
  year: string;
  censusDay: string;
  president: string;
  population: string;
  statesCount: string;
  naraMicrofilm: string;
  era: string;
  tagline: string;
  overview: string;
  historicalContext: string[];
  enumeratorInstructions: string[];
  columns: CensusColumn[];
  genealogicalTips: string[];
  recordsSurvival: string;
  sampleHouseholdNote?: string;
  faqs: { question: string; answer: string }[];
}

export const CENSUS_YEARS: CensusYearGuide[] = [
  {
    year: "1790",
    censusDay: "August 2, 1790 (First Monday of August)",
    president: "George Washington",
    population: "3,929,214",
    statesCount: "16 States & Territories (13 Original + VT, KY, Southwest Territory)",
    naraMicrofilm: "NARA M637 (12 rolls)",
    era: "Head of Household Era",
    tagline: "The First Federal Enumeration under Article I of the United States Constitution",
    overview:
      "Authorized by the Act of March 1, 1790 (1 Stat. 101), the 1790 United States Census was the first decennial population count in American history. Conducted by 650 U.S. Marshals and their appointed assistants on horseback, enumerators supplied their own paper, drew ink rules by hand, and posted duplicate lists in public places (taverns and courthouses) for community verification.",
    historicalContext: [
      "Mandated by Article I, Section 2 of the Constitution to apportion congressional seats and direct taxes among the states.",
      "Marshals were allocated $1 per 100 persons enumerated in cities and $1 per 50 persons in rural backcountry.",
      "The British military burned Washington in 1814, destroying census schedules for Delaware, Georgia, Kentucky, New Jersey, and Virginia (reconstructed from state tax lists)."
    ],
    enumeratorInstructions: [
      "Inquire at every dwelling-house or family head within your assigned territory.",
      "Record only the name of the Head of Household; all other occupants are tallied by demographic tick counts.",
      "Evaluate the household composition as it existed on the statutory Census Day (August 2, 1790), regardless of when visited.",
      "Post two copies in the most public places of each district before submitting schedules to the Federal District Court clerk."
    ],
    columns: [
      {
        number: 1,
        name: "Name of Head of Family",
        description: "Full name of the male or female primary householder.",
        genealogicalSignificance: "Only person named in the entire household. Widows and unmarried women appear if maintaining an independent home."
      },
      {
        number: 2,
        name: "Free White Males 16 years and upward (including heads)",
        description: "Tallies free white males born before August 1774.",
        genealogicalSignificance: "Used by Congress to assess military militia potential for defense against foreign powers."
      },
      {
        number: 3,
        name: "Free White Males under 16 years",
        description: "Tallies minor white sons and apprentices born August 1774 through August 1790.",
        genealogicalSignificance: "Establishes child birth cohorts to correlate against family group sheets and wills."
      },
      {
        number: 4,
        name: "Free White Females (including heads)",
        description: "Tallies all white females in the household without age breakdown.",
        genealogicalSignificance: "Includes wives, mothers, daughters, unmarried aunts, and female domestic servants."
      },
      {
        number: 5,
        name: "All other free persons",
        description: "Tallies free African Americans, Native Americans living in settled areas, and other free persons of color.",
        genealogicalSignificance: "Critical index for free Black lineages and apprentice laborers prior to emancipation."
      },
      {
        number: 6,
        name: "Slaves",
        description: "Total number of enslaved individuals owned or held by the household.",
        genealogicalSignificance: "Tied directly to the Constitutional Three-Fifths Compromise; crucial for tracking slaveholding lines."
      }
    ],
    genealogicalTips: [
      "Look for the 'Long S' script: lowercase double 's' was written with an elongated stroke resembling an 'f' (e.g. 'Jesse' looks like 'Jefe').",
      "Because assistants supplied their own ledger paper, column ordering varied significantly between districts.",
      "Analyze the three households listed before and after your ancestor: neighbors on 1790 schedules were physical neighbors on rural roads, often married into adjacent families."
    ],
    recordsSurvival:
      "Schedules survive for Connecticut, Maine, Maryland, Massachusetts, New Hampshire, New York, North Carolina, Pennsylvania, Rhode Island, South Carolina, and Vermont. Delaware, Georgia, New Jersey, and Virginia schedules were lost, but Virginia was reconstructed using state personal property tax lists.",
    faqs: [
      {
        question: "Why aren't children or wives named in the 1790 census?",
        answer: "Federal law in 1790 only mandated counting aggregate demographic brackets for congressional apportionment and taxation. Individual names were not recorded for family members until the 1850 census."
      },
      {
        question: "How do I know what month the enumerator visited?",
        answer: "The statutory Census Day was August 2, 1790, but enumerators took up to 18 months to complete returns due to vast frontier distances. Marshals were required to count the family as it stood on August 2."
      }
    ]
  },
  {
    year: "1800",
    censusDay: "August 4, 1800 (First Monday of August)",
    president: "John Adams",
    population: "5,308,483",
    statesCount: "16 States + Northwest & Mississippi Territories",
    naraMicrofilm: "NARA M32 (52 rolls)",
    era: "Head of Household Era",
    tagline: "Expanded Age Brackets for Both Males and Females Under Thomas Jefferson's Influence",
    overview:
      "The 1800 Census was administered under the direction of Secretary of State Timothy Pickering (and later John Marshall). Building on recommendations by the American Philosophical Society (led by Thomas Jefferson), Congress expanded age categorizations from three general groups into five standardized five-year and ten-year brackets for both sexes.",
    historicalContext: [
      "Conducted during the contested Adams-Jefferson presidential election campaign.",
      "First enumeration to include the newly formed Northwest Territory and Mississippi Territory.",
      "Provided crucial actuarial and demographic data on infant mortality and frontier life expectancy."
    ],
    enumeratorInstructions: [
      "Inquire into five distinct age brackets for free white males and five brackets for free white females.",
      "Count all inhabitants as of the first Monday in August 1800.",
      "Maintain uniform headings across pre-ruled schedules to avoid tabulation discrepancies."
    ],
    columns: [
      { number: 1, name: "Name of Head of Household", description: "Full name of householder.", genealogicalSignificance: "Primary indexing entry." },
      { number: 2, name: "Free white males under 10", description: "Born 1790–1800.", genealogicalSignificance: "Identifies infants and toddlers born since 1790." },
      { number: 3, name: "Free white males 10–15", description: "Born 1785–1790.", genealogicalSignificance: "Cross-checks against 1790 minor male bracket." },
      { number: 4, name: "Free white males 16–25", description: "Born 1775–1784.", genealogicalSignificance: "Young adult males, laborers, and elder sons." },
      { number: 5, name: "Free white males 26–44", description: "Born 1756–1774.", genealogicalSignificance: "Peak family-raising cohort." },
      { number: 6, name: "Free white males 45 and over", description: "Born before 1756.", genealogicalSignificance: "Heads born during French and Indian War era." },
      { number: 7, name: "Free white females under 10", description: "Born 1790–1800.", genealogicalSignificance: "First time female child age cohorts were isolated." },
      { number: 8, name: "Free white females 10–15", description: "Born 1785–1790.", genealogicalSignificance: "Adolescent daughters." },
      { number: 9, name: "Free white females 16–25", description: "Born 1775–1784.", genealogicalSignificance: "Young wives and marrying-age daughters." },
      { number: 10, name: "Free white females 26–44", description: "Born 1756–1774.", genealogicalSignificance: "Mothers of growing households." },
      { number: 11, name: "Free white females 45 and over", description: "Born before 1756.", genealogicalSignificance: "Matriarchs and grandmothers." },
      { number: 12, name: "All other free persons (except Indians not taxed)", description: "Free non-white persons.", genealogicalSignificance: "Tracks free people of color." },
      { number: 13, name: "Slaves", description: "Enslaved individuals in household.", genealogicalSignificance: "Ownership quantification." }
    ],
    genealogicalTips: [
      "Compare the 1800 brackets with 1790: an ancestor aged 26–44 in 1800 should have been 16+ in 1790.",
      "Check for elderly parents living with married adult children: a male or female aged 45+ in a young family often marks a surviving widowed grandparent."
    ],
    recordsSurvival: "Missing schedules: Georgia, Kentucky, New Jersey, Tennessee, and Virginia (parts survive for Chesterfield and Accomack).",
    faqs: [
      {
        question: "What does 'except Indians not taxed' mean?",
        answer: "Native Americans living under tribal sovereign authority who did not pay state or local taxes were constitutionally exempt from congressional representation and thus excluded from enumeration."
      }
    ]
  },
  {
    year: "1810",
    censusDay: "August 6, 1810 (First Monday of August)",
    president: "James Madison",
    population: "7,239,881",
    statesCount: "17 States + 6 Territories",
    naraMicrofilm: "NARA M252 (71 rolls)",
    era: "Head of Household Era",
    tagline: "First Census to Include Federal Inquiries on Manufacturing and Industry",
    overview:
      "Administered on the eve of the War of 1812, the 1810 Census retained the five demographic age categories of 1800 while introducing an ambitious supplemental manufacturing survey to measure domestic production capacity against British trade embargoes.",
    historicalContext: [
      "Reflects westward settlement into Ohio (admitted 1803) and the vast Louisiana Territory (purchased 1803).",
      "Encompassed the Illinois, Indiana, Michigan, Mississippi, and Orleans Territories."
    ],
    enumeratorInstructions: [
      "Enumerate persons according to their usual place of abode on August 6, 1810.",
      "Take account of manufacturing establishments, mills, looms, and distilleries on a separate sheet."
    ],
    columns: [
      { number: 1, name: "Head of Family", description: "Full name of householder.", genealogicalSignificance: "Primary index." },
      { number: 2, name: "Free white males: 0–9, 10–15, 16–25, 26–44, 45+", description: "Five age brackets.", genealogicalSignificance: "Ages of all males in home." },
      { number: 3, name: "Free white females: 0–9, 10–15, 16–25, 26–44, 45+", description: "Five age brackets.", genealogicalSignificance: "Ages of all females in home." },
      { number: 4, name: "All other free persons", description: "Free non-white persons.", genealogicalSignificance: "Free persons of color." },
      { number: 5, name: "Slaves", description: "Enslaved count.", genealogicalSignificance: "Records slavery holdings." }
    ],
    genealogicalTips: [
      "Be alert to westward migration: families in Virginia or Pennsylvania in 1800 frequently reappear in Ohio or Kentucky in 1810.",
      "Watch for sound-alike phonetic spellings: enumerators spelled German, Dutch, and French surnames as they sounded in English."
    ],
    recordsSurvival: "Missing states: Georgia, New Jersey, parts of Ohio, and parts of Tennessee.",
    faqs: [
      {
        question: "Where are the 1810 manufacturing schedules?",
        answer: "Most manufacturing schedules were bound separately and are preserved at the National Archives in NARA Record Group 29."
      }
    ]
  },
  {
    year: "1820",
    censusDay: "August 7, 1820 (First Monday of August)",
    president: "James Monroe",
    population: "9,638,453",
    statesCount: "23 States + 4 Territories",
    naraMicrofilm: "NARA M33 (142 rolls)",
    era: "Head of Household Era",
    tagline: "First Census to Distinguish Military Age (16–18), Commerce, and Agriculture Occupations",
    overview:
      "The 1820 Census was the first to record occupational categories (agriculture, commerce, and manufactures) and introduced an overlapping military draft bracket for males aged 16 to 18, reflecting post-War of 1812 national defense priorities. It also introduced age divisions for enslaved and free Black Americans.",
    historicalContext: [
      "Followed the Panic of 1819 and the Missouri Compromise of 1820.",
      "Enumerated five new states: Indiana (1816), Mississippi (1817), Illinois (1818), Alabama (1819), and Maine (1820)."
    ],
    enumeratorInstructions: [
      "Inquire into the occupation of the household members: Agriculture, Commerce, or Manufactures.",
      "Check whether free white males aged 16–18 are ALSO counted in the 16–25 column (they must be counted in both!).",
      "Record free colored persons and slaves across four age brackets (under 14, 14–25, 26–44, 45+)."
    ],
    columns: [
      { number: 1, name: "Head of Family", description: "Name of household head.", genealogicalSignificance: "Primary identifier." },
      { number: 2, name: "Free white males (0–9, 10–15, 16–18, 16–25, 26–44, 45+)", description: "6 male age columns.", genealogicalSignificance: "Double count note: males 16-18 appear in BOTH the 16-18 and 16-25 columns!" },
      { number: 3, name: "Free white females (0–9, 10–15, 16–25, 26–44, 45+)", description: "5 female age columns.", genealogicalSignificance: "Demographic female brackets." },
      { number: 4, name: "Foreigners not naturalized", description: "Immigrants without citizenship.", genealogicalSignificance: "First census to identify recent immigrant status." },
      { number: 5, name: "Number of persons engaged in Agriculture, Commerce, Manufactures", description: "Three occupational tallies.", genealogicalSignificance: "Reveals the primary family economic livelihood." },
      { number: 6, name: "Slaves & Free Colored Persons (4 age brackets each)", description: "Under 14, 14–25, 26–44, 45+.", genealogicalSignificance: "Critical demographic detail for non-white families." }
    ],
    genealogicalTips: [
      "CRITICAL MATHEMATICAL TRAP: Do not sum the male columns directly! Males aged 16–18 were tallied TWICE (once in the 16–18 column and once in the 16–25 column).",
      "The 'Foreigners not naturalized' tally indicates recent European arrival—look for naturalization petitions in county court minutes."
    ],
    recordsSurvival: "New Jersey schedules completely lost. Parts of North Carolina, Tennessee, and Missouri also lost.",
    faqs: [
      {
        question: "Why does the total male count not match my family size?",
        answer: "The 16–18 column was an overlapping sub-category of the 16–25 column for military militia estimates. Subtract the 16–18 tally to avoid counting those sons twice."
      }
    ]
  },
  {
    year: "1830",
    censusDay: "June 1, 1830",
    president: "Andrew Jackson",
    population: "12,866,020",
    statesCount: "24 States + Territories",
    naraMicrofilm: "NARA M19 (201 rolls)",
    era: "Head of Household Era",
    tagline: "First Census to Use Standardized Government-Printed Blank Forms",
    overview:
      "The 1830 Census was a watershed in bureaucratic standardization. Prior to 1830, marshals drew their own column lines on loose paper. In 1830, the Federal government issued uniform printed forms for the first time. The census also shifted Census Day from August to June 1st and expanded age brackets into uniform 5-year and 10-year groups spanning up to 100+ years.",
    historicalContext: [
      "First enumeration under President Andrew Jackson.",
      "Census Day moved to June 1 to avoid harsh late-summer frontier illnesses (malaria/yellow fever) among marshals.",
      "Introduced columns for deaf, dumb, and blind persons."
    ],
    enumeratorInstructions: [
      "Use only the standardized pre-printed schedules furnished by the State Department.",
      "Tally persons across twelve age brackets for white males and twelve brackets for white females.",
      "Note the deaf, dumb, and blind, as well as foreigners not naturalized."
    ],
    columns: [
      { number: 1, name: "Name of Head of Family", description: "Name of householder.", genealogicalSignificance: "Indexing name." },
      { number: 2, name: "Free White Males (12 brackets up to 100+)", description: "0-4, 5-9, 10-14, 15-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-99, 100+.", genealogicalSignificance: "Precision 5-year early age cohorts." },
      { number: 3, name: "Free White Females (12 brackets up to 100+)", description: "Same 12 brackets as males.", genealogicalSignificance: "Precision female cohorts." },
      { number: 4, name: "Slaves and Free Colored Persons (6 age brackets each)", description: "Under 10, 10-23, 24-35, 36-54, 55-99, 100+.", genealogicalSignificance: "Detailed age breakdown." },
      { number: 5, name: "White/Colored Persons who are Deaf & Dumb / Blind", description: "Special health markers.", genealogicalSignificance: "Medical and disability clues." }
    ],
    genealogicalTips: [
      "Pre-printed schedules had 13 columns on the left page and 14 columns on the right page. Always verify both facing pages on microfilm scans to avoid missing female and slave counts.",
      "Uniform 5-year brackets under age 20 make child birth sequencing much easier to verify against baptismal rolls."
    ],
    recordsSurvival: "Missing: Parts of Massachusetts, Maryland, and Mississippi.",
    faqs: [
      {
        question: "Why are facing pages so often omitted in digital viewers?",
        answer: "Microfilm photographers sometimes photographed left-hand pages and right-hand pages on separate frames. If you only see white males, flip to the next microfilm frame for females and totals."
      }
    ]
  },
  {
    year: "1840",
    censusDay: "June 1, 1840",
    president: "Martin Van Buren",
    population: "17,069,453",
    statesCount: "26 States + 3 Territories",
    naraMicrofilm: "NARA M704 (580 rolls)",
    era: "Head of Household Era",
    tagline: "The Revolutionary War Pensioners Census & The Final Head-of-Household Schedule",
    overview:
      "The 1840 Census is treasured by military and lineage researchers because it was the first and only head-of-household census to record the names and exact ages of living Revolutionary War and military pensioners. It was also the final decennial census before the landmark 'every-name' reform of 1850.",
    historicalContext: [
      "Conducted during the Great Economic Depression following the Panic of 1837.",
      "Elderly veterans of the American Revolutionary War (1775–1783) were in their 70s, 80s, and 90s, prompting Congress to preserve their names."
    ],
    enumeratorInstructions: [
      "Record the name and exact age of any person receiving a military pension for Revolutionary or military services.",
      "Inquire into school attendance, literacy (white persons over 20 who cannot read and write), and seven distinct industry occupations."
    ],
    columns: [
      { number: 1, name: "Head of Family", description: "Name of household head.", genealogicalSignificance: "Index key." },
      { number: 2, name: "Free White Males & Females (12 age brackets)", description: "Under 5 through 100+.", genealogicalSignificance: "Demographic tallies." },
      { number: 3, name: "Pensioners for Revolutionary or Military Services", description: "NAME and EXACT AGE of pensioner.", genealogicalSignificance: "GENEALOGICAL GOLD: Directly names Revolutionary War soldiers and widows living in the home!" },
      { number: 4, name: "Employment in 7 Classes", description: "Mining, Agriculture, Commerce, Manufactures, Ocean navigation, Canals/Rivers, Learned Professions.", genealogicalSignificance: "First occupational census with 7 classes." },
      { number: 5, name: "White Persons over 20 who cannot read and write", description: "Illiteracy tally.", genealogicalSignificance: "Educational background indicator." }
    ],
    genealogicalTips: [
      "The Pensioner column (Column 33 on the right page) can name a 92-year-old grandfather or great-aunt living in a son-in-law's home who is otherwise completely anonymous!",
      "Cross-reference 1840 pensioners directly with the NARA M804 Revolutionary War Pension Applications collection."
    ],
    recordsSurvival: "Essentially complete survival nationwide.",
    faqs: [
      {
        question: "Did the pensioner have to be the head of household?",
        answer: "No! The pensioner could be an elderly father, mother, or widowed aunt living with their children. The schedule explicitly records their name and age in the dedicated pensioner column."
      }
    ]
  },
  {
    year: "1850",
    censusDay: "June 1, 1850",
    president: "Zachary Taylor / Millard Fillmore",
    population: "23,191,876",
    statesCount: "31 States + 4 Territories",
    naraMicrofilm: "NARA M432 (1,009 rolls)",
    era: "Every-Name Era",
    tagline: "The Greatest Revolution in US Genealogy: The First Every-Name Census",
    overview:
      "Under the visionary leadership of Census Director Joseph C. G. Kennedy, the 1850 Census instituted the single most important reform in American family history: Schedule 1 (Free Inhabitants) recorded the name, exact age, sex, color, profession, dollar value of real estate, and birthplace (state or country) for EVERY free individual in the United States.",
    historicalContext: [
      "Followed the Mexican-American War, California Gold Rush (1849), and the Compromise of 1850.",
      "Separated free persons (Schedule 1) and enslaved persons (Schedule 2 - Slave Schedules)."
    ],
    enumeratorInstructions: [
      "Record the name of every person whose usual place of abode on June 1, 1850, was in this family.",
      "Inquire into the exact state, territory, or foreign country of birth.",
      "Record the value of real estate owned by each individual.",
      "Mark whether married within the year, attended school within the year, or cannot read and write if over 20."
    ],
    columns: [
      { number: 1, name: "Dwelling houses numbered in order of visitation", description: "Sequential building count.", genealogicalSignificance: "Identifies multi-family tenements." },
      { number: 2, name: "Families numbered in order of visitation", description: "Sequential household count.", genealogicalSignificance: "Separates distinct families in one building." },
      { number: 3, name: "Name of every person in household", description: "Full name of every free individual.", genealogicalSignificance: "The holy grail: names wives, children, and infants for the first time!" },
      { number: 4, name: "Age", description: "Exact age at last birthday.", genealogicalSignificance: "Pinpoints birth year (1849–1850)." },
      { number: 5, name: "Sex", description: "M or F.", genealogicalSignificance: "Gender identification." },
      { number: 6, name: "Color", description: "White, Black, or Mulatto (W, B, M).", genealogicalSignificance: "Racial classification." },
      { number: 7, name: "Profession, Occupation, or Trade", description: "Male occupation over age 15.", genealogicalSignificance: "Career and economic standing." },
      { number: 8, name: "Value of Real Estate Owned", description: "Dollar value of land.", genealogicalSignificance: "Direct lead to county deed registry books." },
      { number: 9, name: "Place of Birth", description: "State, Territory, or Foreign Country.", genealogicalSignificance: "CRITICAL: Identifies migration origin state or European country of origin!" },
      { number: 10, name: "Married within the year", description: "Checked if married June 1849–June 1850.", genealogicalSignificance: "Narrow wedding date lead." },
      { number: 11, name: "Attended school within the year", description: "School attendance.", genealogicalSignificance: "Education clues." },
      { number: 12, name: "Cannot read & write (over 20)", description: "Adult literacy marker.", genealogicalSignificance: "Literacy status." },
      { number: 13, name: "Deaf, dumb, blind, insane, or pauper", description: "Social / physical condition.", genealogicalSignificance: "Asylum / almshouse leads." }
    ],
    genealogicalTips: [
      "Relationships are NOT stated in 1850: never assume the adult woman is the biological mother of all children! She could be a second wife or older sister.",
      "Children's birthplaces reveal the exact family migration trail: if child #1 was born in Ohio in 1842 and child #2 in Iowa in 1845, the family migrated between 1842 and 1845."
    ],
    recordsSurvival: "Substantially complete survival nationwide (some California county schedules lost in transit).",
    faqs: [
      {
        question: "Why does 1850 not list family relationships?",
        answer: "Relationship to head of household was not added until the 1880 census. In 1850, individuals are listed in household order, but relationship must be proved through wills, deeds, and church records."
      }
    ]
  },
  {
    year: "1860",
    censusDay: "June 1, 1860",
    president: "James Buchanan",
    population: "31,443,321",
    statesCount: "33 States + 7 Territories",
    naraMicrofilm: "NARA M653 (1,438 rolls)",
    era: "Every-Name Era",
    tagline: "The Eve of the Civil War: Value of Personal Estate Introduced",
    overview:
      "Conducted on the brink of the American Civil War and Abraham Lincoln's election, the 1860 Census added a vital economic metric: Column 9 recorded the 'Value of Personal Estate' (livestock, furniture, bonds, and enslaved property) alongside Real Estate. It was the final decennial census to feature the Slave Schedules.",
    historicalContext: [
      "The last census before the outbreak of the Civil War in April 1861.",
      "Minnesota (1858) and Oregon (1859) were enumerated as new states."
    ],
    enumeratorInstructions: [
      "Inquire into both real estate value and personal estate value.",
      "Record all persons in their usual dwelling on June 1, 1860."
    ],
    columns: [
      { number: 1, name: "Dwelling & Family Number", description: "Sequential numbers.", genealogicalSignificance: "Household separation." },
      { number: 2, name: "Name of every person", description: "Full names.", genealogicalSignificance: "Every-name index." },
      { number: 3, name: "Age, Sex, Color", description: "Demographics.", genealogicalSignificance: "Age and race." },
      { number: 4, name: "Occupation", description: "Profession over age 15.", genealogicalSignificance: "Trade and employment." },
      { number: 5, name: "Value of Real Estate & Personal Estate", description: "Two financial columns.", genealogicalSignificance: "High personal estate in the South frequently correlated with slave ownership." },
      { number: 6, name: "Place of Birth", description: "State or foreign country.", genealogicalSignificance: "Geographic origin." }
    ],
    genealogicalTips: [
      "Compare Personal Estate against Real Estate: young men with zero real estate but high personal property were often tenant farmers with wagons and livestock.",
      "Young men aged 15–30 in this census would become the soldiers of the Union and Confederate armies within months."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "How do I find enslaved ancestors in 1860?",
        answer: "Enslaved persons were enumerated on separate Slave Schedules (Schedule 2) under the slaveholder's name, listed by age, sex, and color, but rarely by given name."
      }
    ]
  },
  {
    year: "1870",
    censusDay: "June 1, 1870",
    president: "Ulysses S. Grant",
    population: "38,558,371",
    statesCount: "37 States + 9 Territories",
    naraMicrofilm: "NARA M593 (1,761 rolls)",
    era: "Reconstruction Era",
    tagline: "The Reconstruction Census: First Every-Name Enumeration of Formerly Enslaved African Americans",
    overview:
      "The 1870 Census holds monumental importance for African American genealogy: following the Civil War and the 13th Amendment, millions of formerly enslaved persons were enumerated by first and last name for the first time in federal census history. It also added two new columns indicating whether a person's father or mother was of foreign birth.",
    historicalContext: [
      "Conducted during federal military Reconstruction in the southern states.",
      "Introduced inquiries regarding male citizens aged 21+ whose right to vote was abridged (14th Amendment compliance)."
    ],
    enumeratorInstructions: [
      "Enumerate every person living on June 1, 1870.",
      "Inquire whether the person's father or mother was of foreign birth.",
      "Mark whether male citizens aged 21+ have their right to vote denied on other grounds than rebellion."
    ],
    columns: [
      { number: 1, name: "Name of every person", description: "Full name.", genealogicalSignificance: "FIRST federal census naming all African Americans as citizens." },
      { number: 2, name: "Age, Sex, Color", description: "White, Black, Mulatto, Chinese, Indian.", genealogicalSignificance: "Expanded racial classifications." },
      { number: 3, name: "Profession & Wealth", description: "Real estate and personal estate.", genealogicalSignificance: "Reconstruction economic recovery." },
      { number: 4, name: "Place of Birth", description: "State or country.", genealogicalSignificance: "Birthplace." },
      { number: 5, name: "Father/Mother of Foreign Birth", description: "Two checkmark columns.", genealogicalSignificance: "FIRST indicator of second-generation immigrant parentage!" },
      { number: 6, name: "Month born or married within the year", description: "Specific month recorded.", genealogicalSignificance: "Narrow vital event dates." },
      { number: 7, name: "Male Citizen of US aged 21+", description: "Voting qualification.", genealogicalSignificance: "Voting and citizenship indicator." }
    ],
    genealogicalTips: [
      "For African American research, this is the '1870 Brick Wall': connect the family in 1870 with nearby white families in 1860 with the same surname or adjacent land to locate former plantations.",
      "Columns 11 and 12 ('Father/Mother of foreign birth') reveal if parents were born in Ireland, Germany, etc., even if the ancestor was born in New York."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "Why are some southern counties undercounted in 1870?",
        answer: "Reconstruction political instability and ku klux klan violence led to significant undercounts in southern rural districts, prompting a partial re-enumeration in several urban centers (such as New York City)."
      }
    ]
  },
  {
    year: "1880",
    censusDay: "June 1, 1880",
    president: "Rutherford B. Hayes",
    population: "50,189,209",
    statesCount: "38 States + 9 Territories",
    naraMicrofilm: "NARA T9 (1,454 rolls)",
    era: "Golden Era of Census Records",
    tagline: "The First Census with Relationship to Head of Household and Specific Parental Birthplaces",
    overview:
      "The 1880 Census is considered the crown jewel of 19th-century genealogical research. For the first time, Column 8 explicitly recorded the exact relationship of every person to the head of household ('Wife', 'Son', 'Mother-in-law', 'Boarder', 'Servant'). Columns 24–26 also recorded the exact birthplace of the individual's father AND mother.",
    historicalContext: [
      "Supervised by Francis Amasa Walker under the Census Act of 1879, which replaced U.S. Marshals with trained professional civilian census supervisors.",
      "The first census indexed by the Soundex phonetic coding system (for households with children 10 and under)."
    ],
    enumeratorInstructions: [
      "State relationship distinctly: wife, son, daughter, grandson, mother-in-law, partner, boarder, or servant.",
      "Inquire into the specific state or foreign country where BOTH parents were born.",
      "Record street names and house numbers in large cities."
    ],
    columns: [
      { number: 1, name: "Street & House Number", description: "Urban address.", genealogicalSignificance: "City directory matching." },
      { number: 2, name: "Name of every person", description: "Full names.", genealogicalSignificance: "Full identity." },
      { number: 3, name: "Relationship to Head of Family", description: "Exact relationship.", genealogicalSignificance: "END OF GUESSWORK: Proves mothers-in-law, stepsons, nephews, and boarders." },
      { number: 4, name: "Civil Condition", description: "Single, Married, Widowed, Divorced (D).", genealogicalSignificance: "First census to record DIVORCED status." },
      { number: 5, name: "Profession & Months Unemployed", description: "Work and labor strikes.", genealogicalSignificance: "Labor history." },
      { number: 6, name: "Place of Birth of Person", description: "State or country.", genealogicalSignificance: "Subject birthplace." },
      { number: 7, name: "Place of Birth of Father", description: "Father's state or country.", genealogicalSignificance: "Paternal geographic origin!" },
      { number: 8, name: "Place of Birth of Mother", description: "Mother's state or country.", genealogicalSignificance: "Maternal geographic origin!" }
    ],
    genealogicalTips: [
      "Check the 'Divorced' column: divorce was heavily stigmatized in Victorian America; an ancestor claiming to be a widow might be marked 'D' in the census.",
      "1880 Soundex cards exist only for households with children aged 10 and under; adult-only households were not indexed in the 1880 Soundex."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "Why are some Soundex cards missing for 1880?",
        answer: "The 1880 Soundex was created in the 1930s by the WPA specifically to verify ages for Social Security benefits. To save money, they only indexed households with children aged 10 or younger (born 1870–1880)."
      }
    ]
  },
  {
    year: "1890",
    censusDay: "June 2, 1890",
    president: "Benjamin Harrison",
    population: "62,979,766",
    statesCount: "44 States + 4 Territories",
    naraMicrofilm: "NARA M407 (3 rolls surviving) & M123 (Veterans)",
    era: "The Lost Census",
    tagline: "The Tragic 1921 Commerce Fire & The 1890 Union Veterans Special Schedule",
    overview:
      "The 1890 Census was the most technologically advanced census of its time, utilizing Herman Hollerith's electric punch-card tabulating system. Tragically, on January 10, 1921, a catastrophic fire in the basement of the Commerce Department building in Washington D.C. destroyed nearly the entire population schedule. Only fragments for 6,160 individuals survive.",
    historicalContext: [
      "Frontier officially declared closed by the Census Bureau.",
      "Herman Hollerith's tabulating machines laid the groundwork for IBM.",
      "Congress ordered the burning of remaining water-damaged schedules in 1934."
    ],
    enumeratorInstructions: [
      "Inquire into citizenship, naturalization, English-speaking ability, and home ownership (mortgaged or free).",
      "Concurrently complete the Special Schedule of Union Veterans and Widows of the Civil War."
    ],
    columns: [
      { number: 1, name: "General Population Schedule (Lost)", description: "Included naturalization, mother of how many children.", genealogicalSignificance: "Fragments only survive for 6,160 people." },
      { number: 2, name: "1890 Veterans Schedule (SURVIVING)", description: "Special schedule for Union Civil War veterans and widows.", genealogicalSignificance: "SURVIVES FOR HALF THE COUNTRY (Louisiana through Wyoming)! Lists regiment, company, enlistment/discharge dates, and disability incurred in service." }
    ],
    genealogicalTips: [
      "BRIDGE THE 20-YEAR GAP (1880–1900): Use state censuses (e.g. 1885, 1895 in IA, KS, MN, NE, NY, NJ, WI), city directories, county tax lists, and voter registrations.",
      "Search the surviving 1890 Veterans Schedules (NARA M123): covers Union soldiers and widows from Kentucky through Wyoming."
    ],
    recordsSurvival: "General population schedules 99% destroyed. Veterans schedules survive from Washington D.C. alphabetically through Wyoming (Alabama through Kansas lost).",
    faqs: [
      {
        question: "Is there any hope of finding my ancestor in the 1890 census?",
        answer: "Only if they lived in one of the surviving fragment townships in AL, DC, GA, IL, MN, NJ, NY, NC, OH, SD, or TX, or if they served in the Union Army and appear on the 1890 Veterans Schedule."
      }
    ]
  },
  {
    year: "1900",
    censusDay: "June 1, 1900",
    president: "William McKinley",
    population: "76,212,168",
    statesCount: "45 States + Territories",
    naraMicrofilm: "NARA T623 (1,854 rolls)",
    era: "The Immigrant & Family Goldmine",
    tagline: "The Holy Grail of US Genealogy: Exact Birth Month & Year, Years Married, and Immigration Data",
    overview:
      "To compensate for the loss of the 1890 census, the 1900 Census is the most informative decennial schedule ever compiled. It recorded the exact month and year of birth for every person, the number of years married, the number of children born versus living (a poignant record of infant mortality), year of immigration, years in the US, and naturalization status.",
    historicalContext: [
      "Peak era of European immigration through Ellis Island (opened 1892).",
      "Followed the Spanish-American War (1898); Hawaii and Alaska enumerated."
    ],
    enumeratorInstructions: [
      "Inquire into the exact month (e.g. 'Oct') and year of birth (e.g. '1864').",
      "For mothers, ask: 'Mother of how many children?' and 'Number of these children living?'.",
      "For foreign-born persons, record year of arrival in the US, number of years in US, and naturalization (Al, Pa, Na)."
    ],
    columns: [
      { number: 1, name: "Name & Relation", description: "Full name and relationship to head.", genealogicalSignificance: "Family structure." },
      { number: 2, name: "Month & Year of Birth", description: "Exact calendar month and 4-digit year.", genealogicalSignificance: "GENEALOGICAL GOLD: Exact birth month and year for every person!" },
      { number: 3, name: "Years Married", description: "Number of years in current marriage.", genealogicalSignificance: "Calculates wedding year directly." },
      { number: 4, name: "Mother of how many children / Number living", description: "Two columns (e.g. 7 / 4).", genealogicalSignificance: "CRITICAL: Pinpoints infant mortality and deceased siblings never recorded on other censuses." },
      { number: 5, name: "Year of Immigration to US", description: "Four-digit arrival year.", genealogicalSignificance: "Direct lead to passenger ship arrival manifests!" },
      { number: 6, name: "Naturalization Status", description: "Al (Alien), Pa (First Papers), Na (Naturalized).", genealogicalSignificance: "Tells you whether to look for Declarations of Intention or Final Petitions." },
      { number: 7, name: "Home Owned or Rented / Mortgaged or Free", description: "O (Owned), R (Rented), M (Mortgaged), F (Free).", genealogicalSignificance: "Property status." }
    ],
    genealogicalTips: [
      "Check the 'Children Born vs. Living' count: if a mother had 8 children born and 5 living, 3 children died prior to 1900—look for cemetery plots and infant death records.",
      "Naturalization codes: 'Pa' means the ancestor filed their 'First Papers' (Declaration of Intention); 'Na' means full citizenship papers were issued."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "What if the birth year in 1900 doesn't match their gravestone?",
        answer: "Censuses reflect informant memory, whereas gravestones were carved after death. Use the 1900 month and year as a starting search window for county birth registers and church baptisms."
      }
    ]
  },
  {
    year: "1910",
    censusDay: "April 15, 1910",
    president: "William Howard Taft",
    population: "92,228,496",
    statesCount: "46 States + Territories",
    naraMicrofilm: "NARA T624 (1,784 rolls)",
    era: "The Immigrant & Family Goldmine",
    tagline: "Mother Tongue, Native Language & Civil War Veteran Status",
    overview:
      "The 1910 Census was moved from June to April 15 to reduce urban summer moving inaccuracies. It expanded immigration inquiries by recording the 'Mother Tongue' (native language) of both the immigrant and their foreign-born parents and included a dedicated column asking whether the individual was an American Civil War veteran (Union or Confederate).",
    historicalContext: [
      "Oklahoma was admitted as the 46th state in 1907.",
      "High-water mark of Southern and Eastern European immigration (Italians, Poles, Russian Jews, Greeks)."
    ],
    enumeratorInstructions: [
      "Inquire into mother tongue or native language spoken prior to arrival in the US.",
      "For men over 50, inquire whether a survivor of the Union or Confederate Army or Navy."
    ],
    columns: [
      { number: 1, name: "Name & Relation", description: "Family structure.", genealogicalSignificance: "Household." },
      { number: 2, name: "Civil War Veteran", description: "UA (Union Army), UN (Union Navy), CA (Confederate Army), CN (Confederate Navy).", genealogicalSignificance: "Direct Confederate or Union service verification!" },
      { number: 3, name: "Place of Birth & Mother Tongue", description: "State/country plus language spoken.", genealogicalSignificance: "Identifies whether an Austrian immigrant was German, Polish, Czech, or Yiddish-speaking." },
      { number: 4, name: "Parental Birthplace & Mother Tongue", description: "Father/Mother language.", genealogicalSignificance: "Ancestral linguistic origin." },
      { number: 5, name: "Marriage: First or Second?", description: "M1, M2, M3.", genealogicalSignificance: "Reveals remarriages!" }
    ],
    genealogicalTips: [
      "The 'M1 / M2' notation in Column 8 is critical: 'M1' means first marriage; 'M2' means second marriage. If the husband is M2 and wife is M1, look for a deceased first wife.",
      "Mother tongue distinguishes nationality within empires: an ancestor listing birthplace as 'Russia' with mother tongue 'Yiddish' or 'Polish' pinpoints ethnic community roots."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "Why was the 1910 census indexed with Miracode instead of Soundex?",
        answer: "Miracode was an experimental indexing variant used in 21 states that included enumeration district and visitation numbers directly on the card rather than volume/page numbers."
      }
    ]
  },
  {
    year: "1920",
    censusDay: "January 1, 1920",
    president: "Woodrow Wilson",
    population: "106,021,537",
    statesCount: "48 States (Arizona & New Mexico admitted 1912)",
    naraMicrofilm: "NARA T625 (2,076 rolls)",
    era: "Post-WWI & Border Realignments",
    tagline: "Post-WWI European Realignment: Year of Naturalization Added",
    overview:
      "Conducted on New Year's Day 1920 following World War I and the 1918 Spanish Flu pandemic, the 1920 Census reflected the newly reshaped political borders of Europe. Enumerators were instructed to record the year of naturalization for foreign-born citizens, creating a direct bridge to naturalization court dockets.",
    historicalContext: [
      "First census conducted in the winter (January 1) at the request of the Department of Agriculture.",
      "Reflected the collapse of the Austro-Hungarian, Russian, and Ottoman Empires."
    ],
    enumeratorInstructions: [
      "Do not report 'Austria-Hungary' or 'Russia' without specifying the new post-war republic or province (e.g. Poland, Czechoslovakia, Yugoslavia).",
      "Record the exact YEAR of naturalization for foreign-born citizens in Column 15."
    ],
    columns: [
      { number: 1, name: "Name & Relation", description: "Household identity.", genealogicalSignificance: "Lineage structure." },
      { number: 2, name: "Year of Naturalization", description: "Four-digit naturalization year.", genealogicalSignificance: "Direct year lead for county/federal court citizenship petitions!" },
      { number: 3, name: "Year of Immigration", description: "Arrival year.", genealogicalSignificance: "Ship manifest lead." },
      { number: 4, name: "Post-War Country of Birth & Mother Tongue", description: "Updated European boundaries.", genealogicalSignificance: "Reflects new European borders (Poland, Lithuania, etc.)." }
    ],
    genealogicalTips: [
      "The January 1 Census Day caught many agricultural and university laborers at home rather than in temporary summer quarters.",
      "Post-WWI European boundaries: an ancestor listed as born in 'Germany' in 1910 might be listed as 'Poland' or 'France' (Alsace-Lorraine) in 1920."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "Why did 1920 omit the 'children born vs. living' questions?",
        answer: "Congress streamlined the schedule to reduce enumerator interview length and administrative printing costs following World War I."
      }
    ]
  },
  {
    year: "1930",
    censusDay: "April 1, 1930",
    president: "Herbert Hoover",
    population: "122,775,046",
    statesCount: "48 States + Territories",
    naraMicrofilm: "NARA T626 (2,667 rolls)",
    era: "Great Depression & Media Age",
    tagline: "First Radio Question, Age at First Marriage & Military War Service",
    overview:
      "Taken six months after the catastrophic Wall Street crash of October 1929, the 1930 Census captures America entering the Great Depression. It asked whether the household owned a radio set (the premier cultural medium of the era), recorded the age at first marriage for both spouses, and inquired into military war service (Civil War, Spanish-American War, World War I, Philippine-American War).",
    historicalContext: [
      "The opening months of the Great Depression.",
      "Radio ownership inquiry measured commercial broadcasting penetration and civil defense readiness."
    ],
    enumeratorInstructions: [
      "Ask: 'Does this family own a radio set?' (Column 7: write 'R' for radio).",
      "Record age at first marriage (Column 15 for men, Column 16 for women).",
      "Inquire into wartime service: WW (World War I), Sp (Spanish-American War), Civ (Civil War), Phil (Philippine Insurrection)."
    ],
    columns: [
      { number: 1, name: "Radio Set", description: "Yes / No radio ownership.", genealogicalSignificance: "Cultural marker of Depression era." },
      { number: 2, name: "Age at First Marriage", description: "Exact age married for first time.", genealogicalSignificance: "GENEALOGICAL GOLD: Subtract from current age to calculate wedding year and detect previous marriages." },
      { number: 3, name: "Whether a Veteran / What War", description: "WW, Sp, Civ, Phil, Mex.", genealogicalSignificance: "Identifies WWI Doughboys and Spanish-American War service." },
      { number: 4, name: "Home Value or Monthly Rent", description: "Dollar value.", genealogicalSignificance: "Economic impact of the 1929 crash." }
    ],
    genealogicalTips: [
      "Calculate marital history: if a husband is 48 and his age at first marriage is listed as 21, but his current wife is 30 and her age at first marriage is 28, this is his second marriage and her first marriage.",
      "The 'Radio Set' column is a fascinating cultural artifact—owning a radio in 1930 indicated modest disposable income during the early Depression."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "Is there a Soundex index for the 1930 census?",
        answer: "Only 12 southern states (AL, AR, FL, GA, LA, MS, NC, SC, TN, VA, and parts of KY/WV) were indexed with Soundex for the 1930 census."
      }
    ]
  },
  {
    year: "1940",
    censusDay: "April 1, 1940",
    president: "Franklin D. Roosevelt",
    population: "132,164,569",
    statesCount: "48 States + Territories",
    naraMicrofilm: "NARA m-t0627 (4,643 rolls)",
    era: "The New Deal & Sample Questions",
    tagline: "The New Deal Census: 1935 Residence, Exact Informant Marker & Sample Lines",
    overview:
      "Conducted under the New Deal during President Franklin D. Roosevelt's second term, the 1940 Census introduced statistical sampling techniques. Lines 14 and 29 on every 40-line sheet triggered supplementary questions at the bottom of the page. Crucially for genealogists, enumerators were required to mark an 'x' inside a circle next to the name of the exact person who provided the household answers.",
    historicalContext: [
      "Documented the impact of New Deal recovery programs: WPA (Works Progress Administration), CCC (Civilian Conservation Corps), NYA.",
      "Recorded internal migration caused by the Dust Bowl and agricultural displacement."
    ],
    enumeratorInstructions: [
      "Place an circled cross [⊗] next to the name of the person who furnished the information.",
      "Ask: 'In what place was this person living on April 1, 1935?' (Five years earlier).",
      "Ask supplemental questions for individuals enumerated on highlighted sample lines (lines 14 and 29)."
    ],
    columns: [
      { number: 1, name: "Informant Marker [⊗]", description: "Circled cross next to informant.", genealogicalSignificance: "RELIABILITY GOLD: Tells you whether the mother, teenage daughter, or a confused neighbor answered the door!" },
      { number: 2, name: "Residence on April 1, 1935", description: "Town, county, and state 5 years earlier.", genealogicalSignificance: "Tracks Dust Bowl migrations and Great Depression relocations directly." },
      { number: 3, name: "New Deal Public Emergency Work", description: "WPA, CCC, NYA employment.", genealogicalSignificance: "Direct lead to WPA / CCC personnel archives in St. Louis." },
      { number: 4, name: "Highest Grade of School Completed", description: "Highest grade (e.g. H-4, C-2).", genealogicalSignificance: "Educational attainment." },
      { number: 5, name: "Income in 1939", description: "Salary in dollars up to $5,000+.", genealogicalSignificance: "First census to record personal wage income." }
    ],
    genealogicalTips: [
      "ALWAYS check the circled cross [⊗]: if the neighbor provided the answers because your family was not home, ages and birthplaces are frequently inaccurate.",
      "If your ancestor fell on sample line 14 or 29, scroll to the bottom of the page for birthplace of parents, mother tongue, Social Security deduction status, and total number of children born."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "When was the 1940 census released to the public?",
        answer: "Under the statutory 72-Year Rule (Public Law 95-416), the 1940 Census was released by the National Archives on April 2, 2012."
      }
    ]
  },
  {
    year: "1950",
    censusDay: "April 1, 1950",
    president: "Harry S. Truman",
    population: "151,325,798",
    statesCount: "48 States + Alaska, Hawaii, American Samoa, Guam, Panama Canal Zone, Puerto Rico, Virgin Islands",
    naraMicrofilm: "NARA T628 (6,373 rolls)",
    era: "Post-WWII Baby Boom Era",
    tagline: "The Post-WWII Baby Boom Census: Released April 1, 2022 by NARA",
    overview:
      "Released to the public by the National Archives on April 1, 2022, after the statutory 72-year privacy window, the 1950 Census is the most modern federal census accessible to genealogists. It documents the early Baby Boom, suburban expansion, and millions of returning World War II veterans. It featured a 6-person sample question mechanism at the bottom of each page.",
    historicalContext: [
      "Captures post-World War II family formations, Levittown suburban developments, and the G.I. Bill educational boom.",
      "Conducted shortly before the outbreak of the Korean War in June 1950."
    ],
    enumeratorInstructions: [
      "Inquire into employment status during the preceding week.",
      "For individuals on lines with highlighted arrows (lines 4, 9, 14, 19, 24, and 29), ask supplemental sample questions at the bottom of the page.",
      "Ask the final sample person about prior marriages, military service, and total family income."
    ],
    columns: [
      { number: 1, name: "Name & Relation", description: "Full name and relationship to head.", genealogicalSignificance: "Post-war family." },
      { number: 2, name: "Age, Sex, Race, Birthplace", description: "Core demographics.", genealogicalSignificance: "Identifies early Baby Boom infants born 1945–1950." },
      { number: 3, name: "Employment Status during preceding week", description: "Working, looking for work, or house/school.", genealogicalSignificance: "Post-war employment." },
      { number: 4, name: "Sample Line Inquiries (Lines 4, 9, 14, 19, 24, 29)", description: "Residence in 1949, country of birth of parents.", genealogicalSignificance: "Supplemental genealogical profile." },
      { number: 5, name: "WWII / Military Service (Line 29/30 Sample Question)", description: "Did this person serve in WWII, WWI, or any other military service?", genealogicalSignificance: "Direct verification of World War II military veteran status." },
      { number: 6, name: "Total Family Income in 1949", description: "Income from wages, business, or interest.", genealogicalSignificance: "Post-war economic standing." }
    ],
    genealogicalTips: [
      "If your ancestor was enumerated on an arrowed sample line (lines 4, 9, 14, 19, 24, or 29), look at the bottom of the sheet: you get their 1949 residence, parents' birthplaces, and detailed income.",
      "The sample line for military service is a goldmine for WWII researchers—it asks specifically: 'Did he serve in the U.S. Armed Forces during WWII? WWI? Any other time including present service?'."
    ],
    recordsSurvival: "Complete nationwide.",
    faqs: [
      {
        question: "When will the next census (1960) be released?",
        answer: "By federal law (the 72-Year Rule), the 1960 United States Census will remain sealed for privacy until April 1, 2032."
      },
      {
        question: "Where can I search the 1950 Census for free?",
        answer: "The complete 1950 Census is accessible for free on the official National Archives website (1950census.archives.gov) and FamilySearch.org."
      }
    ]
  }
];

export const CENSUS_ERAS = [
  {
    name: "Head of Household Era",
    years: ["1790", "1800", "1810", "1820", "1830", "1840"],
    description: "Only household heads were named; all other family members were tallied into demographic age brackets."
  },
  {
    name: "Every-Name & Reconstruction Era",
    years: ["1850", "1860", "1870", "1880"],
    description: "Every free individual (and from 1870, all formerly enslaved citizens) was listed by name, birthplace, and relationship."
  },
  {
    name: "Immigration & Modern Era",
    years: ["1890", "1900", "1910", "1920", "1930", "1940", "1950"],
    description: "Expanded inquiries on native language, exact birth dates, arrival years, citizenship, and sampling data."
  }
];
