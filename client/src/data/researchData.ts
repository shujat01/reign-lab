  export interface ResearchArea {
    id: number;
    title: string;
    fullDescription: string;
    link: string;
    image: string; 
  }
  export const researchAreas: ResearchArea[] = [
    {
      id: 1,
      title: 'Integrative Multi-Omics Approaches to Map Adaptive and Maladaptive Biological Signatures at High Altitude',
      fullDescription: `High-altitude environments serve as a natural laboratory for studying physiological and pathophysiological responses to hypobaric hypoxia. As oxygen is fundamental to cellular and systemic homeostasis, sustained hypoxic exposure can lead to significant physiological disruptions and health challenges. Our lab's integrative multi-omics approaches, including genomics, transcriptomics, targeted proteomics, and global DNA methylation analysis, deepen the understanding of hypobaric hypoxia implications in health and disease. These insights have significant inferences for deciphering hypoxia-driven responses in the pathogenesis of major diseases where hypoxia plays a critical role.`,
      link: '#',
      image: '/src/images/Chord-Diagram-_1_.jpeg'
    },
    {
      id: 2,
      title: 'Circulating cell-free DNA Fragmentomics: A non-invasive method for high-resolution biological signals',
      fullDescription: `Fragmentomics profiling of circulating cell-free (cf) DNA offers a promising and non-invasive approach to monitoring chromatin accessibility, genome dynamics, and disease-related biomarkers. With the advancements in analytics capabilities and cfDNA-based algorithms, mapping crucial information, such as nucleosome occupancy and epigenetic landscape around open chromatin regions (OCRs) from cfDNA reads, has become a reality. These OCRs can capture cellular turnover activity in response to diverse physiological and pathological conditions and translate these signals into cellular processes. Using cfDNA fragmentomics, our laboratory analyses its characteristics, such as genetic alterations, chromatin topology, fragment size distribution, end motif patterns, and tissue-specific signatures for biological insights.`,
      link: '#',
      image: '/src/images/cfDNA_representative image.jpg'
    },
    {
      id: 3,
      title: 'Decoding the Genetics of Cardiovascular Diseases: From Discovery to Beyond',
      fullDescription: `Cardiovascular diseases (CVD) remain a leading cause of mortality, with sudden cardiac death (SCD) affecting even young, seemingly healthy individuals. Many SCD cases arise from Cardiac Channelopathies, where genetic mutations, inherited or de novo, disrupt the heart rhythm. Our lab focuses on the identification of a significant number of variants that are unique to the Indian population by establishing genotype-phenotype correlations. Our ultimate goal is to transform genetic insights into actionable strategies, paving the way for early diagnosis, targeted therapies, and the prevention of sudden cardiac death in at-risk individuals.`,
      link: '#',
      image: ''
    },
    {
      id: 4,
      title: 'Using hypoxia as a therapeutic approach in experimental settings',
      fullDescription: `There is a growing recognition that intermittent hypoxia can be beneficial by enhancing cardiopulmonary health and improving overall oxygenation capacity. However, translational aspects of these findings pose challenges as the cellular responses to hypoxia involve complex signaling pathways. Animal models have played a key role in understanding the beneficial effects of intermittent hypoxic exposure in complications, such as stroke and cardiorespiratory disorders, that can be extrapolated to humans; however, the protocol for this approach needs to be properly standardized before being implemented in human subjects. Our laboratory attempts to standardize protocols in murine models receiving such therapeutic hypoxic exposures that can further their clinical application in normobaric hypoxic disorders.`,
      link: '#',
      image: '/src/images/RIC representative (1).jpeg'
    }
  ];

//resesearch area research card
