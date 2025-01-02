import dayjs from "dayjs";

export default function Activity() {
  // 判斷是否為雙十一日子
  const doubleEleven = () => {
    const currentDate = dayjs().format("MM-DD");
    return currentDate === "11-11";
  };

  return (
    <section>
      <h1 className="text-5xl">Activity</h1>
      {doubleEleven() && <h2 className="mt-3 text-4xl">Double Eleven Activity</h2>}
    </section>
  );
}
