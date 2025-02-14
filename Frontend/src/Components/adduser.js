import React from "react";

const AddUser = ({ addUser }) => {
    return (
        <div>
        <h1>Add User</h1>
        <form onSubmit={addUser}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Phone" name="phone" />
            <input type="text" placeholder="Company" name="company" />
            <button type="submit">Add User</button>
        </form>
        </div>
    );
};
