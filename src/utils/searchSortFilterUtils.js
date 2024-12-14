export const getSelectedFilterOptions = (
  e,
  filters,
  setFilters,
  selectedFilter
) => {
  if (e.target.checked) {
    const newFiltersList = [
      ...filters,
      { filterCategory: selectedFilter, value: e.target.value },
    ];
    setFilters(newFiltersList);
  } else {
    const newFiltersList = filters.filter(
      (item) => item.value !== e.target.value
    );
    setFilters(newFiltersList);
  }
};

export const filterRestaurentList = (filters, resList) => {
  let newList = resList.flat();

  filters?.forEach((filter) => {
    switch (filter?.filterCategory) {
      case "Ratings":
        const rating = parseFloat(filter?.value.split("+")[0]);
        newList = newList.filter((item) => item?.info?.avgRating >= rating);
        break;
      case "Delivery Time":
        newList = newList.filter(
          (item) => item?.info?.sla?.slaString === filter?.value
        );
        break;
      case "Veg/Non-Veg":
        const isVeg = filter?.value === "Veg";
        newList = newList.filter((item) => {
          const { veg } = item?.info || {};
          console.log(veg);
          // If veg property is undefined, exclude it for Veg filter, include otherwise
          return veg !== undefined ? veg === isVeg : !isVeg;
        });
        break;
      default:
        console.log("Unknown filter category");
        break;
    }
  });
  return newList;
};

export const getSearchedList = (searchText, resList) => {
  const resListCopy = resList.flat();
  const filteredList = resListCopy.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
  return filteredList;
}
