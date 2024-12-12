import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf'; 

export const saveComponentsAsPdf = async (components, padding = 100) => { 
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight(); 
    const halfHeight = pdfHeight / 2;

    for (let i = 0; i < components.length; i++) { 
        const element = document.getElementById(components[i]); 
        
        if (element) { 
            const canvas = await html2canvas(element, { scale: 5 });
            const imgData = canvas.toDataURL('image/jpeg', 0.8);

            const imgProps = pdf.getImageProperties(imgData);   

            const imgWidth = pdfWidth - padding * 2; 
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
            
            if (i % 2 === 0 && i !== 0) { 
                pdf.addPage(); 
            } 
            
            const yOffset = (i % 2) * halfHeight + padding;

            pdf.addImage(imgData, 'JPEG', padding, yOffset, imgWidth, imgHeight);            
        } 
    } 
    
    pdf.save('document.pdf'); 
};