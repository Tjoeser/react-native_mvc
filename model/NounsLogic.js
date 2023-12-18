// NounsLogic.js
export default NounsLogic = () => {
  // impossible to get the current state aaaargh
  const createNoun = () => {
    return ['create', 'Noun'];
  };

  const readNoun = (id,nouns) => {
    const foundObject = nouns.find((obj) => obj.id === id);
    return foundObject;
  };

  const updateNoun = (id) => {
    return ['update', 'Noun id = ', id];
  };

  const deleteNoun = (id, nouns) => {
    const removeFromObject = nouns.filter((obj) => obj.id !== id);
    console.log('removeFromObject', removeFromObject);
    return removeFromObject;
  };

  const listNouns = () => {
    console.log('listNouns', nouns);
    return nouns;
  };

  return {
    createNoun,
    readNoun,
    updateNoun,
    deleteNoun,
    listNouns,
  };
};

// export default NounsLogic;
