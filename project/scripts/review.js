let services = [
    {
        serviceName: 'Cleanings',
        serviceDescription: 'A routine procedure to remove plaque, tartar, and stains, promoting healthy teeth and gums. Recommended every six months.',
        duration: '30 min - 1 hour',
        costNoInsurance: '$85',
    },
    {
        serviceName: 'Dental Exams',
        serviceDescription: 'Comprehensive oral health evaluations to detect cavities, gum issues, and other dental conditions early.',
        duration: '30 minutes',
        costNoInsurance: '$60',
    },
    {
        serviceName: 'X-Rays',
        serviceDescription: 'Digital imaging to assess hidden dental issues like cavities, impacted teeth, or bone loss.',
        duration: '15-30 minutes',
        costNoInsurance: '$50',
    },
    {
        serviceName: 'Fillings',
        serviceDescription: 'Restorative procedure to treat cavities and restore tooth functionality using durable materials.',
        duration: '30 min - 1 hour',
        costNoInsurance: '$120+ (varies by cavity size)',
    },
    {
        serviceName: 'Teeth Whitening',
        serviceDescription: 'Cosmetic treatment to brighten and whiten teeth, enhancing your smile.',
        duration: '1 hour',
        costNoInsurance: '$250',
    },
    {
        serviceName: 'Root Canal Therapy',
        serviceDescription: 'Procedure to save an infected tooth by removing the pulp, cleaning, and sealing it.',
        duration: '1.5 - 2 hours',
        costNoInsurance: '$700+',
    },
    {
        serviceName: 'Crowns',
        serviceDescription: 'Custom-fitted caps placed over damaged teeth to restore their shape, strength, and appearance.',
        duration: '2 visits (1 hour each)',
        costNoInsurance: '$900+',
    },
    {
        serviceName: 'Extractions',
        serviceDescription: 'Safe removal of teeth that are damaged, decayed, or causing crowding.',
        duration: '30 min - 1 hour',
        costNoInsurance: '$150+ (varies by complexity)',
    },
    {
        serviceName: 'Dental Implants',
        serviceDescription: 'Permanent solution for missing teeth, involving a titanium post and custom crown.',
        duration: 'Multiple visits over 3-6 months',
        costNoInsurance: '$3,000+ (per implant)',
    },
    {
        serviceName: 'Orthodontics',
        serviceDescription: 'Treatment to straighten teeth and correct bite alignment, including braces or clear aligners.',
        duration: 'Varies by case (typically 12-24 months)',
        costNoInsurance: '$4,000+',
    },
    {
        serviceName: 'Other',
        serviceDescription: 'For other services or inquiries, please contact our office. We’re happy to assist you!',
        duration: 'N/A',
        costNoInsurance: 'Contact for details',
        action: {
            buttonText: 'Contact Us',
            link: 'contact.html'
        }
    }
];


document.addEventListener('DOMContentLoaded', () => {

    const serviceSelect = document.getElementById('service');
  
    services.forEach(service => {
      const option = document.createElement('option');
      option.textContent = service.serviceName; 
      option.value = service.serviceName;
      serviceSelect.appendChild(option);
    });
});