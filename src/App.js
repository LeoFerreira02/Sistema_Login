// src/App.js

import React from "react";
import RoutesApp from "./Routes/Index";
import { AuthProvider } from "./contexts/auth";
import "./styles/GlobalStyle.css";

const App = () => { 
    return (
        <AuthProvider>
            <RoutesApp />
        </AuthProvider>
    );
}

export default App;