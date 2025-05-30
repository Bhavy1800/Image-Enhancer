const API_KEY = "wxxat8ttkxhlragri";
const Base_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale";
export const enhancedImageAPI = async (file) => {
  try {
    // "/api/tasks/visual/scale";

    // fetch enhanced
    // "/api/tasks/visual/scale/{task_id}";

    const taskId =  await uploadImage(file);
    console.log("Image uploaded",taskId);
    

    const enhancedImage = await fetchEnhancedImage(taskId);
    console.log("Enhanced Image URL", enhancedImage);

    // return enhancedImage;
    
  } catch (error) {
    console.log("Error in enhancedImageAPI", error);
  }
};

const uploadImage = async (file) => {
    
    return taskId;
};

const fetchEnhancedImage = async (taskId) => {}
