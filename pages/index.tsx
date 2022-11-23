import { GetServerSideProps } from 'next';
import type { NextPage } from "next";
import * as React from 'react';
import { wrapper } from '../store/store';
import { setFormData } from "../store/formSlice";
import HomePage from '../components/HomePage';
import Layout from '../components/Layout';

const Index: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      const res = await fetch (`https://ulventech-react-exam.netlify.app/api/form`)
      const data = await res.json()
      console.log('wqeq', data)
      store.dispatch(setFormData(data)); 
      console.log("State on server", store.getState());
      return {
        props: {
          formData: data,
        },
      };
    }
);

export default Index;
