import {
    IntrospectionFragmentMatcher,
    InMemoryCache,
} from 'apollo-cache-inmemory';

import introspectionQueryResultData from '~/graphql-introspection.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
});

export default (_context) => {
    return {
        httpEndpoint: `${(process.env.API_URL || 'http://localhost:8082')}/graphql`,
        cache: new InMemoryCache({ fragmentMatcher }),
    };
}
