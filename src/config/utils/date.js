export const getDayOrWeekDiff = (dateString) => {
  const targetDate = new Date(dateString);
  const today = new Date();

  const oneDay = 1000 * 60 * 60 * 24;
  const diffTime =
    targetDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / oneDay);

  if (diffDays === 0) return "Hari ini";

  if (Math.abs(diffDays) < 7) {
    // masih dalam hitungan hari
    return diffDays < 0
      ? `${Math.abs(diffDays)} hari lalu`
      : `${diffDays} hari`;
  }

  const diffWeeks = Math.floor(Math.abs(diffDays) / 7);

  if (diffWeeks < 4) {
    // masih dalam hitungan minggu
    return diffDays < 0
      ? `${diffWeeks} minggu lalu`
      : `${diffWeeks} minggu`;
  }

  // konversi ke bulan (kasar: 30 hari ≈ 1 bulan)
  const diffMonths = Math.floor(Math.abs(diffDays) / 30);
  return diffDays < 0
    ? `${diffMonths} bulan lalu`
    : `${diffMonths} bulan`;
};
