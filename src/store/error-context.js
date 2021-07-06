import React from 'react';

const ErrorContext = React.createContext({
     hasError : false,
     onError : (error) => {},
     onDismiss : () => {}
});

export default ErrorContext;