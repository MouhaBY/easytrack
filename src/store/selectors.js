export const selectToken = () => { return (state) => state.user.token; };

export const selectUserId = () => { return (state) => state.user.userData.id};

export const selectProfile = () => { return (state) => state.user.userData.profile};

export const selectContact = () => { return (state) => state.user.userData.contact};

export const selectDrawerState = () => { return (state) => state.drawer};