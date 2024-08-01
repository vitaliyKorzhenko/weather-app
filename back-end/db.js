const mongoose = require('mongoose');

(async () => {
    await mongoose.connect(process.env.DB_URL);
})();

const SavedLocation = mongoose.model('SavedLocation', {
    userId: mongoose.Types.ObjectId,
    city: String,
    country: String,
    longitude: Number,
    latitude: Number,
});

const User = mongoose.model('User', {
    email: String,
    passwordHash: String,
    isVerified: Boolean,
    verificationCode: String,
});

const Token = mongoose.model('Token', {
    userId: mongoose.Types.ObjectId,
    token: String,
    loggedin: Boolean,
});

module.exports = {
    User,
    SavedLocation,
    Token,
};
