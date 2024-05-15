import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import  DeleteAllUser  from './DeleteAllUser';  //Assuming you have an action for deleting users
import { removeUser } from '../store/slices/UserSlice';

// Styled component for the todo item
const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 4px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

// Styled component for the delete button
const DeleteButton = styled.button`
  margin-left: auto;
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
`;

const DisplayUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(removeUser(id)); // Dispatch the action to delete the user
    
  };

  return (
    <div>
      {users.map((user,id) => (
        <TodoItem key={user.id}>
          <span>{user}</span>
          <DeleteButton onClick={() => handleDeleteUser(id)}>Delete</DeleteButton>
        </TodoItem>
      ))}
    </div>
  );
};

export default DisplayUsers;
