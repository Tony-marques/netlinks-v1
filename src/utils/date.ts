export const formatedDate = (date: Date) => {
    const newDate = new Date(date);

    const formattedDate = newDate.toLocaleDateString("fr-FR", {
        dateStyle: "long"
    });

    return formattedDate;
};