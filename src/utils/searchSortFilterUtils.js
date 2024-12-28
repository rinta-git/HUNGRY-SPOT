export const getSelectedFilterOptions = (e, setFilters, selectedFilter) => {
  const { checked, value } = e.target;
  if (checked) {
    setFilters((prevFilters) => {
      const isExistingFilter = prevFilters.find(
        (filter) => filter.filterCategory === selectedFilter
      );
      //arrange same category values in array
      if (isExistingFilter) {
        return prevFilters.map((filter) =>
          filter.filterCategory === selectedFilter
            ? {
                ...filter,
                value: [
                  ...new Set([
                    ...(Array.isArray(filter.value)
                      ? filter.value
                      : [filter.value]),
                    value,
                  ]),
                ],
              }
            : filter
        );
      } else {
        return [
          ...prevFilters,
          { filterCategory: selectedFilter, value: [value] },
        ];
      }
    });
  } else {
    //remove filter
    setFilters((prevFilters) => {
      return prevFilters.reduce((acc, filter) => {
        if (filter.filterCategory === selectedFilter) {
          const newValue = filter.value.filter((val) => val !== value);
          newValue.length
            ? acc.push({ ...filter, value: newValue })
            : acc.push(filter);
        }
        return acc;
      }, []);
    });
  }
};

export const filterRestaurentList = (filters, resList) => {
  let newList = resList.flat();

  filters?.forEach((filter) => {
    switch (filter?.filterCategory) {
      case "Ratings":
        const ratings = filter?.value.map((item) =>
          parseFloat(item.split("+")[0])
        );
        newList = newList.filter((item) =>
          ratings.some((rating) => item?.info?.avgRating >= rating)
        );
        break;
      case "Delivery Time":
        newList = newList.filter((item) =>
          filter?.value.some((time) => item?.info?.sla?.slaString === time)
        );
        break;
      case "Veg/Non-Veg":
        const isVeg = filter?.value.find((f) => f === "Veg");
        const isNonVeg = filter?.value.find((f) => f === "Non-veg");
        newList = newList.filter((item) => {
          const { veg } = item?.info || {};
          if (isNonVeg && isVeg) {
            return true;
          } else if (isVeg) {
            return veg !== undefined ? veg === isVeg : !isVeg;
          } else if (isNonVeg) {
            return veg !== undefined ? veg === false : true;
          }
        });
        return true;
        break;
      default:
        console.log("Unknown filter category");
        break;
    }
  });
  return newList;
};

export const getSearchedList = (searchText, resList = []) => {
  const resListCopy = resList.flat();
  const filteredList = resListCopy.filter((res) =>
    res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredList;
};

export const getSortedList = (option, resList) => {
  const resListCopy = resList.flat();
  switch (option) {
    case "Delivery Time":
      //
      break;
    case "Rating":
      return resListCopy.sort(
        (a, b) => b?.info?.avgRating - a?.info?.avgRating
      );
    case "Name":
      return resListCopy.sort((a, b) =>
        a?.info?.name.localeCompare(b?.info?.name)
      );
    case "Location":
      return resListCopy.sort((a, b) =>
        a?.info?.areaName.localeCompare(b?.info?.areaName)
      );
    default:
      return resListCopy;
  }
};
