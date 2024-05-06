<script lang="ts">
  import { writable } from "svelte/store";

  let contributors = writable("");
  let thirdPartyLibraries = writable("");
  let financialSupport = writable("");
  let specialThanks = writable("");
  let license = writable("");
  let acknowledgments = writable("");

  // Stores for managing the checkbox states
  let removeContributors = writable(false);
  let removeThirdPartyLibraries = writable(false);
  let removeFinancialSupport = writable(false);
  let removeSpecialThanks = writable(false);
  let removeLicense = writable(false);
  let removeAcknowledgments = writable(false);

  // Use a writable store directly for the markdown content
  let markdownContent = writable("");

  // Dynamically update markdownContent based on form inputs and checkbox states
  $: markdownContent.set(`# Credits

This project owes its success to the following people and organizations:${$removeContributors ? "" : `\n\n## Contributors\n\n${$contributors}`}${
    $removeThirdPartyLibraries
      ? ""
      : `\n\n## Third-party Libraries\n\n${$thirdPartyLibraries}`
  }${
    $removeFinancialSupport
      ? ""
      : `\n\n## Financial Support\n\n${$financialSupport}`
  }${$removeSpecialThanks ? "" : `\n\n## Special Thanks\n\n${$specialThanks}`}${
    $removeLicense ? "" : `\n\n## License\n\n${$license}`
  }${
    $removeAcknowledgments ? "" : `\n\n## Acknowledgments\n\n${$acknowledgments}`
  }

This document is a way to publicly appreciate the contributions of those who have helped make this project what it is today. Thank you!

***Generated using [CREDITS Generator](https://scottgriv.github.io/CREDITS-Generator/).***
`);

  function downloadCredits() {
    const blob = new Blob([$markdownContent], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CREDITS.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
</script>

<div class="title-container">
  <img src="icon.png" alt="Credits Icon" class="title-icon">
  <div class="title">CREDITS Generator</div>
</div>
<div class="subtitle">
  The <span class="code-inline-light">CREDITS.md</span> file is designed to recognize and honor the contributions of
  individuals and organizations that have played a pivotal role in the
  development and success of a project. It serves as a formal acknowledgment of
  the efforts of developers, designers, financial supporters, third-party
  libraries, and any other entities that have provided valuable input or
  resources. By detailing these contributions in a dedicated CREDITS markdown document,
  projects can transparently attribute the collaborative achievements that have
  shaped their evolution, fostering a culture of gratitude and open
  collaboration within the community.
  <br />
  <br />
  <i>The CREDITS Generator</i> is a straightforward tool designed to help you quickly create
  a <span class="code-inline-light">CREDITS.md</span> file for acknowledging contributions to your project. Simply input
  details of contributors, third-party libraries, financial supporters, and special
  thanks, then review or edit the preview. Once satisfied, download the <span class="code-inline-light">CREDITS.md</span>
  file and place it in the root (or .github folder) of your GitHub repository to transparently showcase
  all project contributions.
</div>
<div class="container">
  <div class="form-input">
    <h2>Fill in the below details:</h2>

    <div class="section-header">
      <label for="contributors">Contributors:</label>
      <div class="hide-section">
        <label for="removeContributors" class="label-normal">Hide Section</label
        >
        <input
          type="checkbox"
          id="removeContributors"
          bind:checked={$removeContributors}
        />
      </div>
    </div>
    <textarea
      id="contributors"
      bind:value={$contributors}
      placeholder="- **Jane Doe**: For her invaluable contributions to the project's core algorithms. 
- **John Smith**: For developing the user-friendly interface and extensive testing."
    ></textarea>

    <div class="section-header">
      <label for="thirdPartyLibraries">Third-party Libraries:</label>
      <div class="hide-section">
        <label for="removeThirdPartyLibraries" class="label-normal"
          >Hide Section</label
        >
        <input
          type="checkbox"
          id="removeThirdPartyLibraries"
          bind:checked={$removeThirdPartyLibraries}
        />
      </div>
    </div>
    <textarea
      id="thirdPartyLibraries"
      bind:value={$thirdPartyLibraries}
      placeholder="- [Library Name](https://example.com): A brief description of how it's used in the project. Thanks to the developers for their amazing work.
      "
    ></textarea>

    <div class="section-header">
      <label for="financialSupport">Financial Support:</label>
      <div class="hide-section">
        <label for="removeFinancialSupport" class="label-normal"
          >Hide Section</label
        >
        <input
          type="checkbox"
          id="removeFinancialSupport"
          bind:checked={$removeFinancialSupport}
        />
      </div>
    </div>
    <textarea
      id="financialSupport"
      bind:value={$financialSupport}
      placeholder="- **ACME Corporation**: For their generous funding that helped kickstart the project.
- **Open Source Initiative**: For their grant that supported the initial research phase."
    ></textarea>

    <div class="section-header">
      <label for="specialThanks">Special Thanks:</label>
      <div class="hide-section">
        <label for="removeSpecialThanks" class="label-normal"
          >Hide Section</label
        >
        <input
          type="checkbox"
          id="removeSpecialThanks"
          bind:checked={$removeSpecialThanks}
        />
      </div>
    </div>
    <textarea
      id="specialThanks"
      bind:value={$specialThanks}
      placeholder="- **Community Volunteers**: For their countless hours of support, bug reports, and feedback.
- **Beta Testers**: For using early versions and providing invaluable feedback to improve the project."
    ></textarea>

    <div class="section-header">
      <label for="license">License:</label>
      <div class="hide-section">
        <label for="removeLicense" class="label-normal">Hide Section</label>
        <input
          type="checkbox"
          id="removeLicense"
          bind:checked={$removeLicense}
        />
      </div>
    </div>
    <textarea
      id="license"
      bind:value={$license}
      placeholder="This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
      "
    ></textarea>

    <div class="section-header">
      <label for="acknowledgments">Acknowledgments:</label>
      <div class="hide-section">
        <label for="removeAcknowledgments" class="label-normal"
          >Hide Section</label
        >
        <input
          type="checkbox"
          id="removeAcknowledgments"
          bind:checked={$removeAcknowledgments}
        />
      </div>
    </div>
    <textarea
      id="acknowledgments"
      bind:value={$acknowledgments}
      placeholder="- Hat tip to anyone whose code was used
- Inspiration
- etc"
    ></textarea>

    <button on:click={downloadCredits}>Download CREDITS.md File</button>
  </div>
  <div class="preview">
    <h2>Markdown file preview:</h2>
    <textarea id="markdown-preview-text" class="markdown-preview" bind:value={$markdownContent}></textarea>
  </div>
</div>

<style>
  :global(body) {
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the children horizontally */
  }

  .title-container {
    display: flex;
    align-items: center; /* This will vertically center align the icon with the title */
  }

  .title-icon {
    margin-right: 10px; /* Adjust the space between the icon and the title */
    /* You can adjust the size of the icon as needed */
    width: 60px; /* Adjust based on your image's size */
    height: 60px; /* Adjust based on your image's size */
    padding: 5px 0; /* Adds padding instead of margin to space out the title */
  }

  .title {
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    width: 100%; /* Ensures the title stretches across the full width */
    padding: 5px 0; /* Adds padding instead of margin to space out the title */
    background-color: #f0f0f0; /* Explicitly set the background to match the body */
  }

  .subtitle {
    color: #4d4d4d;
    max-width: 1200px;
    text-align: center;
  }

  .container {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 20px;
    margin-top: 20px;
    width: calc(100% - 40px); /* Adjusts for padding on the body */
    max-width: 1200px;
  }

  /* Other styles remain unchanged */
  .form-input {
    background-color: #f0f0f0;
  }

  .form-input,
  .preview {
    border: 2px solid black;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: calc(50% - 10px); /* Adjust based on the gap */
  }

  .preview {
    border: 2px solid black;
    overflow-y: auto;
    height: 936px;
  }

  .preview textarea {
    height: 90%; /* Make textarea take full available height of its parent */
    /* Additional styles to ensure consistency */
    border: none; /* Optionally remove inner border if you want */
    border-radius: 4px; /* Match other textareas */
  }

  label {
    font-weight: bold;
  }

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 100px; /* Adjust if needed */
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  }

  textarea:focus {
    border: 2px solid #0e4c92; /* Change to your desired highlight color */
    outline: none; /* Optional: Removes the default focus outline */
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #0e4c92;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    display: block;
  }

  button:hover {
    background-color: #0056b3;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hide-section {
    display: flex;
    align-items: center;
  }

  .label-normal {
    font-weight: normal;
  }

  .hide-section label {
    margin-right: 8px; /* Adjust spacing as needed */
  }

  .code-inline-light {
    background-color: #dbdbdb;
    color: #000000;
    font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    padding: 0.2em 0.4em;
    font-size: 85%;
    border-radius: 6px;
  }

  :global(footer) {
    text-align: center;
    margin-top: 30px;
  }

  :global(footer a) {
    color: #0e4c92;
    text-decoration: none;
  }

  :global(footer a:visited) {
    color: #0e4c92;
  }

  :global(footer a:hover) {
    text-decoration: underline;
  }

  @media (max-width: 768px) {

    :global(footer) {
      text-align: center;
      margin-top: 30px;
      margin-right: 65px;
    }

    :global(body) {
      padding: 15px; /* Reduced padding on smaller screens */
    }

    .title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%; 
    }

    .container {
      flex-direction: column;
      width: 100%; /* Use 100% width for mobile to ensure full width is utilized */
      margin-top: 10px; /* Optionally adjust margin-top for tighter mobile layout */
      gap: 10px; /* Reduce gap for a tighter layout */
    }

    .form-input,
    .preview {
      width: 94%; /* Allow children to fill the container width */
      padding: 10px; /* Adjust padding as needed */
    }

    .preview textarea {
      width: 100%; /* Ensure the textarea also expands to full width */
      /* Retain other styles for consistency */
    }
  }
</style>
