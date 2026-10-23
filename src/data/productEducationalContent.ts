export interface ProductEducationalSection {
  title: string;
  subtitle: string;
  methodologyOverview: string;
  standardsBadge: string;
  principles: {
    heading: string;
    body: string;
  }[];
  archivalNotes: string;
}

export const PRODUCT_EDUCATIONAL_CONTENT: Record<string, ProductEducationalSection> = {
  "master-heritage-vault": {
    title: "Archival Engineering: The Complete Family Heritage Vault",
    subtitle: "Built to Elizabeth Shown Mills Evidence Standards & ISO 11108 Preservation Protocols",
    standardsBadge: "NGS & Mills Citation Standard",
    methodologyOverview:
      "A family history archive is only as durable as its underlying documentation standards. Casual research files fall apart because they lack standardized source classification and fail to bridge the gap between physical binder paperwork and digital research files. The Master Heritage Vault was engineered specifically to implement Elizabeth Shown Mills' renowned Evidence Explained conventions while adhering to ISO 11108 permanence guidelines, guaranteeing that your lifetime of discoveries will remain readable and legally verifiable for centuries.",
    principles: [
      {
        heading: "1. Dual-Layer Source Categorization (Mills Evidence Explained Framework)",
        body: "Following Elizabeth Shown Mills' genealogical proof conventions, every template in this vault forces a clear distinction between original records and derivative compilations, primary information from firsthand witnesses versus secondary secondhand accounts, and direct proof versus indirect circumstantial clues. By classifying every birth record, baptismal entry, and probate testament on our dedicated evidence evaluation worksheets, you avoid the common trap of adopting family myths or conflating two ancestors with identical names.",
      },
      {
        heading: "2. Mathematical Ahnentafel Numbering & Collateral Line Control",
        body: "Alphabetical filing fails once your research spans more than three generations due to maternal surname changes. The Vault structures your ancestors using the universal Sosa-Stradonitz (Ahnentafel) numbering standard (Person 1 is root, father is 2n, mother is 2n+1). This mathematical hierarchy is reinforced by dedicated collateral line tracking registers and maiden name matrices, keeping uncles, aunts, and in-laws organized without cluttering your direct ancestral lineage.",
      },
      {
        heading: "3. Metes-and-Bounds Land Platting & Probate Reconstruction",
        body: "Before modern county land grids, property boundaries were measured by tree stumps, river forks, and stone cairns using rods and chains. Our land acquisition worksheets include 360-degree compass protractor grids allowing you to recreate historical deeds from county deed books. Paired with our estate inventory and probate distribution forms, you can reconstruct ancestral homesteads even in burned-county jurisdictions.",
      },
      {
        heading: "4. Hybrid Physical-Digital Permanence (Vector PDFs & GoodNotes Layers)",
        body: "Cloud logins expire, corporate databases change terms, and hard drives corrupt. The Master Heritage Vault bridges digital convenience and physical permanence. You receive both high-resolution vector PDF printables calibrated with 0.75-inch margins for 3-ring binding on 28lb acid-free paper, as well as interactive GoodNotes tablet files with hyperlinked tabs for portable archival research at libraries and cemeteries.",
      },
    ],
    archivalNotes:
      "All print templates are formatted with high-contrast, black-and-sepia lines calibrated to resist bleed-through when using archival pigment pens (such as Pigma Micron 05). Sized for standard US Letter and International A4 with generous binder gutter allowances.",
  },

  "census-extraction-worksheets": {
    title: "Federal Census Methodology: 1790 through 1950 Decennial Schedules",
    subtitle: "Calibrated to National Archives (NARA) Microfilm Standards & Historical Enumeration Laws",
    standardsBadge: "NARA Decennial Legal Standards",
    methodologyOverview:
      "The United States Federal Decennial Census is the backbone of American family history research. However, trying to transcribe microscopic, faded census microfilm rolls onto standard blank lined paper invariably causes missing data, omitted columns, and misattributed households. Our Federal Census Extraction Worksheets provide exact column-by-column replicas corresponding to the specific federal statutory questions mandated by the US Congress for every decennial census from the first enumeration in 1790 through the historic 1950 census.",
    principles: [
      {
        heading: "1. The Pre-1850 Head-of-Household Challenge & Age Bracket Grids",
        body: "Prior to the 1850 Census, federal marshals recorded only the name of the head of household, tallying all other family members into aggregate age-bracket tick boxes. Our 1790–1840 worksheets feature dedicated comparative age-bracket matrices that allow you to track household expansions, indentured servants, and free persons of color across decades, preventing the catastrophic error of assuming a younger sibling is a child.",
      },
      {
        heading: "2. Soundex Phonetic Coding & Post-1880 Immigrant Schedules",
        body: "Between 1880 and 1930, the US Census Bureau introduced complex questions regarding naturalization status (Al, Pa, Na), mother tongue, year of immigration, and Soundex indexing. Our post-1880 worksheets replicate these exact columns, including the 1900 months-in-US and children-born-versus-surviving tallies, enabling you to pinpoint exact immigration ship manifests and passenger lists.",
      },
      {
        heading: "3. Overcoming Microfilm Paleography & Scribe Inconsistencies",
        body: "19th-century census enumerators used iron gall ink and varying cursive scripts (such as Spencerian or round hand), often abbreviating names or recording phonetic spellings. Our extraction sheets include NARA-standard margin annotation zones for recording dwelling numbers, family numbers, reel/roll identifiers, and line numbers to cross-examine enumerator handwriting quirks without altering historical evidence.",
      },
      {
        heading: "4. Compliance with the 72-Year Statutory Privacy Rule (Public Law 95-416)",
        body: "By federal law, census schedules remain confidential for 72 years to protect personal privacy before public release by NARA. Our worksheets include full analytical layouts for the newly released 1950 Census, covering the supplemental 6-person sample questions on military service, past residence, and personal income, providing the final puzzle piece for 20th-century family histories.",
      },
    ],
    archivalNotes:
      "Each worksheet features historical notes detailing census day dates (e.g., June 1 vs. April 1) and specific enumerator instructions for that census year, ensuring rigorous historical context for every transcribed ancestor.",
  },

  "cemetery-vital-records-kit": {
    title: "Field Dossier Methodology: Cemetery Epigraphy & Courthouse Vital Records",
    subtitle: "Adhering to the Association for Gravestone Studies (AGS) & Provenance Guidelines",
    standardsBadge: "AGS Conservation & Vital Records Protocols",
    methodologyOverview:
      "Field research trips to historic cemeteries, county courthouses, and municipal vital statistics bureaus require specialized preparation. Wet headstones, eroding marble, and restricted courthouse access demand disciplined data collection. The Cemetery & Vital Records Field Dossier is designed around the ethical conservation rules of the Association for Gravestone Studies (AGS) and legal vital record extraction protocols, ensuring every gravestone inscription, plot coordinate, and clerk entry is preserved with museum-grade provenance.",
    principles: [
      {
        heading: "1. Ethical Field Epigraphy & Gravestone Inscription Preservation",
        body: "Eroded 18th- and 19th-century slate, sandstone, and marble markers can be easily damaged by well-meaning amateurs using wire brushes, shaving cream, or flour. Our field forms guide researchers through non-invasive epigraphy methods—using raking sunlight, botanical rinses (D/2 Biological Solution), and specialized mirrors—while providing quadrant-by-quadrant transcription grids for epitaphs, death verses, and sculptor signatures.",
      },
      {
        heading: "2. Decoding Victorian Cemetery Iconography & Symbolic Meanings",
        body: "Victorian gravestones are rich in symbolic language that reveals ancestral occupations, religious convictions, and cause of death. Our dossier includes an illustrated gravestone symbolism lexicon decoding weeping willows (grief and eternal renewal), clasped hands (matrimonial farewell), sheaves of wheat (ripe old age), broken columns (life cut short in youth), and Masonic or fraternal emblems (IOOF, Woodmen of the World).",
      },
      {
        heading: "3. Cemetery Cartography & Plot Grid Reconstruction",
        body: "Many rural churchyards and family burial grounds lack surviving sexton ledgers or municipal plat maps. Our kit includes 64-quadrant cemetery section mapping sheets with compass orientation and GPS coordinates. By charting adjoining gravesites, you can identify unrecorded infant burials, maternal grandparents with different surnames, and multi-generational family plots.",
      },
      {
        heading: "4. Courthouse Vital Record Extraction (Bonds, Banns & Delayed Certificates)",
        body: "When state vital statistics departments do not have a birth or death certificate on file, county courthouses often hold the underlying marriage bonds, banns, probate records, or delayed birth affidavits. Our vital records extraction sheets capture clerk volume numbers, page folios, bond signatures, and witness identities, ensuring every piece of paper trail evidence is bulletproof.",
      },
    ],
    archivalNotes:
      "Includes quick-reference checklists for field gear (soft bristle nylon brushes, photographic scale rulers, GPS apps) and document handling protocols to protect original courthouse records.",
  },

  "goodnotes-digital-planner": {
    title: "Digital Vault Architecture: Interactive Tablet Genealogy Planning",
    subtitle: "Lag-Free Vector Engineering for GoodNotes, Notability & Noteshelf",
    standardsBadge: "Interactive PDF Architecture",
    methodologyOverview:
      "Digital genealogy planning on tablets offers unparalleled advantages: zero physical carrying weight, instant handwriting search across thousands of names, and the ability to link high-resolution photos and documents directly beside pedigree charts. However, poorly coded digital planners with bloated raster images cause sluggish page turns and application crashes on iPads and Android tablets. The Heritage Tablet Digital Planner was engineered from the ground up using optimized vector paths and 1,200+ precision-tested hyperlinks for lightning-fast responsiveness.",
    principles: [
      {
        heading: "1. Apple Pencil & Stylus OCR Handwriting Searchability",
        body: "Every template page in this planner is calibrated with clean, non-obtrusive dot grid and baseline guides that maximize handwriting recognition in GoodNotes 6 and Notability. You can write your ancestor's surname in cursive with your stylus and search for it six months later across all 150+ pages in seconds.",
      },
      {
        heading: "2. Instant Hyperlinked Ahnentafel Navigation",
        body: "Flipping through 50 generations of loose sheets during a library visit slows your momentum. Our planner features persistent side tab navigation and interactive pedigree nodes: tapping ancestor #14 on your 5-generation chart instantly jumps you to their personal biographical dossier, census timeline, and family group sheet with zero lag.",
      },
      {
        heading: "3. Direct Primary Document & Photo Embed Workspaces",
        body: "Unlike physical binders where pasting photographs requires photo corners and chemical-safe mounting, our digital planner gives you expansive media zones where you can drag and drop high-resolution death certificate scans, tin-type photographs, and newspaper clippings directly onto ancestor timeline pages.",
      },
      {
        heading: "4. Non-Proprietary Open Archival Format",
        body: "We refuse to lock your research inside proprietary closed apps. This planner is delivered as an open standard interactive PDF. It works seamlessly in GoodNotes, Notability, Samsung Notes, Xodo, or any PDF reader with Apple Pencil or stylus support, and can be exported as a printable PDF at any time.",
      },
    ],
    archivalNotes:
      "Pre-tested on Apple iPad Pro, iPad Air, iPad Mini, Samsung Galaxy Tab, and Remarkable tablets. Includes custom digital genealogy tab stickers and color-coordinated Ahnentafel badges.",
  },
};
