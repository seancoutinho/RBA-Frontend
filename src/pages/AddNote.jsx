import React from 'react'
import Layout from "./Layout"
import FormAddNotes from '../components/FormAddNotes'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import { useEffect } from 'react';


function AddNote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (

    <Layout>
        <FormAddNotes/>
    </Layout>
   
  )
}

export default AddNote