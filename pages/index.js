import React from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import AddTask from "../components/AddTask";
import ShowTask from "../components/ShowTask";

const index = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <Head>
        <title>Kanban Prosai</title>
      </Head>
      <AddTask />
      <ShowTask />
      <Sidebar />
      <Content />
    </div>
  );
};

export default index;
