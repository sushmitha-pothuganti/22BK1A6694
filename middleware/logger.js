export const logger = (req, res, next) => {
  const log = {
    "email": "sushmithapothuganti2004@gamil.com",
    "name": "pothuganti sushmitha",
    "rollNo": "22bk1a6694",
   "accessCode": "vpJgsZ",
   "clientID": "59bda045-81fc-48a8-a94e-64bfb965bfd0",
    "clientSecret": "kFSasRDcahzWSStH",
    time: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};
