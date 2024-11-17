import React from 'react';

const MyFirstHTML5Form = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MyFirstHTML5Form;
