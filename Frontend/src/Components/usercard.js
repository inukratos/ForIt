import React from "react";

const UserCard = ({ userCard }) => {
    return (
        <div className="user-card"> 
        <h1>Nombre: {userCard.name}</h1>
        <p>Username: {userCard.username}</p>
        <p>Email: {userCard.email}</p>
        <p>Ciudad: {userCard.address.city}</p>
        <p>Teléfono: {userCard.phone}</p>
        <p>Empresa: {userCard.company.name}</p>
        </div>
    );
};

export default UserCard;
