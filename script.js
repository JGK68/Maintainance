// script.js

document.addEventListener('DOMContentLoaded', () => {
    const pdfList = document.querySelector('.pdf-list');

    const pdfs = [
        { name: 'FY 2023 Maintenance', url: 'Building 2023.pdf' },
        { name: 'FY 2024 Maintenance', url: 'Building 2024.pdf' },
        // Add more PDFs here
    ];

    pdfs.forEach(pdf => {
        const pdfItem = document.createElement('div');
        pdfItem.classList.add('pdf-item');
        
        const pdfLink = document.createElement('a');
        pdfLink.href = pdf.url;
        pdfLink.textContent = "PDF";
        pdfLink.target = '_blank';

        pdfItem.appendChild(document.createTextNode(pdf.name)); // Add the name of the PDF
        pdfItem.appendChild(pdfLink);
        pdfList.appendChild(pdfItem);
    });
});
