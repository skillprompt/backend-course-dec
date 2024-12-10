export function sendMail(data: string): Promise<{
  isSuccess: boolean;
  message: string;
  data: string;
}> {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.1;
    setTimeout(() => {
      if (isSuccess) {
        resolve({
          message: "Mail sent successfully!",
          data,
          isSuccess: true,
        });
      } else {
        reject({
          isSuccess: false,
          message: "Mail sending failed...",
          data: null,
        });
      }
    }, 2000);
  });
}
