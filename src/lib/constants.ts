export const CATEGORY_IDS = {
    // 메인 카테고리
    CASES: 2,
    PRECEDENTS: 3,
    NEWS: 4,
    
    // 사례 하위 카테고리
    CASES_BANKRUPTCY: 5,
    CASES_CIVIL: 6,
    CASES_CRIMINAL: 7,
    
    // 뉴스 하위 카테고리
    NEWS_LAW: 8,
    NEWS_SOCIETY: 9,
    NEWS_ECONOMY: 10,
    NEWS_POLITICS: 11,
    NEWS_SCIENCE: 12,
    NEWS_CULTURE: 13,
    NEWS_WORLD: 14
  } as const;
  
  // URL과 카테고리 ID 매핑
  export const URL_TO_CATEGORY = {
    'cases': CATEGORY_IDS.CASES,
    'precedents': CATEGORY_IDS.PRECEDENTS,
    'news': CATEGORY_IDS.NEWS,
    'cases/bankruptcy': CATEGORY_IDS.CASES_BANKRUPTCY,
    'cases/civil': CATEGORY_IDS.CASES_CIVIL,
    'cases/criminal': CATEGORY_IDS.CASES_CRIMINAL,
    'news/law': CATEGORY_IDS.NEWS_LAW,
    'news/society': CATEGORY_IDS.NEWS_SOCIETY,
    'news/economy': CATEGORY_IDS.NEWS_ECONOMY,
    'news/politics': CATEGORY_IDS.NEWS_POLITICS,
    'news/science': CATEGORY_IDS.NEWS_SCIENCE,
    'news/culture': CATEGORY_IDS.NEWS_CULTURE,
    'news/world': CATEGORY_IDS.NEWS_WORLD
  } as const;