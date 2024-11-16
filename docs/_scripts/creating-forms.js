const CreatingForms = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatingForms;
