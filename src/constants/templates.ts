export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/templates/blank-document.svg",
    initialContent: ``
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/templates/software-proposal.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; padding: 20px;">
        <h1>Software Development Proposal</h1>
        <p><strong>Client:</strong> [Client Name]</p>
        <p><strong>Prepared by:</strong> [Your Company Name]</p>
        <h2>Project Overview</h2>
        <p>This proposal outlines the development of a custom software solution tailored to the client's needs.</p>
        <h2>Scope</h2>
        <ul>
          <li>Requirements analysis</li>
          <li>UI/UX design</li>
          <li>Backend and frontend development</li>
        </ul>
        <h2>Timeline</h2>
        <p>Estimated duration: 12 weeks</p>
        <h2>Cost Estimate</h2>
        <p>Total: $XX,XXX</p>
      </div>
    `
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/templates/project-proposal.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; font-size: 14px; padding: 20px;">
        <h1>Project Proposal</h1>
        <p><strong>Project Name:</strong> [Project Title]</p>
        <p><strong>Author:</strong> [Your Name]</p>
        <h2>Objective</h2>
        <p>The goal of this project is to [insert objective here].</p>
        <h2>Methodology</h2>
        <p>The project will be executed in the following phases:</p>
        <ol>
          <li>Planning</li>
          <li>Execution</li>
          <li>Monitoring and Evaluation</li>
        </ol>
        <h2>Expected Outcomes</h2>
        <p>The project aims to deliver [expected outcomes].</p>
      </div>
    `
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/templates/business-letter.svg",
    initialContent: `
      <div style="font-family: Times New Roman, serif; font-size: 14px; padding: 40px;">
        <p>[Your Name]</p>
        <p>[Your Company]</p>
        <p>[Address]</p>
        <p>[Date]</p>
        <br/>
        <p>[Recipient Name]</p>
        <p>[Recipient Title]</p>
        <p>[Recipient Company]</p>
        <br/>
        <p>Dear [Recipient Name],</p>
        <p>I am writing to inform you about [subject]. We believe this opportunity will be beneficial for both parties involved.</p>
        <p>Please feel free to contact us for further information.</p>
        <br/>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      </div>
    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/templates/resume.svg",
    initialContent: `
      <div style="font-family: Arial, sans-serif; font-size: 13px; padding: 20px;">
        <h1>[Your Name]</h1>
        <p><strong>Email:</strong> your.email@example.com | <strong>Phone:</strong> (123) 456-7890</p>
        <h2>Professional Summary</h2>
        <p>Detail-oriented professional with experience in [your field].</p>
        <h2>Experience</h2>
        <p><strong>Job Title – Company</strong> (Year - Year)</p>
        <ul><li>Key responsibility or achievement</li></ul>
        <h2>Education</h2>
        <p>Degree, Institution (Year)</p>
        <h2>Skills</h2>
        <ul><li>Skill 1</li><li>Skill 2</li></ul>
      </div>
    `
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/templates/cover-letter.svg",
    initialContent: `
      <div style="font-family: Times New Roman, serif; font-size: 14px; padding: 40px;">
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[Date]</p>
        <br/>
        <p>[Hiring Manager Name]</p>
        <p>[Company Name]</p>
        <br/>
        <p>Dear [Hiring Manager Name],</p>
        <p>I am writing to apply for the [Job Title] position at [Company Name]. I believe my background in [your experience] makes me a great fit.</p>
        <p>Thank you for considering my application.</p>
        <br/>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      </div>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/templates/letter.svg",
    initialContent: `
      <div style="font-family: Georgia, serif; font-size: 14px; padding: 40px;">
        <p>[Your Address]</p>
        <p>[City, State ZIP Code]</p>
        <p>[Date]</p>
        <br/>
        <p>[Recipient Name]</p>
        <p>[Recipient Address]</p>
        <br/>
        <p>Dear [Recipient],</p>
        <p>I hope this message finds you well. I'm writing to [state your reason].</p>
        <p>Looking forward to your response.</p>
        <br/>
        <p>Warm regards,</p>
        <p>[Your Name]</p>
      </div>
    `
  },
];
