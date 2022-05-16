module.exports = mongoose => {
    const nodePrac = mongoose.model(
        "prac",
        mongoose.Schema(
            {
                name: String,
                emailId: String,
                mobile: String,
                age: String,
                address: String,
            },
            { timestamps: true }
        )
    );
    return nodePrac;
};