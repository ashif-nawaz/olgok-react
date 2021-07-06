import React, { Component } from "react";
import ErrorContext from "../../store/error-context";
import Flash from "../UI/Flash/Flash";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    setTimeout(() => {
      this.setState({
         hasError : false,
         error : null
      })
    }, 3000)
    return {
      hasError: true,
      error: error,
    };
  }


  errorHandler = (error) => {
    this.setState({
      hasError: true,
      error: error,
    });
    setTimeout(() => {
      this.setState({
         hasError : false,
         error : null
      })
    }, 3000)
  }


  dismissErrorHandler = () => {
    this.setState({
      hasError : false,
      error : null
    })
  }


  render() {
    return (
      <ErrorContext.Provider
        value={{ hasError: this.state.hasError, onError: this.errorHandler, onDismiss : this.dismissErrorHandler }}
      >
        {this.state.hasError && <Flash>{this.state.error.errorInfo || this.state.error.message || 'Something went wrong.' }</Flash>}
        {this.props.children}
      </ErrorContext.Provider>
    );
  }
}

export default ErrorBoundary;
