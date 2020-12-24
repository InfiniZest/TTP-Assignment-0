function titleCaseEdit(title) {
    title = title.toUpperCase();
    let editedTitle = "";
    for(let i = 0; i<title.length; i++) {
        if(i != 0 && title.charAt(i-1) != ' ')
            editedTitle = editedTitle.concat("", title.charAt(i).toLowerCase());
        else
            editedTitle = editedTitle.concat("", title.charAt(i));
    }
    return editedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;
