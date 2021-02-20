import React from 'react';
import App from './App';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { createHttpLink } from '@apollo/client/link/http';
import { ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
    //接應外層
    uri: 'http://localhost:5000'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);