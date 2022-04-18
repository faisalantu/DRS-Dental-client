import React from "react";

const Blog = () => {
  return (
    <div className='container mx-auto p3 text-lg'>
      <div className='w-9/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          Difference between authorization and authentication
        </h1>
        <p className='mb-4'>
          In authentication process, the identity of users are checked for
          providing the access to the system. While in authorization process,
          person’s or user’s authorities are checked for accessing the
          resources. In authentication process, users or persons are verified.
          While in this process, users or persons are validated. It is done
          before the authorization process. While this process is done after the
          authentication process. It needs usually user’s login details. While
          it needs user’s privilege or security levels.Authentication determines
          whether the person is user or not. While it determines What permission
          do user have?
        </p>
      </div>
      <div className='w-9/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          Why I am using firebase? What other options do I have to implement
          authentication?
        </h1>
        <p className='mb-4'>
          I am mainly using firebase for Authentication and hosting. Firebase
          Authentication aims to make building secure authentication systems
          easy, while improving the sign-in and onboarding experience for end
          users. It provides an end-to-end identity solution, supporting email
          and password accounts, phone auth, and Google, Twitter, Facebook, and
          GitHub login, and more.
          <br />
          On the other hand Firebase Hosting is production-grade web content
          hosting for developers. With a single command, I can quickly deploy
          web apps and serve both static and dynamic content to a global CDN
          (content delivery network)
        </p>
      </div>
      <div className='w-9/12 mx-auto'>
        <h1 className='font-semibold text-3xl mb-4'>
          Other services does firebase provide other than authentication
        </h1>
        <p className='mb-4'>
          Most common firebase services are,
          <ul>
            <ol>1. Cloud Firestore.</ol>
            <ol>2. Cloud Functions.</ol>
            <ol>3. Cloud Messaging.</ol>
            <ol>4. Hosting.</ol>
            <ol>5. Cloud Storage.</ol>
            <ol>6. Google Analytics.</ol>
            <ol>7. Predictions.</ol>
            <ol>8. Real time database.</ol>
            <ol>9. Remote Config.</ol>
            <ol>10. FireBase ML.</ol>
          </ul>
          Those are not the only functionality firebase have, the functionality still growing and expanding.
        </p>
      </div>
    </div>
  );
};

export default Blog;
