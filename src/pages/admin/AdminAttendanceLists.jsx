import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import AdminLists from "../../components/AdminLists.jsx";
// import * as XLSX from "xlsx";
import AdminAttendanceListsContainer from "../../containers/admin/AdminAttendanceListsContainer.jsx";
import AdminContainer from "@/containers/admin/AdminContainer.jsx";
import axios from "axios";
// import _ from "lodash";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(ArcElement, Tooltip, Legend);

// 결혼식 참석여부 리스트 페이지
function AdminAttendanceLists() {
  // FIXME 이후 실 data 받아 적용
  const [attendance, setAttendance] = useState([]);
  const [absence, setAbsence] = useState([]);
  const [undecided, setUndecided] = useState([]);

  const tempToken = import.meta.env.VITE_TEMPTOKEN;

  const fetchAttendanceDetailData = async () => {
    const { data } = await axios.get(
      "http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/admin/attendance/detail",
      {
        headers: {
          Authorization: "Bearer " + tempToken,
        },
      }
    );

    setAbsence([...absence, ...data.data.no.guestList]);
    setUndecided([...undecided, ...data.data.unknown.guestList]);
    setAttendance([...attendance, ...data.data.yes.guestList]);

    return data.data;
  };

  const { isLoading, error } = useQuery({
    queryKey: ["attendanceDetailData"],
    queryFn: fetchAttendanceDetailData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const putAttendanceData = async () => {
    // FIXME PUT API
    const lists = [...attendance, ...absence, ...undecided];
    console.log("lists::: ", lists);
    const { data } = await axios.put(
      "http://ec2-54-180-191-154.ap-northeast-2.compute.amazonaws.com:8081/admin/attendance",
      {
        body: [...attendance, ...absence, ...undecided],
      },
      {
        headers: {
          Authorization: "Bearer " + tempToken,
        },
      }
    );
    return console.log("put data", data);
  };

  return (
    <>
      <AdminContainer />
      <AdminAttendanceListsContainer />
      <AdminLists
        attendance={attendance}
        setAttendance={setAttendance}
        absence={absence}
        setAbsence={setAbsence}
        undecided={undecided}
        setUndecided={setUndecided}
      ></AdminLists>
      <button onClick={putAttendanceData}>저장하기</button>
    </>
  );
}

export default AdminAttendanceLists;
