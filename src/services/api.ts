// services/api.ts

export const fetchCredentials = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;

      if (shouldFail) {
        reject("Failed to fetch credentials");
      } else {
        resolve([
          {
            id: 1,
            type: "Aadhaar",
            holderName: "Rahul Sharma",
            number: "1234-5678-9012",
          },
          {
            id: 2,
            type: "eKYC",
            holderName: "Rahul Sharma",
            number: "9876-5432-1111",
          },
        ]);
      }
    }, 1500);
  });
};