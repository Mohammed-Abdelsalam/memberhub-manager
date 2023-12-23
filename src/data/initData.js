// just mockup data for testing.
const initData = [
  {
    id: 1,
    memberName: "Admin",
    email: "admin@gmail.com",
    membershipType: "VIP",
    subMembership: false,
    numberID: 1234567890000,
    gender: 1,
    address: "Giza",
    dateOfBirth: "2015-12-11",
    startOfMembership: "2023-12-15",
    phoneNumber: 12000000222,

    photo: null,
  },
  {
    id: 2,
    memberName: "esam",
    email: "tester@gmail.com",
    membershipType: "Basic",
    subMembership: true,
    numberID: 20230102010230,
    gender: 2, // Assuming 2 represents "Female" based on your provided options
    address: "Alex",
    startOfMembership: "2022-12-15",
    dateOfBirth: "2014-11-11",
    phoneNumber: "01480007005",
    photo: null, // Assuming the photo will be stored as a file or a link
  },
  {
    id: 3,
    memberName: "Ali",
    email: "frontend@gmail.com",
    membershipType: "Basic",
    subMembership: false,
    numberID: "20053302010230",
    gender: 2, // Assuming 2 represents "Female" based on your provided options
    address: "Cairo",
    startOfMembership: "2005-10-17",
    dateOfBirth: "2005-10-17",
    phoneNumber: "01502350256",
    photo: null, // Assuming the photo will be stored as a file or a link
  },
  {
    id: 4,
    memberName: "Ahmed",
    email: "ahmed@gmail.com",
    membershipType: "Premium",
    subMembership: true,
    numberID: "20050232501022",
    gender: 2, // Assuming 2 represents "Female" based on your provided options
    address: "UAE",
    startOfMembership: "2005-10-17",
    dateOfBirth: "2005-10-17",
    phoneNumber: "01500011122",
    photo: null, // Assuming the photo will be stored as a file or a link
  },
];

export default initData;
