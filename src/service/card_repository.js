import { getDatabase, ref, set, remove, onValue } from "firebase/database";

class CardRepository {
  syncCards(userId, onUpdate) {
    const db = getDatabase();
    const syncRef = ref(db, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => syncRef.off();
  }

  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), { ...card });
  }

  removeCard(userId, card) {
    const db = getDatabase();
    remove(ref(db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
