const SPRING_BASE_URL = 'http://localhost:8080/skill-statistics/api/v1';
const EXPRESS_BASE_URL = 'http://localhost:3002/auth';

export const springApiUrls = {
    BASE_URL: SPRING_BASE_URL,
    GET_TEN_TOPICS: `${SPRING_BASE_URL}/topics/getTenTopicsDTO`,
};

export const expressApiUrls = {
    BASE_URL: EXPRESS_BASE_URL,
    LOGIN: `${EXPRESS_BASE_URL}/login`,
};
