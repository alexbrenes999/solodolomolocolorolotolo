import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './graphql/apolloClient.js';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';



// app needs access to:
// client
// auth context
// browser router aka react router (/login /register)

ReactDOM.render(
    <AuthProvider>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </ApolloProvider>
    </AuthProvider>
,
 document.getElementById('root'));