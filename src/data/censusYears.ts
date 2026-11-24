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
    "year": "1790",
    "censusDay": "August 2, 1790 (First Monday of August)",
    "president": "George Washington",
    "population": "3,929,214",
    "statesCount": "16 States & Territories (13 Original + VT, KY, Southwest Territory)",
    "naraMicrofilm": "NARA M637 (12 rolls)",
    "era": "Head of Household Era",
    "tagline": "The First Federal Enumeration under Article I of the United States Constitution",
    "overview": "Authorized by the Act of March 1, 1790 (1 Stat. 101), the 1790 United States Census was the first decennial population count in American history. Conducted by 650 U.S. Marshals and their appointed assistants on horseback, enumerators supplied their own paper, drew ink rules by hand, and posted duplicate lists in public places (taverns and courthouses) for community verification.",
    "historicalContext": [
      "Mandated by Article I, Section 2 of the Constitution to apportion congressional seats and direct taxes among the states.",
      "Marshals were allocated $1 per 100 persons enumerated in cities and $1 per 50 persons in rural backcountry.",
      "The British military burned Washington in 1814, destroying census schedules for Delaware, Georgia, Kentucky, New Jersey, and Virginia (reconstructed from state tax lists)."
    ],
    "enumeratorInstructions": [
      "Inquire at every dwelling-house or family head within your assigned territory.",
      "Record only the name of the Head of Household; all other occupants are tallied by demographic tick counts.",
      "Evaluate the household composition as it existed on the statutory Census Day (August 2, 1790), regardless of when visited.",
      "Post two copies in the most public places of each district before submitting schedules to the Federal District Court clerk."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Family",
        "description": "Full name of the male or female primary householder.",
        "genealogicalSignificance": "Only person named in the entire household. Widows and unmarried women appear if maintaining an independent home."
      },
      {
        "number": 2,
        "name": "Free White Males 16 years and upward (including heads)",
        "description": "Tallies free white males born before August 1774.",
        "genealogicalSignificance": "Used by Congress to assess military militia potential for defense against foreign powers."
      },
      {
        "number": 3,
        "name": "Free White Males under 16 years",
        "description": "Tallies minor white sons and apprentices born August 1774 through August 1790.",
        "genealogicalSignificance": "Establishes child birth cohorts to correlate against family group sheets and wills."
      },
      {
        "number": 4,
        "name": "Free White Females (including heads)",
        "description": "Tallies all white females in the household without age breakdown.",
        "genealogicalSignificance": "Includes wives, mothers, daughters, unmarried aunts, and female domestic servants."
      },
      {
        "number": 5,
        "name": "All other free persons",
        "description": "Tallies free African Americans, Native Americans living in settled areas, and other free persons of color.",
        "genealogicalSignificance": "Critical index for free Black lineages and apprentice laborers prior to emancipation."
      },
      {
        "number": 6,
        "name": "Slaves",
        "description": "Total number of enslaved individuals owned or held by the household.",
        "genealogicalSignificance": "Tied directly to the Constitutional Three-Fifths Compromise; crucial for tracking slaveholding lines."
      }
    ],
    "genealogicalTips": [
      "Look for the 'Long S' script: lowercase double 's' was written with an elongated stroke resembling an 'f' (e.g. 'Jesse' looks like 'Jefe').",
      "Because assistants supplied their own ledger paper, column ordering varied significantly between districts.",
      "Analyze the three households listed before and after your ancestor: neighbors on 1790 schedules were physical neighbors on rural roads, often married into adjacent families."
    ],
    "recordsSurvival": "Schedules survive for Connecticut, Maine, Maryland, Massachusetts, New Hampshire, New York, North Carolina, Pennsylvania, Rhode Island, South Carolina, and Vermont. Delaware, Georgia, New Jersey, and Virginia schedules were lost, but Virginia was reconstructed using state personal property tax lists.",
    "faqs": [
      {
        "question": "Why aren't children or wives named in the 1790 census?",
        "answer": "Federal law in 1790 only mandated counting aggregate demographic brackets for congressional apportionment and taxation. Individual names were not recorded for family members until the 1850 census."
      },
      {
        "question": "How do I know what month the enumerator visited?",
        "answer": "The statutory Census Day was August 2, 1790, but enumerators took up to 18 months to complete returns due to vast frontier distances. Marshals were required to count the family as it stood on August 2."
      }
    ]
  },
  {
    "year": "1800",
    "censusDay": "August 4, 1800 (First Monday of August)",
    "president": "John Adams",
    "population": "5,308,483",
    "statesCount": "16 States + Northwest & Mississippi Territories",
    "naraMicrofilm": "NARA M32 (52 rolls)",
    "era": "Head of Household Era",
    "tagline": "Expanded Age Brackets for Both Males and Females Under Thomas Jefferson's Influence",
    "overview": "The 1800 Census was administered under the direction of Secretary of State Timothy Pickering (and later John Marshall). Building on recommendations by the American Philosophical Society (led by Thomas Jefferson), Congress expanded age categorizations from three general groups into five standardized five-year and ten-year brackets for both sexes.",
    "historicalContext": [
      "Conducted during the contested Adams-Jefferson presidential election campaign.",
      "First enumeration to include the newly formed Northwest Territory and Mississippi Territory.",
      "Provided crucial actuarial and demographic data on infant mortality and frontier life expectancy."
    ],
    "enumeratorInstructions": [
      "Inquire into five distinct age brackets for free white males and five brackets for free white females.",
      "Count all inhabitants as of the first Monday in August 1800.",
      "Maintain uniform headings across pre-ruled schedules to avoid tabulation discrepancies."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Household",
        "description": "Full name of householder.",
        "genealogicalSignificance": "Primary indexing entry."
      },
      {
        "number": 2,
        "name": "Free white males under 10",
        "description": "Born 1790–1800.",
        "genealogicalSignificance": "Identifies infants and toddlers born since 1790."
      },
      {
        "number": 3,
        "name": "Free white males 10–15",
        "description": "Born 1785–1790.",
        "genealogicalSignificance": "Cross-checks against 1790 minor male bracket."
      },
      {
        "number": 4,
        "name": "Free white males 16–25",
        "description": "Born 1775–1784.",
        "genealogicalSignificance": "Young adult males, laborers, and elder sons."
      },
      {
        "number": 5,
        "name": "Free white males 26–44",
        "description": "Born 1756–1774.",
        "genealogicalSignificance": "Peak family-raising cohort."
      },
      {
        "number": 6,
        "name": "Free white males 45 and over",
        "description": "Born before 1756.",
        "genealogicalSignificance": "Heads born during French and Indian War era."
      },
      {
        "number": 7,
        "name": "Free white females under 10",
        "description": "Born 1790–1800.",
        "genealogicalSignificance": "First time female child age cohorts were isolated."
      },
      {
        "number": 8,
        "name": "Free white females 10–15",
        "description": "Born 1785–1790.",
        "genealogicalSignificance": "Adolescent daughters."
      },
      {
        "number": 9,
        "name": "Free white females 16–25",
        "description": "Born 1775–1784.",
        "genealogicalSignificance": "Young wives and marrying-age daughters."
      },
      {
        "number": 10,
        "name": "Free white females 26–44",
        "description": "Born 1756–1774.",
        "genealogicalSignificance": "Mothers of growing households."
      },
      {
        "number": 11,
        "name": "Free white females 45 and over",
        "description": "Born before 1756.",
        "genealogicalSignificance": "Matriarchs and grandmothers."
      },
      {
        "number": 12,
        "name": "All other free persons (except Indians not taxed)",
        "description": "Free non-white persons.",
        "genealogicalSignificance": "Tracks free people of color."
      },
      {
        "number": 13,
        "name": "Slaves",
        "description": "Enslaved individuals in household.",
        "genealogicalSignificance": "Ownership quantification."
      }
    ],
    "genealogicalTips": [
      "Compare the 1800 brackets with 1790: an ancestor aged 26–44 in 1800 should have been 16+ in 1790.",
      "Check for elderly parents living with married adult children: a male or female aged 45+ in a young family often marks a surviving widowed grandparent."
    ],
    "recordsSurvival": "Missing schedules: Georgia, Kentucky, New Jersey, Tennessee, and Virginia (parts survive for Chesterfield and Accomack).",
    "faqs": [
      {
        "question": "What does 'except Indians not taxed' mean?",
        "answer": "Native Americans living under tribal sovereign authority who did not pay state or local taxes were constitutionally exempt from congressional representation and thus excluded from enumeration."
      }
    ]
  },
  {
    "year": "1810",
    "censusDay": "August 6, 1810 (First Monday of August)",
    "president": "James Madison",
    "population": "7,239,881",
    "statesCount": "17 States + 6 Territories",
    "naraMicrofilm": "NARA M252 (71 rolls)",
    "era": "Head of Household Era",
    "tagline": "First Census to Include Federal Inquiries on Manufacturing and Industry",
    "overview": "Administered on the eve of the War of 1812, the 1810 Census retained the five demographic age categories of 1800 while introducing an ambitious supplemental manufacturing survey to measure domestic production capacity against British trade embargoes.",
    "historicalContext": [
      "Reflects westward settlement into Ohio (admitted 1803) and the vast Louisiana Territory (purchased 1803).",
      "Encompassed the Illinois, Indiana, Michigan, Mississippi, and Orleans Territories."
    ],
    "enumeratorInstructions": [
      "Enumerate persons according to their usual place of abode on August 6, 1810.",
      "Take account of manufacturing establishments, mills, looms, and distilleries on a separate sheet."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Family",
        "description": "Full name of householder.",
        "genealogicalSignificance": "Primary index identifier."
      },
      {
        "number": 2,
        "name": "Free white males under 10",
        "description": "Born 1800–1810.",
        "genealogicalSignificance": "Infants and young boys born since 1800."
      },
      {
        "number": 3,
        "name": "Free white males 10–15",
        "description": "Born 1795–1800.",
        "genealogicalSignificance": "Older boys and young adolescents."
      },
      {
        "number": 4,
        "name": "Free white males 16–25",
        "description": "Born 1785–1794.",
        "genealogicalSignificance": "Militia age candidates and young adult men."
      },
      {
        "number": 5,
        "name": "Free white males 26–44",
        "description": "Born 1766–1784.",
        "genealogicalSignificance": "Heads of households in peak working years."
      },
      {
        "number": 6,
        "name": "Free white males 45 and upward",
        "description": "Born before 1766.",
        "genealogicalSignificance": "Elderly fathers and grandfathers."
      },
      {
        "number": 7,
        "name": "Free white females under 10",
        "description": "Born 1800–1810.",
        "genealogicalSignificance": "Infants and young daughters born since 1800."
      },
      {
        "number": 8,
        "name": "Free white females 10–15",
        "description": "Born 1795–1800.",
        "genealogicalSignificance": "Young adolescent daughters."
      },
      {
        "number": 9,
        "name": "Free white females 16–25",
        "description": "Born 1785–1794.",
        "genealogicalSignificance": "Young adult women and daughters."
      },
      {
        "number": 10,
        "name": "Free white females 26–44",
        "description": "Born 1766–1784.",
        "genealogicalSignificance": "Mothers and wives in childbearing years."
      },
      {
        "number": 11,
        "name": "Free white females 45 and upward",
        "description": "Born before 1766.",
        "genealogicalSignificance": "Elderly matriarchs and grandmothers."
      },
      {
        "number": 12,
        "name": "All other free persons, except Indians not taxed",
        "description": "Free persons of color.",
        "genealogicalSignificance": "Tracks free Black and non-white family lineages."
      },
      {
        "number": 13,
        "name": "Slaves",
        "description": "Total enslaved persons held by household.",
        "genealogicalSignificance": "Quantifies slaveholding and enslaved presence."
      }
    ],
    "genealogicalTips": [
      "Be alert to westward migration: families in Virginia or Pennsylvania in 1800 frequently reappear in Ohio or Kentucky in 1810.",
      "Watch for sound-alike phonetic spellings: enumerators spelled German, Dutch, and French surnames as they sounded in English."
    ],
    "recordsSurvival": "Missing states: Georgia, New Jersey, parts of Ohio, and parts of Tennessee.",
    "faqs": [
      {
        "question": "Where are the 1810 manufacturing schedules?",
        "answer": "Most manufacturing schedules were bound separately and are preserved at the National Archives in NARA Record Group 29."
      }
    ]
  },
  {
    "year": "1820",
    "censusDay": "August 7, 1820 (First Monday of August)",
    "president": "James Monroe",
    "population": "9,638,453",
    "statesCount": "23 States + 4 Territories",
    "naraMicrofilm": "NARA M33 (142 rolls)",
    "era": "Head of Household Era",
    "tagline": "First Census to Distinguish Military Age (16–18), Commerce, and Agriculture Occupations",
    "overview": "The 1820 Census was the first to record occupational categories (agriculture, commerce, and manufactures) and introduced an overlapping military draft bracket for males aged 16 to 18, reflecting post-War of 1812 national defense priorities. It also introduced age divisions for enslaved and free Black Americans.",
    "historicalContext": [
      "Followed the Panic of 1819 and the Missouri Compromise of 1820.",
      "Enumerated five new states: Indiana (1816), Mississippi (1817), Illinois (1818), Alabama (1819), and Maine (1820)."
    ],
    "enumeratorInstructions": [
      "Inquire into the occupation of the household members: Agriculture, Commerce, or Manufactures.",
      "Check whether free white males aged 16–18 are ALSO counted in the 16–25 column (they must be counted in both!).",
      "Record free colored persons and slaves across four age brackets (under 14, 14–25, 26–44, 45+)."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Family",
        "description": "Name of household head.",
        "genealogicalSignificance": "Primary identifier."
      },
      {
        "number": 2,
        "name": "Free white males under 10",
        "description": "Born 1810–1820.",
        "genealogicalSignificance": "Young sons born since 1810."
      },
      {
        "number": 3,
        "name": "Free white males 10–15",
        "description": "Born 1805–1810.",
        "genealogicalSignificance": "Adolescent sons."
      },
      {
        "number": 4,
        "name": "Free white males 16–18 (Militia sub-bracket)",
        "description": "Draft age males born 1802–1804.",
        "genealogicalSignificance": "CRITICAL: Males in this column are ALSO tallied in column 5! Do not double-count."
      },
      {
        "number": 5,
        "name": "Free white males 16–25",
        "description": "Young adult males born 1795–1804 (includes the 16-18 cohort).",
        "genealogicalSignificance": "Total young adult male household members."
      },
      {
        "number": 6,
        "name": "Free white males 26–44",
        "description": "Born 1776–1794.",
        "genealogicalSignificance": "Adult males in primary earning years."
      },
      {
        "number": 7,
        "name": "Free white males 45 and upward",
        "description": "Born before 1776.",
        "genealogicalSignificance": "Revolutionary War generation elders."
      },
      {
        "number": 8,
        "name": "Free white females under 10",
        "description": "Born 1810–1820.",
        "genealogicalSignificance": "Young daughters."
      },
      {
        "number": 9,
        "name": "Free white females 10–15",
        "description": "Born 1805–1810.",
        "genealogicalSignificance": "Adolescent daughters."
      },
      {
        "number": 10,
        "name": "Free white females 16–25",
        "description": "Born 1795–1804.",
        "genealogicalSignificance": "Young adult females."
      },
      {
        "number": 11,
        "name": "Free white females 26–44",
        "description": "Born 1776–1794.",
        "genealogicalSignificance": "Mothers and wives."
      },
      {
        "number": 12,
        "name": "Free white females 45 and upward",
        "description": "Born before 1776.",
        "genealogicalSignificance": "Elderly mothers and grandmothers."
      },
      {
        "number": 13,
        "name": "Foreigners not naturalized",
        "description": "Alien immigrants residing in household.",
        "genealogicalSignificance": "Direct indicator of recent European arrival; points to naturalization court papers."
      },
      {
        "number": 14,
        "name": "Number of persons engaged in Agriculture",
        "description": "Farming occupation count.",
        "genealogicalSignificance": "Livelihood marker."
      },
      {
        "number": 15,
        "name": "Number of persons engaged in Commerce",
        "description": "Merchants, traders, storekeepers.",
        "genealogicalSignificance": "Indicates mercantile or trade business."
      },
      {
        "number": 16,
        "name": "Number of persons engaged in Manufactures",
        "description": "Blacksmiths, millers, weavers, craft trades.",
        "genealogicalSignificance": "Indicates skilled artisan background."
      },
      {
        "number": 17,
        "name": "Slaves (under 14, 14–25, 26–44, 45+)",
        "description": "Four male & female slave age columns.",
        "genealogicalSignificance": "First time enslaved people were broken down by age brackets."
      },
      {
        "number": 18,
        "name": "Free Colored Persons (under 14, 14–25, 26–44, 45+)",
        "description": "Four male & female free colored columns.",
        "genealogicalSignificance": "Detailed demographic age distribution for free Black families."
      }
    ],
    "genealogicalTips": [
      "CRITICAL MATHEMATICAL TRAP: Do not sum the male columns directly! Males aged 16–18 were tallied TWICE (once in the 16–18 column and once in the 16–25 column).",
      "The 'Foreigners not naturalized' tally indicates recent European arrival—look for naturalization petitions in county court minutes."
    ],
    "recordsSurvival": "New Jersey schedules completely lost. Parts of North Carolina, Tennessee, and Missouri also lost.",
    "faqs": [
      {
        "question": "Why does the total male count not match my family size?",
        "answer": "The 16–18 column was an overlapping sub-category of the 16–25 column for military militia estimates. Subtract the 16–18 tally to avoid counting those sons twice."
      }
    ]
  },
  {
    "year": "1830",
    "censusDay": "June 1, 1830",
    "president": "Andrew Jackson",
    "population": "12,866,020",
    "statesCount": "24 States + Territories",
    "naraMicrofilm": "NARA M19 (201 rolls)",
    "era": "Head of Household Era",
    "tagline": "First Census to Use Standardized Government-Printed Blank Forms",
    "overview": "The 1830 Census was a watershed in bureaucratic standardization. Prior to 1830, marshals drew their own column lines on loose paper. In 1830, the Federal government issued uniform printed forms for the first time. The census also shifted Census Day from August to June 1st and expanded age brackets into uniform 5-year and 10-year groups spanning up to 100+ years.",
    "historicalContext": [
      "First enumeration under President Andrew Jackson.",
      "Census Day moved to June 1 to avoid harsh late-summer frontier illnesses (malaria/yellow fever) among marshals.",
      "Introduced columns for deaf, dumb, and blind persons."
    ],
    "enumeratorInstructions": [
      "Use only the standardized pre-printed schedules furnished by the State Department.",
      "Tally persons across twelve age brackets for white males and twelve brackets for white females.",
      "Note the deaf, dumb, and blind, as well as foreigners not naturalized."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Family",
        "description": "Name of householder.",
        "genealogicalSignificance": "Primary indexing name."
      },
      {
        "number": "2–14",
        "name": "Free White Males (13 distinct age brackets)",
        "description": "Under 5, 5–9, 10–14, 15–19, 20–29, 30–39, 40–49, 50–59, 60–69, 70–79, 80–89, 90–99, 100+.",
        "genealogicalSignificance": "First census with standardized 5-year early age groups and brackets extending past 100."
      },
      {
        "number": "15–27",
        "name": "Free White Females (13 distinct age brackets)",
        "description": "Under 5, 5–9, 10–14, 15–19, 20–29, 30–39, 40–49, 50–59, 60–69, 70–79, 80–89, 90–99, 100+.",
        "genealogicalSignificance": "Permits precise birth cohort reconstruction for all female family members."
      },
      {
        "number": 28,
        "name": "Slaves (6 male & 6 female age brackets)",
        "description": "Under 10, 10–23, 24–35, 36–54, 55–99, 100+.",
        "genealogicalSignificance": "Detailed age and sex distribution of enslaved individuals."
      },
      {
        "number": 29,
        "name": "Free Colored Persons (6 male & 6 female brackets)",
        "description": "Under 10, 10–23, 24–35, 36–54, 55–99, 100+.",
        "genealogicalSignificance": "Age brackets for free African American and mixed-race family members."
      },
      {
        "number": 30,
        "name": "White Persons who are Deaf and Dumb",
        "description": "Tallied in age tiers: under 14, 14–24, 25 and upwards.",
        "genealogicalSignificance": "Early disability and institutional records lead."
      },
      {
        "number": 31,
        "name": "White Persons who are Blind",
        "description": "Count of blind white persons in household.",
        "genealogicalSignificance": "Medical and pension clues."
      },
      {
        "number": 32,
        "name": "Slaves and Colored Persons Deaf and Dumb / Blind",
        "description": "Count of sensory disabled non-white persons.",
        "genealogicalSignificance": "Rare health data for minority lineages."
      },
      {
        "number": 33,
        "name": "Foreigners not naturalized",
        "description": "Count of resident aliens.",
        "genealogicalSignificance": "Tracks un-naturalized immigrants."
      }
    ],
    "genealogicalTips": [
      "Pre-printed schedules had 13 columns on the left page and 14 columns on the right page. Always verify both facing pages on microfilm scans to avoid missing female and slave counts.",
      "Uniform 5-year brackets under age 20 make child birth sequencing much easier to verify against baptismal rolls."
    ],
    "recordsSurvival": "Missing: Parts of Massachusetts, Maryland, and Mississippi.",
    "faqs": [
      {
        "question": "Why are facing pages so often omitted in digital viewers?",
        "answer": "Microfilm photographers sometimes photographed left-hand pages and right-hand pages on separate frames. If you only see white males, flip to the next microfilm frame for females and totals."
      }
    ]
  },
  {
    "year": "1840",
    "censusDay": "June 1, 1840",
    "president": "Martin Van Buren",
    "population": "17,069,453",
    "statesCount": "26 States + 3 Territories",
    "naraMicrofilm": "NARA M704 (580 rolls)",
    "era": "Head of Household Era",
    "tagline": "The Revolutionary War Pensioners Census & The Final Head-of-Household Schedule",
    "overview": "The 1840 Census is treasured by military and lineage researchers because it was the first and only head-of-household census to record the names and exact ages of living Revolutionary War and military pensioners. It was also the final decennial census before the landmark 'every-name' reform of 1850.",
    "historicalContext": [
      "Conducted during the Great Economic Depression following the Panic of 1837.",
      "Elderly veterans of the American Revolutionary War (1775–1783) were in their 70s, 80s, and 90s, prompting Congress to preserve their names."
    ],
    "enumeratorInstructions": [
      "Record the name and exact age of any person receiving a military pension for Revolutionary or military services.",
      "Inquire into school attendance, literacy (white persons over 20 who cannot read and write), and seven distinct industry occupations."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Name of Head of Family",
        "description": "Name of householder.",
        "genealogicalSignificance": "Primary index key."
      },
      {
        "number": "2–14",
        "name": "Free White Males (13 age brackets)",
        "description": "Under 5 through 100+.",
        "genealogicalSignificance": "Detailed male demographic cohort."
      },
      {
        "number": "15–27",
        "name": "Free White Females (13 age brackets)",
        "description": "Under 5 through 100+.",
        "genealogicalSignificance": "Detailed female demographic cohort."
      },
      {
        "number": 28,
        "name": "Slaves & Free Colored (6 age tiers each for males & females)",
        "description": "Under 10, 10–23, 24–35, 36–54, 55–99, 100+.",
        "genealogicalSignificance": "Counts enslaved and free persons of color."
      },
      {
        "number": 29,
        "name": "Revolutionary War Pensioners: Name and Age",
        "description": "Exact name and age of veteran or surviving widow.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Directly names Revolutionary War soldiers and widows living in the home!"
      },
      {
        "number": 30,
        "name": "Number of persons in each family employed in 7 Classes",
        "description": "Mining, Agriculture, Commerce, Manufactures and Trades, Navigation of the Ocean, Navigation of Canals/Lakes/Rivers, Learned Professions and Engineers.",
        "genealogicalSignificance": "First census with 7 distinct occupational classes."
      },
      {
        "number": 31,
        "name": "Deaf & Dumb, Blind, and Insane/Idiots",
        "description": "Tallied by race and public vs private charge.",
        "genealogicalSignificance": "Identifies mental and physical health conditions."
      },
      {
        "number": 32,
        "name": "Schools, Academies, and Adult Illiteracy",
        "description": "Number of scholars and white persons over 20 who cannot read and write.",
        "genealogicalSignificance": "Measures educational opportunity."
      }
    ],
    "genealogicalTips": [
      "The Pensioner column (Column 33 on the right page) can name a 92-year-old grandfather or great-aunt living in a son-in-law's home who is otherwise completely anonymous!",
      "Cross-reference 1840 pensioners directly with the NARA M804 Revolutionary War Pension Applications collection."
    ],
    "recordsSurvival": "Substantially complete nationwide.",
    "faqs": [
      {
        "question": "Who qualified as a pensioner on the 1840 schedule?",
        "answer": "Any individual receiving federal, state, or private military pensions for service in the Revolutionary War or subsequent military engagements."
      }
    ]
  },
  {
    "year": "1850",
    "censusDay": "June 1, 1850",
    "president": "Millard Fillmore (Zachary Taylor died July 1850)",
    "population": "23,191,876",
    "statesCount": "31 States + 4 Territories",
    "naraMicrofilm": "NARA M432 (1,009 rolls)",
    "era": "Every-Name Era",
    "tagline": "The Great Watershed: First Census to Name Every Free Person Individually",
    "overview": "Created under the visionary Census Act of May 23, 1850, the 1850 Census revolutionized American genealogy. For the first time in federal history, Schedule 1 named EVERY free individual in the household—men, women, children, infants, and servants—along with their exact age, sex, color, profession, real estate value, and specific state or country of birth.",
    "historicalContext": [
      "Followed the Mexican-American War (1846–1848) and the California Gold Rush (1849).",
      "Conducted during heated congressional debates leading to the Compromise of 1850 and Fugitive Slave Act."
    ],
    "enumeratorInstructions": [
      "Record the name of every individual whose usual place of abode was in the family on June 1, 1850.",
      "List infants born after June 1 as NOT in the household; list persons who died AFTER June 1 as if still living.",
      "Inquire into the specific State, Territory, or foreign Country of birth for every person."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Dwelling-houses numbered in order of visitation",
        "description": "Physical house number.",
        "genealogicalSignificance": "Clarifies multi-family residences."
      },
      {
        "number": 2,
        "name": "Families numbered in order of visitation",
        "description": "Family sequence number.",
        "genealogicalSignificance": "Multiple families sharing one roof."
      },
      {
        "number": 3,
        "name": "Name of every person whose usual abode on June 1, 1850 was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "GENEALOGICAL WATERSHED: Every family member is named!"
      },
      {
        "number": 4,
        "name": "Age",
        "description": "Age in years (or months if under 1).",
        "genealogicalSignificance": "Calculates birth year ~1849–1850."
      },
      {
        "number": 5,
        "name": "Sex",
        "description": "M (Male) or F (Female).",
        "genealogicalSignificance": "Gender verification."
      },
      {
        "number": 6,
        "name": "Color",
        "description": "White, Black, or Mulatto (B or M).",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 7,
        "name": "Profession, Occupation, or Trade of each male person over 15",
        "description": "Job title or trade.",
        "genealogicalSignificance": "Occupational identity."
      },
      {
        "number": 8,
        "name": "Value of Real Estate owned",
        "description": "Dollar value of owned land.",
        "genealogicalSignificance": "Direct lead to county deed and mortgage books."
      },
      {
        "number": 9,
        "name": "Place of Birth, naming the State, Territory, or Country",
        "description": "State or foreign country.",
        "genealogicalSignificance": "CRITICAL: First census identifying ancestral birthplace!"
      },
      {
        "number": 10,
        "name": "Married within the year",
        "description": "Checkmark if married June 1849–May 1850.",
        "genealogicalSignificance": "Narrows wedding date to a 12-month window."
      },
      {
        "number": 11,
        "name": "Attended school within the year",
        "description": "Checkmark for school attendance.",
        "genealogicalSignificance": "Identifies childhood education."
      },
      {
        "number": 12,
        "name": "Persons over 20 who cannot read & write",
        "description": "Checkmark for illiteracy.",
        "genealogicalSignificance": "Literacy background."
      },
      {
        "number": 13,
        "name": "Whether deaf and dumb, blind, insane, idiotic, pauper, or convict",
        "description": "Institutional or physical status.",
        "genealogicalSignificance": "Leads to almshouse, asylum, or court records."
      }
    ],
    "genealogicalTips": [
      "Do NOT assume relationships: 1850 does NOT state relationships. A 24-year-old female listed below the head could be a second wife, sister, or sister-in-law.",
      "Track family migration routes using the children's birthplaces: e.g., child 1 born in NY (1838), child 2 born in Ohio (1842), child 3 born in Illinois (1848)."
    ],
    "recordsSurvival": "Substantially complete survival nationwide (some California county schedules lost in transit).",
    "faqs": [
      {
        "question": "Why does 1850 not list family relationships?",
        "answer": "Relationship to head of household was not added until the 1880 census. In 1850, individuals are listed in household order, but relationship must be proved through wills, deeds, and church records."
      }
    ]
  },
  {
    "year": "1860",
    "censusDay": "June 1, 1860",
    "president": "James Buchanan",
    "population": "31,443,321",
    "statesCount": "33 States + 7 Territories",
    "naraMicrofilm": "NARA M653 (1,438 rolls)",
    "era": "Every-Name Era",
    "tagline": "The Eve of the Civil War: Value of Personal Estate Introduced",
    "overview": "Conducted on the brink of the American Civil War and Abraham Lincoln's election, the 1860 Census added a vital economic metric: Column 9 recorded the 'Value of Personal Estate' (livestock, furniture, bonds, and enslaved property) alongside Real Estate. It was the final decennial census to feature the Slave Schedules.",
    "historicalContext": [
      "The last census before the outbreak of the Civil War in April 1861.",
      "Minnesota (1858) and Oregon (1859) were enumerated as new states."
    ],
    "enumeratorInstructions": [
      "Inquire into both real estate value and personal estate value.",
      "Record all persons in their usual dwelling on June 1, 1860."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Dwelling-houses numbered in order of visitation",
        "description": "Sequential dwelling count.",
        "genealogicalSignificance": "Identifies physical neighborhood structure."
      },
      {
        "number": 2,
        "name": "Families numbered in order of visitation",
        "description": "Sequential family count.",
        "genealogicalSignificance": "Identifies multiple households in one building."
      },
      {
        "number": 3,
        "name": "Name of every person whose usual place of abode on June 1, 1860 was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Every-name census."
      },
      {
        "number": 4,
        "name": "Age",
        "description": "Age at last birthday.",
        "genealogicalSignificance": "Calculates birth year ~1859–1860."
      },
      {
        "number": 5,
        "name": "Sex",
        "description": "M or F.",
        "genealogicalSignificance": "Gender identification."
      },
      {
        "number": 6,
        "name": "Color",
        "description": "White, Black, or Mulatto (W, B, M).",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 7,
        "name": "Profession, Occupation, or Trade of each person over 15",
        "description": "Occupation of males and females.",
        "genealogicalSignificance": "First time women's professions (dressmaker, teacher) were systematically logged."
      },
      {
        "number": 8,
        "name": "Value of Real Estate",
        "description": "Assessed market value of land and buildings.",
        "genealogicalSignificance": "Quantifies land ownership; leads to deed records."
      },
      {
        "number": 9,
        "name": "Value of Personal Estate",
        "description": "Dollar value of personal property, bonds, livestock, and enslaved persons.",
        "genealogicalSignificance": "CRITICAL: First census with personal wealth! High personal estate in the South strongly correlates with slave ownership."
      },
      {
        "number": 10,
        "name": "Place of Birth, naming the State, Territory, or Country",
        "description": "Specific birthplace.",
        "genealogicalSignificance": "Geographic origin."
      },
      {
        "number": 11,
        "name": "Married within the year",
        "description": "Checkmark if married between June 1, 1859 and May 31, 1860.",
        "genealogicalSignificance": "12-month marriage record lead."
      },
      {
        "number": 12,
        "name": "Attended school within the year",
        "description": "Checkmark if attended school.",
        "genealogicalSignificance": "Childhood education."
      },
      {
        "number": 13,
        "name": "Persons over 20 who cannot read & write",
        "description": "Illiteracy marker.",
        "genealogicalSignificance": "Educational background."
      },
      {
        "number": 14,
        "name": "Whether deaf and dumb, blind, insane, idiotic, pauper, or convict",
        "description": "Disability, poverty, or incarceration status.",
        "genealogicalSignificance": "Leads to almshouse, prison, or asylum records."
      }
    ],
    "genealogicalTips": [
      "Compare Personal Estate against Real Estate: young men with zero real estate but high personal property were often tenant farmers with wagons and livestock.",
      "Young men aged 15–30 in this census would become the soldiers of the Union and Confederate armies within months."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "How do I find enslaved ancestors in 1860?",
        "answer": "Enslaved persons were enumerated on separate Slave Schedules (Schedule 2) under the slaveholder's name, listed by age, sex, and color, but rarely by given name."
      }
    ]
  },
  {
    "year": "1870",
    "censusDay": "June 1, 1870",
    "president": "Ulysses S. Grant",
    "population": "38,558,371",
    "statesCount": "37 States + 9 Territories",
    "naraMicrofilm": "NARA M593 (1,761 rolls)",
    "era": "Reconstruction Era",
    "tagline": "The Reconstruction Census: First Every-Name Enumeration of Formerly Enslaved African Americans",
    "overview": "The 1870 Census holds monumental importance for African American genealogy: following the Civil War and the 13th Amendment, millions of formerly enslaved persons were enumerated by first and last name for the first time in federal census history. It also added two new columns indicating whether a person's father or mother was of foreign birth.",
    "historicalContext": [
      "Conducted during federal military Reconstruction in the southern states.",
      "Introduced inquiries regarding male citizens aged 21+ whose right to vote was abridged (14th Amendment compliance)."
    ],
    "enumeratorInstructions": [
      "Enumerate every person living on June 1, 1870.",
      "Inquire whether the person's father or mother was of foreign birth.",
      "Mark whether male citizens aged 21+ have their right to vote denied on other grounds than rebellion."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Dwelling-houses numbered in order of visitation",
        "description": "Dwelling sequence.",
        "genealogicalSignificance": "Neighborhood mapping."
      },
      {
        "number": 2,
        "name": "Families numbered in order of visitation",
        "description": "Family sequence.",
        "genealogicalSignificance": "Household boundaries."
      },
      {
        "number": 3,
        "name": "Name of every person whose place of abode on June 1, 1870 was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "HISTORIC: First federal census naming formerly enslaved African Americans as free citizens!"
      },
      {
        "number": 4,
        "name": "Age at last birthday",
        "description": "Age in completed years (or fractions for infants).",
        "genealogicalSignificance": "Calculates birth year ~1869–1870."
      },
      {
        "number": 5,
        "name": "Sex",
        "description": "M or F.",
        "genealogicalSignificance": "Gender verification."
      },
      {
        "number": 6,
        "name": "Color",
        "description": "White (W), Black (B), Mulatto (M), Chinese (C), Indian (I).",
        "genealogicalSignificance": "Expanded post-war racial categories."
      },
      {
        "number": 7,
        "name": "Profession, Occupation, or Trade of each person",
        "description": "Employment or livelihood.",
        "genealogicalSignificance": "Tracks post-war occupations and sharecropping."
      },
      {
        "number": 8,
        "name": "Value of Real Estate",
        "description": "Dollar value of owned land.",
        "genealogicalSignificance": "Land ownership records lead."
      },
      {
        "number": 9,
        "name": "Value of Personal Estate",
        "description": "Dollar value of personal property.",
        "genealogicalSignificance": "Post-war wealth assessment."
      },
      {
        "number": 10,
        "name": "Place of Birth, naming State or Territory of U.S., or Country if foreign",
        "description": "Birthplace.",
        "genealogicalSignificance": "Geographic origins."
      },
      {
        "number": 11,
        "name": "Father of foreign birth",
        "description": "Checkmark if father was born outside the United States.",
        "genealogicalSignificance": "CRITICAL: First federal clue of immigrant paternal ancestry!"
      },
      {
        "number": 12,
        "name": "Mother of foreign birth",
        "description": "Checkmark if mother was born outside the United States.",
        "genealogicalSignificance": "CRITICAL: First federal clue of immigrant maternal ancestry!"
      },
      {
        "number": 13,
        "name": "If born within the year, state month",
        "description": "Month of birth for infants born June 1869–May 1870.",
        "genealogicalSignificance": "Pinpoints exact birth month."
      },
      {
        "number": 14,
        "name": "If married within the year, state month",
        "description": "Month of marriage for weddings June 1869–May 1870.",
        "genealogicalSignificance": "Pinpoints exact marriage month."
      },
      {
        "number": 15,
        "name": "Attended school within the year",
        "description": "Checkmark if in school.",
        "genealogicalSignificance": "Education access."
      },
      {
        "number": 16,
        "name": "Cannot read",
        "description": "Checkmark if unable to read.",
        "genealogicalSignificance": "Measures basic literacy."
      },
      {
        "number": 17,
        "name": "Cannot write",
        "description": "Checkmark if unable to write.",
        "genealogicalSignificance": "Signatures vs mark on deeds/wills."
      },
      {
        "number": 18,
        "name": "Whether deaf and dumb, blind, insane, or idiotic",
        "description": "Medical condition marker.",
        "genealogicalSignificance": "Health and asylum inquiries."
      },
      {
        "number": 19,
        "name": "Male Citizens of U.S. of 21 years of age and upwards",
        "description": "Checkmark for eligible male voters.",
        "genealogicalSignificance": "Confirms voting citizenship."
      },
      {
        "number": 20,
        "name": "Male Citizens of U.S. of 21+ whose right to vote is denied or abridged",
        "description": "14th Amendment disenfranchisement check.",
        "genealogicalSignificance": "Ex-Confederate disenfranchisement or civil rights restriction indicator."
      }
    ],
    "genealogicalTips": [
      "For African American research, this is the '1870 Brick Wall': connect the family in 1870 with nearby white families in 1860 with the same surname or adjacent land to locate former plantations.",
      "Columns 11 and 12 ('Father/Mother of foreign birth') reveal if parents were born in Ireland, Germany, etc., even if the ancestor was born in New York."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "Why are some southern counties undercounted in 1870?",
        "answer": "Reconstruction political instability and ku klux klan violence led to significant undercounts in southern rural districts, prompting a partial re-enumeration in several urban centers (such as New York City)."
      }
    ]
  },
  {
    "year": "1880",
    "censusDay": "June 1, 1880",
    "president": "Rutherford B. Hayes",
    "population": "50,189,209",
    "statesCount": "38 States + 9 Territories",
    "naraMicrofilm": "NARA T9 (1,454 rolls)",
    "era": "Golden Era of Census Records",
    "tagline": "The First Census with Relationship to Head of Household and Specific Parental Birthplaces",
    "overview": "The 1880 Census is considered the crown jewel of 19th-century genealogical research. For the first time, Column 8 explicitly recorded the exact relationship of every person to the head of household ('Wife', 'Son', 'Mother-in-law', 'Boarder', 'Servant'). Columns 24–26 also recorded the exact birthplace of the individual's father AND mother.",
    "historicalContext": [
      "Supervised by Francis Amasa Walker under the Census Act of 1879, which replaced U.S. Marshals with trained professional civilian census supervisors.",
      "First census to record marital status (single, married, widowed, divorced) and months unemployed."
    ],
    "enumeratorInstructions": [
      "State the relationship of each person to the head of the family, whether wife, son, daughter, servant, boarder, or other.",
      "Inquire into the specific State or Country of birth of the person's father AND mother.",
      "Record street names and house numbers in cities."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Street name and house number (in cities)",
        "description": "Urban street address.",
        "genealogicalSignificance": "Direct correlation with historic city directories and fire insurance maps."
      },
      {
        "number": 2,
        "name": "Dwelling houses numbered in order of visitation",
        "description": "Sequential building count.",
        "genealogicalSignificance": "Household clustering."
      },
      {
        "number": 3,
        "name": "Families numbered in order of visitation",
        "description": "Sequential family count.",
        "genealogicalSignificance": "Distinguishes distinct family units."
      },
      {
        "number": 4,
        "name": "Name of each person whose place of abode was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 5,
        "name": "Color: White (W), Black (B), Mulatto (Mu), Chinese (C), Indian (I)",
        "description": "Racial classification.",
        "genealogicalSignificance": "Racial status."
      },
      {
        "number": 6,
        "name": "Sex (M or F)",
        "description": "Gender.",
        "genealogicalSignificance": "Sex identification."
      },
      {
        "number": 7,
        "name": "Age at last birthday (if under 1, in fractions)",
        "description": "Age in years.",
        "genealogicalSignificance": "Calculates birth year ~1879–1880."
      },
      {
        "number": 8,
        "name": "If born within the census year, give the month",
        "description": "Month of birth for infants born June 1879–May 1880.",
        "genealogicalSignificance": "Pinpoints exact birth month."
      },
      {
        "number": 9,
        "name": "Relationship of each person to the head of this family",
        "description": "Wife, son, daughter, mother-in-law, servant, boarder, etc.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Eliminates guesswork by stating relationships directly!"
      },
      {
        "number": 10,
        "name": "Single",
        "description": "Checkmark if unmarried.",
        "genealogicalSignificance": "Marital status."
      },
      {
        "number": 11,
        "name": "Married",
        "description": "Checkmark if currently married.",
        "genealogicalSignificance": "Marital status."
      },
      {
        "number": 12,
        "name": "Widowed / Divorced (W or D)",
        "description": "Widowed or divorced marker.",
        "genealogicalSignificance": "FIRST census to record legal divorce!"
      },
      {
        "number": 13,
        "name": "Married during census year",
        "description": "Checkmark if wed June 1879–May 1880.",
        "genealogicalSignificance": "Narrows marriage certificate search."
      },
      {
        "number": 14,
        "name": "Profession, occupation or trade of each person",
        "description": "Detailed job title.",
        "genealogicalSignificance": "Socioeconomic standing."
      },
      {
        "number": 15,
        "name": "Number of months this person has been unemployed during census year",
        "description": "Months out of work.",
        "genealogicalSignificance": "Economic hardship indicator."
      },
      {
        "number": 16,
        "name": "Sick or temporarily disabled on day of visit",
        "description": "Nature of temporary illness.",
        "genealogicalSignificance": "Health conditions."
      },
      {
        "number": 17,
        "name": "Blind",
        "description": "Vision impairment checkmark.",
        "genealogicalSignificance": "Disability marker."
      },
      {
        "number": 18,
        "name": "Deaf and dumb",
        "description": "Hearing/speech impairment checkmark.",
        "genealogicalSignificance": "Disability marker."
      },
      {
        "number": 19,
        "name": "Idiotic",
        "description": "Cognitive impairment checkmark.",
        "genealogicalSignificance": "Institutional records lead."
      },
      {
        "number": 20,
        "name": "Insane",
        "description": "Psychiatric condition checkmark.",
        "genealogicalSignificance": "Asylum and hospital leads."
      },
      {
        "number": 21,
        "name": "Maimed, crippled, bedridden, or otherwise permanently disabled",
        "description": "Physical disability description.",
        "genealogicalSignificance": "Civil War injury clues."
      },
      {
        "number": 22,
        "name": "Attended school within the census year",
        "description": "School attendance checkmark.",
        "genealogicalSignificance": "Childhood education."
      },
      {
        "number": 23,
        "name": "Cannot read",
        "description": "Illiteracy checkmark.",
        "genealogicalSignificance": "Literacy status."
      },
      {
        "number": 24,
        "name": "Cannot write",
        "description": "Illiteracy checkmark.",
        "genealogicalSignificance": "Signature ability."
      },
      {
        "number": 25,
        "name": "Place of birth of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "Subject's birthplace."
      },
      {
        "number": 26,
        "name": "Place of birth of Father of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "CRITICAL: Paternal origins even if ancestor was born in the US!"
      },
      {
        "number": 27,
        "name": "Place of birth of Mother of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "CRITICAL: Maternal origins even if ancestor was born in the US!"
      }
    ],
    "genealogicalTips": [
      "1880 is the first federal census to have a Soundex phonetic indexing card system (created under the WPA for households with children aged 10 and under).",
      "Pay close attention to Column 9: a 'Mother-in-law' reveals the maiden name of the wife when her surname matches other court records."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "Why was Francis Amasa Walker's reform important?",
        "answer": "By removing federal patronage Marshals and creating professional census districts with uniform supervisory instructions, the 1880 census achieved unprecedented statistical accuracy."
      }
    ]
  },
  {
    "year": "1890",
    "censusDay": "June 2, 1890 (First Monday of June)",
    "president": "Benjamin Harrison",
    "population": "62,979,766",
    "statesCount": "42 States + Territories",
    "naraMicrofilm": "NARA M407 (3 rolls surviving population); M123 (118 rolls veterans schedules)",
    "era": "The Lost Census Era",
    "tagline": "The Greatest Archival Tragedy: 99% Destroyed in the 1921 Commerce Department Fire",
    "overview": "The 1890 Census is the most famous gap in American genealogy. Innovatively tabulated using Herman Hollerith's electric punch-card tabulating system (which paved the way for modern computing and IBM), the original paper schedules were tragically ruined by smoke and water during the January 10, 1921 fire in the Commerce Department building basement. Only 6,160 individuals on surviving fragments exist today.",
    "historicalContext": [
      "Followed the admission of North Dakota, South Dakota, Montana, and Washington (1889).",
      "The tragic loss of this census led directly to public outcry that culminated in the creation of the National Archives in 1934.",
      "The 1890 Special Veterans Schedules (Schedule 11) for Union veterans survived for half the nation."
    ],
    "enumeratorInstructions": [
      "Use a separate family schedule for each household.",
      "Inquire into Civil War service (Union or Confederate soldier, sailor, or marine) and note wounds received.",
      "Record number of children born to mothers and number still living (first time asked)."
    ],
    "columns": [
      {
        "number": "1–5",
        "name": "Location & Identity",
        "description": "Street, house number, dwelling, family, full name of every person.",
        "genealogicalSignificance": "Primary identification on surviving fragments."
      },
      {
        "number": "6–10",
        "name": "Demographics & Family",
        "description": "Relationship to head, race (White, Black, Mulatto, Quadroon, Octoroon, Chinese, Japanese, Indian), sex, age, marital status.",
        "genealogicalSignificance": "First census with Quadroon/Octoroon categories."
      },
      {
        "number": 11,
        "name": "Number of years married",
        "description": "Years in current marriage.",
        "genealogicalSignificance": "Pinpoints marriage date."
      },
      {
        "number": 12,
        "name": "Mother of how many children (number born)",
        "description": "Total children born.",
        "genealogicalSignificance": "Infant mortality indicator."
      },
      {
        "number": 13,
        "name": "Number of these children living",
        "description": "Surviving children count.",
        "genealogicalSignificance": "Infant mortality calculation."
      },
      {
        "number": "14–16",
        "name": "Birthplaces",
        "description": "Person's birthplace, Father's birthplace, Mother's birthplace.",
        "genealogicalSignificance": "Three-way lineage geography."
      },
      {
        "number": 17,
        "name": "Year of immigration to the United States",
        "description": "Exact calendar arrival year.",
        "genealogicalSignificance": "FIRST census to ask immigration year!"
      },
      {
        "number": 18,
        "name": "Number of years in the United States",
        "description": "Years of US residence.",
        "genealogicalSignificance": "Calculates arrival date."
      },
      {
        "number": 19,
        "name": "Whether naturalized (Naturalized, Alien, Papers filed)",
        "description": "Citizenship legal status.",
        "genealogicalSignificance": "Direct naturalization court record clue."
      },
      {
        "number": "20–24",
        "name": "Occupation & Employment",
        "description": "Profession, months unemployed, employer/employee status.",
        "genealogicalSignificance": "Workplace history."
      },
      {
        "number": "25–27",
        "name": "Education & Language",
        "description": "Attended school, read/write, speak English (or foreign language).",
        "genealogicalSignificance": "Literacy and language assimilation."
      },
      {
        "number": "28–30",
        "name": "Home Ownership & Mortgage",
        "description": "Own/rent, free/mortgaged, farm/house.",
        "genealogicalSignificance": "First census inquiring into home mortgages."
      },
      {
        "number": 31,
        "name": "Civil War Service",
        "description": "Union or Confederate soldier, sailor, or marine, or widow.",
        "genealogicalSignificance": "Direct lead to military service and pension files."
      }
    ],
    "genealogicalTips": [
      "Always check the surviving 1890 Veterans Schedules (NARA M123): schedules from Kentucky through Wyoming survive and list the veteran's rank, company, regiment, dates of enlistment/discharge, and service-related disabilities.",
      "To bridge the 1880–1900 gap, leverage state censuses (e.g., 1885, 1892, 1895), annual city directories, county tax lists, church baptism rolls, and voter registrations."
    ],
    "recordsSurvival": "Surviving population fragments exist for only parts of Alabama, District of Columbia, Georgia, Illinois, Minnesota, New Jersey, New York, North Carolina, Ohio, South Dakota, and Texas (indexed in NARA M407).",
    "faqs": [
      {
        "question": "Did the 1890 census burn in the 1921 fire completely?",
        "answer": "Approximately 25% of the schedules were destroyed by flame; the remainder suffered devastating water and smoke damage. In 1934, Congress authorized the destruction of the damaged remnants after determining they could not be salvaged."
      }
    ]
  },
  {
    "year": "1900",
    "censusDay": "June 1, 1900",
    "president": "William McKinley",
    "population": "76,212,168",
    "statesCount": "45 States + Territories",
    "naraMicrofilm": "NARA T623 (1,854 rolls)",
    "era": "The Immigrant & Family Goldmine",
    "tagline": "The Holy Grail of US Genealogy: Exact Birth Month & Year, Years Married, and Immigration Data",
    "overview": "To compensate for the loss of the 1890 census, the 1900 Census is the most informative decennial schedule ever compiled. It recorded the exact month and year of birth for every person, the number of years married, the number of children born versus living (a poignant record of infant mortality), year of immigration, years in the US, and naturalization status.",
    "historicalContext": [
      "Peak era of European immigration through Ellis Island (opened 1892).",
      "Followed the Spanish-American War (1898); Hawaii and Alaska enumerated."
    ],
    "enumeratorInstructions": [
      "Inquire into the exact month (e.g. 'Oct') and year of birth (e.g. '1864').",
      "For mothers, ask: 'Mother of how many children?' and 'Number of these children living?'.",
      "For foreign-born persons, record year of arrival in the US, number of years in US, and naturalization (Al, Pa, Na)."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Street name",
        "description": "Name of street, avenue, or road.",
        "genealogicalSignificance": "Urban street address."
      },
      {
        "number": 2,
        "name": "House number",
        "description": "Physical house number.",
        "genealogicalSignificance": "Exact urban residence."
      },
      {
        "number": 3,
        "name": "Number of dwelling house in order of visitation",
        "description": "Sequential dwelling count.",
        "genealogicalSignificance": "Neighborhood mapping."
      },
      {
        "number": 4,
        "name": "Number of family in order of visitation",
        "description": "Sequential family count.",
        "genealogicalSignificance": "Household boundaries."
      },
      {
        "number": 5,
        "name": "Name of each person whose usual place of abode on June 1, 1900 was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 6,
        "name": "Relationship of each person to the head of the family",
        "description": "Wife, son, daughter, boarder, lodger, servant, etc.",
        "genealogicalSignificance": "Explicit family relationship."
      },
      {
        "number": 7,
        "name": "Color or race",
        "description": "W (White), B (Black), Ch (Chinese), Jp (Japanese), In (Indian).",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 8,
        "name": "Sex",
        "description": "M (Male) or F (Female).",
        "genealogicalSignificance": "Gender verification."
      },
      {
        "number": 9,
        "name": "Date of birth: Month",
        "description": "Three-letter month abbreviation (e.g. 'Jan', 'Aug').",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Exact month of birth for every individual!"
      },
      {
        "number": 10,
        "name": "Date of birth: Year",
        "description": "Four-digit birth year (e.g. '1864').",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Exact birth year for every individual!"
      },
      {
        "number": 11,
        "name": "Age at last birthday",
        "description": "Age in completed years (or fractions for infants).",
        "genealogicalSignificance": "Cross-checks month and year of birth."
      },
      {
        "number": 12,
        "name": "Whether single, married, widowed, or divorced",
        "description": "S (Single), M (Married), Wd (Widowed), D (Divorced).",
        "genealogicalSignificance": "Marital status."
      },
      {
        "number": 13,
        "name": "Number of years married",
        "description": "Duration of current marriage in years.",
        "genealogicalSignificance": "Pinpoints wedding year directly (e.g., 1900 - years married = wedding year)."
      },
      {
        "number": 14,
        "name": "Mother of how many children",
        "description": "Total children born alive to this mother.",
        "genealogicalSignificance": "CRITICAL: Reveals hidden births and miscarriages."
      },
      {
        "number": 15,
        "name": "Number of these children living",
        "description": "Living children on June 1, 1900.",
        "genealogicalSignificance": "CRITICAL: Pinpoints infant mortality (Column 14 minus Column 15 = deceased children)."
      },
      {
        "number": 16,
        "name": "Place of birth of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "Subject's geographic birthplace."
      },
      {
        "number": 17,
        "name": "Place of birth of father of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "Paternal lineage origin."
      },
      {
        "number": 18,
        "name": "Place of birth of mother of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "Maternal lineage origin."
      },
      {
        "number": 19,
        "name": "Year of immigration to the United States",
        "description": "Four-digit arrival year.",
        "genealogicalSignificance": "Direct lead to passenger ship arrival manifests and Ellis Island records!"
      },
      {
        "number": 20,
        "name": "Number of years in the United States",
        "description": "Duration of US residence.",
        "genealogicalSignificance": "Cross-verifies arrival year."
      },
      {
        "number": 21,
        "name": "Naturalization: Al, Pa, Na",
        "description": "Al (Alien), Pa (First papers / Declaration filed), Na (Naturalized citizen).",
        "genealogicalSignificance": "Tells you whether to look for Declarations of Intention or Final Petitions."
      },
      {
        "number": 22,
        "name": "Occupation, trade, or profession of each person 10 years of age and over",
        "description": "Specific trade or livelihood.",
        "genealogicalSignificance": "Detailed trade background."
      },
      {
        "number": 23,
        "name": "Months not employed during the census year",
        "description": "Count of unemployed months.",
        "genealogicalSignificance": "Economic stability marker."
      },
      {
        "number": 24,
        "name": "Attended school (in months)",
        "description": "Months of school attendance.",
        "genealogicalSignificance": "Childhood education."
      },
      {
        "number": 25,
        "name": "Can read",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy assessment."
      },
      {
        "number": 26,
        "name": "Can write",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy assessment."
      },
      {
        "number": 27,
        "name": "Can speak English",
        "description": "Yes or name of language spoken.",
        "genealogicalSignificance": "Linguistic assimilation."
      },
      {
        "number": 28,
        "name": "Ownership of home: Owned or Rented / Free or Mortgaged / Farm or House",
        "description": "O (Owned), R (Rented), F (Free), M (Mortgaged), F (Farm), H (House), Farm schedule number.",
        "genealogicalSignificance": "Real property ownership and farm schedule leads."
      }
    ],
    "genealogicalTips": [
      "Check the 'Children Born vs. Living' count: if a mother had 8 children born and 5 living, 3 children died prior to 1900—look for cemetery plots and infant death records.",
      "Naturalization codes: 'Pa' means the ancestor filed their 'First Papers' (Declaration of Intention); 'Na' means full citizenship papers were issued."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "What if the birth year in 1900 doesn't match their gravestone?",
        "answer": "Censuses reflect informant memory, whereas gravestones were carved after death. Use the 1900 month and year as a starting search window for county birth registers and church baptisms."
      }
    ]
  },
  {
    "year": "1910",
    "censusDay": "April 15, 1910",
    "president": "William Howard Taft",
    "population": "92,228,496",
    "statesCount": "46 States + Territories",
    "naraMicrofilm": "NARA T624 (1,784 rolls)",
    "era": "The Immigrant & Family Goldmine",
    "tagline": "Mother Tongue, Native Language & Civil War Veteran Status",
    "overview": "The 1910 Census was moved from June to April 15 to reduce urban summer moving inaccuracies. It expanded immigration inquiries by recording the 'Mother Tongue' (native language) of both the immigrant and their foreign-born parents and included a dedicated column asking whether the individual was an American Civil War veteran (Union or Confederate).",
    "historicalContext": [
      "Oklahoma (1907) enumerated as a state; Arizona and New Mexico on the cusp of statehood.",
      "First census to distinguish between employer, employee, and self-employed status."
    ],
    "enumeratorInstructions": [
      "Record native mother tongue in addition to country of origin.",
      "Ask whether a survivor of the Union or Confederate Army or Navy (UA, UN, CA, CN).",
      "Record number of years in present marriage, and whether married once (M1) or more than once (M2)."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Street, avenue, road, etc.",
        "description": "Street name.",
        "genealogicalSignificance": "Urban street address."
      },
      {
        "number": 2,
        "name": "House number",
        "description": "Building number.",
        "genealogicalSignificance": "Urban location."
      },
      {
        "number": 3,
        "name": "Number of dwelling house in order of visitation",
        "description": "Dwelling sequence.",
        "genealogicalSignificance": "Dwelling count."
      },
      {
        "number": 4,
        "name": "Number of family in order of visitation",
        "description": "Family sequence.",
        "genealogicalSignificance": "Family boundaries."
      },
      {
        "number": 5,
        "name": "Name of each person whose place of abode on April 15, 1910 was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 6,
        "name": "Relationship of each person to the head of the family",
        "description": "Wife, son, daughter, father-in-law, boarder, lodger, etc.",
        "genealogicalSignificance": "Explicit kinship."
      },
      {
        "number": 7,
        "name": "Sex",
        "description": "M or F.",
        "genealogicalSignificance": "Gender identification."
      },
      {
        "number": 8,
        "name": "Color or race",
        "description": "W (White), B (Black), Mu (Mulatto), Ch (Chinese), Jp (Japanese), In (Indian).",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 9,
        "name": "Age at last birthday",
        "description": "Age in years.",
        "genealogicalSignificance": "Age estimate."
      },
      {
        "number": 10,
        "name": "Whether single, married, widowed, or divorced",
        "description": "S, M, Wd, D.",
        "genealogicalSignificance": "Marital status."
      },
      {
        "number": 11,
        "name": "Number of years of present marriage",
        "description": "Duration in years; note if M1 (first marriage) or M2 (second or later marriage).",
        "genealogicalSignificance": "CRITICAL: M1 vs M2 reveals whether previous spouses existed!"
      },
      {
        "number": 12,
        "name": "Mother of how many children (number born)",
        "description": "Total children born alive.",
        "genealogicalSignificance": "Infant mortality baseline."
      },
      {
        "number": 13,
        "name": "Number of these children living",
        "description": "Living children on April 15, 1910.",
        "genealogicalSignificance": "Infant mortality calculation."
      },
      {
        "number": 14,
        "name": "Place of birth of this person",
        "description": "State, Territory, or foreign Country.",
        "genealogicalSignificance": "Subject's geographic origin."
      },
      {
        "number": 15,
        "name": "Mother tongue of this person",
        "description": "Native language spoken (e.g. 'Polish', 'Yiddish', 'German', 'Italian').",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Solves multi-ethnic empires (e.g., Austria-Hungary vs Poland/Slovakia)!"
      },
      {
        "number": 16,
        "name": "Place of birth of father of this person",
        "description": "Country or state of father.",
        "genealogicalSignificance": "Paternal origin."
      },
      {
        "number": 17,
        "name": "Mother tongue of father",
        "description": "Paternal native language.",
        "genealogicalSignificance": "Paternal linguistic origin."
      },
      {
        "number": 18,
        "name": "Place of birth of mother of this person",
        "description": "Country or state of mother.",
        "genealogicalSignificance": "Maternal origin."
      },
      {
        "number": 19,
        "name": "Mother tongue of mother",
        "description": "Maternal native language.",
        "genealogicalSignificance": "Maternal linguistic origin."
      },
      {
        "number": 20,
        "name": "Year of immigration to the United States",
        "description": "Arrival year.",
        "genealogicalSignificance": "Leads to ship passenger lists."
      },
      {
        "number": 21,
        "name": "Whether naturalized or alien",
        "description": "Al (Alien), Pa (Papers filed), Na (Naturalized).",
        "genealogicalSignificance": "Citizenship documentation lead."
      },
      {
        "number": 22,
        "name": "Whether able to speak English",
        "description": "English or primary language spoken.",
        "genealogicalSignificance": "Assimilation marker."
      },
      {
        "number": 23,
        "name": "Trade or profession, or particular kind of work done",
        "description": "Specific job title (e.g. 'Weaver', 'Carpenter').",
        "genealogicalSignificance": "Detailed trade."
      },
      {
        "number": 24,
        "name": "General nature of industry, business, or establishment",
        "description": "Industry (e.g. 'Silk mill', 'Coal mine').",
        "genealogicalSignificance": "Employer sector."
      },
      {
        "number": 25,
        "name": "Whether an employer, employee, or working on own account",
        "description": "Em (Employer), W (Wage worker), OA (Own account).",
        "genealogicalSignificance": "Business owner vs wage laborer."
      },
      {
        "number": 26,
        "name": "Whether out of work on April 15, 1910",
        "description": "Yes or No.",
        "genealogicalSignificance": "Current unemployment status."
      },
      {
        "number": 27,
        "name": "Number of weeks out of work during year 1909",
        "description": "Unemployed weeks in 1909.",
        "genealogicalSignificance": "Economic hardship."
      },
      {
        "number": 28,
        "name": "Whether able to read",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy."
      },
      {
        "number": 29,
        "name": "Whether able to write",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy."
      },
      {
        "number": 30,
        "name": "Attended school at any time since September 1, 1909",
        "description": "School attendance.",
        "genealogicalSignificance": "Childhood education."
      },
      {
        "number": 31,
        "name": "Owned or rented / Free or mortgaged / Farm or house",
        "description": "O, R, F, M, F, H, Farm schedule #.",
        "genealogicalSignificance": "Home ownership and farm records."
      },
      {
        "number": 32,
        "name": "Whether a survivor of the Union or Confederate Army or Navy",
        "description": "UA (Union Army), UN (Union Navy), CA (Confederate Army), CN (Confederate Navy).",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Directly identifies Civil War military veterans!"
      }
    ],
    "genealogicalTips": [
      "The 'M1' vs 'M2' indicator in Column 11 is critical: if a husband has M1 and the wife has M2, the wife was previously widowed or divorced.",
      "Mother Tongue is indispensable for European ancestors from partitioned nations like Poland, Lithuania, and Ukraine where the official country was recorded as 'Russia' or 'Austria'."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "What does UA or CA mean in column 32?",
        "answer": "UA stands for Union Army; UN for Union Navy; CA for Confederate Army; and CN for Confederate Navy. This confirms Civil War military service."
      }
    ]
  },
  {
    "year": "1920",
    "censusDay": "January 5, 1920",
    "president": "Woodrow Wilson",
    "population": "106,021,537",
    "statesCount": "48 States (All 48 Contiguous States Complete)",
    "naraMicrofilm": "NARA T625 (2,076 rolls)",
    "era": "The Immigrant & Family Goldmine",
    "tagline": "Post-WWI European Realignment & First Winter Census",
    "overview": "Conducted in the dead of winter (Census Day was January 5, 1920), the 1920 Census reflected the dramatic redrawing of European national boundaries following World War I and the collapse of the Austro-Hungarian, German, Russian, and Ottoman Empires. It was also the first census to include all 48 contiguous states following the admissions of New Mexico and Arizona in 1912.",
    "historicalContext": [
      "First census conducted following World War I (1914–1918) and the 1918 Influenza Pandemic.",
      "Enumerators were instructed to record post-WWI countries (e.g., Poland, Czechoslovakia, Yugoslavia, Austria, Hungary)."
    ],
    "enumeratorInstructions": [
      "Record European birthplaces according to new boundaries established after the 1919 Treaty of Versailles.",
      "Inquire into the EXACT year of naturalization in addition to the year of immigration.",
      "Conduct enumeration as of January 5, 1920."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Street, avenue, road, etc.",
        "description": "Street name.",
        "genealogicalSignificance": "Urban street address."
      },
      {
        "number": 2,
        "name": "House number or farm",
        "description": "House number.",
        "genealogicalSignificance": "Precise urban residence."
      },
      {
        "number": 3,
        "name": "Number of dwelling house in order of visitation",
        "description": "Dwelling sequence.",
        "genealogicalSignificance": "Building clustering."
      },
      {
        "number": 4,
        "name": "Number of family in order of visitation",
        "description": "Family sequence.",
        "genealogicalSignificance": "Family boundaries."
      },
      {
        "number": 5,
        "name": "Name of each person whose place of abode was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 6,
        "name": "Relationship of each person to the head of the family",
        "description": "Wife, son, daughter, lodger, boarder, inmate, etc.",
        "genealogicalSignificance": "Family relationship."
      },
      {
        "number": 7,
        "name": "Home owned or rented (O or R)",
        "description": "Tenure of home.",
        "genealogicalSignificance": "Real estate status."
      },
      {
        "number": 8,
        "name": "If owned, free or mortgaged (F or M)",
        "description": "Mortgage status.",
        "genealogicalSignificance": "Financial standing."
      },
      {
        "number": 9,
        "name": "Sex (M or F)",
        "description": "Gender.",
        "genealogicalSignificance": "Sex identification."
      },
      {
        "number": 10,
        "name": "Color or race",
        "description": "W, B, Mu, Ch, Jp, In.",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 11,
        "name": "Age at last birthday",
        "description": "Age in years.",
        "genealogicalSignificance": "Calculates birth year ~1919–1920."
      },
      {
        "number": 12,
        "name": "Single, married, widowed, or divorced",
        "description": "S, M, W, D.",
        "genealogicalSignificance": "Marital status."
      },
      {
        "number": 13,
        "name": "Year of immigration to the United States",
        "description": "Four-digit arrival year.",
        "genealogicalSignificance": "Ship manifest lead."
      },
      {
        "number": 14,
        "name": "Naturalized or alien",
        "description": "Na (Naturalized), Pa (First papers), Al (Alien).",
        "genealogicalSignificance": "Citizenship status."
      },
      {
        "number": 15,
        "name": "If naturalized, year of naturalization",
        "description": "Exact calendar year naturalized.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Only federal census asking for the EXACT YEAR of naturalization!"
      },
      {
        "number": 16,
        "name": "Attended school any time since September 1, 1919",
        "description": "School attendance.",
        "genealogicalSignificance": "Childhood education."
      },
      {
        "number": 17,
        "name": "Whether able to read",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy."
      },
      {
        "number": 18,
        "name": "Whether able to write",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy."
      },
      {
        "number": 19,
        "name": "Place of birth of this person",
        "description": "State or foreign country (post-WWI boundaries).",
        "genealogicalSignificance": "Subject's birthplace."
      },
      {
        "number": 20,
        "name": "Mother tongue of this person",
        "description": "Native language.",
        "genealogicalSignificance": "Linguistic heritage."
      },
      {
        "number": 21,
        "name": "Place of birth of father",
        "description": "State or foreign country.",
        "genealogicalSignificance": "Paternal origin."
      },
      {
        "number": 22,
        "name": "Mother tongue of father",
        "description": "Paternal language.",
        "genealogicalSignificance": "Paternal linguistic heritage."
      },
      {
        "number": 23,
        "name": "Place of birth of mother",
        "description": "State or foreign country.",
        "genealogicalSignificance": "Maternal origin."
      },
      {
        "number": 24,
        "name": "Mother tongue of mother",
        "description": "Maternal language.",
        "genealogicalSignificance": "Maternal linguistic heritage."
      },
      {
        "number": 25,
        "name": "Whether able to speak English",
        "description": "Yes or No.",
        "genealogicalSignificance": "English proficiency."
      },
      {
        "number": 26,
        "name": "Trade, profession, or particular kind of work done",
        "description": "Job title (e.g. 'Machinist', 'Farmer').",
        "genealogicalSignificance": "Occupation."
      },
      {
        "number": 27,
        "name": "Industry, business, or establishment",
        "description": "Workplace industry (e.g. 'Auto factory', 'Retail grocery').",
        "genealogicalSignificance": "Industry sector."
      },
      {
        "number": 28,
        "name": "Employer, salary/wage worker, or working on own account",
        "description": "Em, W, OA.",
        "genealogicalSignificance": "Employment class."
      },
      {
        "number": 29,
        "name": "Number of farm schedule",
        "description": "Farm schedule sequence number.",
        "genealogicalSignificance": "Agricultural census record lead."
      }
    ],
    "genealogicalTips": [
      "Column 15 ('Year of naturalization') is a goldmine: use the exact year to request court naturalization records directly from regional NARA branches.",
      "Because the census was taken in early January, families who normally engaged in summer agricultural migration were enumerated at their winter residence."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "Why did European birthplaces change between 1910 and 1920?",
        "answer": "World War I dissolved the Austro-Hungarian, German, and Russian Empires. An ancestor listed as born in 'Austria' in 1910 might be listed as born in 'Poland' or 'Czechoslovakia' in 1920."
      }
    ]
  },
  {
    "year": "1930",
    "censusDay": "April 1, 1930",
    "president": "Herbert Hoover",
    "population": "122,775,046",
    "statesCount": "48 States + Territories",
    "naraMicrofilm": "NARA T626 (2,667 rolls)",
    "era": "The Immigrant & Family Goldmine",
    "tagline": "The Great Depression, Radio Sets, Age at First Marriage & Military Veteran Status",
    "overview": "Conducted six months after the catastrophic Wall Street Stock Market Crash of October 1929, the 1930 Census captures American families at the onset of the Great Depression. It asked several unique questions: Column 7 asked whether the household owned a 'Radio set' (measuring modern mass media penetration), Column 14 asked for the ancestor's exact age at first marriage, and Column 29 inquired into veteran status across all American wars.",
    "historicalContext": [
      "Conducted during the early months of the Great Depression and the onset of the Dust Bowl.",
      "First census to enumerate 'Mexican' as a separate racial category (Schedule Instructions)."
    ],
    "enumeratorInstructions": [
      "Inquire: 'Does this family own a radio set?' (Column 7).",
      "Ask: 'Age at first marriage?' for married, widowed, and divorced individuals.",
      "Inquire whether a veteran of the U.S. military or naval forces, and specify the war (WW, Sp, Civ, Phil, Box)."
    ],
    "columns": [
      {
        "number": 1,
        "name": "Street, avenue, road, etc.",
        "description": "Street name.",
        "genealogicalSignificance": "Urban street address."
      },
      {
        "number": 2,
        "name": "House number",
        "description": "Building number.",
        "genealogicalSignificance": "Urban residence."
      },
      {
        "number": 3,
        "name": "Number of dwelling house in order of visitation",
        "description": "Dwelling sequence.",
        "genealogicalSignificance": "Dwelling sequence."
      },
      {
        "number": 4,
        "name": "Number of family in order of visitation",
        "description": "Family sequence.",
        "genealogicalSignificance": "Family sequence."
      },
      {
        "number": 5,
        "name": "Name of each person whose place of abode was in this family",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 6,
        "name": "Relationship of each person to the head of the family",
        "description": "Wife, son, daughter, lodger, partner, etc.",
        "genealogicalSignificance": "Family relationship."
      },
      {
        "number": 7,
        "name": "Home owned or rented (O or R)",
        "description": "Tenure of home.",
        "genealogicalSignificance": "Real estate status."
      },
      {
        "number": 8,
        "name": "Value of home (if owned) or monthly rental (if rented)",
        "description": "Dollar property value or rent.",
        "genealogicalSignificance": "Depression-era economic indicator."
      },
      {
        "number": 9,
        "name": "Radio set: Does this family own a radio set? (R)",
        "description": "'R' if family owns a radio set.",
        "genealogicalSignificance": "Cultural and technological marker."
      },
      {
        "number": 10,
        "name": "Does this family live on a farm? (Yes or No)",
        "description": "Farm residency.",
        "genealogicalSignificance": "Rural agricultural status."
      },
      {
        "number": 11,
        "name": "Sex (M or F)",
        "description": "Gender.",
        "genealogicalSignificance": "Sex identification."
      },
      {
        "number": 12,
        "name": "Color or race",
        "description": "W, B, Mex (Mexican), In (Indian), Ch, Jp, Fil (Filipino), Hin (Hindu), Kor (Korean).",
        "genealogicalSignificance": "Expanded racial classifications."
      },
      {
        "number": 13,
        "name": "Age at last birthday",
        "description": "Age in years.",
        "genealogicalSignificance": "Age estimate."
      },
      {
        "number": 14,
        "name": "Marital condition: Single, Married, Widowed, Divorced (S, M, W, D)",
        "description": "Marital status.",
        "genealogicalSignificance": "Marital condition."
      },
      {
        "number": 15,
        "name": "Age at first marriage",
        "description": "Exact age when individual was married for the first time.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Directly calculates first wedding year (Birth year + Age at first marriage)!"
      },
      {
        "number": 16,
        "name": "Attended school any time since September 1, 1929",
        "description": "School attendance.",
        "genealogicalSignificance": "Education."
      },
      {
        "number": 17,
        "name": "Whether able to read and write",
        "description": "Yes or No.",
        "genealogicalSignificance": "Literacy."
      },
      {
        "number": 18,
        "name": "Place of birth of this person",
        "description": "State or foreign country.",
        "genealogicalSignificance": "Subject's birthplace."
      },
      {
        "number": 19,
        "name": "Place of birth of father",
        "description": "State or foreign country.",
        "genealogicalSignificance": "Paternal origin."
      },
      {
        "number": 20,
        "name": "Place of birth of mother",
        "description": "State or foreign country.",
        "genealogicalSignificance": "Maternal origin."
      },
      {
        "number": 21,
        "name": "Language spoken in home before coming to the United States",
        "description": "Native language (mother tongue).",
        "genealogicalSignificance": "Linguistic heritage."
      },
      {
        "number": 22,
        "name": "Year of immigration to the United States",
        "description": "Arrival year.",
        "genealogicalSignificance": "Ship manifest lead."
      },
      {
        "number": 23,
        "name": "Naturalization: Na, Pa, Al",
        "description": "Citizenship status.",
        "genealogicalSignificance": "Court naturalization lead."
      },
      {
        "number": 24,
        "name": "Whether able to speak English",
        "description": "Yes or No.",
        "genealogicalSignificance": "Language proficiency."
      },
      {
        "number": 25,
        "name": "Trade, profession, or particular kind of work done",
        "description": "Job title (e.g. 'Stenographer', 'Chauffeur').",
        "genealogicalSignificance": "Occupation."
      },
      {
        "number": 26,
        "name": "Industry, business, or establishment",
        "description": "Workplace sector (e.g. 'Dry goods store', 'Steam railroad').",
        "genealogicalSignificance": "Industry."
      },
      {
        "number": 27,
        "name": "Class of worker",
        "description": "E (Employer), W (Wage/salary worker), OA (Own account), NP (Unpaid family worker).",
        "genealogicalSignificance": "Employment class."
      },
      {
        "number": 28,
        "name": "Employment: Whether actually at work yesterday (Yes or No)",
        "description": "Work status on day before visit.",
        "genealogicalSignificance": "Depression unemployment marker."
      },
      {
        "number": 29,
        "name": "If not, line number on Unemployment Schedule",
        "description": "Cross-reference line number.",
        "genealogicalSignificance": "Leads to 1930 Unemployment Schedule."
      },
      {
        "number": 30,
        "name": "Whether a veteran of the U.S. military or naval forces mobilized for any war or expedition (Yes or No)",
        "description": "Veteran indicator.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Confirms military service!"
      },
      {
        "number": 31,
        "name": "What war or expedition? (WW, Sp, Civ, Phil, Box, Mex)",
        "description": "WW (World War I), Sp (Spanish-American), Civ (Civil War), Phil (Philippine), Box (Boxer Rebellion), Mex (Mexican Expedition).",
        "genealogicalSignificance": "Specific military conflict identifier."
      },
      {
        "number": 32,
        "name": "Number of farm schedule",
        "description": "Farm schedule reference number.",
        "genealogicalSignificance": "Agricultural census record lead."
      }
    ],
    "genealogicalTips": [
      "Use Column 15 ('Age at first marriage') in combination with current age: if a 48-year-old wife reports age 19 at first marriage, she married ~1901. If she is listed with a new husband who married at 40, look for a prior marriage.",
      "The 'Radio set' column is a fascinating cultural metric: in 1930, radio ownership was a symbol of middle-class connectivity during the Great Depression."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "What does 'Mex' mean in the 1930 color column?",
        "answer": "1930 was the only federal census to classify individuals of Mexican birth or descent who were not definitely recognized as White, Negro, Indian, Chinese, or Japanese under a separate 'Mex' racial code."
      }
    ]
  },
  {
    "year": "1940",
    "censusDay": "April 1, 1940",
    "president": "Franklin D. Roosevelt",
    "population": "132,164,569",
    "statesCount": "48 States + Territories",
    "naraMicrofilm": "Digital only (NARA Record Group 29)",
    "era": "The Modern Era",
    "tagline": "First Census with Supplemental Questions, Educational Attainment, 1935 Migration & Wage Income",
    "overview": "Administered during the twilight of the Great Depression and on the eve of World War II, the 1940 Census was the most scientifically advanced enumeration in American history. It introduced statistical sampling (asking 16 supplemental questions to two individuals per page, marked on lines 14 and 29), recorded highest grade of school completed, asked where the person lived on April 1, 1935 (tracking Dust Bowl and urban migration), and recorded exact wage income.",
    "historicalContext": [
      "Conducted during President Franklin D. Roosevelt's New Deal recovery programs.",
      "Tracks New Deal public emergency work (WPA, CCC, NYA).",
      "First census released purely in digital format by the National Archives (April 2, 2012)."
    ],
    "enumeratorInstructions": [
      "Mark the informant with a circled cross (⨂) to identify who supplied the household data.",
      "Inquire into residence on April 1, 1935 (five years prior) to document internal migration.",
      "Ask supplemental questions for individuals whose names appear on sample lines 14 and 29."
    ],
    "columns": [
      {
        "number": "1–4",
        "name": "Location: Street, house number, household visitation #",
        "description": "Physical street address and visitation sequence.",
        "genealogicalSignificance": "Exact geographic residence."
      },
      {
        "number": "5–6",
        "name": "Home Ownership & Value: Own/rent, monthly rental or value, farm status",
        "description": "Tenure, property valuation, farm flag.",
        "genealogicalSignificance": "Economic wealth and land ownership."
      },
      {
        "number": 7,
        "name": "Name of each person whose usual place of abode was in this household",
        "description": "Full given and surname; note circled cross (⨂) indicating the informant.",
        "genealogicalSignificance": "CRITICAL: The circled cross identifies exactly WHO gave the census information!"
      },
      {
        "number": 8,
        "name": "Relationship of this person to the head of the household",
        "description": "Wife, son, daughter, lodger, partner, grandson, etc.",
        "genealogicalSignificance": "Explicit kinship."
      },
      {
        "number": 9,
        "name": "Sex (M or F)",
        "description": "Gender.",
        "genealogicalSignificance": "Sex identification."
      },
      {
        "number": 10,
        "name": "Color or race",
        "description": "W, Neg, In, Ch, Jp, Fil, Hin, Kor.",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 11,
        "name": "Age at last birthday",
        "description": "Age in years.",
        "genealogicalSignificance": "Calculates birth year ~1939–1940."
      },
      {
        "number": 12,
        "name": "Marital status: Single, Married, Widowed, Divorced (S, M, W, D)",
        "description": "Marital status.",
        "genealogicalSignificance": "Marital condition."
      },
      {
        "number": 13,
        "name": "Attended school or college since March 1, 1940",
        "description": "Yes or No.",
        "genealogicalSignificance": "School attendance."
      },
      {
        "number": 14,
        "name": "Highest grade of school completed",
        "description": "Elementary (1–8), High School (H1–H4), College (C1–C5+).",
        "genealogicalSignificance": "FIRST census recording exact educational attainment!"
      },
      {
        "number": 15,
        "name": "Place of birth",
        "description": "State, Territory, or foreign country.",
        "genealogicalSignificance": "Geographic birthplace."
      },
      {
        "number": 16,
        "name": "Citizenship of foreign born: Na, Pa, Al, AmCit",
        "description": "Naturalized, First papers, Alien, Born abroad of American parents.",
        "genealogicalSignificance": "Naturalization documentation lead."
      },
      {
        "number": "17–20",
        "name": "Residence on April 1, 1935 (5 Years Ago)",
        "description": "City/Town, County, State, and whether on a farm.",
        "genealogicalSignificance": "GENEALOGICAL GOLD: Tracks Dust Bowl and Great Depression migration between 1935 and 1940!"
      },
      {
        "number": "21–25",
        "name": "Employment Status & New Deal Work",
        "description": "Employed in private/non-emergency work; assigned to public emergency work (WPA, CCC, NYA); seeking work; or home/school/unable.",
        "genealogicalSignificance": "Reveals New Deal employment (WPA, CCC) and Depression hardship."
      },
      {
        "number": "26–28",
        "name": "Occupation, Industry, and Class of Worker",
        "description": "Specific trade, industry, and class (PW, GW, OA, NP).",
        "genealogicalSignificance": "Detailed job description."
      },
      {
        "number": 29,
        "name": "Number of weeks worked in 1939",
        "description": "Weeks of full-time or part-time work.",
        "genealogicalSignificance": "Work consistency."
      },
      {
        "number": 30,
        "name": "Income in 1939: Amount of money wages or salary received",
        "description": "Dollar wages up to $5,000+.",
        "genealogicalSignificance": "FIRST census to record actual annual dollar wages!"
      },
      {
        "number": 31,
        "name": "Income in 1939: Received other income of $50 or more (Yes/No)",
        "description": "Interest, dividends, farm revenue.",
        "genealogicalSignificance": "Financial independence marker."
      },
      {
        "number": 32,
        "name": "Number of farm schedule",
        "description": "Farm schedule sequence.",
        "genealogicalSignificance": "Agricultural schedule lead."
      },
      {
        "number": "33–48 (Sample Lines 14 & 29)",
        "name": "Supplemental Questions (Sample Inquiries)",
        "description": "16 additional inquiries for 2 people per page: Name; Birthplace of Father & Mother; Mother Tongue; Veteran status (War & peacetime); Social Security number (Does person have a federal Social Security number? Deduktions for old-age insurance?); Usual Occupation/Industry; Women's marriage history (Has this woman been married more than once? Age at first marriage? Number of children born).",
        "genealogicalSignificance": "MASSIVE GENEALOGICAL BONANZA: Parental birthplaces, Social Security number leads, military service, and fertility history for sample ancestors!"
      }
    ],
    "genealogicalTips": [
      "Look for the circled cross (⨂) next to a name in Column 7: this denotes the informant. If the 15-year-old daughter was the informant, ages and birthplaces may be approximate!",
      "If your ancestor was enumerated on line 14 or line 29, scroll to the bottom of the sheet for the 16 Supplemental Questions—including whether they had a Social Security card and their mother's birthplace."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "What does WPA, CCC, or NYA mean in column 22?",
        "answer": "These designate New Deal emergency relief work: WPA (Works Progress Administration), CCC (Civilian Conservation Corps), or NYA (National Youth Administration)."
      }
    ]
  },
  {
    "year": "1950",
    "censusDay": "April 1, 1950",
    "president": "Harry S. Truman",
    "population": "151,325,798",
    "statesCount": "48 States + Territories (AK, HI, PR, VI, GU, CZ)",
    "naraMicrofilm": "Digital only (Released April 1, 2022 by NARA)",
    "era": "The Modern Era",
    "tagline": "The Post-WWII Baby Boom Census: Unsealed April 2022",
    "overview": "Released to the public on April 1, 2022 under the statutory 72-Year Privacy Rule (44 U.S.C. § 2108), the 1950 Census is the most recent federal enumeration accessible to researchers. It chronicles post-World War II America: the GI Bill, the explosive suburban migration, the inception of the Baby Boom, and television adoption.",
    "historicalContext": [
      "Conducted during the post-WWII economic expansion, early Cold War, and months before the Korean War.",
      "First census to count Americans living abroad (military and civilian employees)."
    ],
    "enumeratorInstructions": [
      "Enumerate every person whose usual residence was in the dwelling on April 1, 1950.",
      "Administer 12 supplemental questions to individuals falling on designated sample lines (6 individuals per 30-person sheet)."
    ],
    "columns": [
      {
        "number": "1–6",
        "name": "Location & Household Data",
        "description": "Street name, house number, serial number of dwelling, whether on a farm, whether on 3+ acres.",
        "genealogicalSignificance": "Precise suburban or rural address."
      },
      {
        "number": 7,
        "name": "Name of each person whose usual place of abode was in this household",
        "description": "Full given and surname.",
        "genealogicalSignificance": "Primary index."
      },
      {
        "number": 8,
        "name": "Relationship to head of household",
        "description": "Head, wife, son, daughter, grandson, lodger, guest, patient.",
        "genealogicalSignificance": "Kinship structure."
      },
      {
        "number": 9,
        "name": "Race: White (W), Negro (Neg), American Indian (Ind), Chinese (Chi), Japanese (Jap), Other",
        "description": "Racial classification.",
        "genealogicalSignificance": "Racial classification."
      },
      {
        "number": 10,
        "name": "Sex (M or F)",
        "description": "Gender.",
        "genealogicalSignificance": "Sex identification."
      },
      {
        "number": 11,
        "name": "Age at last birthday (if under 1, in months)",
        "description": "Age in years.",
        "genealogicalSignificance": "Calculates birth year ~1949–1950."
      },
      {
        "number": 12,
        "name": "Marital status: Mar, Wd, D, Sep, Never",
        "description": "Married, Widowed, Divorced, Separated, Never married.",
        "genealogicalSignificance": "FIRST census to include 'Separated' (Sep) as distinct from Divorced!"
      },
      {
        "number": 13,
        "name": "State, Territory, or foreign country of birth",
        "description": "Birthplace.",
        "genealogicalSignificance": "Geographic origin."
      },
      {
        "number": 14,
        "name": "If foreign born, is he naturalized? (Yes, No, AP)",
        "description": "Yes, No, AP (Born abroad of American parents).",
        "genealogicalSignificance": "Naturalization documentation lead."
      },
      {
        "number": "15–19",
        "name": "Employment Status (Last Week)",
        "description": "Working, looking for work, with a job but not at work, keeping house, unable to work, other.",
        "genealogicalSignificance": "Post-war employment status."
      },
      {
        "number": "20a–20c",
        "name": "Occupation, Industry, and Class of Worker",
        "description": "Detailed trade, business/industry, and worker class (P, G, O, NP).",
        "genealogicalSignificance": "Precise post-war career description."
      },
      {
        "number": "Sample Lines (Lines 4, 9, 14, 19, 24, 29)",
        "name": "Supplemental Sample Inquiries (6 persons per page)",
        "description": "Living in same house a year ago? (If no, city/county/state); Country of birth of father & mother; Highest grade of school attended and completed; Total income in 1949 (wages, own business, interest/dividends/pensions); Income of relatives in household; Military veteran status (Did he serve in U.S. Armed Forces? WWI, WWII, or peacetime); For women married: Has she been married more than once? Number of years in present marriage? Children born alive.",
        "genealogicalSignificance": "CRITICAL: Six sample individuals per page receive in-depth questions on WWII military service, 1949 income, parental foreign birthplaces, and fertility!"
      }
    ],
    "genealogicalTips": [
      "The 1950 Census is newly unsealed and searchable by AI handwriting recognition at the official National Archives site (1950census.archives.gov).",
      "Because the 1950 Census is within living memory for many family members, use it to interview elderly parents and grandparents about their childhood homes and neighbors."
    ],
    "recordsSurvival": "Complete nationwide.",
    "faqs": [
      {
        "question": "When will the 1960 census be opened to the public?",
        "answer": "Under the 72-Year Privacy Rule, the 1960 US Federal Census will be released by the National Archives on April 1, 2032."
      }
    ]
  }
];

export interface CensusEra {
  name: string;
  years: string[];
  description: string;
}

export const CENSUS_ERAS: CensusEra[] = [
  {
    name: "Head of Household Era",
    years: ["1790", "1800", "1810", "1820", "1830", "1840"],
    description: "Only the head of family was named; all other occupants were tallied by tick-marks in demographic age, sex, and color brackets."
  },
  {
    name: "Early Every-Name Era",
    years: ["1850", "1860"],
    description: "The every-name revolution: every free person was named with age, occupation, real estate value, and state or country of birth."
  },
  {
    name: "Reconstruction & Lineage Goldmine",
    years: ["1870", "1880"],
    description: "First federal enumeration of formerly enslaved African Americans by name (1870) and introduction of explicit family relationships and parental birthplaces (1880)."
  },
  {
    name: "The Lost Census",
    years: ["1890"],
    description: "The 1890 population census was virtually destroyed in the 1921 Commerce Department fire; surviving fragments and Union Veterans schedules provide critical clues."
  },
  {
    name: "The Immigrant & Family Goldmine",
    years: ["1900", "1910", "1920", "1930"],
    description: "Peak immigration era: recorded birth month and year, years married, children born vs living, arrival year, naturalization status, mother tongue, and military service."
  },
  {
    name: "The Modern Era",
    years: ["1940", "1950"],
    description: "Scientific statistical sampling, educational attainment, 5-year migration tracking, New Deal emergency relief work, and post-WWII baby boom data."
  }
];

