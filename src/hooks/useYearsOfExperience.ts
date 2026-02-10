export function useYearsOfExperience() {
  const meyerStart = new Date("2019-01-07");
  const meyerEnd = new Date("2024-03-25");
  const cxtecStart = new Date("2024-03-27");
  const cxtecEnd = new Date("2025-04-10");
  const freelanceStart = new Date("2025-06-01");
  const freelanceEnd = new Date();

  const meyerTenure = meyerEnd.getTime() - meyerStart.getTime();
  const cxtecTenure = cxtecEnd.getTime() - cxtecStart.getTime();
  const freelanceTenure = freelanceEnd.getTime() - freelanceStart.getTime();

  const totalTenureMs = meyerTenure + cxtecTenure + freelanceTenure;

  const yearsOfExperience = Math.floor(
    totalTenureMs / (1000 * 60 * 60 * 24 * 365.25),
  );

  console.log(yearsOfExperience);

  return yearsOfExperience;
}
