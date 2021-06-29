import * as React from "react";
// Loading data from json file
import localData from "../../../data/coverage.json";
import logo from "../../../images/logo.png";

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [coverage, setCoverage] = React.useState<Array<any>>([]);
  const [data, setData] = React.useState<Object>({});

  // Prepare data to be displayed
  const prepareData = (dataToBePrepared) => {
    let _preparedData = [];
    // Take coverage data and format it to get boolean value
    for (const key in dataToBePrepared.coverage) {
      const formattedCoverage = dataToBePrepared.years.map((year: number) =>
        dataToBePrepared.coverage[key].includes(year)
      );

      _preparedData = [..._preparedData, [key, ...formattedCoverage]];
    }

    setCoverage(_preparedData);
  };

  React.useEffect(() => {
    prepareData(localData[0]!);
    setData(localData[0]!);
    // Wait for data to be processed
    setIsLoaded(true);
  }, []);

  const tileClick = (coverageData: Array<any>, index: number) => {
    setData((data: any) => {
      // Match column to update
      const _mark = data.years[index - 1];
      const _coverageYear = data.coverage[coverageData[0]];

      data.coverage[coverageData[0]] = _coverageYear.includes(_mark)
        ? removeData(_coverageYear, _mark)
        : addData(_coverageYear, _mark);

      setData(data);
      prepareData(data);
    });

    const addData = (data: Array<number>, mark: number) => [...data, mark];

    const removeData = (data: Array<number>, mark: number) =>
      data.filter((_data) => _data != mark);
  };

  return (
    isLoaded && (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>
                <img src={logo} alt="" />
              </th>
              {localData[0].years.map((year) => (
                <th key={year}>{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coverage.map((coverageItem, index: number) => (
              <tr key={`${coverageItem}_${index}`}>
                {coverageItem.map(
                  (isHighlighted: boolean | string, _index: number) => (
                    <td
                      key={`td_tile_${_index}`}
                      onClick={() => tileClick(coverageItem, _index)}
                      className={`${isHighlighted ? "blue" : "gray"}`}
                    >
                      {isHighlighted}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
