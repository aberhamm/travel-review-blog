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
        httpEndpoint: `${process.env.strapiBaseUri}/graphql`,
        cache: new InMemoryCache({ fragmentMatcher }),
    };
}
