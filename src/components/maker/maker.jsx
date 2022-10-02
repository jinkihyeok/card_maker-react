import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "JIN",
      company: "KNU",
      title: "biochemistry",
      email: "jkhsky121@gmail.com",
      message: "just do it",
      theme: "dark",
      fileName: "JIN",
      fileURL: null,
    },
    {
      id: "2",
      name: "JIN2",
      company: "KNU",
      title: "biochemistry",
      email: "jkhsky121@gmail.com",
      message: "just do it",
      theme: "light",
      fileName: "JIN",
      fileURL: "JIN.png",
    },
    {
      id: "3",
      name: "JIN3",
      company: "KNU",
      title: "biochemistry",
      email: "jkhsky121@gmail.com",
      message: "just do it",
      theme: "colorful",
      fileName: "JIN",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
