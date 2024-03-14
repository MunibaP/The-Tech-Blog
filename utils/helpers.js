module.exports = {
    format_date: (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        
        return `${formattedDate} at ${formattedTime}`;
    },
};