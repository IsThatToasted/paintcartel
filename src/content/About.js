import React from 'react';

function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        We are a team of developers dedicated to building great web applications
        using modern technologies like React and Tailwind CSS.
      </p>
      <p className="mb-4">
        Tailwind CSS is a utility-first CSS framework that lets you quickly style
        your components by applying pre-built CSS classes. Unlike Bootstrap, it
        doesn't come with pre-built UI components and instead focuses on giving
        you a wide variety of utility classes to build custom designs.
      </p>
      <p>
        We love using Tailwind CSS because it makes it easy to build responsive
        and accessible UIs without writing a lot of custom CSS. Plus, with its
        flexibility and extensibility, we can easily customize it to fit our
        specific needs.
      </p>
    </div>
  );
}

export default About;