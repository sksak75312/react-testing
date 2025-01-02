import dayjs from "dayjs";

export default function Activity() {
  // 判斷是否為雙十一日子
  const isDoubleEleven = () => {
    const currentDate = dayjs().format("MM-DD");
    return currentDate === "11-11";
  };

  return (
    <section className="text-center">
      <h1 className="text-5xl">Activity</h1>
      {isDoubleEleven() && <p className="mt-3 text-2xl text-indigo-500">Double Eleven Activity</p>}
    </section>
  );
}
