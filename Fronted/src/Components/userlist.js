import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    address: {
        city: '',
    },
    phone: '',
    company: {
        name: '',
    }
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        const sortedUsers = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
        setFilteredUsers(sortedUsers);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.address.city.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setNewUser(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      setNewUser(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleAddUser = () => {
    axios.post('http://localhost:5000/api/users', {
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      address: {
        city: newUser.address.city
      },
      phone: newUser.phone,
      company: {
        name: newUser.company.name
      }
    })
    .then(response => {
      setUsers([...users, response.data]);
      setFilteredUsers([...users, response.data]);
      setNewUser(
            { 
                name: '', 
                username: '', 
                email: '',
                address: { city: '' },
                phone: '', 
                company: { name: '' }
            }
        );
        window.location.reload();
    })
    .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div className="user-list">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar por nombre, email o ciudad"
        />
      </div>

      <div className="add-user">
        <h2>Agregar Nuevo Usuario</h2>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address.city"
          value={newUser.address.city}
          onChange={handleInputChange}
          placeholder="Ciudad"
        />
        <input
          type="text"
          name="phone"
          value={newUser.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
        />
        <input
          type="text"
          name="company.name"
          value={newUser.company.name}
          onChange={handleInputChange}
          placeholder="Empresa"
        />
        <button onClick={handleAddUser}>Agregar Usuario</button>
      </div>

      <div className="user-cards">
        {filteredUsers.map(user => (
          <div className="user-card" key={user.username}>
                <h3>{user.name}</h3>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Ciudad:</strong> {user.address.city}</p>
                <p><strong>Teléfono:</strong> {user.phone}</p>
                <p><strong>Empresa:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
