import React from 'react'

function Contributing() {
  return (
     <div>
      <h1 className='text-4xl font-bold'>Contributing</h1>
      <p className='mt-5 text-xl'>
        There are several ways in which you can contribute to the College API project, including but not limited to:
      </p>
      <ul className='list-disc pl-8 mt-2 text-xl'>
        <li>Submit bugs and help us verify them as they are checked in.</li>
        <li>Submit feature requests, feedback, and suggestions, and help us verify them as they are checked in.</li>
        <li>Review the Contribution Guidelines and make pull requests for anything from fixing typos to suggesting new content.</li>
      </ul>
      <p className='mt-5 text-xl'>
        If you want to add more colleges to the API or contribute in any other way, follow these steps:
      </p>
      <ol className='list-decimal pl-8 mt-2 text-xl'>
        <li>Fork the College API repository.</li>
        <li>Create a new branch for your feature: <code>git checkout -b feature/your-feature-name</code></li>
        <li>Commit and push your changes to your branch.</li>
        <li>Create a pull request to merge your changes into the main repository.</li>
      </ol>
    </div>
  )
}

export default Contributing