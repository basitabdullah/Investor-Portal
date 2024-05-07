import { useContext, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebase";

import { Context } from "../index.js";

const Data = () => {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    const dataRef = ref(database, "excelData");
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setData(dataArray);
        } else {
          console.log("No data");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(data);
};

export default Data;
