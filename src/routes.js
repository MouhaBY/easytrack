import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from "./Pages/User";

export default function routes() {
    return (
        <Routes>
            <Route path="*" element={<>Not found</>} />
            <Route exact path="/" element={<>HELLO</>} />
            <Route path="/users" element={<>USERS</>} />
            <Route path="/users/:id" element={<User />} />
        </Routes>
    )
}
