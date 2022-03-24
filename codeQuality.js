// level {2}
async function getUsers() {
    const doc = await Promise.all(getUser(), getProfile(), getPosts());
    let {user,Profile,p}=doc

    const userProfile = {
        user,
        Profile,
        posts: p
    };

    return userProfile;
}
