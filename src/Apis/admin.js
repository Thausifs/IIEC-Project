import axios from "axios";

export const RegisterUser = async (data) => {
 
  const registeruser = await axios
    .post(`http://localhost:5000/admin/register`, data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return registeruser;
};

export const RegisterEnquiry = async (data) => {
  
  const registerenquiry = await axios
    .post(`http://localhost:5000/admin/enquiries`, data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return registerenquiry;
};
