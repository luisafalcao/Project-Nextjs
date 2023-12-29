export default function formatDate(dateString) {
    // Create a Date object from the input string
    const date = new Date(dateString);
  
    // Extract day, month, and year components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    // Construct the transformed date string in dd/mm/yyyy format
    const transformedDate = `${day}/${month}/${year}`;
  
    return transformedDate;
  }
  
  // Usage
  // const originalDate = '2023-11-30';
  // const transformedDate = transformDateFormat(originalDate);
  // console.log(transformedDate); // Output: 30/11/2023
  