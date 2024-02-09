<script lang="ts">
    import { writable } from 'svelte/store';
  
    let contributors = writable('');
    let thirdPartyLibraries = writable('');
    let financialSupport = writable('');
    let specialThanks = writable('');
    let license = writable('');
    let acknowledgments = writable('');
  
    // Use a writable store directly for the markdown content
    let markdownContent = writable('');
  
    // Update markdownContent based on form inputs
    $: $markdownContent = `
  # Credits
  
  This project owes its success to the following people and organizations:
  
  ## Contributors
  ${$contributors ? $contributors : 'N/A'}
  
  ## Third-party Libraries
  ${$thirdPartyLibraries ? $thirdPartyLibraries : ''}
  
  ## Financial Support
  ${$financialSupport ? $financialSupport : ''}
  
  ## Special Thanks
  ${$specialThanks ? $specialThanks : ''}
  
  ## License
  ${$license ? $license : ''}
  
  ## Acknowledgments
  ${$acknowledgments ? $acknowledgments : ''}
  `;
  
    function downloadCredits() {
      const blob = new Blob([$markdownContent], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CREDITS.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  </script>
  
  <style>

    .container {
        display: flex;
    }

    .form-input, .preview {
    flex: 1;
    padding: 1rem;
    }
    textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    }
    .preview textarea {
    border: 1px solid #ccc;
    padding: 20px;
    overflow-y: auto;
    }
    .markdown-preview {
    height: 1000px; /* Larger height for the markdown preview */
    }
  </style>
  
  <div class="container">
    <div class="form-input">
      <h2>Fill in the details</h2>
      
      <label for="contributors">## Contributors</label>
      <textarea id="contributors" bind:value={$contributors} placeholder="Contributors..."></textarea>
      
      <label for="thirdPartyLibraries">## Third-party Libraries</label>
      <textarea id="thirdPartyLibraries" bind:value={$thirdPartyLibraries} placeholder="Third-party Libraries..."></textarea>
      
      <label for="financialSupport">## Financial Support</label>
      <textarea id="financialSupport" bind:value={$financialSupport} placeholder="Financial Support..."></textarea>
      
      <label for="specialThanks">## Special Thanks</label>
      <textarea id="specialThanks" bind:value={$specialThanks} placeholder="Special Thanks..."></textarea>

      <label for="license">## License</label>
      <textarea id="license" bind:value={$license} placeholder="License..."></textarea>
      
      <label for="acknowledgments">## Acknowledgments</label>
      <textarea id="acknowledgments" bind:value={$acknowledgments} placeholder="Acknowledgments..."></textarea>
      
      <button on:click={downloadCredits}>Download CREDITS.md</button>
    </div>
    <div class="preview">
        <textarea class="markdown-preview" bind:value={$markdownContent}></textarea>
    </div>
</div>