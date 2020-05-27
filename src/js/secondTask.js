function getSpecialList(obj) {
  const output = [];
  for (const elem of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    output.push({
      id, name, icon, description,
    });
  }
  return output;
}

export default getSpecialList;
