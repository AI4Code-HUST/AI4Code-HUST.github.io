export type RankClass = 'tag-green' | 'tag-gold' | 'tag-blue' | 'tag-rose' | 'tag-neutral';

export interface Publication {
  title: string;
  authors: string;
  url?: string;
  rankLabel: string;
  rankClass: RankClass;
  venue: string;
  award?: string;
}

export interface PublicationYear {
  year: string;
  items: Publication[];
}

// Full names for venues stored as acronyms/short forms above. Venues not listed
// here (e.g. 'PLoS ONE', 'Applied Sciences') already use their real title.
export const venueFullNames: Record<string, string> = {
  'ACIIDS': 'Asian Conference on Intelligent Information and Database Systems',
  'ACL': 'Annual Meeting of the Association for Computational Linguistics',
  'ACM TOSEM': 'ACM Transactions on Software Engineering and Methodology',
  'ASE': 'IEEE/ACM International Conference on Automated Software Engineering',
  'EASE': 'International Conference on Evaluation and Assessment in Software Engineering',
  'ESEC/FSE': 'ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering',
  'ICSE': 'IEEE/ACM International Conference on Software Engineering',
  'ICSME': 'IEEE International Conference on Software Maintenance and Evolution',
  'RIVF': 'IEEE International Conference on Research, Innovation and Vision for the Future',
  'IEEE TSE': 'IEEE Transactions on Software Engineering',
  'IJITPM': 'International Journal of Information Technology Project Management',
  'IJSEKE': 'International Journal of Software Engineering and Knowledge Engineering',
  'ISSRE': 'IEEE International Symposium on Software Reliability Engineering',
  'J. Heuristics': 'Journal of Heuristics',
  'J. Military Sci. & Tech.': 'Journal of Military Science and Technology',
  'KSE': 'IEEE International Conference on Knowledge and Systems Engineering',
  'PRICAI': 'Pacific Rim International Conference on Artificial Intelligence',
  'SANER': 'IEEE International Conference on Software Analysis, Evolution and Reengineering',
  'SmartComp': 'IEEE International Conference on Smart Computing',
  'SoICT': 'International Symposium on Information and Communication Technology',
  'UD J. Sci. & Tech.': 'The University of Danang — Journal of Science and Technology',
};

export const publications: PublicationYear[] = [
  {
    year: '2026',
    items: [
      { title: 'Mapping NVD Records to Their Vulnerability-fixing Commits: How Hard is It?', authors: 'H. H. Nguyen, T. Zhang, D-M. Tran, Y. Cheng, T. Le-Cong, Y. Li, H. W. Ang, Y. Yin, F. Liauw, S. L. Khin, O. E. Lieh, , D. Lo', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'ACM TOSEM' },
      { title: 'Optimizing Spectral Signature in Code Backdoor Detection', authors: 'Q-H. Le, T. Le-Cong, B. Le, B. Xu', url: 'https://arxiv.org/abs/2510.13992', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'ICSME', award: 'Distinguished Paper Award' },
      { title: 'PatchSeeker: Mapping NVD Records to their Vulnerability-fixing Commits with LLM Generated Commits and Embeddings', authors: 'H. H. Nguyen, A. T. Zhang, T. Nguyen, T. Le-Cong, Y. Li, H. W. Ang, Y. Yin, F. Liauw, S. L. Khin, O. E. Lieh, Q-T. Huynh, D. Lo', url: 'https://arxiv.org/abs/2509.07540', rankLabel: 'Preprint', rankClass: 'tag-neutral', venue: 'arXiv' },
      { title: 'Perish or Flourish? A Holistic Evaluation of Large Language Models for Code Generation in Functional Programming', authors: 'N.-A.-H. Lang, E. Lang, T. Le-Cong, B. Le, Q.-T. Huynh', url: 'https://arxiv.org/abs/2601.02060', rankLabel: 'Preprint', rankClass: 'tag-neutral', venue: 'arXiv' },
      { title: 'PatchGuru: Patch Oracle Inference from Natural Language Artifacts with Large Language Models', authors: 'T. Le-Cong, B. Le, T. Murray, M. Pradel, C. Cadar', url: 'https://arxiv.org/abs/2602.05270', rankLabel: 'Preprint', rankClass: 'tag-neutral', venue: 'arXiv' },
      { title: 'Memory-Efficient Large Language Models for Program Repair with Semantic-Guided Patch Generation', authors: 'T. Le-Cong, B. Le, T. Murray', url: 'https://arxiv.org/abs/2410.16655', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ICSE' },
      { title: 'How Do Semantically Equivalent Code Transformations Impact Membership Inference on LLMs for Code?', authors: 'H. Yang, A. Velasco, T. Le-Cong, M. N. Haque, B. Xu, D. Poshyvanyk', url: 'https://arxiv.org/abs/2512.15468', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ICSE' },
      { title: 'From Empirical Evaluation to Context-Aware Enhancement: Repairing Regression Errors with LLMs', authors: 'A. Ho, T. Le-Cong, B. Le, C. Rizkallah', url: 'https://arxiv.org/abs/2506.13182', rankLabel: 'Preprint', rankClass: 'tag-neutral', venue: 'arXiv' },
      { title: 'Comparison of Static Application Security Testing Tools and Large Language Models for Repo-Level Vulnerability Detection', authors: 'X. Zhou, D.-M. Tran, T. Le-Cong, T. Zhang, I. C. Irsan, J. Sumarlin, B. Le, D. Lo', url: 'https://arxiv.org/abs/2407.16235', rankLabel: 'Preprint', rankClass: 'tag-neutral', venue: 'arXiv' },
    ],
  },
  {
    year: '2025',
    items: [
      { title: 'Toward Realistic Evaluations of Just-In-Time Vulnerability Prediction', authors: 'D. Nguyen, T. Le-Cong, T. H. M. Le, M. A. Babar, Q.-T. Huynh', url: 'https://arxiv.org/abs/2507.06165', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'ICSME' },
      { title: 'VulGuard: A Unified Tool for Evaluating Just-In-Time Vulnerability Prediction Models', authors: 'D. Nguyen, M. Tran-Duc, T. Le-Cong, T. H. M. Le, M. A. Babar, Q.-T. Huynh', url: 'https://arxiv.org/abs/2505.23708', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'ICSME' },
      { title: 'Toward Reliable Evaluation of Neural Program Repair with Natural Robustness Testing', authors: 'T. Le-Cong, D. Nguyen, B. Le, T. Murray', url: 'https://arxiv.org/abs/2402.11892', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'ACM TOSEM' },
      { title: 'Can LLMs Reason About Program Semantics? A Comprehensive Evaluation of LLMs on Formal Specification Inference', authors: 'T. Le-Cong, B. Le, T. Murray', url: 'https://doi.org/10.18653/v1/2025.acl-long.1068', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ACL' },
      { title: 'Adversarial Patch Generation for Automated Program Repair', authors: 'A. Alhefdhi, H. K. Dam, T. Le-Cong, B. Le, A. Ghose', url: 'https://doi.org/10.1007/s11219-025-09709-4', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'Software Quality Journal' },
      { title: 'A Survey on Video Big Data Analytics: Architecture, Technologies, and Open Research Challenges', authors: 'T. T. T. Do, Q.-T. Huynh, K. Kim, V. Q. Nguyen', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'Applied Sciences' },
      { title: 'Trigonometric Function Transformation and Its Application in Software Reliability Modeling', authors: 'D. N. Vy, V. T. Nguyen, Q.-T. Huynh, T. N. Phung, H. C. Nguyen', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'PLoS ONE' },
    ],
  },
  {
    year: '2024',
    items: [
      { title: 'LEGION: Harnessing Pre-trained Language Models for GitHub Topic Recommendations with Distribution-Balance Loss', authors: 'Y.-T. Dang, T. Le-Cong, P.-T. Nguyen, A. M. T. Bui, P. T. Nguyen, B. Le, Q.-T. Huynh', url: 'https://arxiv.org/pdf/2403.05873', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'EASE' },
      { title: 'Refining ChatGPT-Generated Code: Characterizing and Mitigating Code Quality Issues', authors: 'Y. Liu, T. Le-Cong, R. Widyasari, C. Tantithamthavorn, L. Li, B. Le, D. Lo', url: 'https://arxiv.org/abs/2307.12596', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'ACM TOSEM' },
      { title: 'Leveraging Large Language Model for Automatic Patch Correctness Assessment', authors: 'X. Zhou, B. Xu, K. Kim, D. Han, H. H. Nguyen, T. Le-Cong, J. He, B. Le, D. Lo', url: 'https://doi.org/10.1109/TSE.2024.3452252', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'IEEE TSE' },
      { title: 'An Imperfect-Debugging NHPP Software Reliability Model Based on a 3-Parameter S-Shaped Function', authors: 'H.-C. Nguyen, Q.-T. Huynh', rankLabel: 'Q3', rankClass: 'tag-blue', venue: 'IJSEKE' },
      { title: 'Predicting Software Project Completion Time and Cost Using XGBoost', authors: 'T. A. Le, Q.-T. Huynh, T. H. Nguyen', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'J. Military Sci. & Tech.' },
      { title: 'Improving the XSM Method for Predicting Software Project Completion Cost', authors: 'Q.-T. Huynh, T. H. Nguyen', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'UD J. Sci. & Tech.' },
    ],
  },
  {
    year: '2023',
    items: [
      { title: 'Invalidator: Automated Patch Correctness Assessment via Semantic and Syntactic Reasoning', authors: 'T. Le-Cong, D.-M. Luong, X. B. D. Le, D. Lo, N. H. Tran, Q. H. Bui, Q.-T. Huynh', url: 'https://arxiv.org/pdf/2301.01113', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'IEEE TSE' },
      { title: 'MiDas: Multi-granularity Model for Vulnerability-fixing Commit Classification', authors: 'T.-G. Nguyen, T. Le-Cong, H. J. Kang, R. Widyasari, C. Yang, Z. Zhao, B. Xu, J. Zhou, X. Xia, A. E. Hassan, B. Le, D. Lo', url: 'https://arxiv.org/abs/2305.13884', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'IEEE TSE' },
      { title: 'Chronos: Time-Aware Zero-Shot Identification of Libraries from Vulnerability Reports', authors: 'Y. Lyu, T. Le-Cong, H. J. Kang, R. Widyasari, Z. Zhao, B. Le, M. Li, D. Lo', url: 'https://arxiv.org/pdf/2301.03944', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ICSE' },
      { title: 'Are We Ready to Embrace Generative AI for Software Q&A?', authors: 'B. Xu, T.-D. Nguyen, T. Le-Cong, T. Hoang, J. Liu, K. Kim, C. Gong, C. Niu, C. Wang, B. Le, D. Lo', url: 'https://arxiv.org/pdf/2307.09765', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ASE' },
      { title: 'Extreme Multi-Label Learning for GitHub Topic Recommendation: How Far Are We?', authors: 'R. Widyasari, Z. Zhao, T. Le-Cong, H. J. Kang, D. Lo', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'SANER' },
    ],
  },
  {
    year: '2022',
    items: [
      { title: 'AutoPruner: Transformer-Based Call Graph Pruning', authors: 'T. Le-Cong, H. J. Kang, T. G. Nguyen, S. A. Haryono, D. Lo, X. B. D. Le, Q.-T. Huynh', url: 'https://arxiv.org/pdf/2209.03230', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ESEC/FSE' },
      { title: 'VulCurator: A Vulnerability-Fixing Commit Detector', authors: 'T.-G. Nguyen, T. Le-Cong, H. J. Kang, X. B. D. Le, D. Lo', url: 'https://arxiv.org/abs/2209.03260', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ESEC/FSE' },
      { title: 'Toward the Analysis of Graph Neural Networks', authors: 'T.-D. Nguyen+, T. Le-Cong+, T. H. Nguyen, X. B. D. Le, Q.-T. Huynh', url: 'https://arxiv.org/pdf/2201.00115', rankLabel: 'CORE A*', rankClass: 'tag-green', venue: 'ICSE' },
      { title: 'FFL: Fine-grained Fault Localization for Student Programs via Syntactic and Semantic Reasoning', authors: 'T.-D. Nguyen, T. Le-Cong, D.-M. Luong, V.-H. Duong, X. B. D. Le, D. Lo, Q.-T. Huynh', url: 'https://ieeexplore.ieee.org/abstract/document/9978180', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'ICSME' },
      { title: 'New Non-Homogeneous Poisson Process Software Reliability Model Based on a 3-Parameter S-Shaped Function', authors: 'H.-C. Nguyen, Q.-T. Huynh', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'IET Software' },
      { title: 'Estimating Searching Cost of Regular Path Queries on Large Graphs by Exploiting Unit-Subqueries', authors: 'V. Q. Nguyen, Q.-T. Huynh, K. Kim', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'J. Heuristics' },
      { title: 'Social Multi-Role Discovering with Hypergraph Embedding for Location-Based Social Networks', authors: 'M. T. Pham, T. D. Hoang, M. H. Nguyen, V. H. Vu, T. T. Huynh, Q.-T. Huynh', rankLabel: 'CORE B', rankClass: 'tag-gold', venue: 'ACIIDS' },
      { title: 'Query-Based Performance Comparison of Graph Database and Relational Database', authors: 'T. T. T. Do, T. B. Mai-Hoang, V. Q. Nguyen, Q.-T. Huynh', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'SoICT' },
      { title: 'Big Data Knowledge Acquisition Platform for Smart Farming', authors: 'V. Q. Nguyen, V. H. Nguyen, M. Q. Nguyen, Q.-T. Huynh, K. Kim', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'SoICT' },
      { title: 'A Big Data Platform for Real-Time Video Surveillance', authors: 'T. T. T. Do, Q. T. Dam, T. H. Ha, Q.-T. Huynh, K. Kim, V. Q. Nguyen', rankLabel: 'Q3', rankClass: 'tag-blue', venue: 'Annals of Computer Science and Information Systems' },
    ],
  },
  {
    year: '2021',
    items: [
      { title: 'Usability and Aesthetics: Better Together for Automated Repair of Web Pages', authors: 'T. Le-Cong, X. B. D. Le, Q.-T. Huynh, P. Le Nguyen', url: 'https://arxiv.org/pdf/2201.00117', rankLabel: 'CORE A', rankClass: 'tag-green', venue: 'ISSRE' },
      { title: 'Efficiently Estimating Joining Cost of Subqueries in Regular Path Queries', authors: 'V. Q. Nguyen, V. H. Nguyen, M. Q. Nguyen, Q.-T. Huynh, K. Kim', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'Electronics' },
      { title: 'Optimizing Bidders Selection of Multi-Round Procurement Problem Using Parallel Max-Min Ant System', authors: 'D. N. Le, G. N. Nguyen, Q.-T. Huynh, T. N. Bao, N. N. Tuan', rankLabel: 'Q2', rankClass: 'tag-gold', venue: 'Computers, Materials and Continua' },
    ],
  },
  {
    year: '2020',
    items: [
      { title: 'Monitoring Agriculture Areas with Satellite Images and Deep Learning', authors: 'T. T. Nguyen, T. D. Hoang, M. T. Pham, T. T. Vu, T. H. Nguyen, Q.-T. Huynh, J. Jo', rankLabel: 'Q1', rankClass: 'tag-green', venue: 'Applied Soft Computing' },
      { title: 'Monitoring Rice Crop with Dense Segmentation on Satellite Images: A Case Study in the Vietnamese Mekong Delta', authors: 'H. T. Dat, N. T. Chung, V. T. Trinh, N. T. Hung, Q.-T. Huynh', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'KSE' },
      { title: 'An Effective Approach for Context-Driven Testing in Practice — A Case Study', authors: 'Q.-T. Huynh, L.-T. Pham, N.-H. Ha, D.-M. Nguyen', rankLabel: 'Q3', rankClass: 'tag-blue', venue: 'IJSEKE' },
      { title: 'Automated Test Input Generation via Model Inference Based on User Story and Acceptance Criteria for Mobile Application Development', authors: 'D.-M. Nguyen, Q.-T. Huynh, N.-H. Ha, T.-H. Nguyen', rankLabel: 'Q3', rankClass: 'tag-blue', venue: 'IJSEKE' },
      { title: 'A Method for Improving Parameter Estimation of Non-Linear Regression in Growth Models to Predict Project Cost at Completion', authors: 'Q.-T. Huynh, T. A. Le, T. H. Nguyen, N. H. Nguyen, D. H. Nguyen', rankLabel: 'Vietnam', rankClass: 'tag-rose', venue: 'RIVF' },
      { title: 'Probabilistic Method for Managing Common Risks in Software Project Scheduling Based on PERT', authors: 'Q.-T. Huynh, N. T. Nguyen', rankLabel: 'Q3', rankClass: 'tag-blue', venue: 'IJITPM' },
      { title: 'Accelerating Parallel Evaluation of Regular Path Queries on Large Graphs by Estimating Joining Cost of Subqueries', authors: 'V. Q. Nguyen, V. H. Nguyen, H. T. Vu, M. Q. Nguyen, Q.-T. Huynh, K. Kim', rankLabel: 'Rank B', rankClass: 'tag-gold', venue: 'SmartComp' },
      { title: 'A Scalable Approach for Dynamic Evacuation Routing in Large Smart Buildings', authors: 'V. Q. Nguyen, H. D. Nguyen, Q.-T. Huynh, N. Venkatasubramanian, K. Kim', rankLabel: 'CORE B', rankClass: 'tag-gold', venue: 'SmartComp' },
      { title: 'Network Alignment by Representation Learning on Structure and Attribute', authors: 'T. T. Huynh, V. V. Tong, C. T. Duong, T. Huynh Quyet, Q. V. H. Nguyen, A. Sattar', rankLabel: 'CORE B', rankClass: 'tag-gold', venue: 'PRICAI' },
    ],
  }
];
