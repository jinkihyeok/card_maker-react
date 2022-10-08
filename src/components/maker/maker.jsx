import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
