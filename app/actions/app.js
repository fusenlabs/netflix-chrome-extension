const setLoadingStatus = (status = false, text = 'loading')=> {
  return {
    type: 'LOADING',
    value: status,
    message: text.toUpperCase()
  };
};

export function startSearching(label) {
  return setLoadingStatus(true, label);
}

export function stopSearching() {
  return setLoadingStatus(false, '');
}

export function changeActor(actorName) {
    return {
        type: 'CHANGE_ACTOR',
        value: actorName
    };
}