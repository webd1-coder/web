document.addEventListener('DOMContentLoaded', function () {
    const departmentSelect = document.getElementById('department');
    const businessInquiryFields = document.getElementById('business-inquiry-fields');
    const businessInquiryTypeSelect = document.getElementById('business-inquiry-type');
    const careerQuestionFields = document.getElementById('career-question-fields');
    const hrSupportFields = document.getElementById('hr-support-fields');
    const mediaInquiryFields = document.getElementById('media-inquiry-fields');
    const industryHotlineFields = document.getElementById('industry-hotline-fields');
    const psoTrainingFields = document.getElementById('pso-training-fields');
  
    function hideAllFields() {
        businessInquiryFields.classList.add('hidden');
        careerQuestionFields.classList.add('hidden');
        hrSupportFields.classList.add('hidden');
        mediaInquiryFields.classList.add('hidden');
        industryHotlineFields.classList.add('hidden');
        psoTrainingFields.classList.add('hidden');
    }
  
    departmentSelect.addEventListener('change', function () {
        hideAllFields();
        const selectedDepartment = this.value;
        if (selectedDepartment === 'business-inquiry') {
            businessInquiryFields.classList.remove('hidden');
        } else if (selectedDepartment === 'career-question') {
            careerQuestionFields.classList.remove('hidden');
        } else if (selectedDepartment === 'hr-support') {
            hrSupportFields.classList.remove('hidden');
        } else if (selectedDepartment === 'media-inquiry') {
            mediaInquiryFields.classList.remove('hidden');
        } else if (selectedDepartment === 'pso-training'){
            psoTrainingFields.classList.remove('hidden');
        } else if (selectedDepartment === 'industry-hotline'){
            industryHotlineFields.classList.remove('hidden');
        }
    });
  
    businessInquiryTypeSelect.addEventListener('change', function () {
        hideAllBusinessInquiryFields();
        const selectedInquiryType = this.value;
        if (selectedInquiryType) {
            const inquiryField = document.getElementById(`business-inquiry-${selectedInquiryType}-fields`);
            if (inquiryField) {
                inquiryField.classList.remove('hidden');
            }
        }
    });
      
    function hideAllBusinessInquiryFields() {
      for (let i = 1; i <= 4; i++) {
          const inquiryField = document.getElementById(`business-inquiry-${i}-fields`);
          if (inquiryField) {
              inquiryField.classList.add('hidden');
          }
      }
  }
  });