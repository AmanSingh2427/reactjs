import React from 'react';
import styled from 'styled-components';
import { deleteUser } from '../store/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const DeleteAllUser = (id) => {
  const dispatch= useDispatch();

  const DeleteAllUsers=(id)=>{
  dispatch(deleteUser(id))
  console.log("hello deleteAlluser")
  }

  const DeleteButton = styled.button`
  margin-left: auto;
  background-color: orange;
  color: #fff;
  border: none;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
`;
  return (
    <>
    <DeleteButton onClick={() => DeleteAllUsers(id)}>DeleteAllUser</DeleteButton>
    </>
    
  )
}

export default DeleteAllUser;