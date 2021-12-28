const Options = ({ data, value }) => {
    const uniqueValues = new Set(data.map((obj) => obj[`${value}`]));
    const optionsForSelect = [];
  
    for (const uniqueValue of uniqueValues) {
      optionsForSelect.push(
        <option key={uniqueValue} value={uniqueValue}>
          {uniqueValue}
        </option>
      );
    }
    return [
      <option key="All" value="All">
        All
      </option>,
      ...optionsForSelect
    ];
  };
  
  export default Options;