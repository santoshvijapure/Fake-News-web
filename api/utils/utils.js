exports.isDefined = (object) => {

    if (Object.keys(object).length === 0) {
        return false;
    }

    return true;

}