const users = [];

//1.GET - ALL Users
//http://localhost:4000/api/allusers
export const getAllUsers = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Users Fetched Successfully",
    users: users,
  });
};

//2.POST METHOD
//http://localhost:4000/api/users
export const postUsers = async (req, res) => {
  try {
    const { name, age, course, location } = req.body;

    if (!name || !age || !course || !location) {
      return res
        .status(404)
        .json({ success: false, message: "All Fields Must be Required" });
    }

    const newUsers = { id: users.length + 1, name, age, course, location };
    users.push(newUsers);
    res.status(201).json({
      success: true,
      message: "New User Created Successfully",
      users: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "New User Created Failed",
      mistake: error.message,
    });
  }
};

//PUT - METHOD

export const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, course, location } = req.body;

    if (!name || !age || !course || !location) {
      return res
        .status(404)
        .json({ success: false, message: "All Field must be required" });
    }

    if (!users[id]) {
      return res
        .status(404)
        .json({ success: false, message: "User is Not Found" });
    }
    const updatedUser = { name, age, course, location };
    users[id] = { updatedUser };
    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      updateddUsers: users[id],
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: " User Updated Failed",
      mistake: error.message,
    });
  }
};

//Deleted Method

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  //check user
  if (!users[id]) {
    return res
      .status(404)
      .json({ success: false, message: "User is Not Found" });
  }
  //remove user using SPLICE Method
  const deleteUser = users.splice(id, 1);

  res
    .status(200)
    .json({
      success: true,
      message: `user with ID:${id} deleted successfully`,
      deleteUser,
      remainingUser: users,
    });
};
