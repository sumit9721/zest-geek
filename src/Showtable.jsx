import { Button } from "antd";
import React, { useEffect, useState } from "react";

const Showtable = (props) => {
  const { setShowTable, showTable } = props;
  const [userData, setUserData] = useState(
    JSON?.parse(localStorage.getItem("formdata"))
  );
  useEffect(() => {
    setUserData(JSON?.parse(localStorage.getItem("formdata")));
  }, [localStorage.getItem("formdata")]);

  console.log("console.l", userData);

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    {console.log("darata", userData)}
                    {userData &&
                      Object?.values(userData).map((data) => (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {data}
                            </div>
                          </div>
                        </td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => {
            setShowTable(!showTable);
          }}
        >
          Show Table
        </Button>
      </div>
    </div>
  );
};
export default Showtable;
